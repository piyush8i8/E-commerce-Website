import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({ url }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/product/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Piyush, there's an error");
      }
    } catch (error) {
      toast.error("Piyush, there's an error");
    }
  };

  const removeProduct = async (productId) => {
    try {
      const response = await axios.post(`${url}/api/product/remove`, { id: productId });
      if (response.data.success) {
        // Remove the product from the list in the state
        setList(list.filter(item => item._id !== productId));
        toast.success("Product removed successfully");
      } else {
        toast.error("Piyush, it's wrong");
      }
    } catch (error) {
      toast.error("Piyush, there's an error");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='ml-10 pl-10'>
      <div className="container ml-14 pl-10 pt-10 mt-14 p-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {list.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
              style={{ width: '250px' }}
            >
              <img
                src={`${url}/images/${item.image}`}
                alt={item.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                <p className="text-gray-600 mb-1">{item.category}</p>
                <p className="text-gray-800 font-bold mb-1">${item.price}</p>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <button
                  onClick={() => removeProduct(item._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
