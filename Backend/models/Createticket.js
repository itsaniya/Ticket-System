const mangoose = require('mongoose')

const CreateticketSchema =new mangoose.Schema({
  name:{
   type:String,
   required : true
  },
  email:{
    type: String,
    unique:true,
    required: true
  
  }, type:{
    type: String,
    required:true,
   
  },
  title:{
    type:String,
    required : true
  },
    description:{
    type:String,
    required : true
  } ,
},{
timestamps:true
})

const Createticket = mangoose.model('Createticket',CreateticketSchema)

module.exports=Createticket;