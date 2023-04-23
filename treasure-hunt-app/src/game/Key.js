import { Box, Fade, Typography } from '@mui/material'
import key from './key.png'

const Key = ({ showKey, setShowKey, updateDiscovered }) => {
    const clickHandler = () => {
        setShowKey(!showKey)
        updateDiscovered({ key: true })
    }

    return (
        <Fade onClick={clickHandler} in={showKey} timeout={500}>
            <Box zIndex='1'>
                <Box position='absolute' sx={{
                    top: '10%',
                    left: '50%',
                    filter: 'drop-shadow(0 0 0.75rem crimson)',
                    transform: 'scale(0.5) translateX(-100%)',
                }}>
                    {console.log('it works')}
                    <img src={key} />
                </Box>
                <Box position='absolute' display='flex' justifyContent='center' zIndex='1' sx={{
                    bottom: '15%',
                    left: '50%',
                    width: '100%',
                    filter: 'drop-shadow(0 0 0.3rem crimson)',
                    fontStyle: 'italic',
                    transform: 'translateX(-50%)'
                }}>
                    <Typography variant='h3' color='gold' sx={{
                        WebkitTextStroke: '0.75px #000'
                    }}>Congratulations! You found the key!</Typography>
                </Box>
            </Box>
        </Fade>
    )
}

export default Key