import { Box, TextField, Typography, Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react'

const Login = ({ loginUser, setLogin, setHome, setLoggedIn }) => {
    const [useremail, setUserEmail] = useState()
    const [password, setPassword] = useState()
    const [validEmail, setValidEmail] = useState(true)
    const [validPassword, setValidPassword] = useState(true)

    const emailHandler = (e) => {
        setUserEmail(e.target.value)
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }
    const submitHandler = async () => {
        try {
            const name = await loginUser(useremail, password)
            console.log('WOW:', name) 
            if(!name) {
                setValidEmail(false)
                return setValidPassword(false)
            }
            setLoggedIn(name)
            setLogin(false)
            setHome(true)
        }
        catch (e) {
            console.error(e)
        }
    }
    const backHandler = () => {
        setLogin(false)
        setHome(true)
    }
    return (
        <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' sx={{
            width: '100%',
            height: '100%',
            background: 'black'
        }}>
            <ArrowBackIcon onClick={backHandler} sx={{
                position: 'absolute',
                transform: 'scale(2)',
                top: '50px',
                left: '50px',
                color: 'gold',
                cursor: 'pointer'
            }} />
            <Typography variant='h2' color='Gold' sx={{ m: 5 }}>Login</Typography>
            {validEmail
                ? (<TextField label='Email' onChange={emailHandler} sx={{ m: 2 }} required />)
                : (<TextField error label='Email' onChange={emailHandler} sx={{ m: 2 }} helperText='please check' required />)}
            {validPassword
                ? (<TextField type='password' onChange={passwordHandler} label='Password' sx={{ m: 2 }} required />)
                : (<TextField error type='password' onChange={passwordHandler} label='Password' helperText='please check' sx={{ m: 2 }} required />)
            }
            <Button onClick={submitHandler}>Login</Button>
        </Box >
    )
}

export default Login
