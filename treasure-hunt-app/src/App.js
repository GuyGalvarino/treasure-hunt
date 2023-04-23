import { Box } from '@mui/material'
import { useState } from 'react'
import Home from './Home'
import Game from './Game'
import Login from './user/Login'
import { loginUser, logoutUser, registerUser } from './services/comms'
import Register from './user/Register'
import Stats from './game/Stats'

const App = () => {
  const [home, setHome] = useState(true)
  const [play, setPlay] = useState(false)
  const [login, setLogin] = useState(false)
  const [register, setRegister] = useState(false)
  const [stats, setStats] = useState(false)
  const [loggedIn, setLoggedIn] = useState()

  return (
    <Box sx={{ height: '100vh', width: '100%' }}>
      {home ? (<Home setHome={setHome} setPlay={setPlay} setLogin={setLogin} setRegister={setRegister} setStats={setStats} loggedIn={loggedIn} setLoggedIn={setLoggedIn} logoutUser={logoutUser} />) : null}
      {play ? (<Game setHome={setHome} setPlay={setPlay} startTime={new Date()} />) : null}
      {login ? (<Login setHome={setHome} setLogin={setLogin} setLoggedIn={setLoggedIn} loginUser={loginUser} />) : null}
      {register ? (<Register setHome={setHome} setRegister={setRegister} registerUser={registerUser} />) : null}
      {stats ? (<Stats setHome={setHome} setStats={setStats} />) : null}
    </Box>
  )
}

export default App
