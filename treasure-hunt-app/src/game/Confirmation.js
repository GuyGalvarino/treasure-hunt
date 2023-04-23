import { Box, Fade, Button } from '@mui/material'

const Confirmation = ({ confirm, setConfirm, setHome, setPlay, saveState, resetState, updateViews }) => {
    const cancelHandler = () => {
        setConfirm(false)
        updateViews({ mainMenu: true })
    }
    const saveHandler = async () => {
        await saveState()
        setPlay(false)
        setHome(true)
    }
    const dontSaveHandler = async () => {
        await resetState()
        setPlay(false)
        setHome(true)
    }
    return (
        <Fade in={confirm}>
            <Box position='absolute' display='flex' justifyContent='center' alignItems='center' zIndex='1' sx={{
                top: 0,
                left: 0,
                background: 'black',
                width: '100%',
                height: '100%'
            }}>
                <Button variant='contained' color='success' onClick={saveHandler} sx={{
                    m: 5,
                    fontSize: '1.5rem'
                }}>
                    Save
                </Button>
                <Button variant='contained' color='error' onClick={dontSaveHandler} sx={{
                    m: 5,
                    fontSize: '1.5rem',
                    color: '#212121'
                }}>
                    Don't Save
                </Button>
                <Button variant='contained' onClick={cancelHandler} sx={{
                    bgcolor: '#bba332',
                    m: 5,
                    fontSize: '1.5rem'
                }}>
                    Cancel
                </Button>
            </Box>
        </Fade>
    )
}

export default Confirmation