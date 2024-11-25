import { logger } from '@linerra/util';

import { accessVerifier, idTokenVerifier } from '@linerra/util';

export const auth = async (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }
  const token = req.headers['access-token'];
  const idToken = req.headers['identity-token'];
  const sessionId = req.headers['session-id'];

  if (!token || !idToken) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const [payload, idTokenPayload] = await Promise.all([
      accessVerifier.verify(token),
      idTokenVerifier.verify(idToken),
    ]);

    // get user info from JWT payload
    if (!req.context) {
      req.context = {};
    }
    req.context.accessToken = token;
    req.context.idToken = idToken;
    req.context.sessionId = sessionId;

    //const idTokenPayload = await idTokenVerifier.verify(req.context.idToken);
    req.context.user = {
      sub: payload.sub,
      email: payload.email,
      stationId: idTokenPayload['custom:stationId'],
      stationNo: idTokenPayload['custom:stationNo'],
      // more fields can be added as needed
    };

    next();
  } catch (err) {
    logger.error('Token verification failed:', err);
    return res.status(401).json({ message: 'Invalid token' });
  }
};
