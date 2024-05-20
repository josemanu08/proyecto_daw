import { Router } from 'express'
/* eslint-disable */
import auth from '../keyInfo/authPsn.json' assert {type: 'json'}
/* eslint-enable */
import { 
  getUserGamesFromId,
  getUserId,
  getUserDetails,
  getTrophyDetails,
  getAllTrophies,
  getTrophyGroups
} from '../functions/tokenFunctions.js'

const router = Router()

router
  .get('/userGames&Achievements/:username', async (req, res) => {
    const id = await getUserId(auth, req.params.username)
    const data = await getUserGamesFromId(auth, id)
    res.json(data)
  })
  .get('/userDetails/:username', async (req,res) => {
    const details = await getUserDetails(auth, req.params.username)
    res.json(details)
  })
  .get('/getUserId/:username', async (req, res) => {
    const userId = await getUserId(auth, req.params.username)
    // const userId = await makeSearch(auth, req.params.username)
    res.send(userId)
  })
  // Devuleve los trofeos del usuario según un juego
  .get('/trophyDetails', async (req, res) => {
    const {userId, titleId} = req.query
    const tDetails = await getTrophyDetails(auth, userId, titleId)
    res.json({tDetails})
  })
  //Devuelve todos los trofeos del videojuego
  .get('/allTrophies/:trophieId', async (req, res) => {
    const allTrophies = await getAllTrophies(auth, req.params.trophieId)
    res.send(allTrophies)
  })
  .get('/allTrophyGroups/:trophieId', async(req, res) => {
    const trophyGroups = await getTrophyGroups(auth, req.params.trophieId)
    res.send(trophyGroups)
  })

export { router }
