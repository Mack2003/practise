import React, { useState } from 'react'
import Context from './Context'

export default function ContextProvider({children}) {
    const [user, setuser] = useState(null)

  return (
    <Context.Provider value={{setuser, user}}>
      {children}
    </Context.Provider>
  )
}
