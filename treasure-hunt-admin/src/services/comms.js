import axios from 'axios'
const url = '/data'

const getUserData = async (password) => {
    try {
        const userData = await axios.get(url, {
            headers: {
                'authorization': password
            }
        })
        return userData.data
    }
    catch (e) {
        console.error(e)
    }
}

export { getUserData }