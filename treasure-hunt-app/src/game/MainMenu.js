import { Box, Typography } from '@mui/material'
import BlurredBackground from './BlurredBackground'
import RoomTopBar from './RoomTopBar'
const Room = ({ name, handler }) => (
    <Box onClick={handler} display='flex' justifyContent='center' alignItems='center' sx={{
        minWidth: '400px',
        height: { xs: '80px', md: '200px' },
        margin: '20px',
        boxSizing: 'border-box',
        background: 'gold',
        zIndex: 1,
        cursor: 'pointer'
    }}>
        <Typography variant='h4'>{name}</Typography>
    </Box>
)

const MainMenu = ({ updateViews, setHome, setPlay, setConfirm }) => {
    const bathroomHandler = () => updateViews({ mainMenu: false, bathroom: true })
    const kitchenHandler = () => updateViews({ mainMenu: false, kitchen: true })
    const bedroomHandler = () => updateViews({ mainMenu: false, bedroom: true })
    const livingRoomHandler = () => updateViews({ mainMenu: false, living: true })
    const studyRoomHandler = () => updateViews({ mainMenu: false, study: true })
    const backHandler = () => {
        setConfirm(true)
        updateViews({ mainMenu: false })
    }
    return (
        <Box sx={{ background: 'black', height: '100%', width: '100%' }}>
            <RoomTopBar room='Main Menu' backHandler={backHandler} />
            <BlurredBackground />
            <Box display="flex" justifyContent="center" alignItems='center' sx={{
                height: '65%',
                width: '100%',
                flexWrap: 'wrap',
                padding: '3% 0'
            }}>
                <Room name="Bathroom" handler={bathroomHandler} />
                <Room name="Kitchen" handler={kitchenHandler} />
                <Room name="Bedroom" handler={bedroomHandler} />
                <Room name="Living Room" handler={livingRoomHandler} />
                <Room name="Study Room" handler={studyRoomHandler} />
            </Box>
        </Box>
    )
}

export default MainMenu