const mongoose = require("mongoose");

const taskSchema  = new mongoose.Schema({
    title : {
        type : String ,
        required : [true , "task title is required"],
        trim : true ,
        maxlength : [50 , "Cannot be greater than 50"]
    },
    completed : {
        type : Boolean ,
        required : true
    },
    priority :{
        type : String ,
        enum : ["high" , "medium" , "low"],
        required : true 

    } ,
    createdAt : {
       type : Date ,
       default : Date.now
    },
    updatedAt : {
        type : Date ,
        default : Date.now
    }
});


module.exports = mongoose.model("Task" , taskSchema);