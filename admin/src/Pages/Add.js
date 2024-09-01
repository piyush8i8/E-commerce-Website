import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { assets } from "../assets/assets";

const Add = ({ url }) => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Rumal',
  });

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('price', Number(data.price));
    formData.append('category', data.category);
    formData.append('image', image);

    try {
      const response = await axios.post(`${url}/api/product/add`, formData);
      if (response.data.success) {
        setData({
          name: '',
          description: '',
          price: '',
          category: 'Rumal',
        });

        setImage(null);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('An error occurred while adding the product.');
    }
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <div className="max-w-4xl mx-auto my-20 p-10 bg-white rounded-lg shadow-2xl bg-gray-100 bg-cover animate-fadeIn" style={{ backgroundImage: 'url("/path-to-your-background-image.jpg")' }}>
      <h2 className="text-4xl text-center font-bold mb-6 text-green-600">Add Product</h2>
      <form onSubmit={onSubmitHandler} className="space-y-6">
        <div className="flex flex-wrap -mx-4 mb-6">
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
            <label htmlFor="image" className="block text-lg font-medium text-gray-700">
              {image ? (
                <img src={URL.createObjectURL(image)} alt="Preview" className="mb-4 rounded-lg transition-transform duration-300 transform hover:scale-105" />
              ) : (
                <img src={assets.bag_icon} alt="Placeholder" className="mb-4 rounded-lg transition-transform duration-300 transform hover:scale-105" />
              )}
              Upload Image
            </label>
            <input
              id="image"
              onChange={onImageChange}
              name="image"
              type="file"
              className="mt-1 block w-full px-3 py-2 border border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
          <div className="w-full md:w-2/3 px-4">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              Product Name
            </label>
            <input
              onChange={onChangeHandler}
              value={data.name}
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 block w-full px-3 py-2 border border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 mb-6">
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
            <label htmlFor="description" className="block text-lg font-medium text-gray-700">
              Product Description
            </label>
            <textarea
              onChange={onChangeHandler}
              value={data.description}
              id="description"
              name="description"
              rows="3"
              required
              className="mt-1 block w-full px-3 py-2 border border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            ></textarea>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <label htmlFor="category" className="block text-lg font-medium text-gray-700">
              Product Category
            </label>
            <select
              onChange={onChangeHandler}
              value={data.category}
              id="category"
              name="category"
              required
              className="mt-1 block w-full px-3 py-2 border border-green-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            >
              <option value="Pottery">Pottery</option>
              <option value="Toys">Toys</option>
              <option value="Metal Crafts">Metal Crafts</option>
              <option value="Painting">Painting</option>
              <option value="Rogan Art">Rogan Art</option>
              <option value="Sikki">Sikki</option>
              <option value="Rumal">Rumal</option>
              <option value="Bamboo">Bamboo</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 mb-6">
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
            <label htmlFor="price" className="block text-lg font-medium text-gray-700">
              Price
            </label>
            <input
              onChange={onChangeHandler}
              value={data.price}
              id="price"
              name="price"
              type="number"
              required
              step="0.01"
              className="mt-1 block w-full px-3 py-2 border border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-transform duration-300 transform hover:scale-105"
            >
              Add Product
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Add;
