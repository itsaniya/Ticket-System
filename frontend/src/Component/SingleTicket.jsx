import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import view from "./View";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams, useSearchParams } from "react-router-dom";
import './Sticket.css'

const Singleticket = () => {
  const [ticket, setTicket] = useState([]);
  const ticketId ="";
  //debugger;
  
  //console.log(response);

  const navigate = useNavigate();

  const btv = () => {
    navigate("/View");
  };
  const btl = () => {
    navigate("/");
  };
  
  const onTicketClose = (e) => {
    e.preventDefault();
   // dispatch(closeTicket(ticketId));
    toast.success("Ticket Closed Successfully");
    navigate("/View");
  };

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    };
  const token = query.get('ticketId')
  const ticketId =token;
  const response = axios.get("createticket?id=" + token,config).then(res=>{
    console.log(res.data[0]);
    setTicket(res.data[0]);
  })
   
  }, [ticketId]);

  

  return (
    <div className="ticket-page aaa">
      <header className="ticket-header">
        <button
          onClick={btv}
         
        >
          BACK
        </button>
        <div style={{marginRight:'800px'}}>
        <h2 >
        Ticket ID: {ticket._id}
          {/* <span className={`status status-${ticket.status}`}>
            {ticket.status}
          </span> */}
        </h2>
        <h3 >
          Date Submitted:{" "}
          {new Date(ticket.createdAt).toLocaleString("en-IN")}
        </h3>
        <h3>Product : {ticket.type}</h3>
        <hr />
        <div className="ticket-desc">
          <h3>Description of Issue</h3>
          <p>{ticket.description}</p>
        </div>
        </div>
      </header>
      {ticket.status !== "closed" && (
        <button className="btn btn-block btn-danger" onClick={btl}>
          Close Ticket
        </button>
      )}
    </div>
  );
};

export default Singleticket;
