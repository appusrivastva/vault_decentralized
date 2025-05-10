
import {ethers} from "ethers"
import contractAbi from "../constant/contractAbi.json"
import toast from "react-hot-toast"
import axios from "axios"

 const connectWallet=async ()=>{
    try{
        if(!window.ethereum){
            throw new Error("please install metamask")
        }
    
        const accounts=await window.ethereum.request({
            method:"eth_requestAccounts"
        })
        console.log(accounts[0])
    
        const selectedAccounts=accounts[0]
        console.log(selectedAccounts)
    
        const provider= new ethers.BrowserProvider(window.ethereum)
    
        const signer=await provider.getSigner()
        console.log(signer)

        const message="Welcome to Crypto vault!"

        const signature=await signer.signMessage(message)
        const dataSignature={
            signature
        }
        console.log(signature)  //working
        const url=`http://localhost:3000/api/authentication?address=${selectedAccounts}`
        const res=await axios.post(url,dataSignature)
        console.log(res.data)

        
    
        const contractAddress=import.meta.env.VITE_CONTRACT_ADDRESS
        console.log(contractAddress)  //correct
    
        const contractInstance=new ethers.Contract(contractAddress,contractAbi,signer)  
      console.log(contractInstance)  //correct
      console.log(contractAbi)

      console.log(selectedAccounts) //correct
        return {contractInstance,selectedAccounts}
    }
    catch(error){
        toast.error("metamask connection failed")
        console.log(error)
    }




}
export default connectWallet