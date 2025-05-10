const ethers=require("ethers")

const authController=async (req,res,next)=>{

    try{
        
        const {signature}=req.body;
        const {address}=req.query
        console.log("Received address:", address);
console.log("Received signature:", signature);

        console.log(address)
        // const {address}=req.params.address;
        // console.log(address)
        if(!signature){
            throw new Error("Signature is invalid")
            
        }
        // verification process
        console.log(signature)

        const recoverAddress=ethers.utils.verifyMessage("Welcome to Crypto vault!",signature)
        console.log(recoverAddress)


         if(recoverAddress.toLowerCase()===address.toLowerCase()){
         res.status(200).json({message:"Authentication successful"})

        }
        //  res.status(200).json({message:"success"})



    }
    catch(err){
    res.status(500).json({message:"Internal server error!"})
    }
    // res.send("done")

}

module.exports={authController}