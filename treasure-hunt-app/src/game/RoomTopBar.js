import { Box, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const RoomTopBar = ({ room, backHandler }) => {
    return (
        <Box display='flex' justifyContent='center' alignItems='center' sx={{ height: '15%', width: '100%' }}>
            <ArrowBackIcon onClick={backHandler} sx={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                color: 'Gold',
                fontSize: '3rem',
                cursor: 'pointer'
            }} />
            <Typography variant='h3' color='Gold'>{room}</Typography>
        </Box>
    )
}

export default RoomTopBar