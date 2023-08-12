import React, { createContext, useState } from 'react'

const TokenContext = createContext({})

export default TokenContext
export const TokenContextProvider=({children})=>{
    
    const [tokenId,setTokenId]=useState(!!localStorage.getItem('token'))
    const setTokenHandler=(state)=>{
        setTokenId(state)
    }
        const token={
        token:tokenId,
        setToken:setTokenHandler
    }
    return <TokenContext.Provider value={{token}}>{children}</TokenContext.Provider>
}