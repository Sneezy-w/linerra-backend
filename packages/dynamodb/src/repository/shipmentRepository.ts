import { Shipment } from '../entity/shipment.js';
import { MainTable } from '../table/mainTable.js';
import {
  Condition,
  DeleteItemCommand,
  GetItemCommand,
  PutItemCommand,
  QueryCommand,
  UpdateAttributesCommand,
  UpdateItemCommand,
  UpdateItemResponse,
} from 'dynamodb-toolbox';
import { now } from '@linerra/util';

type QueryShipmentParams = {
  limit: number;
  keyword?: string;
  status?: string;
  dateRange: [string, string];
  lastEvaluatedKey?: Record<string, unknown>;
};

export const create = async (shipmentDO) => {
  await Shipment.build(PutItemCommand)
    .item({ ...shipmentDO, sortTimestamp: now() })
    //.options({ returnValues: "ALL_OLD" })
    .send();

  return { number: shipmentDO.number };
};

export const findOne = async (number: string) => {
  const { Item } = await Shipment.build(GetItemCommand).key({ number }).send();
  return Item;
};

export const update = async (shipmentDO) => {
  await Shipment.build(UpdateAttributesCommand)
    .item({ ...shipmentDO })
    //.options({ returnValues: "ALL_NEW" })
    .send();
  return { number: shipmentDO.number };
};

export const updateAndReturn = async (shipmentDO) => {
  const { Attributes } = await Shipment.build(UpdateAttributesCommand)
    .item({ ...shipmentDO })
    .options({ returnValues: 'ALL_NEW' })
    .send();
  return Attributes;
};

export const delOpenShipment = async (number: string) => {
  const condition: Condition<typeof Shipment> = {
    attr: 'status',
    eq: 'open',
  };
  await Shipment.build(DeleteItemCommand)
    .key({ number })
    .options({ condition })
    .send();
};

export const paginateByStation = async (
  params: QueryShipmentParams,
  stationId: string,
): Promise<any> => {
  const { conditions, filters } = buildQueryFilters(params);

  const pageResult = await MainTable.build(QueryCommand)
    .query({
      index: 'GSI1',
      partition: `STATION#${stationId}`,
      range: {
        gte: `SHIPMENT#${params.dateRange[0]}`,
        lte: `SHIPMENT#${params.dateRange[1]}`,
      },
    })
    .entities(Shipment)
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

const buildQueryFilters = (params: QueryShipmentParams) => {
  let statusCondition, keywordCondition: Condition<typeof Shipment>;
  let conditions: Condition<typeof Shipment>[] = [];
  if (params.status) {
    statusCondition = {
      attr: 'status' as const,
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

  let filters: Record<string, Condition<typeof Shipment>> = {};

  if (conditions.length > 1) {
    filters.Shipment = {
      and: conditions,
    };
  } else if (conditions.length === 1) {
    filters.Shipment = conditions[0];
  }
  return {
    conditions,
    filters,
  };
};
