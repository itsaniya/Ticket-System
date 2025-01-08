const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken');
dotenv.config()
const LoginRouter = require('./router/Login')
const RegisterRouter =require('./router/Register')
const Createticket= require('./router/Createticket')
const cors= require("cors");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use( '/', LoginRouter)
app.use('/register',RegisterRouter)
app.use('/createticket', Createticket)
app.use(cors());
app.use (express.json())

mongoose.connect(process.env.URL)
.then(()=> console.log("mongo connected"))
.catch((error)=>console.log('connect sucefully' , error))

app.listen(process.env.PORT ,()=> console.log("server Connected"))
