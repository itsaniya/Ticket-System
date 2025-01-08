const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
const authenticateToken = (req, res, next) => {
    debugger;
    console.log(req.header);
    const token = req.header('Authorization').split(' ')[1];
    console.log(token);
    if (!token) return res.sendStatus(401);
  
    jwt.verify(token, 'JWT_SECRET', (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  };
  
  app.get('/protected', authenticateToken, (req, res) => {
    res.send('This is a protected route');
  });
 module.exports={authenticateToken}