import React, { createContext, useState } from 'react'

export const UserContext = createContext()

const AuthContext = ({child}) => {

    const [isLogin, setIsLogin] = useState(false)

  return (
    <UserContext.Provider value ={{isLogin, setIsLogin}}>
        {child}
    </UserContext.Provider>
  )
}

export {AuthContext}