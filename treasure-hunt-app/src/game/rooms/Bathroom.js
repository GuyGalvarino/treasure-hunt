import { Box } from '@mui/material'
import RoomTopBar from '../RoomTopBar'
import bathroomImage from './images/bathroom.jpg'
import BlurredBackground from '../BlurredBackground'
import { useState } from 'react'
import Clue from '../Clue'
import Key from '../Key'

// interactables
const TubeLight = ({ clickHandler }) => (
    <Box onClick={clickHandler} sx={{
        // border: '1px solid red',
        top: '4%',
        left: '36.5%',
        position: 'absolute',
        width: '15.5%',
        height: '4%',
    }} />
)

const Mirror = ({ clickHandler }) => (
    <Box onClick={clickHandler} sx={{
        // border: '1px solid red',
        top: '11%',
        left: '22%',
        position: 'absolute',
        width: '34%',
        height: '39%',
    }} />
)

const Cupboard = () => (
    <Box sx={{
        // border: '1px solid red',
        top: '8.5%',
        left: '62%',
        position: 'absolute',
        width: '19%',
        height: '34%',
    }} />
)

const Flush = () => (
    <Box sx={{
        // border: '1px solid red',
        top: '60%',
        left: '65%',
        position: 'absolute',
        width: '12%',
        height: '17%',
    }} />
)

const Shelf1 = () => (
    <Box sx={{
        // border: '1px solid red',
        top: '67%',
        left: '13.5%',
        position: 'absolute',
        width: '14.5%',
        height: '8.5%',
    }} />
)

const Shelf2 = () => (
    <Box sx={{
        // border: '1px solid red',
        top: '76%',
        left: '13.5%',
        position: 'absolute',
        width: '14.5%',
        height: '14.5%',
    }} />
)

const Shelf3 = () => (
    <Box sx={{
        // border: '1px solid red',
        top: '91%',
        left: '13.5%',
        position: 'absolute',
        width: '14.5%',
        height: '8.75%',
    }} />
)

const CupboardBasin = () => (
    <Box sx={{
        // border: '1px solid red',
        top: '75%',
        left: '28.5%',
        position: 'absolute',
        width: '30%',
        height: '24.75%',
    }} />
)

const Bathroom = ({ updateViews, setClueText, discovered, updateDiscovered, renderKey, setRenderKey, updateInteractions }) => {
    const clueText = "Don't keep Santa waited!"
    const [showKey, setShowKey] = useState(false)
    const [clue, setClue] = useState(false)

    const clueHandler = () => {
        setClue(!clue)
        setRenderKey(true)
        setShowKey(false)
        if (!discovered.bathroom) {
            updateDiscovered({ bathroom: true })
            setClueText(clueText)
        }
    }

    const backHandler = () => {
        updateViews({ mainMenu: true, bathroom: false })
    }

    const keyHandler = () => {
        console.log('found key')
        setShowKey(true)
    }

    return (
        <Box width='100%' height='100%' sx={{ background: 'black' }}>
            < RoomTopBar room='Bathroom' backHandler={backHandler} />
            <Box display='flex' justifyContent='center' alignItems='center' sx={{ width: '100%', height: '85%' }}>
                <Box position='relative' height='90%' zIndex='1' onClick={() => updateInteractions()}>
                    <TubeLight clickHandler={keyHandler} />
                    <Mirror clickHandler={clueHandler} />
                    <Cupboard />
                    <Flush />
                    <Shelf1 />
                    <Shelf2 />
                    <Shelf3 />
                    <CupboardBasin />
                    <img src={bathroomImage} alt='bathroom' height='100%' />
                    <Clue setClue={clueHandler} clue={clue} text={clueText} />
                    {renderKey ? (<Key showKey={showKey} setShowKey={setShowKey} updateDiscovered={updateDiscovered} />) : null}
                </Box>
            </Box>
            <BlurredBackground />
        </Box >
    )
}

export default Bathroom