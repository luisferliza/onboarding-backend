const { getReasonPhrase } = require('http-status-codes')
const { StatusCodes } = require('http-status-codes')

exports.success = (req, res, body, status = StatusCodes.OK) => {
  res.status(status).json({
    error: false,
    status,
    body: body || getReasonPhrase(status)
  })
}
