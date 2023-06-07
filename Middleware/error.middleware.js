const { getReasonPhrase } = require("http-status-codes");

function errorLogging(err, req, res, next) {
  console.error(err);
  next(err);
}

function boomErrorHandler(err, req, res, next) {
    if(err.isBoom) {
        const { output } = err;                
        return res.status(output.statusCode).json({
            error: true,
            status: output.statusCode,
            body: output.payload? output.payload : getReasonPhrase(output.payload),
          })
    }
    next(err);
}

function errorHandler(err, req, res, next) {
  res.status(500).json({
    error: true,
    status: 500,
    body: { message: "Internal Server Error" },
  });
}

module.exports = {
  errorLogging,
  errorHandler,
  boomErrorHandler
};
