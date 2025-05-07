import React, { useState } from 'react'
import { web3Context } from './createWeb3Context'

export default function Web3Provider({children}) {
    const [web3State,setWeb3State]=useState({
              contractIntance:null,
              selectedAccount:null
    })
    const updateWeb3State=(newState)=>{
        setWeb3State((prevState=({
            ...newState,...prevState
        })))
    }
  return (
     <web3Context.Provider value={{web3State,updateWeb3State}}>
        {children}

     </web3Context.Provider>
  )
}
