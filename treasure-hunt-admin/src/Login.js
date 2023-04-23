import { useState } from "react"
import { getUserData } from "./services/comms"

const Login = ({ setUserData, setLogin, setHome }) => {
  const formStyle = {
    height: '70%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2rem',
  }
  const headingStyle = {
    height: '30%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 600,
    fontSize: '5rem',
  }
  const container = {
    height: '100vh',
    width: '100%'
  }
  const buttonStyle = {
    padding: '1rem 1.5rem',
    marginTop: '5rem',
    fontSize: '2rem',
  }
  const passwordStyle = {
    fontSize: '2rem'
  }
  const [password, setPassword] = useState('')
  const passwordHandler = (e) => {
    setPassword(e.target.value)
  }
  const submitHandler = async () => {
    const userData = await getUserData(password)
    if (userData) {
      setUserData(userData)
      setLogin(false)
      setHome(true)
    }
  }
  return (
    <div style={container}>
      <h1 style={headingStyle}>Admin Dashboard</h1>
      <form style={formStyle}>
        <div>
          <label htmlFor='password'>Admin password: </label>
          <input onChange={passwordHandler} style={passwordStyle} type='password' id='password' required />
        </div>
        <button type='button' onClick={submitHandler} style={buttonStyle}>Login</button>
      </form>
    </div>
  )
}

export default Login
