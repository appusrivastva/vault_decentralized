const  express=require('express')

const authRoute=require("./routes/authRoute")
const cors = require("cors");
const {PORT,MONGO_DB_URL}=require("./config/configServer")
const {connectDB}=require("./db/db")

const app=express()

app.use(cors())
app.use(express.json());

app.use("/api",authRoute)
app.get("/",(req,res)=>{
    res.send("home route")
})

async  function serverStart(){
    try{
           await connectDB(MONGO_DB_URL)
           console.log("Database is connected")
    
    app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}  `)

})
    }
    catch(err){
        console.log(err)
    }

}

serverStart()