import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {
const [email , setemail] = useState("")
const [password , setpassword] = useState("")
const navigate = useNavigate();
//handle form submit
const handleSubmit= async(e)=>{
 e.preventDefault();// Correctly prevent default form submission

try{
const  userdata = {email , password}
const response = await axios.post("/" , userdata);//correct api route

if(response.data){
    toast.success("Login successful");
    localStorage.setItem('token',response.data.token);
    navigate('/Help');// REDIRECT  AFTER SUCCESSFUL LOGIN 
}
}  catch(error){
  toast.error("You are not register please register yourself");//Better error handling using toast
 }
} ;
  const handleRegister=()=> {
    navigate('/Register');//Navigate to register page
  };

  return (
    
    <div style={{ }}>
       <div style={ {display:'flex',justifyContent:'space-evenly'}}>
          <div style={{gap:'20px'}}>    
            </div>
        </div>
        <div className='container w-50'>
          <ToastContainer></ToastContainer>
          <div className='display-flex ' >
            <button onClick={handleRegister} className='me-2 text-center' style={{marginLeft:'500px',margintop:'10px',fontSize:'15px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
</svg>   Register </button >
          </div>
        </div>
    <form onSubmit={handleSubmit}>
      <div>
      <div style={{marginTop:'50px'}}>
      <h1 style={{marginBottom:'20px'}}>TicketSystem</h1>
      <div><h2 style={{marginBottom:'20px',marginTop:'10px'}}><b><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
  <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
</svg>LOGIN </b></h2></div>
      <div style={{marginTop:'10px'}}>
      <h3 style={{marginBottom:'20px',marginTop:'10px',color:'gray'}}><u>Please Login</u></h3>
       
       <input style={{height:'30px', marginBottom:'10px',marginLeft:'20px'}} type='text' placeholder='Please enter your email' size='70' value={email} onChange={(e) => setemail(e.target.value)} ></input>
       <br></br>
       <input style={{height:'30px', marginBottom:'10px',marginLeft:'20px'}} type='password' placeholder='Please enter your passward' size='70'value={password} onChange={(e) => setpassword(e.target.value)}  ></input>
       <br></br>
      </div>
      <div>
        <button style={{width:'505px', height:'35px',marginLeft:'20px'}}>Submit</button>
      </div>
      </div>
      </div>
      </form>

    
    </div>
  )
}

export default Login