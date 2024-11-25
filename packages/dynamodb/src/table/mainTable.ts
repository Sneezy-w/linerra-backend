import { Table } from 'dynamodb-toolbox';
import { documentClient } from '../utils/dynamoClient';

export const MainTable = new Table({
  name: process.env.MAIN_TABLE!,
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
