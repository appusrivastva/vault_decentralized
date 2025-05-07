import React from 'react'
import { useWeb3Context } from '../context/useWeb3Context'
import { connectWallet } from '../utils/connectWallet'

export default function Wallet() {

    const useWeb3State=useWeb3Context()
    // console.log(useWeb3State)
  return (
   <>
    <div>Wallet</div>
    <button onClick={connectWallet}>Connect</button></>
  )
}
