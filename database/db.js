const mongoose = require("mongoose");

require("dotenv").config();


const connectionToDb = async() => {
    try{
           await mongoose.connect(process.env.MONGO_URI);
            console.log("Database is connected")
    }
    catch(err){
        console.log("Error occured" , err.message);
        process.exit(1);
    }
}

module.exports = connectionToDb ;


