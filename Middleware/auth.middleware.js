const boom = require("@hapi/boom");
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const { error } = require("../Utils/response.handler");

function verifyToken(req, res, next) {  
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) {
    return next(boom.forbidden());
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return next(boom.forbidden());
    req.user = user;
    next();
  });
}

module.exports = {
  verifyToken,
};
