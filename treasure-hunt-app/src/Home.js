import { Box, Button, Typography } from '@mui/material'
import { resetGame } from './services/comms'
import Background from './game/Background'
const Home = ({ setHome, setPlay, setLogin, setRegister, setStats, loggedIn, setLoggedIn, logoutUser }) => {
    const playNowHandler = () => {
        setHome(false)
        setPlay(true)
    }

    const loginHandler = () => {
        setHome(false)
        setLogin(true)
    }

    const registerHandler = () => {
        setHome(false)
        setRegister(true)
    }

    const statsHandler = () => {
        setHome(false)
        setStats(true)
    }

    const logoutHandler = () => {
        logoutUser()
        setLoggedIn()
    }
    const resetHandler = async () => {
        await resetGame()
    }
    return (
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' sx={{
            height: '100%',
            width: '100%',
            background: 'black'
        }}>
            <Typography variant='h1' color='gold' sx={{ m: 5 }} zIndex='1'>TREASURE HUNT</Typography>
            {loggedIn
                ? (<Typography variant='h3' color='gold' sx={{ m: 5 }} zIndex='1'>Welcome {loggedIn}!</Typography>)
                : (<Typography variant='h3' color='gold' sx={{ m: 5 }} zIndex='1'>Login or Register to continue</Typography>)
            }
            {loggedIn
                ? (<>
                    <Button variant='contained' onClick={playNowHandler} sx={{ m: 2, zIndex: 1 }}>Play Now!</Button>
                    <Button variant='contained' onClick={resetHandler} sx={{ m: 2, zIndex: 1 }}>Reset</Button>
                    <Button variant='contained' onClick={logoutHandler} sx={{ m: 2, zIndex: 1 }}>Logout</Button>
                    <Button variant='contained' onClick={statsHandler} sx={{ m: 2, zIndex: 1 }}>Stats</Button>
                </>)
                : (<>
                    <Button variant='contained' onClick={loginHandler} sx={{ m: 2, zIndex: 1 }}>Login</Button>
                    <Button variant='contained' onClick={registerHandler} sx={{ m: 2, zIndex: 1 }}>Register</Button>
                </>)
            }
            <Background />
        </Box>
    )
}

export default Home