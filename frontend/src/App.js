
import './App.css';
import'./index.css';
import Login from './Component/Login'
import Ticket from './Component/Ticket'
import View from './Component/View';
import Register from './Component/Register';
import Help from './Component/Help';
import SingleTicket from './Component/SingleTicket';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
       <Routes>
        <Route path="/" index element={<Login/>}></Route>
        <Route path="/Register" index element={<Register/>}></Route>
        <Route path="/Ticket" index element={<Ticket/>}></Route>
        <Route path="/Help" index element={<Help/>}></Route>
        <Route path="/View" index element={<View/>}></Route>
        {/* <Route path="/Createticket" index element={<Createticket/>}></Route> */}
        <Route path="/SingleTicket" index element={<SingleTicket/>}></Route>
        
        </Routes>
        
        </BrowserRouter>   
    </div>
  );
}

export default App;
