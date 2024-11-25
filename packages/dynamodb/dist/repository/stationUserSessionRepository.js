"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.del = exports.updateLastUsed = exports.findOne = exports.create = void 0;
const stationUserSession_1 = require("../entity/stationUserSession");
const dynamodb_toolbox_1 = require("dynamodb-toolbox");
const create = async (params) => {
    await stationUserSession_1.StationUserSession.build(dynamodb_toolbox_1.PutItemCommand)
        .item({
        sessionId: params.sessionId,
        userId: params.userId,
        refreshToken: params.refreshToken,
        expirationTime: params.expirationTime,
    })
        .send();
};
exports.create = create;
const findOne = async (sessionId) => {
    const { Item } = await stationUserSession_1.StationUserSession.build(dynamodb_toolbox_1.GetItemCommand)
        .key({ sessionId })
        .send();
    return Item;
};
exports.findOne = findOne;
const updateLastUsed = async (sessionId) => {
    await stationUserSession_1.StationUserSession.build(dynamodb_toolbox_1.UpdateItemCommand)
        .item({
        sessionId,
    })
        .send();
};
exports.updateLastUsed = updateLastUsed;
const del = async (sessionId) => {
    await stationUserSession_1.StationUserSession.build(dynamodb_toolbox_1.DeleteItemCommand).key({ sessionId }).send();
};
exports.del = del;
