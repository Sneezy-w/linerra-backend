import express from 'express';
import trace from 'system/src/middlewares/trace.js';
import contextInjector from 'system/src/middlewares/contextInjector.js';
import ErrorShowType from 'system/src/enum/errorShowType.js';
import path from './routes/common/path.js';
import apiRouter from './routes/index.js';
import errorHandler from 'system/src/middlewares/errorHandler.js';
// create our Express app
const app = express();

// Here our API Routes
app.use(express.json());
app.use(trace);
app.use(contextInjector);
//app.use(express.json());

app.use((req, res, next) => {
  res.ok = function (data) {
    return this.status(200).json({
      success: true,
      data,
      //traceId: res.getHeader('X-Trace-Id'),
      //host: req.hostname,
    });
  };

  res.fail = function (errorMessage, errorCode, showType, statusCode) {
    return this.status(statusCode || 500).json({
      success: false,
      errorMessage,
      errorCode: errorCode || 'InternalServerError',
      showType: showType || ErrorShowType.ERROR_MESSAGE,
      traceId: res.getHeader('X-Trace-Id'),
      host: req.hostname,
    });
  };
  next();
});
// app.post('/api/health', (req, res) => {
//   throw new Error('test');
// });

app.use(path.base, apiRouter);

//app.use(express.urlencoded({ extended: true }));

app.use(errorHandler);
// app.use(
//   express.json({
//     type: 'application/json',
//   }),
// );

// app.use('/api', coreAuthRouter);
// app.use('/api', adminAuth.isValidAuthToken, coreApiRouter);
// app.use('/api', adminAuth.isValidAuthToken, erpApiRouter);
// app.use('/download', coreDownloadRouter);
// app.use('/public', corePublicRouter);

// If that above routes didnt work, we 404 them and forward to error handler
// app.use(errorHandlers.notFound);

// production error handler
// app.use(errorHandlers.productionErrors);

// done! we export it so we can start the site in start.js
export default app;
