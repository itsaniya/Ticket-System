const express = require('express')
const router = express.Router()
const Createticket= require('../models/Createticket')
const {authenticateToken}  = require('../middleware/authMiddleware')
const jwt = require('jsonwebtoken');

// router.get('/' , (req,res)=>{
//     Createticket.find()
//     .then(users => res.json(users))
//     .catch(error => res.json(error))
// })

router.route('/').get(authenticateToken, (req,res)=>{
    debugger;
    if(req.query.id){
       return Createticket.find({_id:req.query.id})
        .then(users => res.json(users))
        .catch(error => res.json(error));
    }
  else{
    return Createticket.find()
    .then(users => res.json(users))
    .catch(error => res.json(error));
  }
});

router.post('/', async(req,res)=>{
    try{
        debugger;
        console.log(req.body);
        const {name , email ,type,title,description} = req.body
        if(!name || !email || !type || !title|| ! description){
                return res.status(400).json({error:'All field are available'})
            }
            
            const existingUser =await Createticket.findOne({email});
            if(existingUser){
                console.log("existed this user")
                return res.status(409).json({error:'User with this email is already exists'});
            } 
        
        const userdata = await Createticket.create({
            name: name,
            email: email,
            type:type,
            title: title,
            description: description,
            
        })
        res.json(userdata)
        // const token = jwt.sign(user, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
        // res.json({ token });
    }
    catch(error){
console.log(error)
    }
        
    })
module.exports=router