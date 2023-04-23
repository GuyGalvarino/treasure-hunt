import { Box, Button, Typography } from "@mui/material"

const Failed = ({ failureHandler, setHome, setPlay }) => {
    const buttonHandler = async () => {
        setPlay(false)
        setHome(true)
        await failureHandler()
    }
    return (

        < Box position='absolute' display='flex' flexDirection='column' justifyContent='center' alignItems='center' sx={{
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            background: 'black',
            zIndex: '1'
        }}>
            <Typography variant='h1' color='red' margin={5}> Failed! </Typography>
            <Button variant='contained' color='error' onClick={buttonHandler}>Back to home</Button>
        </Box >
    )
}

export default Failed