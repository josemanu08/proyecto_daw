import express from 'express'
import { config } from 'dotenv'
import { router } from './src/routes/psn-routes.js'
import auth from './src/keyInfo/authPsn.json' assert {type: 'json'}
import expDate from './src/keyInfo/expDate.json' assert {type: 'json'}
import { uploadTokenAuth } from './src/functions/tokenFunctions.js'

config({
  path: './.env'
})

const App = express()
App.use(express.json())
App.use('/', uploadTokenAuth)
App.use('/psn-api', router)

App.listen(process.env.PORT ?? '8000', () => {
  console.log('listening...')
})
