import { useState, useEffect } from "react"
import { MessageService } from "./runEvent"

const useXData = () => {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token")
    return tokenString
  }
  const getUser = () => {
    const userIdString = sessionStorage.getItem("user_id")
    return userIdString
  }
  const getIsLoggedIn = () => {
    const isLoggedIn = sessionStorage.getItem("is_logged_in")
    return isLoggedIn
  }

  const [userToken, setUserToken] = useState(getToken())
  const [userId, setUserId] = useState(getUser())
  const [isLoggedIn, setIsLoggedIn] = useState(getIsLoggedIn())

  const saveToken = (user_token) => {
    sessionStorage.setItem("token", user_token)
    setUserToken(user_token)
  }
  const saveUserId = (user_id) => {
    sessionStorage.setItem("user_id", user_id)
    setUserId(user_id)
  }
  const saveIsLoggedIn = (is_logged_in) => {
    sessionStorage.setItem("is_logged_in", is_logged_in)
    setIsLoggedIn(is_logged_in)
  }

  useEffect(() => {
    MessageService.initializeEvent().subscribe((event) => {
      if (event.eventType === "AUTH_TO_XDATA") {
        saveToken(event.token)
        saveUserId(event.userData?.UserId)
        saveIsLoggedIn(event.status)
        // } else if (event.eventType === "LOGOUT") {
        //   setButtonFav(false)
      }
    })
  }, [])

  return {
    userToken,
    setUserToken: saveToken,
    userId,
    setUserId: saveUserId,
    isLoggedIn,
    setIsLoggedIn: saveIsLoggedIn,
  }
}

export default useXData
