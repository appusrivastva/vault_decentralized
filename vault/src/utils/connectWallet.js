
import ethers from "ethers"
import {contractAbi} from "../constant/contractAbi.json"
import toast from "react-hot-toast"
export const connectWallet=async ()=>{
    try{
        if(!window.ethereum){
            throw new Error("please install metamask")
        }
    
        const accounts=await window.ethereum.request({
            method:"eth_requestAccounts"
        })
        console.log(accounts[0])
    
        const selectedAccounts=accounts[0]
    
    
        const provider=ethers.BrowserProvider(window.ethereum)
    
        const signer=await provider.getSigner()
    
        const contractAddress=import.meta.env.VITE_CONTRACT_ADDRESS
        console.log(contractAddress)
    
        const contractInstance=new ethers.Contract(contractAddress,contractAbi,signer)
    
        return (contractInstance,selectedAccounts)
    }
    catch(error){
        toast.error("metamask connection failed")
        console.log(error)
    }


}