const express = require ("express");
const jwt = require ("jsonwebtoken");
const bcrypt = require ("bcrypt");
const {userModel} = require ('../models/users.js');
const router = express.Router();

router.post('/addUser', async (req, res) => {
    try{
        const { name, contact, email } = req.body;
        const user = await user.findOne({name});
        if(user){
            return res.json({message:"Student is registered"});
        }
        const newUser = new userModel({
            name,
            contact,
            email
        });
        await newUser.save();
        return res.json({registered:true})

    }catch(err){
        return res.json({message:"Error in adding the user."});
    }
})

module.exports = { UserRouter: router };