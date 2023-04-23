import { useEffect, useState } from "react"
import { Box } from '@mui/material'
import MainMenu from './game/MainMenu'
import Bathroom from './game/rooms/Bathroom'
import Kitchen from './game/rooms/Kitchen'
import Bedroom from './game/rooms/Bedroom'
import LivingRoom from './game/rooms/LivingRoom'
import StudyRoom from './game/rooms/StudyRoom'
import LatestClue from './game/LatestClue'
import Confirmation from "./game/Confirmation"
import { resetGame, saveGame, getGame } from './services/comms'
import Failed from "./game/Failed"
import Success from "./game/Success"

const Game = ({ startTime, setHome, setPlay }) => {
    const initialState = {
        views: {
            mainMenu: true,
            bathroom: false,
            kitchen: false,
            bedroom: false,
            living: false,
            study: false
        },
        discovered: {
            bathroom: false,
            kitchen: false,
            bedroom: false,
            living: false,
            study: false,
            key: false
        },
        showClue: false,
        renderKey: false,
        clueText: 'Look at you! Water water everywhere and not a drop to drink!',
        showInitial: true,
        elapsedTime: 0,
        noOfInteractions: 0
    }

    const [views, setViews] = useState(initialState.views)
    const [discovered, setDiscovered] = useState(initialState.discovered)
    const [confirm, setConfirm] = useState(false)
    const [showClue, setShowClue] = useState(initialState.showClue)
    const [renderKey, setRenderKey] = useState(initialState.renderKey)
    const [clueText, setClueText] = useState(initialState.clueText)
    const [showInitial, setShowInitial] = useState(initialState.showInitial)
    const [elapsedTime, setElapsedTime] = useState(initialState.elapsedTime)
    const [noOfInteractions, setNoOfInteractions] = useState(initialState.noOfInteractions)
    const [failed, setFailed] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const gameState = await getGame()
            setViews({ ...gameState.views, mainMenu: true })
            setDiscovered(gameState.discovered)
            setShowClue(gameState.showClue)
            setRenderKey(gameState.renderKey)
            setClueText(gameState.clueText)
            setShowInitial(gameState.showInitial)
            setNoOfInteractions(gameState.noOfInteractions)
            setElapsedTime(gameState.elapsedTime)
        }
        fetchData()
    }, [])

    useEffect(() => {
        setShowClue(false)
    }, [views])

    const updateViews = params => {
        setViews({ ...views, ...params })
    }
    const updateDiscovered = params => {
        setDiscovered({ ...discovered, ...params })
    }
    const updateInteractions = () => {
        setNoOfInteractions(noOfInteractions + 1)
    }

    const time = new Date() - startTime + elapsedTime

    const saveState = async (completed = false, success = false) => {
        const gameState = {
            views: views,
            discovered: discovered,
            showClue: showClue,
            renderKey: renderKey,
            clueText: clueText,
            showInitial: showInitial,
            completed: false,
            success: false,
            elapsedTime: time,
            noOfInteractions: noOfInteractions
        }
        if (success && completed) {
            gameState.success = true
            gameState.completed = true
        }
        else if (!success && completed) {
            gameState.success = false
            gameState.completed = true
        }
        await saveGame(gameState)
        console.log('saved the state, time:', time)
    }

    const resetState = async () => {
        console.log('reset the state')
        await resetGame()
    }
    const successHandler = async () => {
        await saveState(true, true)
        console.log('success!')
    }
    const failureHandler = async () => {
        await saveState(true, false)
        console.log('failed!')
    }

    return (
        <Box sx={{ height: '100vh', width: '100%' }}>
            {views.mainMenu ? (<MainMenu updateViews={updateViews} setConfirm={setConfirm} />) : null}
            {views.bathroom ? (<Bathroom updateViews={updateViews} setClueText={setClueText} discovered={discovered} updateDiscovered={updateDiscovered} renderKey={renderKey} setRenderKey={setRenderKey} updateInteractions={updateInteractions} />) : null}
            {views.kitchen ? (<Kitchen updateViews={updateViews} setClueText={setClueText} discovered={discovered} updateDiscovered={updateDiscovered} setRenderKey={setRenderKey} updateInteractions={updateInteractions} />) : null}
            {views.bedroom ? (<Bedroom updateViews={updateViews} setClueText={setClueText} discovered={discovered} updateDiscovered={updateDiscovered} setRenderKey={setRenderKey} updateInteractions={updateInteractions} />) : null}
            {views.living ? (<LivingRoom updateViews={updateViews} setClueText={setClueText} discovered={discovered} updateDiscovered={updateDiscovered} setRenderKey={setRenderKey} updateInteractions={updateInteractions} setFailed={setFailed} />) : null}
            {views.study ? (<StudyRoom updateViews={updateViews} setClueText={setClueText} discovered={discovered} updateDiscovered={updateDiscovered} setRenderKey={setRenderKey} updateInteractions={updateInteractions} setFailed={setFailed} />) : null}
            <LatestClue clueText={clueText} showClue={showClue} setShowClue={setShowClue} showInitial={showInitial} setShowInitial={setShowInitial} />
            <Confirmation confirm={confirm} setConfirm={setConfirm} setHome={setHome} setPlay={setPlay} saveState={saveState} resetState={resetState} updateViews={updateViews} />
            {failed ? (<Failed failureHandler={failureHandler} setHome={setHome} setPlay={setPlay} />) : null}
            {discovered.key ? (<Success successHandler={successHandler} setHome={setHome} setPlay={setPlay} noOfInteraction={noOfInteractions} time={time} />) : null}
        </Box >
    )
}

export default Game