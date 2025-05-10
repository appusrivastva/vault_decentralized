import React from 'react'
import { useWeb3Context } from '../context/useWeb3Context'
import  connectWallet  from '../utils/connectWallet'
import { useEffect } from 'react'
import {useNavigate} from "react-router-dom"

export default function Wallet() {

  const {updateWeb3State,web3State}=useWeb3Context()
    // console.log(useWeb3State)
    const {selectedAccounts}=web3State
    const navigate=useNavigate()
    useEffect(()=>{
      if(selectedAccounts){
        navigate("/home")
        
      }
    },[selectedAccounts,navigate])
    const  handleWalletConnection=async ()=>{
      const {contractInstance,selectedAccounts}=await connectWallet()
      
      console.log(contractInstance,selectedAccounts)
      updateWeb3State({contractInstance,selectedAccounts})
      

    }
  return (
   <>
    <div>Wallet</div>
    <button onClick={handleWalletConnection}>Connect</button></>
  )
}
