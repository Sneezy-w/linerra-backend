import { v4 as uuidv4 } from 'uuid';
import { stationUserSessionRepository } from '@linerra/dynamodb';

export const createSession = async (userId, refreshToken, expirationTime) => {
  const sessionId = uuidv4();
  await stationUserSessionRepository.create({
    sessionId,
    userId,
    refreshToken,
    expirationTime,
  });
  return sessionId;
};

export const getSession = async (sessionId) => {
  return await stationUserSessionRepository.findOne(sessionId);
};

export const updateSessionLastUsed = async (sessionId) => {
  await stationUserSessionRepository.updateLastUsed(sessionId);
};

export const deleteSession = async (sessionId) => {
  await stationUserSessionRepository.del(sessionId);
};
