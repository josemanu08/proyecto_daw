import { useEffect, useState, useRef, useContext } from 'react'
import { getPlayUserData, getXboxUserData } from '../services/fetch-api/userData'
import { userDataContext } from '../Context/contexts'
import { toast } from 'react-toastify'

import { useGameStore } from '../store/GamesStore'

export const useUserData = ({ userData }) => {
  const [data, setData] = useState({
    psn: null,
    xbl: null
  })

  const psnUsernameRef = useRef(null)
  const xblUsernameRef = useRef(null)

  useEffect(() => {
    const fetchData = async () => {
      const newData = { ...structuredClone(data) }
      if (userData.playStationUsername && (userData.playStationUsername !== psnUsernameRef.current)) {
        // newData.psn = await getPlayUserData(userData.playStationUsername)
      }
      if (!userData.playStationUsername && data.psn) {
        newData.psn = null
      }
      if (userData.xboxUsername && (userData.xboxUsername !== xblUsernameRef.current)) {
        newData.xbl = await getXboxUserData(userData.xboxUsername)
      }
      if (!userData.xboxUsername && data.xbl) {
        newData.xbl = null
      }
      setData(newData)
      psnUsernameRef.current = userData.playStationUsername
      xblUsernameRef.current = userData.xboxUsername
    }
    fetchData()
  }, [userData])

  return {
    data
  }
}

export const usePlayStationUserData = () => {
  const { userData } = useContext(userDataContext)
  const psnUsernameRef = useRef(null)

  const { playStationData, setPlaystationData } = useGameStore()
  useEffect(() => {
    const fetchData = async () => {
      let playUserData = null
      if (userData.playStationUsername && (userData.playStationUsername !== psnUsernameRef.current)) {
        playUserData = await getPlayUserData(userData.playStationUsername)
        toast.success('info reached', {
          theme: 'dark'
        })
      }
      if (!userData.playStationUsername && playStationData) {
        setPlaystationData(null)
      }
      setPlaystationData(playUserData)
      psnUsernameRef.current = userData.playStationUsername
    }
    fetchData()
  }, [userData.playStationUsername])

  return { playStationData }
}

export const useXboxUserData = () => {
  const { userData } = useContext(userDataContext)
  const xblUsernameRef = useRef(null)

  const { xboxData, setXboxData } = useGameStore()

  useEffect(() => {
    const fetchData = async () => {
      let xboxUserData = null
      if (userData.xboxUsername && (userData.xboxUsername !== xblUsernameRef.current)) {
        xboxUserData = await getXboxUserData(userData.xboxUsername)
        toast.success('info reached', {
          theme: 'dark'
        })
      }
      if (!userData.xboxUsername && xboxData) {
        setXboxData(null)
      }
      setXboxData(xboxUserData)
      xblUsernameRef.current = userData.xboxUsername
    }
    fetchData()
  }, [userData.xboxUsername])

  return { xboxData }
}
