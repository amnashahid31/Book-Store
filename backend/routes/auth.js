const express = require ("express");
const jwt = require ("jsonwebtoken");
const bcrypt = require ("bcrypt");
const {adminModel} = require ('../models/admin.js');
const router = express.Router();

const secretKey = "adminkey";

if (!secretKey) {
  console.error('Error: SECRET_KEY is not defined in environment variables');
}

router.post('/login', async (req, res) => {
  try{
    const { username, password, role } = req.body;
    if (role === 'admin') {
      const admin = await adminModel.findOne({ username });
      if (!admin) {
        return res.status(404).json({ message: "Admin is not registered." });
      }
  
      // Directly compare passwords (as passwords are stored in plain text)
      if (admin.password !== password) {
        return res.status(401).json({ message: "Password is not valid" });
      }
  
      // Generate JWT token
      const token = jwt.sign({ username: admin.username, role: 'admin' }, secretKey);
      return res.json({ message: 'Login successful', token, role: 'admin' });
    } else if (role === 'user') {
      // Handle user login logic
    } else {
      return res.status(400).json({ message: 'Invalid role' });
    }
  }catch(err){
    return res.json(err);
  }

});


module.exports = { AdminRouter: router };
