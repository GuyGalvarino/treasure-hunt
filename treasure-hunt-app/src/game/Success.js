import { Box, Typography, Button } from "@mui/material"

const Success = ({ successHandler, setHome, setPlay, noOfInteraction, time }) => {
    const buttonHandler = async () => {
        setHome(true)
        setPlay(false)
        await successHandler()
    }
    return (
        <Box position='absolute' display='flex' flexDirection='column' justifyContent='center' alignItems='center' sx={{
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            background: 'black',
            zIndex: '1'
        }}>
            <Typography variant='h1' color='green' margin={5}> Success! </Typography>
            <Typography variant='h4' color='gold'> No of interactions: {noOfInteraction} </Typography>
            <Typography variant='h4' color='gold'> Time: {time}ms </Typography>
            <Button variant='contained' color='success' sx={{ m: 5 }} onClick={buttonHandler}>Back to home</Button>
        </Box>
    )
}

export default Success