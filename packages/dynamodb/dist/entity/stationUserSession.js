"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StationUserSession = void 0;
const dynamodb_toolbox_1 = require("dynamodb-toolbox");
const mainTable_1 = require("../table/mainTable");
exports.StationUserSession = new dynamodb_toolbox_1.Entity({
    name: 'StationUserSession',
    table: mainTable_1.MainTable,
    schema: (0, dynamodb_toolbox_1.schema)({
        sessionId: (0, dynamodb_toolbox_1.string)()
            .required()
            .transform((0, dynamodb_toolbox_1.prefix)('STATION_USER_SESSION'))
            .savedAs('PK')
            .key(),
        SK: (0, dynamodb_toolbox_1.string)().const('SESSION').key().default('SESSION'),
        userId: (0, dynamodb_toolbox_1.string)().required(),
        refreshToken: (0, dynamodb_toolbox_1.string)().required(),
        expirationTime: (0, dynamodb_toolbox_1.number)().required(),
    }),
});
