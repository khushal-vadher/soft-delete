const User = require('../model/user.js')
const createNewUser = async (req, res, next) => {
    const newUser = new User(req.body);
    try {
        const isAny = await User.findOne({email :req.body.email})
        if(isAny){
            
            const isDeleted = await User.updateMany(req.param.id,
                {
                    $set: { is_deleted: false }
                })
            res.status(200).json("User Created Successfully !"); 

        }else{
            const savedUser = await newUser.save();
            res.status(200).json(savedUser);
        }
       
        // console.log(req.body.name);
    } catch (err) {
        // res.status(500).json(err);
        console.log("ERRRRR")
        next(err);
    }
};
const updateUser = async (req, res, next) => {
    try {

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        console.log(updatedUser);
        res.status(200).json(updatedUser);
    }
    catch (err) {
        res.status(500).json(err);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        // await User.findByIdAndDelete(req.params.id);

        const isDeleted = await User.updateMany(req.param.id,
            {
                $set: { is_deleted: true }
            })

        res.status(200).json("User deleted");
    } catch (err) {
        res.status(500).json(err);
    }
};

const getUser = async (req, res, next) => {
    try {
        const User = await User.findById(req.params.id);
        res.status(200).json(User);
    } catch (err) {
        next(err);
    }
};
const getUsers = async (req, res, next) => {
    try {
        const Users = await User.find();
        res.status(200).json(Users);
    } catch (err) {
        next(err);
    }
};


module.exports = { createNewUser, updateUser, deleteUser, getUser, getUsers };

