"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainTable = void 0;
const dynamodb_toolbox_1 = require("dynamodb-toolbox");
const dynamoClient_1 = require("../utils/dynamoClient");
exports.MainTable = new dynamodb_toolbox_1.Table({
    name: process.env.MAIN_TABLE,
    partitionKey: { name: 'PK', type: 'string' },
    sortKey: { name: 'SK', type: 'string' },
    indexes: {
        GSI1: {
            type: 'global',
            partitionKey: { name: 'GSI1PK', type: 'string' },
            sortKey: { name: 'GSI1SK', type: 'string' },
        },
        GSI2: {
            type: 'global',
            partitionKey: { name: 'GSI2PK', type: 'string' },
            sortKey: { name: 'GSI2SK', type: 'string' },
        },
    },
    documentClient: dynamoClient_1.documentClient,
});
