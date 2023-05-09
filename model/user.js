const mongoose = require('mongoose');
const {Schema} = mongoose;


const mySchema = new mongoose.Schema({

    email :{
        type : String,
        require : true,        
    },
    name :{
        type : String,
        require : true
    },
    
    age : {
        type : Number,
        require : true
    },
    gender:{
        type:String,
        require:true
    },
    is_deleted :{
        type : Boolean,
        default : false
    }
   
})

module.exports =  mongoose.model("User",mySchema)