import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MYna from './components/MYna';
import Sidebar from './components/Sidebar';
import List from './Pages/List';
import Add from './Pages/Add';
import Orders from './Pages/Orders';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';



const App = () => {

  const url = 'http://localhost:4000';
  return (
 <div>
         <ToastContainer></ToastContainer>        
        <MYna />
        <div className="">
       <div className=" position-fix">
             <Sidebar />
             </div>

                <div className=" flex flex-col float-right align-center pr-10">
                  <Routes  >
      <Route path="/Add" element={<Add url={url}/>} />
      <Route path="/List" element={<List  url={url}/>} />
      <Route path="/Orders" element={<Orders url={url}/>} />
    </Routes>
    <div>
  
  </div>
  </div>
 
</div>
       </div>
    
  );
}

export default App;
