// Asyn/Await Error Handler
exports.catchErrors = fn => {
  return function(req, res, next) {
    return fn(req, res, next).catch(next);
  };
};

// Not Found Error Handler
exports.notFound = (req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
};

// Other error handlers
exports.developmentErrors = (err, req, res, next) => {
  err.stack = err.stack || "";

  const errorDetails = {
    status: err.status,
    message: err.message,
    stackHighlighted: err.stack.replace(
      /[a-z_-\d]+.js:\d+:\d+/gi,
      "<mark>$&</mark>"
    )
  };

  res.status(err.status || 500);
  res.json(errorDetails);
};

exports.productionErrors = (err, req, res, next) => {
  res.status(err.status || 500);

  const errorDetails = {
    status: err.status,
    message: err.message
  };

  res.json(errorDetails);
};
