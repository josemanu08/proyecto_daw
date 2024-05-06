import { exchangeNpssoForCode, exchangeCodeForAccessToken } from 'psn-api'
import { config } from 'dotenv'
// import authorization from './authPsn.json' assert {type:'json'};
import fs from 'fs/promises'

config({
  path: '.env'
})

const npsso = 'wQFXuByuzkiSAru1wTRiKzxemn2X2bvnlK2Yc0nc7J4wws6T4xL4Azn2EvhHcjpz'

const code = await exchangeNpssoForCode(npsso)
const authorization = await exchangeCodeForAccessToken(code)

await fs.writeFile(process.env.authPath, JSON.stringify(authorization))

await fs.writeFile(process.env.expDatePath,
  JSON.stringify({ expDate: new Date().getTime() + (authorization.expiresIn * 1000) }))
