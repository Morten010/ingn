import React, { createContext, useReducer } from 'react'

export const AuthContext = createContext({
  Login: function(user: string){ },
  Logout: function(){ },
  user: undefined
})

type StateProps = {
  user: undefined | {
    id: string
  }
}

type ActionProps = {
  type: string
  payload: any
}

const authReducer = (state: StateProps, action: ActionProps) => {
  switch (action.type) {
    case "LOGGED_IN":
      return {...state, user: action.payload}
    case "LOGGED_OUT": 
      return {...state, user: undefined}
    default: 
      return state
  }
}

export function AuthProvider({ children } : {
  children: React.ReactNode
}) {
  const [state, dispatch] = useReducer(authReducer, {
    user: undefined
  })

  const Login = (user: string) => {
    dispatch({
      type: "LOGGED_IN", payload: user
    })
  }

  const Logout = () => {
    dispatch({
      type: "LOGGED_OUT", payload: undefined
    })
  }
 
  return (
    <AuthContext.Provider value={{ Login, Logout, ...state}}>
      {children}
    </AuthContext.Provider>
  )
}