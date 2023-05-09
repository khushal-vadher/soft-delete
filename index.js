const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/dbconnect.js');
const  app = express();
require('dotenv').config();
//for connection to the mongodb atlas
connectDB();
const User = require("./routes/user.js");

app.use(express.json());
// app.use(bodyParser());
app.use("/user",User);
app.use((err,req,res,next)=>{
    const errorStatus = err.status|| 500 ;
    const errorMessage = err.message || "Somthing went wrong !";
    return res.status(errorStatus).json({
        success : false,
        status : errorStatus,
        message : errorMessage,
        stack : err.stack ,
    });
})

//port listen
app.listen(process.env.PORT || 5000 ,()=>{
    console.log("Server started!");
});