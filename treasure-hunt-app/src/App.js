import { Box } from '@mui/material'
import { useState } from 'react'
import Home from './Home'
import MainMenu from './MainMenu'
const App = () => {
  const [views, setViews] = useState({
    home: true,
    mainMenu: false,
    bathroom: false,
    kitchen: false,
    bedroom: false,
    living: false,
    study: false,
  })

  const updateViews = params => {
    setViews({ ...views, ...params })
  }

  return (
    <Box sx={{ height: '100vh', width: '100vw' }}>
      {console.log('Menu:', views.menu)}
      {views.home ? (<Home updateViews={updateViews} />) : null}
      {views.mainMenu ? (<MainMenu>WAAH!</MainMenu>) : null}
    </Box>
  )
}

export default App
