import { useState, useEffect } from "react"

export const useWindowSize = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setisMobile] = useState(null)

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  const changeMobile = () => {
    window.matchMedia("(max-width: 37.5em)").matches
      ? setisMobile(true)
      : setisMobile(false)
  }

  useEffect(() => {
    handleResize()
    changeMobile()

    window.addEventListener("resize", changeMobile, handleResize)
    return () =>
      window.removeEventListener("resize", changeMobile, handleResize)
  }, [])

  return { windowSize, isMobile, menuOpen, setMenuOpen }
}
