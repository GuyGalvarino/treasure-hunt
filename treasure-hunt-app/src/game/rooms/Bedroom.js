import { Box } from '@mui/material'
import RoomTopBar from '../RoomTopBar'
import bedroomImage from './images/bedroom.jpg'
import BlurredBackground from '../BlurredBackground'
import { useState } from 'react'
import Clue from '../Clue'

const Shelf1 = ({ clickHandler }) => (
    <Box onClick={clickHandler} sx={{
        // border: '1px solid red',
        top: '11%',
        left: '76%',
        position: 'absolute',
        width: '10%',
        height: '8.5%',
    }} />
)
const Shelf2 = ({ clickHandler }) => (
    <Box onClick={clickHandler} sx={{
        // border: '1px solid red',
        top: '20%',
        left: '76%',
        position: 'absolute',
        width: '10%',
        height: '8.5%',
    }} />
)
const Shelf3 = ({ clickHandler }) => (
    <Box onClick={clickHandler} sx={{
        // border: '1px solid red',
        top: '29%',
        left: '76%',
        position: 'absolute',
        width: '6%',
        height: '8%',
    }} />
)
const Shelf4 = ({ clickHandler }) => (
    <Box onClick={clickHandler} sx={{
        // border: '1px solid red',
        top: '37.5%',
        left: '75.5%',
        position: 'absolute',
        width: '6%',
        height: '8%',
    }} />
)
const Shelf5 = ({ clickHandler }) => (
    <Box onClick={clickHandler} sx={{
        // border: '1px solid red',
        top: '46%',
        left: '75%',
        position: 'absolute',
        width: '10%',
        height: '6.5%',
    }} />
)
const Shelf6 = ({ clickHandler }) => (
    <Box onClick={clickHandler} sx={{
        // border: '1px solid red',
        top: '12%',
        left: '90%',
        position: 'absolute',
        width: '8%',
        height: '8%',
    }} />
)
const Shelf7 = ({ clickHandler }) => (
    <Box onClick={clickHandler} sx={{
        // border: '1px solid red',
        top: '20%',
        left: '89%',
        position: 'absolute',
        width: '8%',
        height: '7.5%',
    }} />
)
const Shelf8 = ({ clickHandler }) => (
    <Box onClick={clickHandler} sx={{
        // border: '1px solid red',
        top: '28%',
        left: '90%',
        position: 'absolute',
        width: '7%',
        height: '7%',
    }} />
)
const Shelf9 = ({ clickHandler }) => (
    <Box onClick={clickHandler} sx={{
        // border: '1px solid red',
        top: '35.5%',
        left: '89%',
        position: 'absolute',
        width: '7%',
        height: '7%',
    }} />
)
const Shelf10 = ({ clickHandler }) => (
    <Box onClick={clickHandler} sx={{
        // border: '1px solid red',
        top: '43%',
        left: '89%',
        position: 'absolute',
        width: '7%',
        height: '7%',
    }} />
)
const Drawer1 = ({ clickHandler }) => (
    <Box onClick={clickHandler} sx={{
        // border: '1px solid red',
        top: '55.5%',
        left: '16.5%',
        position: 'absolute',
        width: '9.5%',
        height: '5.5%',
    }} />
)
const Drawer2 = ({ clickHandler }) => (
    <Box onClick={clickHandler} sx={{
        // border: '1px solid red',
        top: '48.5%',
        left: '58%',
        position: 'absolute',
        width: '6.5%',
        height: '4.5%',
    }} />
)
const Shelf11 = ({ clickHandler }) => (
    <Box onClick={clickHandler} sx={{
        // border: '1px solid red',
        top: '10%',
        left: '32%',
        position: 'absolute',
        width: '17.5%',
        height: '11%',
    }} />
)
const Bed = ({ clickHandler }) => (
    <Box onClick={clickHandler} sx={{
        // border: '1px solid red',
        top: '58%',
        left: '33%',
        position: 'absolute',
        width: '30%',
        height: '11%',
    }} />
)
const Picture = ({ clickHandler }) => (
    <Box onClick={clickHandler} sx={{
        // border: '1px solid red',
        top: '48%',
        left: '67.5%',
        position: 'absolute',
        width: '5.5%',
        height: '10%',
    }} />
)
const Bedroom = ({ updateViews, setClueText, discovered, updateDiscovered, setRenderKey, updateInteractions }) => {
    const clueText = "I have a key and I go round and round, you can stop me but can't stop what I stand for!"

    const [clue, setClue] = useState(false)

    const clueHandler = () => {
        setClue(!clue)
        setRenderKey(true)
        if (!discovered.bedroom) {
            updateDiscovered({ bedroom: true })
            setClueText(clueText)
        }
    }

    const backHandler = () => {
        updateViews({ mainMenu: true, bedroom: false })
    }

    return (
        <Box width='100%' height='100%' sx={{ background: 'black' }}>
            < RoomTopBar room='Bedroom' backHandler={backHandler} />
            <Box display='flex' justifyContent='center' alignItems='center' sx={{ width: '100%', height: '85%' }}>
                <Box position='relative' height='90%' zIndex='1' onClick={() => updateInteractions()}>
                    <Shelf1 />
                    <Shelf2 />
                    <Shelf3 />
                    <Shelf4 />
                    <Shelf5 />
                    <Shelf6 />
                    <Shelf7 />
                    <Shelf8 />
                    <Shelf9 />
                    <Shelf10 />
                    <Drawer1 />
                    <Drawer2 />
                    <Shelf11 />
                    <Bed />
                    <Picture clickHandler={clueHandler} />
                    <img src={bedroomImage} alt='Bedroom' height='100%' />
                    <Clue setClue={clueHandler} clue={clue} text={clueText} />
                </Box>
            </Box>
            <BlurredBackground />
        </Box >
    )
}

export default Bedroom