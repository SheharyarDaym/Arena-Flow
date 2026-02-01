const mongoose = require('mongoose')
const env = require('./env')

const connectDB = async() => {
    try{
        await mongoose.connect(env.MONGO_URI)
        console.log("Database is connected")
    }
    catch(error){
        console.log("Database ERROR: ", error.message)
        process.exit(1)
    }
}

module.exports = connectDB