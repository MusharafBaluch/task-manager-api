 require("dotenv").config() ; 

const express = require("express");

const app = express();




const connectDB = require("./database/db.js");

const taskRoutes = require("./Routes/route.js");

// setting up middleware 
app.use(express.json());
// setting up database for connection
connectDB();

app.use("/api/task" , taskRoutes)



// setting up port for app listening 

const port = process.env.PORT || 3000; 

app.listen(port , ()=>{
    console.log(`App is listening on the ${port}`)
});







