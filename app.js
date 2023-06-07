const DEV = '.env'
require('dotenv').config({ path: DEV })
require('./Database/database')
const serverless = require('serverless-http')
const express = require('express')
const {
  errorLogging,
  errorHandler,
  boomErrorHandler
} = require('./Middleware/error.middleware')
const CORS = require('./Middleware/CORS')
const { routerAPI } = require('./Routes')

const app = express()
const port = 3000

app.use(express.json({ limit: '10mb' }))
app.use(CORS)
routerAPI(app)

app.use(errorLogging)
app.use(boomErrorHandler)
app.use(errorHandler)

app.get('/', (req, res) => res.send('Hello World :D!!'))

app.listen(port, () =>
  console.log(`Onboarding listening on http://localhost:${port}`)
)

module.exports = {
  handler: serverless(app)
}
