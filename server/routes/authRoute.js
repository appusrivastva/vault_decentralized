const express=require("express")
const {authController} =require("../controller/authController")

const router=express.Router()

router.post("/authentication",authController)

module.exports=router