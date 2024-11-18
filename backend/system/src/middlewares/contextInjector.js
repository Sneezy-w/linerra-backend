const contextInjector = (req, res, next) => {
  if (!req.context) {
    req.context = {};
  }

  req.context.acceptLanguage = req.headers['accept-language'];

  next();
};

export default contextInjector;
