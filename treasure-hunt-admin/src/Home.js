import { useEffect, useState } from "react"
const Detail = ({ user, setDetail }) => {
    const clearHandler = () => {
        setDetail()
    }
    console.log('This:', user)
    return (
        <div style={{ width: '50%' }}>
            <div>
                <h2 style={{ fontWeight: 600, fontSize: '20px' }}>Game Status</h2>
                <h3 style={{ fontWeight: 600 }}>views</h3>
                <li>bathroom: {String(user.game.views.bathroom)}</li>
                <li>kitchen: {String(user.game.views.kitchen)}</li>
                <li>bedroom: {String(user.game.views.bedroom)}</li>
                <li>living: {String(user.game.views.living)}</li>
                <li>study: {String(user.game.views.study)}</li>
                <h3 style={{ fontWeight: 600 }}>discovered</h3>
                <li>bathroom: {String(user.game.discovered.bathroom)}</li>
                <li>kitchen: {String(user.game.discovered.kitchen)}</li>
                <li>bedroom: {String(user.game.discovered.bedroom)}</li>
                <li>living: {String(user.game.discovered.living)}</li>
                <li>study: {String(user.game.discovered.study)}</li>
                <li>key: {String(user.game.discovered.key)}</li>
                <h3>showClue: {String(user.game.showClue)}</h3>
                <h3>renderKey: {String(user.game.renderKey)}</h3>
                <h3>clueText: {String(user.game.clueText)}</h3>
                <h3>success: {String(user.game.success)}</h3>
                <h3>completed: {String(user.game.completed)}</h3>
                <h3>showInitial: {String(user.game.showInitial)}</h3>
                <h3>elapsedTime: {String(user.game.elapsedTime)}</h3>
                <h3>noOfInteractions: {String(user.game.noOfInteractions)}</h3>
            </div>

            <div>
                <h2 style={{ fontWeight: 600, fontSize: '20px' }}>Past Records</h2>
                <table>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid black' }}>Index</th>
                            <th style={{ border: '1px solid black' }}>Number of interactions</th>
                            <th style={{ border: '1px solid black' }}>Time taken</th>
                            <th style={{ border: '1px solid black' }}>Accuracy</th>
                            <th style={{ border: '1px solid black' }}>Attention to detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.pastRecords.map((row, index) => (
                            <tr key={index}>
                                <td style={{ border: '1px solid black' }}>{index}</td>
                                <td style={{ border: '1px solid black' }}>{row.noOfInteractions}</td>
                                <td style={{ border: '1px solid black' }}>{row.timeTaken}</td>
                                <td style={{ border: '1px solid black' }}>{row.noOfInteractions > 112 ? 0 : (row.noOfInteractions < 12 ? 100 : 112 - row.noOfInteractions)}</td>
                                <td style={{ border: '1px solid black' }}>{3600000 - row.timeTaken < 0 ? 0 : Math.round((3600000 - row.timeTaken) / 3600000) * 100}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button type="button" onClick={clearHandler}>Clear</button>
        </div>
    )
}
const Home = ({ userData }) => {
    const [detail, setDetail] = useState()
    useEffect(() => {
        console.log(detail)
    }, [detail])
    const mainStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
    const tableStyle = {
        width: '50%',
        border: '1px solid black',
        boxSizing: 'border-box',
        margin: '10px'
    }
    return (
        <div style={mainStyle}>
            <table style={tableStyle}>
                <thead>
                    <tr style={{ border: '1px solid black' }}>
                        <th style={{ border: '1px solid black' }}>Index</th>
                        <th style={{ border: '1px solid black' }}>Name</th>
                        <th style={{ border: '1px solid black' }}>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid black' }}>{index + 1}</td>
                            <td style={{ border: '1px solid black' }}>{user.name}</td>
                            <td style={{ border: '1px solid black' }}>{user.email}</td>
                            <td style={{ border: '1px solid black' }}><button onClick={() => setDetail(user)} type='button'>Show Detail</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {detail ? (<Detail setDetail={setDetail} user={detail} />) : null}
        </div>
    )
}

export default Home