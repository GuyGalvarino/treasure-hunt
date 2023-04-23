import { Box, TextField, Typography, Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react'
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const Register = ({ setRegister, setHome, registerUser }) => {
    const [useremail, setUserEmail] = useState()
    const [password, setPassword] = useState()
    const [name, setName] = useState()
    const [validEmail, setValidEmail] = useState(true)
    const [validPassword, setValidPassword] = useState(true)
    const emailHandler = (e) => {
        setUserEmail(e.target.value)
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }
    const nameHandler = (e) => {
        setName(e.target.value)
    }
    const submitHandler = async (e) => {
        if (!useremail.match(emailRegex)) {
            console.log('Invalid')
            return setValidEmail(false)
        }
        else
        {
            setValidEmail(true)
        }
        if (password.length < 5) {
            return setValidPassword(false)
        }
        else
        {
            setValidPassword(true)
        }
        try {
            await registerUser(useremail, name, password)
            setRegister(false)
            setHome(true)
        }
        catch (e) {
            console.error(e)
        }
    }
    const backHandler = () => {
        setRegister(false)
        setHome(true)
    }
    return (
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' sx={{
            background: 'black',
            width: '100%',
            height: '100%'
        }}>
            <ArrowBackIcon onClick={backHandler} sx={{
                position: 'absolute',
                transform: 'scale(2)',
                top: '50px',
                left: '50px',
                color: 'gold',
                cursor: 'pointer'
            }} />
            <Typography variant='h2' color='Gold' sx={{ m: 5 }}>Register</Typography>
            <TextField onChange={nameHandler} label='Name' sx={{ m: 2 }} required />
            {validEmail
                ? (<TextField label='Email' onChange={emailHandler} sx={{ m: 2 }} required />)
                : (<TextField error label='Email' onChange={emailHandler} sx={{ m: 2 }} helperText='a valid email please' required />)}
            {validPassword
                ? (<TextField type='password' onChange={passwordHandler} label='Password' sx={{ m: 2 }} required />)
                : (<TextField error type='password' onChange={passwordHandler} label='Password' helperText='minimum 5 characters please' sx={{ m: 2 }} required />)
            }
            <Button onClick={submitHandler}>Register</Button>
        </Box>
    )
}

export default Register