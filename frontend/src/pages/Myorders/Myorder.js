import React, { useContext, useEffect, useState } from 'react';
import { storecontext } from '../../Context/storeContext';
import { assets } from '../../assets/assets';
import axios from 'axios'; // Ensure axios is imported


const Myorder = () => {
  const { url, token } = useContext(storecontext);
  const [data, setdata] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.post(`${url}/api/order/userorder`, {}, { headers: { token } });
      setdata(response.data.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Orders</h1>
      <div className="space-y-4">
        {data.map((order, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105">
            <div className="flex items-center space-x-4">
              <img src={assets.parcel_icon} alt="Parcel Icon" className="w-10 h-10" />
            
              <div>
                <h3 className="text-lg font-semibold">
                  {order.items.map((item, index) => (
                    <span key={index}>
                      {item.name} x {item.quantity}{index !== order.items.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </h3>
                <p className="text-sm text-gray-500">{order.items.length} items</p>
              </div>
            </div>
            <div>
              <p className="text-lg font-semibold">${order.amount.toFixed(2)}</p>
            </div>
            <div>
              <p className={`text-sm font-semibold ${order.status === 'Delivered' ? 'text-green-500' : 'text-yellow-500'}`}>
                {order.status}
              </p>
            </div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow transition-transform transform hover:scale-110">
              Track Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myorder;
