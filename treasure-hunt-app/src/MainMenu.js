import { Box } from '@mui/material'

const Room = ({ name }) => (
    <Box display='flex' justifyContent='center' alignItems='center' sx={{ minWidth: '400px', height: '30vh', boxSizing: 'border-box', background: 'red' }}>
        {name}
    </Box>
)

const MainMenu = () => {
    return (
        <Box display="flex" justifyContent="space-evenly" alignItems='center' sx={{ height: '100%', width: '100%', flexWrap: 'wrap' }}>
            <Room name="Bathroom" />
            <Room name="Kitchen" />
            <Room name="Bedroom" />
            <Room name="Living Room" />
            <Room name="Study Room" />
        </Box>
    )
}

export default MainMenu