import { Box } from '@mui/material'
import RoomTopBar from '../RoomTopBar'
import studyImage from './images/study.jpg'
import BlurredBackground from '../BlurredBackground'
import { useState } from 'react'
import Clue from '../Clue'

const Shelf1 = () => (
    <Box sx={{
        // border: '1px solid red',
        top: '27.5%',
        left: '14.5%',
        position: 'absolute',
        width: '15%',
        height: '6%',
    }} />
)
const Shelf2 = () => (
    <Box sx={{
        // border: '1px solid red',
        top: '34%',
        left: '14.5%',
        position: 'absolute',
        width: '15%',
        height: '11%',
    }} />
)
const Shelf3 = () => (
    <Box sx={{
        // border: '1px solid red',
        top: '45.5%',
        left: '14.5%',
        position: 'absolute',
        width: '15%',
        height: '11%',
    }} />
)
const Shelf4 = () => (
    <Box sx={{
        // border: '1px solid red',
        top: '27.5%',
        left: '61.5%',
        position: 'absolute',
        width: '15%',
        height: '4.5%',
    }} />
)
const Shelf5 = () => (
    <Box sx={{
        // border: '1px solid red',
        top: '33%',
        left: '61.5%',
        position: 'absolute',
        width: '15%',
        height: '8.5%',
    }} />
)
const Shelf6 = () => (
    <Box sx={{
        // border: '1px solid red',
        top: '42.5%',
        left: '61.5%',
        position: 'absolute',
        width: '15%',
        height: '9.5%',
    }} />
)
const Picture1 = () => (
    <Box sx={{
        // border: '1px solid red',
        top: '11%',
        left: '39.5%',
        position: 'absolute',
        width: '6.5%',
        height: '9.5%',
    }} />
)
const Picture2 = ({clickHandler}) => (
    <Box onClick={clickHandler} sx={{
        // border: '1px solid red',
        top: '23%',
        left: '33%',
        position: 'absolute',
        width: '12.5%',
        height: '22.5%',
    }} />
)
const Picture3 = () => (
    <Box sx={{
        // border: '1px solid red',
        top: '18%',
        left: '47.5%',
        position: 'absolute',
        width: '9.5%',
        height: '18.5%',
    }} />
)
const Clock = ({ clickHandler }) => (
    <Box onClick={clickHandler} sx={{
        // border: '1px solid red',
        top: '51.5%',
        left: '55.5%',
        position: 'absolute',
        width: '3%',
        height: '4%',
    }} />
)
const StudyRoom = ({ updateViews, setClueText, discovered, updateDiscovered, setRenderKey, updateInteractions, setFailed }) => {
    const clueText = "No its not the one you are looking for, you can find that chilling above you but careful, don't get a shock!"

    const [clue, setClue] = useState(false)

    const clueHandler = () => {
        setClue(!clue)
        setRenderKey(true)
        if (!discovered.study) {
            updateDiscovered({ study: true })
            setClueText(clueText)
        }
    }

    const backHandler = () => {
        updateViews({ mainMenu: true, study: false })
    }

    const failureHandler = () => {
        setFailed(true)
    }

    return (
        <Box width='100%' height='100%' sx={{ background: 'black' }}>
            < RoomTopBar room='Study Room' backHandler={backHandler} />
            <Box display='flex' justifyContent='center' alignItems='center' sx={{ width: '100%', height: '85%' }}>
                <Box position='relative' height='90%' zIndex='1' onClick={() => updateInteractions()}>
                    <Shelf1 />
                    <Shelf2 />
                    <Shelf3 />
                    <Shelf4 />
                    <Shelf5 />
                    <Shelf6 />
                    <Picture1 />
                    <Picture2 clickHandler={failureHandler}/>
                    <Picture3 />
                    <Clock clickHandler={clueHandler} />
                    <img src={studyImage} alt='Study Room' height='100%' />
                    <Clue setClue={clueHandler} clue={clue} text={clueText} />
                </Box>
            </Box>
            <BlurredBackground />
        </Box >
    )
}

export default StudyRoom