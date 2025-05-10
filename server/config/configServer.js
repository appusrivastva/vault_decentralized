require("dotenv").config()

module.exports ={
    MONGO_DB_URL:process.env.ATLAS_DB_URL,
    PORT:process.env.PORT,


}