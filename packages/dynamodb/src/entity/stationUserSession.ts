import { Entity, schema, string, number, prefix } from 'dynamodb-toolbox';
import { MainTable } from '../table/mainTable';

export const StationUserSession = new Entity({
  name: 'StationUserSession',
  table: MainTable,
  schema: schema({
    sessionId: string()
      .required()
      .transform(prefix('STATION_USER_SESSION'))
      .savedAs('PK')
      .key(),
    SK: string().const('SESSION').key().default('SESSION'),
    userId: string().required(),
    refreshToken: string().required(),
    expirationTime: number().required(),
  }),
});
