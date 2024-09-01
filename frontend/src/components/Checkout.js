import { motion } from "framer-motion";
import React, { useContext, useState, useEffect } from "react";
import { storecontext } from "../Context/storeContext";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Checkout = () => {
  const { cartitems, product_list, token, url } = useContext(storecontext);
  const [totalItems, setTotalItems] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const navigate = useNavigate();
  
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  useEffect(() => {
    let items = 0;
    let cost = 0;
    for (const itemId in cartitems) {
      const quantity = cartitems[itemId];
      if (quantity > 0) {
        const item = product_list.find((item) => item._id === itemId);
        if (item) {
          items += quantity;
          cost += item.price * quantity;
        }
      }
    }
    setTotalItems(items);
    setTotalCost(cost);
  }, [cartitems, product_list]);

  const placeOrder = async (event) => {
    event.preventDefault();
    
    // Debugging the token and request
    console.log("Token:", token);
    console.log("URL:", `${url}/api/order/place`);
    
    let orderItems = [];
    product_list.forEach((item) => {
      if (cartitems[item._id] > 0) {
        let itemInfo = { ...item, quantity: cartitems[item._id] };
        orderItems.push(itemInfo);
      }
    });

    const orderdata = {
      shippingAddress: data,
      orderItems: orderItems,
      totalPrice: totalCost + 10, // Assuming a shipping cost of $10
    };

    try {
      const response = await axios.post(`${url}/api/order/place`, orderdata, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      } else {
        alert("Error: Unable to place order");
      }
    } catch (error) {
      console.error("Error placing order", error);
      alert("Error: Unable to place order");
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between p-6 bg-white text-gray-900">
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.5 }} 
        className="w-full md:w-2/3 p-4"
      >
        <h2 className="text-2xl font-semibold text-green-600">Shipping Information</h2>
        <form onSubmit={placeOrder} className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="firstName" value={data.firstName} onChange={onChangeHandler} placeholder="First Name" className="border border-gray-300 p-2 rounded" required />
            <input type="text" name="lastName" value={data.lastName} onChange={onChangeHandler} placeholder="Last Name" className="border border-gray-300 p-2 rounded" required />
          </div>
          <input type="text" name="street" value={data.street} onChange={onChangeHandler} placeholder="Street Address" className="border border-gray-300 p-2 rounded mt-4 w-full" required />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <input type="text" name="city" value={data.city} onChange={onChangeHandler} placeholder="City" className="border border-gray-300 p-2 rounded" required />
            <input type="text" name="state" value={data.state} onChange={onChangeHandler} placeholder="State" className="border border-gray-300 p-2 rounded" required />
            <input type="text" name="zipcode" value={data.zipcode} onChange={onChangeHandler} placeholder="Zip Code" className="border border-gray-300 p-2 rounded" required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <input type="text" name="country" value={data.country} onChange={onChangeHandler} placeholder="Country" className="border border-gray-300 p-2 rounded" required />
            <input type="text" name="phone" value={data.phone} onChange={onChangeHandler} placeholder="Phone Number" className="border border-gray-300 p-2 rounded" required />
          </div>
          <button type="submit" className="mt-6 bg-green-600 text-white p-2 rounded">Place Order</button>
        </form>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.5 }} 
        className="w-full md:w-1/3 p-4 mt-6 md:mt-0"
      >
        <h2 className="text-2xl font-semibold text-green-600">Order Summary</h2>
        <div className="mt-4">
          <div className="flex justify-between">
            <span>Items</span>
            <span>{totalItems}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>Total Cost</span>
            <span>${totalCost.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>Shipping</span>
            <span>$10.00</span>
          </div>
          <div className="flex justify-between mt-2 font-semibold">
            <span>Total</span>
            <span>${(totalCost + 10).toFixed(2)}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Checkout;
