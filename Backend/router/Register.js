const express = require('express')
const router = express.Router()
const Register= require('../models/Register')

router.get('/',(req,res)=>{
    res.send('api Running')
})

router.post('/', async(req,res)=>{
    try{
        debugger;
        console.log(req.body);
        const {name , email , password , confirmpassword} = req.body
        if(!name || !email || !password || !confirmpassword){
                return res.status(400).json({error:'All field are available'})
            }
            
            const existingUser =await Register.findOne({email});
            if(existingUser){
                console.log("existed this user")
                return res.status(409).json({error:'User with this email is already exists'});
            } 
        
        const userdata = await Register.create({
            name: name,
            email: email,
            password: password,
            confirmpassword:confirmpassword
        })
        res.status(201).json(userdata)

       
    }
    
    catch(error){
console.log(error)
    }
        
    })
module.exports=router