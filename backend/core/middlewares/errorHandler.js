import { ServiceError } from '@linerra/util';
import { ErrorShowType } from '@linerra/enum';
import { logger } from '@linerra/util';

const errorHandler = (err, req, res, next) => {
  // logger.error(err.message);
  logger.error(err.message, err);

  if (err instanceof ServiceError) {
    res.status(500).json({
      success: false,
      errorCode: err.errorCode,
      errorMessage: err.message,
      showType: ErrorShowType.ERROR_MESSAGE,
      traceId: res.getHeader('X-Trace-Id'),
      host: req.hostname,
    });
    return next(err);
  }

  res.status(500).json({
    success: false,
    errorCode: 'InternalServerError',
    errorMessage:
      process.env.NODE_ENV === 'production'
        ? 'An unexpected error occurred'
        : err.message,
    showType: ErrorShowType.ERROR_MESSAGE,
    traceId: res.getHeader('X-Trace-Id'),
    host: req.hostname,
  });
  return next(err);
};

export default errorHandler;
