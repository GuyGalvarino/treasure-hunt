import { Box, Typography, Fade } from '@mui/material'
import HelpIcon from '@mui/icons-material/Help'
import Callout from './Callout'

const LatestClue = ({ clueText, showClue, setShowClue, showInitial, setShowInitial }) => {
    const clickHandler = () => {
        if (!showInitial) {
            setShowClue(!showClue)
        }
        setShowInitial(false)
    }
    return (
        <>
            <Box onClick={clickHandler} position='absolute'
                sx={{
                    bottom: '2%',
                    left: '2%',
                    width: '10%',
                    height: '10%',
                }}>
                <HelpIcon

                    sx={{
                        color: 'gold',
                        fontSize: '3rem',
                        zIndex: -1
                    }} />
            </Box>
            <Fade in={showClue || showInitial} onClick={clickHandler} timeout={200}>
                <Box position='absolute' sx={{
                    transform: 'scale(0.5) translate(-25%, 25%)',
                    bottom: '-5%',
                    left: '-2%',
                    zIndex: 1
                }}>
                    <Box position='absolute' sx={{
                        bottom: '0%',
                        background: '#ffd70095',
                        backdropFilter: 'blur(10px)',
                        clipPath: 'path("M158.287 57.516c3.597 0 35.974-23.982 88.737-26.38 71.948-8.395 101.927 38.372 101.927 38.372-2.398 5.995 49.164-37.174 79.143-33.576 32.377 4.796 45.568 19.186 41.97 49.164-2.398 19.187-22.784 27.581-27.58 37.174 2.398 4.796 28.779 20.386 28.779 62.356s-26.381 64.753-25.182 64.753c1.199 0 26.381 41.97 7.195 67.152-19.186 25.182-73.148 1.2-81.542-3.597-8.394 2.398-8.394 19.186-32.377 22.784-23.983 3.597-53.961-7.195-53.961-7.195l-11.991-9.593-169.079 135.502 109.121-128.308c-15.588 4.797-11.991 8.394-56.359 13.191-37.174 0-28.78-7.195-40.771-11.992-14.39 9.593-73.148 22.785-92.334-13.19-15.589-45.567 8.394-56.36 13.19-64.754-4.796-10.792-20.385-28.779-17.987-62.355 0-43.17 10.793-64.754 20.386-71.949-4.797-9.593-23.983-47.966 17.987-71.948 69.55-17.988 99.529 15.588 100.728 14.39z")'
                    }} width='400pt' height='400pt' zIndex='-1'>
                    </Box>
                    <Callout />
                    <Box position='absolute' sx={{
                        top: '17%',
                        left: '14%',
                        width: '65%',
                        height: '35%',
                    }}>
                        <Typography variant='h4' color='black'>{clueText}</Typography>
                    </Box>
                </Box>
            </Fade>
        </>
    )
}
export default LatestClue