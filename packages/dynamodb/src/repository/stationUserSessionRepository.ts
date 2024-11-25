import { StationUserSession } from '../entity/stationUserSession';
import {
  PutItemCommand,
  GetItemCommand,
  UpdateItemCommand,
  DeleteItemCommand,
} from 'dynamodb-toolbox';

type CreateSessionParams = {
  sessionId: string;
  userId: string;
  refreshToken: string;
  expirationTime: number;
};

export const create = async (params: CreateSessionParams) => {
  await StationUserSession.build(PutItemCommand)
    .item({
      sessionId: params.sessionId,
      userId: params.userId,
      refreshToken: params.refreshToken,
      expirationTime: params.expirationTime,
    })
    .send();
};

export const findOne = async (sessionId: string) => {
  const { Item } = await StationUserSession.build(GetItemCommand)
    .key({ sessionId })
    .send();
  return Item;
};

export const updateLastUsed = async (sessionId: string) => {
  await StationUserSession.build(UpdateItemCommand)
    .item({
      sessionId,
    })
    .send();
};

export const del = async (sessionId: string) => {
  await StationUserSession.build(DeleteItemCommand).key({ sessionId }).send();
};
