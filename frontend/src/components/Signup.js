import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { storecontext } from "../Context/storeContext";
import axios from "axios";

const Signup = () => {
  const { url, setToken } = useContext(storecontext);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: ""
  });

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.password !== data.confirm_password) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(`${url}/api/user/register`, data);
      if (response.data.success) {
        setToken(response.data.token);
        navigate("/login");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Error registering user");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4">
          <div className="relative flex items-center">
            <Link className="text-black no-underline" to="/">
              <h3 className="text-2xl font-bold">Craftify</h3>
            </Link>
          </div>
          <div className="flex-grow"></div>
          <div className="hidden items-center justify-center gap-6 md:flex">
            <Link
              className="rounded-md no-underline bg-green-500 px-3 py-1.5 font-medium text-white shadow-md transition-transform duration-200 ease-in-out hover:scale-105"
              to="/"
            >
              Go Back
            </Link>
          </div>
        </nav>
      </header>
      <div className="flex flex-grow">
        <div className="w-2/ p-5 hidden md:block">
          <img
            src="https://img.freepik.com/free-vector/credit-score-flat-composition-with-chat-bubbles-envelopes-application-screens-black-woman-with-credit-card-vector-illustration_1284-83826.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1711756800&semt=sph"
            alt="Sign up illustration"
            className="max-w-full h-auto transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
        <div className="bg-gray-100 flex flex-col justify-center w-full md:w-1/2 p-6">
          <div className="container mx-auto flex-1 flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-center mb-6">Sign Up Here</h1>
            <form
              onSubmit={handleSubmit}
              className="bg-white px-6 py-8 rounded shadow-md text-black w-full transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <input
                type="text"
                className="block border border-gray-300 w-full p-3 rounded mb-4 focus:outline-none focus:border-green-500"
                name="name"
                placeholder="Full Name"
                value={data.name}
                onChange={onChangeHandler}
                required
              />
              <input
                type="email"
                className="block border border-gray-300 w-full p-3 rounded mb-4 focus:outline-none focus:border-green-500"
                name="email"
                placeholder="Email"
                value={data.email}
                onChange={onChangeHandler}
                required
              />
              <input
                type="password"
                className="block border border-gray-300 w-full p-3 rounded mb-4 focus:outline-none focus:border-green-500"
                name="password"
                placeholder="Password"
                value={data.password}
                onChange={onChangeHandler}
                required
              />
              <input
                type="password"
                className="block border border-gray-300 w-full p-3 rounded mb-4 focus:outline-none focus:border-green-500"
                name="confirm_password"
                placeholder="Confirm Password"
                value={data.confirm_password}
                onChange={onChangeHandler}
                required
              />
              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-600 focus:outline-none transition-colors duration-200 ease-in-out"
              >
                Create Account
              </button>
            </form>
            <div className="text-gray-700 mt-6">
              Already have an account?{" "}
              <Link className="text-green-500 border-b border-green-500" to="/login">
                Log in
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
