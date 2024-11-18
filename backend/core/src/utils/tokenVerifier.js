import { CognitoJwtVerifier } from 'aws-jwt-verify';
export const accessVerifier = CognitoJwtVerifier.create({
  userPoolId: process.env.STATION_USER_POOL_ID,
  tokenUse: 'access',
  clientId: process.env.STATION_USER_POOL_CLIENT_ID,
});
export const idTokenVerifier = CognitoJwtVerifier.create({
  userPoolId: process.env.STATION_USER_POOL_ID,
  tokenUse: 'id',
  clientId: process.env.STATION_USER_POOL_CLIENT_ID,
});
