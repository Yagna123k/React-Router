import React, { useContext } from 'react'
import { UserContext } from './context/AuthContext'

const Login = () => {
    const {setIsLogin} = useContext(useContext)
  return (
    <div>
      <button onClick={setIsLogin(true)}>SignIn</button>
      <button onClick={setIsLogin(false)}>SignOut</button>
    </div>
  )
}

export default Login
