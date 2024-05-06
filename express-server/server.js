import express from 'express'
import { config } from 'dotenv'
import { router } from './src/routes/psn-routes.js'
config({
  path: './.env'
})

const App = express()
App.use(express.json())

App.use('/psn-api', router)

App.listen(process.env.PORT ?? '8000', () => {
  console.log('listening...')
})
