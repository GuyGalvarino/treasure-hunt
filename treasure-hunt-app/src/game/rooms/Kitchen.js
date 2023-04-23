import { Box } from '@mui/material'
import RoomTopBar from '../RoomTopBar'
import kitchenImage from './images/kitchen.jpg'
import BlurredBackground from '../BlurredBackground'
import { useState } from 'react'
import Clue from '../Clue'

const Cupboard1 = () => (
    <Box sx={{
        // border: '1px solid red',
        top: '10%',
        left: '0%',
        position: 'absolute',
        width: '9%',
        height: '22%',
    }} />
)

const Shelf1 = () => (
    <Box sx={{
        // border: '1px solid red',
        top: '15%',
        left: '16%',
        position: 'absolute',
        width: '15%',
        height: '9.5%',
    }} />
)

const Shelf2 = () => (
    <Box sx={{
        // border: '1px solid red',
        top: '25.5%',
        left: '16%',
        position: 'absolute',
        width: '15%',
        height: '11%',
    }} />
)

const Cupboard2 = () => (
    <Box sx={{
        // border: '1px solid red',
        top: '9%',
        left: '31.5%',
        position: 'absolute',
        width: '14%',
        height: '25%',
    }} />
)

const Chimney = ({ clickHandler }) => (
    <Box onClick={clickHandler} sx={{
        // border: '1px solid red',
        top: '35%',
        left: '32%',
        position: 'absolute',
        width: '14%',
        height: '3%',
    }} />
)

const Shelf3 = () => (
    <Box sx={{
        // border: '1px solid red',
        top: '8%',
        left: '46%',
        position: 'absolute',
        width: '17.5%',
        height: '12%',
    }} />
)

const Shelf4 = () => (
    <Box sx={{
        // border: '1px solid red',
        top: '21.5%',
        left: '46%',
        position: 'absolute',
        width: '17.5%',
        height: '13%',
    }} />
)

const Shelf5 = () => (
    <Box sx={{
        // border: '1px solid red',
        top: '5%',
        left: '64%',
        position: 'absolute',
        width: '19.5%',
        height: '13%',
    }} />
)

const Shelf6 = () => (
    <Box sx={{
        // border: '1px solid red',
        top: '19%',
        left: '64%',
        position: 'absolute',
        width: '19.5%',
        height: '13.5%',
    }} />
)

const Refrigerator = () => (
    <Box sx={{
        // border: '1px solid red',
        top: '34%',
        left: '0%',
        position: 'absolute',
        width: '9%',
        height: '39.5%',
    }} />
)

const Knives = () => (
    <Box sx={{
        // border: '1px solid red',
        top: '45%',
        left: '25.5%',
        position: 'absolute',
        width: '3.5%',
        height: '16%',
    }} />
)

const Toaster = () => (
    <Box sx={{
        // border: '1px solid red',
        top: '55%',
        left: '19.5%',
        position: 'absolute',
        width: '5.5%',
        height: '7%',
    }} />
)

const Cooker = () => (
    <Box sx={{
        // border: '1px solid red',
        top: '54%',
        left: '40%',
        position: 'absolute',
        width: '6%',
        height: '6.5%',
    }} />
)

const Mixer = () => (
    <Box sx={{
        // border: '1px solid red',
        top: '47%',
        left: '77.5%',
        position: 'absolute',
        width: '3.5%',
        height: '15%',
    }} />
)

const Drawer1 = () => (
    <Box sx={{
        // border: '1px solid red',
        top: '65%',
        left: '12.5%',
        position: 'absolute',
        width: '15.5%',
        height: '6%',
    }} />
)

const Drawer2 = () => (
    <Box sx={{
        // border: '1px solid red',
        top: '72%',
        left: '12.5%',
        position: 'absolute',
        width: '15.5%',
        height: '6%',
    }} />
)

const Oven = () => (
    <Box sx={{
        // border: '1px solid red',
        top: '67.5%',
        left: '28.5%',
        position: 'absolute',
        width: '14.5%',
        height: '11%',
    }} />
)

const Drawer3 = () => (
    <Box sx={{
        // border: '1px solid red',
        top: '66%',
        left: '43.5%',
        position: 'absolute',
        width: '16.5%',
        height: '7.5%',
    }} />
)

const Drawer4 = () => (
    <Box sx={{
        // border: '1px solid red',
        top: '74.5%',
        left: '43.5%',
        position: 'absolute',
        width: '14.5%',
        height: '6%',
    }} />
)

const Kitchen = ({ updateViews, setClueText, discovered, updateDiscovered, setRenderKey, updateInteractions }) => {
    const clueText = "Look at me, look at you, but I am the smaller one!"

    const [clue, setClue] = useState(false)

    const clueHandler = () => {
        setClue(!clue)
        setRenderKey(true)
        if (!discovered.kitchen) {
            updateDiscovered({ kitchen: true })
            setClueText(clueText)
        }
    }

    const backHandler = () => {
        updateViews({ mainMenu: true, kitchen: false })
    }

    return (
        <Box width='100%' height='100%' sx={{ background: 'black' }}>
            < RoomTopBar room='Kitchen' backHandler={backHandler} />
            <Box display='flex' justifyContent='center' alignItems='center' sx={{ width: '100%', height: '85%' }}>
                <Box position='relative' height='90%' zIndex='1' onClick={() => updateInteractions()}>
                    <Cupboard1 />
                    <Shelf1 />
                    <Shelf2 />
                    <Cupboard2 />
                    <Chimney clickHandler={clueHandler} />
                    <Shelf3 />
                    <Shelf4 />
                    <Shelf5 />
                    <Shelf6 />
                    <Refrigerator />
                    <Knives />
                    <Toaster />
                    <Cooker />
                    <Mixer />
                    <Drawer1 />
                    <Drawer2 />
                    <Oven />
                    <Drawer3 />
                    <Drawer4 />
                    <img src={kitchenImage} alt='Kitchen' height='100%' />
                    <Clue setClue={clueHandler} clue={clue} text={clueText} />
                </Box>
            </Box>
            <BlurredBackground />
        </Box >
    )
}

export default Kitchen