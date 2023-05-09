const express = require('express');
const  {createNewUser,updateUser,deleteUser,getUser,getUsers}  = require("../controller/user.js");
const router = express.Router();




//CRAETE
router.post("/create" , createNewUser);

//UPDATE
router.put("/update/:id",updateUser);


//DELETE
router.delete("/delete/:id",deleteUser);

//GET
router.get("/:id", getUser);


//GET ALL
router.get("/", getUsers);


module.exports = router;