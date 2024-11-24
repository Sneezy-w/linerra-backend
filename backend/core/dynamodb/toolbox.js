import { Table } from 'dynamodb-toolbox';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

//import { now } from '../utils/utils';
//import { InitiationDO, DestinationDO } from '../models/veryk/address.entity';
//import { PackageDO } from '../models/veryk/package.entity';
//import { now } from '../utils/utils';

//console.log('process.env.MAIN_TABLE', process.env.MAIN_TABLE);
//console.log(`http://localhost:${process.env.LOCAL_DYNAMO_DB_PORT}`);

const dynamoClient = process.env.IS_OFFLINE
  ? new DynamoDBClient({
      region: 'localhost',
      endpoint: `http://localhost:${process.env.LOCAL_DYNAMO_DB_PORT}`,
      credentials: {
        accessKeyId: 'MockAccessKeyId',
        secretAccessKey: 'MockSecretAccessKey',
      },
    })
  : new DynamoDBClient();
const documentClient = DynamoDBDocumentClient.from(dynamoClient, {
  marshallOptions: {
    removeUndefinedValues: true,
    convertEmptyValues: false,
  },
});

export const MainTable = new Table({
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
  documentClient,
});
