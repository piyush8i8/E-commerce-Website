import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { storecontext } from "../Context/storeContext";

const Mynav = ({ setshowlogin }) => {
  const [menu, setMenu] = useState("home");
  const { cartitems, token, setToken } = useContext(storecontext);
  const navigate = useNavigate();

  const totalItems = cartitems ? Object.values(cartitems).reduce((acc, item) => acc + item, 0) : 0;

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/");
  };

  return (
    <div>
      <nav className="relative flex items-center justify-between sm:h-10 md:justify-center py-6 px-4 mt-2 bg-white shadow-lg">
        <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link to="/" aria-label="Home">
              <h1 className="pl-10 text-3xl font-bold text-green-600">Craftify</h1>
            </Link>
            <div className="-mr-2 flex items-center md:hidden">
              <button
                type="button"
                id="main-menu"
                aria-label="Main menu"
                aria-haspopup="true"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:space-x-10 nav">
          <Link
            to="/"
            className="font-medium text-gray-500 hover:text-green-600 transition duration-150 ease-in-out"
            onClick={() => setMenu("home")}
          >
            <h1 className={`transition duration-150 ${menu === "home" ? "text-green-600" : ""}`}>Home</h1>
          </Link>
          <Link
            to="/shop"
            className="font-medium text-gray-500 hover:text-green-600 transition duration-150 ease-in-out"
            onClick={() => setMenu("shop")}
          >
            <h1 className={`transition duration-150 ${menu === "shop" ? "text-green-600" : ""}`}>Contact</h1>
          </Link>
          <Link
            to="/about"
            className="font-medium text-gray-500 hover:text-green-600 transition duration-150 ease-in-out"
            onClick={() => setMenu("about")}
          >
            <h1 className={`transition duration-150 ${menu === "about" ? "text-green-600" : ""}`}>About us</h1>
          </Link>
          <Link
            to="/blog"
            className="font-medium text-gray-500 hover:text-green-600 transition duration-150 ease-in-out"
            onClick={() => setMenu("blog")}
          >
            <h1 className={`transition duration-150 ${menu === "blog" ? "text-green-600" : ""}`}>Blog</h1>
          </Link>
        </div>
        {/* <div className='ml-14'>
          <img src={assets.search_icon} alt="search icon" className="w-6 h-6 transition duration-150 transform hover:scale-110"/>
        </div> */}
        <div className="hidden md:absolute md:flex md:items-center md:inset-y-0 md:right-14  ">
          <span className="inline-flex">
            <div className="relative">
              <Link to="/cart">
                <img className='mr-5 w-6 h-6 transition duration-150 transform hover:scale-110  mt-1' /*src={assets.basket_icon}*/ src='http://www.clker.com/cliparts/2/J/t/y/1/1/green-basket-hi.png' alt="basket icon" />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 bg-green-600 text-white rounded-full px-2 py-1 text-xs">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>

            {!token ? (
              <>
                <Link
                  to="/login"
                  onClick={() => setshowlogin(true)}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium text-green-600 hover:text-green-500 focus:outline-none transition duration-150 ease-in-out"
                >
                  Login
                </Link>
                <span className="inline-flex rounded-md shadow ml-2">
                  <Link
                    to="/signup"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 transition duration-150 ease-in-out"
                  >
                    Signup
                  </Link>
                </span>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/profile">
                  <img src={assets.profile_icon} alt="profile icon" className="w-8 h-8 rounded-full transition duration-150 transform hover:scale-110" />
                </Link>
                <Link to="/Myorder">
                  <div className="flex items-center space-x-1">
                    <img src={assets.bag_icon} alt="orders icon" className="w-8 h-8 transition duration-150 transform hover:scale-110" />
                    <h2 className="font-medium text-gray-500 hover:text-green-600 transition duration-150 ease-in-out">Orders</h2>
                  </div>
                </Link>
                <div className="flex items-center space-x-1 cursor-pointer pl-2" onClick={logout}>
                  <img src={assets.logout_icon} alt="logout icon" className="w-8 h-8 transition duration-150 transform hover:scale-110" />
                  <h2 className="font-medium text-gray-500 hover:text-green-600 transition duration-150 ease-in-out">Log out</h2>
                </div>
              </div>
            )}
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Mynav;
