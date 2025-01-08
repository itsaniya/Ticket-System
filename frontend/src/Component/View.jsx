
// import React from 'react'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate,Link} from "react-router-dom";
// import Help from "./Help";


const View = () => {
  const navigate = useNavigate()
  const [users, setusers] = useState([]);

  useEffect(() => {

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }
    axios
      .get("/createticket",config)
      .then((users) => setusers(users.data))
      .catch((error) => console.log(error));
  }, []);

  const handleHelp=()=>{
  navigate('/Help');
  };
  const handleLogin=()=>{
  navigate('/')
  };
  const handleSingle=()=>{
    navigate('/SingleTicket')
    };
  return (
    <div className="container">
            <h1 id="heading">TicketSystem</h1>
          <div style={{display: 'flex'}}>
          <div >
            <button onClick={handleLogin}  style={{marginLeft:'200px'}} >
              Log out
            </button>
          </div>
          <div >
            <button onClick={handleHelp} style={{marginLeft:'700px'}}>
              Back
            </button>
          </div>
          </div>
      <div style={{overflowAnchor:'auto'}}>
      <div className="container mt-5 me-5"  style={{justifyContent:'center'}}>
        <table class="center container"> 
            <thead>
            <tr> 
              <th scope="col">Ticket ID</th>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
              <th scope="col">Product</th>
              <th scope="col">View</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>   
          <tbody>
            {users.map((uuu) => {
              return (
                <tr>
                  <td>{uuu._id}</td>
                  <td>{uuu.name}</td>
                  <td>{ new Date(uuu.createdAt).toLocaleDateString()}</td>
                  <td>{uuu.type}</td>
                  <td>
                  <Link to={`/Singleticket?ticketId=${uuu._id}`} className='btn btn-reverse btn-sm'>View</Link>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
              );})}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};

export default View; 
