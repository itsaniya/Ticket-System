import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Register = () => {
const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      toast.error("Passwords do not match!");
      return;
    }
    //debugger;
    try {
      const adduser = { name, email, password, confirmpassword };
      const response = await axios.post("/register", adduser).then(); 
      //response.data
      toast.success("Submited Sucessfully")
      console.log(response)
      
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
        console.log("User added successfully:", response.data);
        navigate('/')
      } 
    } catch (error) {

        toast.error("already existing data");
      
      console.error("Error adding user:", error);
    }
  };
 

  return (
    <div>
      <ToastContainer></ToastContainer>
           
           
            <div className='d-flex'>
              <button  style={{marginLeft:'500px', color:'white',width:'100px',height:'30px'}}  onClick={() => navigate('/')}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class=" bi bi-box-arrow-in-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
  <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
</svg> Login </button>
              <h1 style={{color:'black',fontSize:'30px',marginBottom:'10px',marginTop:'30px'}}>Ticket System</h1> 
        <form  onSubmit={handleSubmit}>
          <h2> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
</svg> Register  </h2>
          <h3 className='text-center'style={{color:'gray'}}>Please fill out the form below</h3>
          <div className="mb-3 mt-5" >
            <input type="text"style={{width:'550px',height:'30px', marginBottom:'10px'}} value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder='Please enter your name' required />
          </div>
          <div className="mb-5">
            <input type="email" style={{width:'550px',height:'30px', marginBottom:'10px'}} value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder='Please enter your email' required />
          </div>
          <div className="mb-3">
            <input type="password"style={{width:'550px',height:'30px', marginBottom:'10px'}} value={password} onChange={(e) => setpassword(e.target.value)} minLength= '10' className="form-control" placeholder='Enter password' required />
          </div>
          <div className="mb-3">
            <input type="password" style={{width:'550px',height:'30px', marginBottom:'10px' }}value={confirmpassword} onChange={(e) => setconfirmpassword(e.target.value)} minLength='10' className="form-control" placeholder='Confirm password' required />
          </div>
          <button style={{width:'560px', height:'35px', marginBottom:'10px'}} >Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Register;