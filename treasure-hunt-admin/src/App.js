import { useState } from "react"
import Login from "./Login"
import Home from "./Home"
const App = () => {
    const [login, setLogin] = useState(true)
    const [home, setHome] = useState(false)
    const [userData, setUserData] = useState()
    return (
        <>
            {login ? (<Login setUserData={setUserData} setLogin={setLogin} setHome={setHome} />) : null}
            {home ? (<Home userData={userData} />) : null}
        </>
    )
}

export default App