"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentClient = exports.dynamoClient = void 0;
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
exports.dynamoClient = process.env.IS_OFFLINE
    ? new client_dynamodb_1.DynamoDBClient({
        region: 'localhost',
        endpoint: `http://localhost:${process.env.LOCAL_DYNAMO_DB_PORT}`,
        credentials: {
            accessKeyId: 'MockAccessKeyId',
            secretAccessKey: 'MockSecretAccessKey',
        },
    })
    : new client_dynamodb_1.DynamoDBClient();
exports.documentClient = lib_dynamodb_1.DynamoDBDocumentClient.from(exports.dynamoClient, {
    marshallOptions: {
        removeUndefinedValues: true,
        convertEmptyValues: false,
    },
});
