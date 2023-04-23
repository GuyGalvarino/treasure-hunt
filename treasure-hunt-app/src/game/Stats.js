import { Box, Typography } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import { getStats } from '../services/comms'
import { useEffect, useState } from 'react'
import { Table, TableContainer, TableRow, TableBody, TableHead, TableCell, Paper } from '@mui/material'

const Stats = ({ setHome, setStats }) => {
    const backHandler = () => {
        setHome(true)
        setStats(false)
    }
    const [statsData, setStatsData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const tempStats = await getStats()
            console.log('Stats:', tempStats)
            setStatsData(tempStats)
        }
        fetchData()
    }, [])
    return (
        <Box sx={{
            background: 'black',
            width: '100%',
            height: '100%'
        }}>
            <ArrowBack sx={{
                color: 'gold',
                position: 'absolute',
                top: '50px',
                left: '50px',
                transform: 'scale(2)',
                cursor: 'pointer'
            }} onClick={backHandler} />
            <Box display='flex' justifyContent='center' sx={{
                width: '100%'
            }}>
                <Typography variant='h3' color='gold' sx={{ mt: '35px' }}>Stats</Typography>
            </Box>
            <Box display='flex' justifyContent='center' sx={{ width: '100%', mt: '100px' }}>
                <TableContainer component={Paper} sx={{ width: '80%' }}>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Index</TableCell>
                                <TableCell align="right">No. of Interactions</TableCell>
                                <TableCell align="right">Time Taken</TableCell>
                                <TableCell align="right">Accuracy</TableCell>
                                <TableCell align="right">Attention&nbsp;to&nbsp;detail</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {statsData.map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell align="right">{row.noOfInteractions}</TableCell>
                                    <TableCell align="right">{row.timeTaken}</TableCell>
                                    <TableCell align="right">{row.noOfInteractions > 112 ? 0 : (row.noOfInteractions < 12 ? 100 : 112 - row.noOfInteractions)}</TableCell>
                                    <TableCell align="right">{3600000 - row.timeTaken < 0 ? 0 : Math.round((3600000 - row.timeTaken) / 3600000) * 100}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    )
}

export default Stats