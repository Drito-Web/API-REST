// const { stack } = require("../routes/categories.router");

function loadError(err, req, res, next) {
  console.log('loadError', err);
  console.error(err);
  next(err);

}

function errorHandler(err, req, res, next) {
  console.log('errorHandler', err);
  res.status(500).json({
    message:err.message,
    stack:err.stack,
  });
};

module.exports = { loadError, errorHandler };
