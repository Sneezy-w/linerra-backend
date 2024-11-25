import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

export const dynamoClient = process.env.IS_OFFLINE
  ? new DynamoDBClient({
      region: 'localhost',
      endpoint: `http://localhost:${process.env.LOCAL_DYNAMO_DB_PORT}`,
      credentials: {
        accessKeyId: 'MockAccessKeyId',
        secretAccessKey: 'MockSecretAccessKey',
      },
    })
  : new DynamoDBClient();
export const documentClient = DynamoDBDocumentClient.from(dynamoClient, {
  marshallOptions: {
    removeUndefinedValues: true,
    convertEmptyValues: false,
  },
});
