import logger from '../utils/logger.js';
import { v4 as uuidv4 } from 'uuid';
import { generateRandomString } from '../utils/utils.js';
import {
  CognitoIdentityProviderClient,
  SignUpCommand,
  GetUserCommand,
  InitiateAuthCommand,
} from '@aws-sdk/client-cognito-identity-provider';
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserPool,
} from 'amazon-cognito-identity-js';
import * as stationUserSessionService from './stationUserSessionService.js';
import ServiceError from '../utils/serviceError.js';
const client = new CognitoIdentityProviderClient({
  region: process.env.STATION_USER_POOL_REGION || process.env.AWS_REGION,
});

const userPoolId = process.env.STATION_USER_POOL_ID;
const clientId = process.env.STATION_USER_POOL_CLIENT_ID;
//const domain = `https://${process.env.STATION_USER_POOL_DOMAIN}.auth.${process.env.AWS_REGION}.amazoncognito.com`;
const userPool = new CognitoUserPool({
  UserPoolId: userPoolId || '',
  ClientId: clientId || '',
});

//aaasddsdsd.as();

export async function signUp(email, password) {
  const command = new SignUpCommand({
    ClientId: clientId,
    Username: email,
    Password: password,
    UserAttributes: [
      {
        Name: 'email',
        Value: email,
      },
      {
        Name: 'custom:stationId',
        Value: uuidv4(),
      },
      {
        Name: 'custom:stationNo',
        Value: generateRandomString(2),
      },
    ],
  });

  try {
    const response = await client.send(command);
    logger.info('User signed up successfully', { email });
    return response;
  } catch (error) {
    logger.error('Error signing up user', { email, error });
    throw error;
  }
}

export async function signIn(email, password) {
  //console.log(email, password);
  //console.log(process.env.STATION_USER_POOL_ID, process.env.STATION_USER_POOL_CLIENT_ID);
  return new Promise((resolve, reject) => {
    const authenticationDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });
    //console.log(authenticationDetails);
    const cognitoUser = new CognitoUser({
      Username: email,
      Pool: userPool,
    });

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: async (result) => {
        logger.info('User signed in successfully', { email });
        const idToken = result.getIdToken().getJwtToken();
        const accessToken = result.getAccessToken().getJwtToken();
        const refreshToken = result.getRefreshToken().getToken();
        const userId = result.getIdToken().payload.sub;
        const after30Days = new Date(
          new Date().getTime() + 30 * 24 * 60 * 60 * 1000,
        );
        const sessionId = await stationUserSessionService.createSession(
          userId,
          refreshToken,
          Math.floor(after30Days.getTime() / 1000),
        );

        resolve({ idToken, accessToken, userId, sessionId });
      },
      onFailure: (err) => {
        logger.error('Error signing in user', { email, error: err });
        reject(err);
      },
    });
  });
}

export async function refreshTokens(refreshToken) {
  const command = new InitiateAuthCommand({
    AuthFlow: 'REFRESH_TOKEN_AUTH',
    ClientId: clientId,
    AuthParameters: {
      REFRESH_TOKEN: refreshToken,
    },
  });

  try {
    const response = await client.send(command);
    return response.AuthenticationResult;
  } catch (error) {
    logger.error('Error refreshing tokens:', { error });
    throw error;
  }
}

export async function handleTokenRefresh(sessionId) {
  const session = await stationUserSessionService.getSession(sessionId);
  if (!session || session.expirationTime < Math.floor(Date.now() / 1000)) {
    throw new Error('Session expired or not found');
  }

  const tokens = await refreshTokens(session.refreshToken);
  if (!tokens) {
    throw new ServiceError('Failed to refresh tokens', 'RefreshTokenFailed');
  }
  await stationUserSessionService.updateSessionLastUsed(sessionId);

  return {
    accessToken: tokens.AccessToken,
    idToken: tokens.IdToken,
  };
}

export async function getUser(accessToken) {
  const command = new GetUserCommand({
    AccessToken: accessToken,
  });

  try {
    const response = await client.send(command);
    return response;
  } catch (error) {
    logger.error('Error getting user', { accessToken, error });
    throw error;
  }
}
