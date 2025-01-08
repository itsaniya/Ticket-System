const mangoose = require('mongoose')

const registerSchema =new mangoose.Schema({
  name:{
   type:String,
   required : true
  },
  email:{
    type: String,
    unique:true,
    required: true
  },
  password:{
    type:String,
    required : true
  },
  confirmpassword:{
    type:String,
    required : true
  }
},{
  timestamps : true
  
})

const Register = mangoose.model('Register',registerSchema)

module.exports=Register;