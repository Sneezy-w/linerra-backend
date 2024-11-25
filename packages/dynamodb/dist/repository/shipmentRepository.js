"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateByStation = exports.delOpenShipment = exports.updateAndReturn = exports.update = exports.findOne = exports.create = void 0;
const shipment_1 = require("../entity/shipment");
const mainTable_1 = require("../table/mainTable");
const dynamodb_toolbox_1 = require("dynamodb-toolbox");
const util_1 = require("@linerra/util");
const create = async (shipmentDO) => {
    await shipment_1.Shipment.build(dynamodb_toolbox_1.PutItemCommand)
        .item({ ...shipmentDO, sortTimestamp: (0, util_1.now)() })
        //.options({ returnValues: "ALL_OLD" })
        .send();
    return { number: shipmentDO.number };
};
exports.create = create;
const findOne = async (number) => {
    const { Item } = await shipment_1.Shipment.build(dynamodb_toolbox_1.GetItemCommand).key({ number }).send();
    return Item;
};
exports.findOne = findOne;
const update = async (shipmentDO) => {
    await shipment_1.Shipment.build(dynamodb_toolbox_1.UpdateAttributesCommand)
        .item({ ...shipmentDO })
        //.options({ returnValues: "ALL_NEW" })
        .send();
    return { number: shipmentDO.number };
};
exports.update = update;
const updateAndReturn = async (shipmentDO) => {
    const { Attributes } = await shipment_1.Shipment.build(dynamodb_toolbox_1.UpdateAttributesCommand)
        .item({ ...shipmentDO })
        .options({ returnValues: 'ALL_NEW' })
        .send();
    return Attributes;
};
exports.updateAndReturn = updateAndReturn;
const delOpenShipment = async (number) => {
    const condition = {
        attr: 'status',
        eq: 'open',
    };
    await shipment_1.Shipment.build(dynamodb_toolbox_1.DeleteItemCommand)
        .key({ number })
        .options({ condition })
        .send();
};
exports.delOpenShipment = delOpenShipment;
const paginateByStation = async (params, stationId) => {
    const { conditions, filters } = buildQueryFilters(params);
    const pageResult = await mainTable_1.MainTable.build(dynamodb_toolbox_1.QueryCommand)
        .query({
        index: 'GSI1',
        partition: `STATION#${stationId}`,
        range: {
            gte: `SHIPMENT#${params.dateRange[0]}`,
            lte: `SHIPMENT#${params.dateRange[1]}`,
        },
    })
        .entities(shipment_1.Shipment)
        .options({
        limit: conditions.length > 0 ? undefined : params.limit,
        reverse: true,
        filters: filters,
        exclusiveStartKey: params.lastEvaluatedKey,
    })
        .send();
    //console.log(pageResult);
    //console.log(pageResult.LastEvaluatedKey);
    return pageResult;
};
exports.paginateByStation = paginateByStation;
const buildQueryFilters = (params) => {
    let statusCondition, keywordCondition;
    let conditions = [];
    if (params.status) {
        statusCondition = {
            attr: 'status',
            eq: params.status,
        };
        conditions.push(statusCondition);
    }
    if (params.keyword) {
        keywordCondition = {
            or: [
                {
                    attr: 'number',
                    contains: params.keyword,
                },
                {
                    attr: 'externalId',
                    contains: params.keyword,
                },
            ],
        };
        conditions.push(keywordCondition);
    }
    let filters = {};
    if (conditions.length > 1) {
        filters.Shipment = {
            and: conditions,
        };
    }
    else if (conditions.length === 1) {
        filters.Shipment = conditions[0];
    }
    return {
        conditions,
        filters,
    };
};
