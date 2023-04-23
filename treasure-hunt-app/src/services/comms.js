import axios from 'axios'

const url = ''

let token = ''
const initialState = {
    views: {
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
    failures: 0,
    success: false,
    completed: false,
    elapsedTime: 0,
    noOfInteractions: 0
}

const registerUser = async (useremail, name, password) => {
    try {
        const reqObj = { email: useremail, name: name, password: password, game: initialState }
        await axios.post(`${url}/users`, reqObj)
    }
    catch (e) {
        console.error(e)
    }
}

const loginUser = async (useremail, password) => {
    try {
        const reqObj = { email: useremail, password: password }
        const res = await axios.post(`${url}/login`, reqObj)
        token = res.data.token
        return res.data.name
    }
    catch (e) {
        console.error(e)
    }
}

const logoutUser = () => {
    token = ''
}

const saveGame = async (gameState) => {
    try {
        const res = await axios.post(`${url}/game`, gameState, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
        console.log(res.data)
    }
    catch (e) {
        console.error(e)
    }
}

const resetGame = async () => {
    try {
        const res = await axios.post(`${url}/game`, initialState, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
        console.log(res.data)
    }
    catch (e) {
        console.error(e)
    }
}

const getGame = async () => {
    try {
        const res = await axios.get(`${url}/game`, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
        return res.data
    }
    catch (e) {
        console.error(e)
    }
}

const getStats = async () => {
    try {
        const res = await axios.get(`${url}/game/stats`, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
        return res.data
    }
    catch (e) {
        console.error(e)
    }
}
export { getGame, saveGame, resetGame, loginUser, logoutUser, registerUser, getStats }