
import ethers from "ethers"
import {contractAbi} from "../constant/contractAbi.json"
export const connectWallet=async ()=>{
    if(!window.ethereum){
        throw new Error("please install metamask")
    }

    const accounts=await window.ethereum.request({
        method:"eth_requestAccounts"
    })
    console.log(accounts[0])

    const selectedAccounts=accounts[0]


    const provider=ethers.BrowserProvider(window.ethereum)

    const signer=provider.getSigner()

    const contractAddress=""

    const contractInstance=new ethers.Contract(contractAddress,contractAbi,signer)

    return (contractInstance,selectedAccounts)

}