import { Box } from '@mui/material'
import RoomTopBar from '../RoomTopBar'
import livingImage from './images/living.jpg'
import BlurredBackground from '../BlurredBackground'
import { useState } from 'react'
import Clue from '../Clue'

const Shelf1 = () => (
    <Box sx={{
        // border: '1px solid red',
        top: '25.5%',
        left: '14.5%',
        position: 'absolute',
        width: '13%',
        height: '6.5%',
    }} />
)
const Shelf2 = ({ clickHandler }) => (
    <Box onClick={clickHandler} sx={{
        // border: '1px solid red',
        top: '33%',
        left: '14.5%',
        position: 'absolute',
        width: '13%',
        height: '9.5%',
    }} />
)
const Shelf3 = () => (
    <Box sx={{
        // border: '1px solid red',
        top: '44%',
        left: '14.5%',
        position: 'absolute',
        width: '13%',
        height: '9%',
    }} />
)
const Shelf4 = () => (
    <Box sx={{
        // border: '1px solid red',
        top: '19.5%',
        left: '29%',
        position: 'absolute',
        width: '27%',
        height: '17.5%',
    }} />
)
const Cupboard1 = () => (
    <Box sx={{
        // border: '1px solid red',
        top: '57.5%',
        left: '14.5%',
        position: 'absolute',
        width: '13%',
        height: '17.5%',
    }} />
)
const Cupboard2 = () => (
    <Box sx={{
        // border: '1px solid red',
        top: '67.5%',
        left: '29%',
        position: 'absolute',
        width: '11.5%',
        height: '9%',
    }} />
)
const Cupboard3 = ({ clickHandler }) => (
    <Box onClick={clickHandler} sx={{
        // border: '1px solid red',
        top: '72%',
        left: '45%',
        position: 'absolute',
        width: '14.5%',
        height: '3.5%',
    }} />
)
const LivingRoom = ({ updateViews, setClueText, discovered, updateDiscovered, setRenderKey, updateInteractions, setFailed }) => {
    const clueText = "3 men with white caps, standing tall"

    const [clue, setClue] = useState(false)

    const clueHandler = () => {
        setClue(!clue)
        setRenderKey(true)
        if (!discovered.living) {
            updateDiscovered({ living: true })
            setClueText(clueText)
        }
    }

    const backHandler = () => {
        updateViews({ mainMenu: true, living: false })
    }

    const failureHandler = () => {
        setFailed(true)
    }

    return (
        <Box width='100%' height='100%' sx={{ background: 'black' }}>
            < RoomTopBar room='Living Room' backHandler={backHandler} />
            <Box display='flex' justifyContent='center' alignItems='center' sx={{ width: '100%', height: '85%' }}>
                <Box position='relative' height='90%' zIndex='1' onClick={() => updateInteractions()}>
                    <Shelf1 />
                    <Shelf2 clickHandler={clueHandler} />
                    <Shelf3 />
                    <Shelf4 />
                    <Cupboard1 />
                    <Cupboard2 />
                    <Cupboard3 clickHandler={failureHandler} />
                    <img src={livingImage} alt='Living Room' height='100%' />
                    <Clue setClue={clueHandler} clue={clue} text={clueText} />
                </Box>
            </Box>
            <BlurredBackground />
        </Box >
    )
}

export default LivingRoom