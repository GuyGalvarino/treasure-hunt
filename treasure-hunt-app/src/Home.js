import { Box, Button } from '@mui/material'
import bg from './pexels-david-bartus-366791.jpg'
const Home = ({ updateViews }) => {
    const playNowHandler = () => {
        updateViews({ mainMenu: true, home: false })
    }

    return (
        <Box display="flex" justifyContent='center' alignItems='center' sx={{
            height: '100%',
            width: '100%',
            background: 'black'
        }}>
            <Box position='absolute' sx={{
                height: '60vh',
                width: '50vw',
                top: '30vh',
                left: '0vw',
                backgroundImage: `url(${bg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                // filter: 'blur(5px)',
                opacity: '80%'
            }}></Box>
            <Box display='flex' justifyContent='center'>
                <Button variant='contained' sx={{
                    m: 2,
                    p: '0.8em 1.5em',
                    typography: 'h5',
                    background: '#cc9900'
                }} onClick={playNowHandler}>
                    Play Now!
                </Button>
            </Box>
        </Box >
    )
}

export default Home