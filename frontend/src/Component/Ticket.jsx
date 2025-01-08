import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Ticket = () => {
  const navigate = useNavigate();

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [type, settype] = useState("");
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const adduser = { name, email, type,title , description};
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
      const response = await axios.post("/createticket", adduser,config)

      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
        console.log("User added successfully:", response.data);
        navigate('/help')
      }
      console.log(response)
    } catch (error) {

        toast.error("already existing data");
      
      console.error("Error adding user:", error);
    }
  };

  const handleHelp=()=> {
    navigate('/Help');//Navigate to help page
  };

return (

    <div>
       
       <div  onClick={handleHelp}style={{marginRight:'800px', marginBottom:'10px',backgroundColor:'white',marginTop:'30px'}}>
      <button  className='ms-3'style={{fontSize:'20px'}} ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className=" bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
</svg>BACK</button>  
      </div>
      <ToastContainer></ToastContainer>
       < form onSubmit={handleSubmit} > 
        <div>
        <h1><b>Create New Ticket</b></h1>
        <h3 style={{marginTop:'10px'}}>Please fill out the form below</h3><br></br>
          <label style={{marginRight:'500px'}}>Name</label><br></br>
        <input style={{height:'25px', marginBottom:'15px',marginLeft:'20px'}} type='text' placeholder='Please enter your name' size='80'value={name} onChange={(e) => setname(e.target.value)}></input>
        <br></br>
        <label style={{marginRight:'510px'}}>Email</label><br></br>
         <input style={{height:'25px', marginBottom:'15px',marginLeft:'20px'}} type='email' placeholder='Please enter your email' size='80'value={email} onChange={(e) => setemail(e.target.value)}></input>
         <br></br>
         <label   style={{marginRight:'525px',}}>Type</label><br></br>
         <select style={{width:'580px',height:'30px', marginBottom:'15px',marginLeft:'20px'}} value={type} onChange={(e)=> settype(e.target.value)} name ='Type' id='Type'>
         <option value="Mobile">Mobile</option>
         <option value="Laptop">Laptop</option>
         <option value="Pc">Pc</option>
         <option value="tablet">Tablet</option>
         </select>
         <br></br>
         <label style={{marginRight:'440px'}}>Title of the issue</label><br></br>
         <input style={{height:'25px', marginBottom:'15px',marginLeft:'20px'}} type='text' placeholder='Please enter your Issue' size='80'value={title} onChange={(e) => settitle(e.target.value)}></input>
         <br></br>
         <label style={{marginRight:'385px'}}>Description of the issue</label><br></br>
         <input style={{height:'25px', marginBottom:'15px',marginLeft:'20px'}} type='text' placeholder='Please enter your Description' size='80'value={description} onChange={(e) => setdescription(e.target.value)}></input>
         <br></br>
        </div>
        <div>
        <button type='submit' style={{width:'573px', height:'35px', marginLeft:'17px' }}>Submit</button>
        
          </div>
        </form>
  
      
      </div>
  
  );
}

export default Ticket