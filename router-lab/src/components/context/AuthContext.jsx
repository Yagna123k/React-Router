import React, { useContext, useState } from 'react'

export const UserContext = useContext()

const AuthContext = ({child}) => {

    const [isLogin, setIsLogin] = useState(false)

  return (
    <UserContext.Provider value ={{isLogin, setIsLogin}}>
        {child}
    </UserContext.Provider>
  )
}

export {AuthContext}