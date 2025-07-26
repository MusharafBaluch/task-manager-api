const express = require("express");

const router = express.Router();

const {getAllTasks ,getSingleTaskById  , createNewTask , updatedTask , deletedTask} = require("../controllers/taskController.js");

router.get("/get" , getAllTasks ) ;
router.get("/get/:id" , getSingleTaskById);
router.post("/post" , createNewTask);
router.put("/put/:id" , updatedTask);
router.delete("/delete/:id" , deletedTask);

module.exports = router ;