import chit from './BigrB89jT.png'
import { Box, Fade, Typography } from '@mui/material'

const Clue = ({ setClue, clue, text }) => {
    const handler = () => {
        setClue(false)
    }

    return (
        <Fade in={clue} timeout={500}>
            <Box position='absolute' sx={{
                top: '15%',
                left: '50%',
                zIndex: 1,
                transform: 'translateX(-50%) rotate(-2deg)',
                filter: 'drop-shadow(0 0 0.75rem crimson)',
            }}>
                <img src={chit} alt='chit' onClick={handler} />
                <Box position='absolute' sx={{
                    top: '17%',
                    left: '13.5%',
                    width: '80%',
                    transform: 'rotate(2deg)'
                }}>
                    <Typography>
                        {text}
                    </Typography>
                </Box>
                <Box display='flex' alignItems='center' flexDirection='column' position='absolute' sx={{
                    top: '105%',
                    filter: 'drop-shadow(0 0 0.3rem crimson)',
                    transform: 'rotate(2deg)',
                    fontStyle: 'italic'
                }}>
                    <Typography variant='h3' color='white'>
                        You found a clue!
                    </Typography>
                    <Typography variant='body1' color='white'>
                        (click on the chit to close)
                    </Typography>
                </Box>
            </Box>
        </Fade >
    )
}

export default Clue