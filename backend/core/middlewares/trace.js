import { v4 as uuidV4 } from 'uuid';

const trace = async (req, res, next) => {
  const traceId = req.headers['x-amzn-trace-id'] || uuidV4();

  // Also add traceId to response header
  res.set('X-Trace-Id', traceId);

  // Continue to process the request
  next();
};

export default trace;
