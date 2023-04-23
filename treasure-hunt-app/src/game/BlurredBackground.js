import { Box } from '@mui/material'
import bg from '../pexels-david-bartus-366791.jpg'

const BlurredBackground = () => {
    return (
        <Box position='absolute' sx={{
            height: '60vh',
            width: '50vw',
            top: '30vh',
            left: '0vw',
            backgroundImage: `url(${bg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            zIndex: 0,
            filter: 'blur(5px)',
            opacity: '80%'
        }} />
    )
}

export default BlurredBackground