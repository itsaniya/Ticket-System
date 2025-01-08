const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const Register= require('../models/Register')


router.post('/', async (req, res) => {
    
    try {
      const { email, password } = req.body;
  
      // Check if the user exists by email
      const user = await Register.findOne({ email });
  
      if (user) {
        // Check if the password matches
        if (user.password === password) {
          return res.status(200).json({ message: "Login successful", user: user,token: generateToken(user) });
        } else {
          return res.status(401).json({ error: "Incorrect password" });
        }
      } else {
        return res.status(404).json({ error: "User not found" });
      }
    } catch (e) {
      console.error("Error during login:", e);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

// Generate Token Funtion
const generateToken = (id)=>{
  return jwt.sign({id},'JWT_SECRET', {
    expiresIn: '1d',
  })
}

module.exports = router