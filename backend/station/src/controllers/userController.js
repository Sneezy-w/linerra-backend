import { stationCognitoService } from '@linerra/core';

import { accessVerifier, idTokenVerifier, logger } from '@linerra/util';
import { ErrorShowType } from '@linerra/enum';

// import {
//   accessVerifier,
//   idTokenVerifier,
// } from '@linerra/core/utils/tokenVerifier.js';
// import {
//   accessVerifier,

//const { accessVerifier, idTokenVerifier } = tokenVerifier;

export async function signUp(req, res) {
  try {
    const { email, password } = req.body;
    //console.log(req.body);
    //console.log(JSON.parse(req.body));
    const result = await stationCognitoService.signUp(email, password);
    res.ok({ result });
  } catch (error) {
    logger.error('Error registering station user', { error });
    res.fail(
      'Error registering station user',
      'ErrorRegisteringStationUser',
      ErrorShowType.ERROR_MESSAGE,
      400,
    );
  }
}

export async function signIn(req, res) {
  try {
    const { email, password } = req.body;
    const result = await stationCognitoService.signIn(email, password);
    res.ok(result);
  } catch (error) {
    logger.error('Error signing in station user', { error });
    res.fail(
      'Authentication failed',
      'AuthenticationFailed',
      ErrorShowType.ERROR_MESSAGE,
      401,
    );
  }
}

export async function getUserInfo(req, res) {
  try {
    const result = await stationCognitoService.getUser(req.context.accessToken);
    const userInfo = result?.UserAttributes?.reduce(
      (acc, attr) => {
        if (attr.Name && attr.Value) {
          acc[attr.Name] = attr.Value;
        }
        return acc;
      },
      { username: result?.Username },
    );
    res.ok(userInfo);
  } catch (error) {
    logger.error('Error getting user info', { error });
    res.fail(
      'Error getting user info',
      'ErrorGettingUserInfo',
      ErrorShowType.ERROR_MESSAGE,
      401,
    );
  }
}

export async function refreshToken(req, res) {
  try {
    //console.log(req.context);
    const { accessToken, idToken, sessionId } = req.context;
    const [accessPayload, idPayload] = await Promise.all([
      accessVerifier.verify(accessToken),
      idTokenVerifier.verify(idToken),
    ]);
    const now = Date.now();
    // check if the token is expired
    if (accessPayload.exp * 1000 < now || idPayload.exp * 1000 < now) {
      return res.fail(
        'Token expired',
        'TokenExpired',
        ErrorShowType.ERROR_MESSAGE,
        401,
      );
    }

    // check if the token is expired in 15 minutes
    const fifteenMinutesInMs = 15 * 60 * 1000;
    const accessTokenExpiresIn = accessPayload.exp * 1000 - now;
    const idTokenExpiresIn = idPayload.exp * 1000 - now;

    if (
      accessTokenExpiresIn > fifteenMinutesInMs &&
      idTokenExpiresIn > fifteenMinutesInMs
    ) {
      return res.ok({ accessToken, idToken });
    }

    const result = await stationCognitoService.handleTokenRefresh(sessionId);
    res.ok(result);
  } catch (error) {
    logger.error('Error refreshing token', error);
    res.fail(
      'Error refreshing token',
      'ErrorRefreshingToken',
      ErrorShowType.ERROR_MESSAGE,
      401,
    );
  }
}
