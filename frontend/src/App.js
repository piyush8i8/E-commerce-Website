import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Mynav from "./components/Mynav";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Checkout from "./components/Checkout";
import Verify from "./pages/Verify";
import Myorder from "./pages/Myorders/Myorder";





const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      
      
      
      {showLogin ? <Login setShowLogin={setShowLogin} /> : null}
      <div>
        <Mynav setShowLogin={setShowLogin} />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/login" element={<Login setShowLogin={setShowLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/Verify" element={<Verify />} />
          <Route path="/Myorders" element={<Myorder />} />
        </Routes>
        <Footer />
        
     
      </div>
    </div>
  );
};

export default App;
