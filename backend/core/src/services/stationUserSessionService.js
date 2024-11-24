import {
  PutItemCommand,
  GetItemCommand,
  UpdateItemCommand,
  DeleteItemCommand,
} from 'dynamodb-toolbox';
import { v4 as uuidv4 } from 'uuid';
import { StationUserSession } from '../dynamodb/entity/stationUserSession.js';

export const createSession = async (userId, refreshToken, expirationTime) => {
  const sessionId = uuidv4();
  await StationUserSession.build(PutItemCommand)
    .item({
      sessionId,
      userId,
      refreshToken,
      expirationTime,
    })
    .send();
  return sessionId;
};

export const getSession = async (sessionId) => {
  const { Item } = await StationUserSession.build(GetItemCommand)
    .key({ sessionId })
    .send();
  return Item;
};

export const updateSessionLastUsed = async (sessionId) => {
  await StationUserSession.build(UpdateItemCommand)
    .item({
      sessionId,
    })
    .send();
};

export const deleteSession = async (sessionId) => {
  await StationUserSession.build(DeleteItemCommand).key({ sessionId }).send();
};
