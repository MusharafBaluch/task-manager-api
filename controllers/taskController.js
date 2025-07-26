const task = require("../models/task.js");


const  getAllTasks = async(req , res)=>{
    try{
        const allTasks = await task.find() ;
        if(!allTasks){
            res.status(404).json({
                message : "Tasks Not Found" ,
                success : false ,
                
            })
            return ;
        }
        res.status(200).json({
            data : allTasks ,
            message : "Tasks Found" ,
            success : true 
        })

    }
    catch(err){
        res.status(500).json({
            success : false ,
            err : err.message ,
            message : "Internal Server Error"
        })
    }
    
} ;

const  getSingleTaskById = async(req , res)=>{
    try{
        const taskId = req.params.id ;
        const getSingleTask = await task.findById(taskId)
        if(!getSingleTask){
            res.status(404).json({
                message : "Tasks Not Found" ,
                success : false ,
            })
            return ;
        }
         res.status(200).json({
            data : getSingleTask ,
            message : "Task Found" ,
            success : true 
        })

    }
    catch(err){
        res.status(500).json({
            success : false ,
            err : err.message ,
            message : "Internal Server Error"
        })
    }

} ;

const createNewTask = async(req , res)=>{
    try{
        
        const newTask =  await task.create(req.body);
        if(!newTask){
            res.status(404).json({
                message : "Task Not Created" ,
                success : false ,
            })
            return ;
        }
        res.status(201).json({
            data :newTask ,
            message : "Task Created" ,
            success : true 
        })

    }
    catch(err){
        res.status(500).json({
            success : false ,
            err : err.message ,
            message : "Internal Server Error"
        })
    }
} ;

const updatedTask = async(req , res)=>{
    try{
        const updateTask = await task.findByIdAndUpdate(
        req.params.id , req.body ,
        {
        new : true
        })
        if(!updateTask){
        res.status(404).json({
                message : "Tasks Not Found" ,
                success : false ,
            })
            return ;
        }
        res.status(200).json({
            data : updateTask ,
            success : true ,
            message : "Task Updated Successfully"
        })
    }
    catch(err){
        res.status(502).json({
            success : false ,
            err : err.message ,
            message : "Internal Server Error"
        })
    }    

} ;

const deletedTask = async(req , res)=>{
    try{
        const deletedTask = await task.findByIdAndDelete(req.params.id);
        if(!deletedTask){
            res.status(404).json({
                message : "task Not deleted" ,
                success : false ,

            })
            return ;

        }
        res.status(200).json({
            message : "Task deleted Successfully" ,
            data : deletedTask ,
            success : true 
        })
        
    }
    catch(err){
           res.status(500).json({
            message : "Internal Server Error" ,
            success : false ,
            err : err.message
           }) 
        }
    

} ;

module.exports = {
    getAllTasks , 
    getSingleTaskById ,
    createNewTask ,
    updatedTask ,
    deletedTask 
}