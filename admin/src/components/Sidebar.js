import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="mt-6 fixed top-14 left-0 h-full w-64 bg-white shadow-lg py-6 px-4 z-50 flex flex-col transition-transform transform hover:translate-x-1 hover:bg-green-50">
      <div className="flex flex-col items-start space-y-6">
        <Link
          to="/Orders"
          className="flex items-center text-green-600 hover:text-green-800 transition duration-300 transform hover:translate-x-2"
        >
          Orders
        </Link>
        <Link
          to="/Add"
          className="flex items-center text-green-600 hover:text-green-800 transition duration-300 transform hover:translate-x-2"
        >
          Add
        </Link>
        <Link
          to="/List"
          className="flex items-center text-green-600 hover:text-green-800 transition duration-300 transform hover:translate-x-2"
        >
          List
        </Link>
        <Link
          to="/profile"
          className="flex items-center text-green-600 hover:text-green-800 transition duration-300 transform hover:translate-x-2"
        >
          Profile
        </Link>
        <Link
          to="/settings"
          className="flex items-center text-green-600 hover:text-green-800 transition duration-300 transform hover:translate-x-2"
        >
          Settings
        </Link>
        <Link
          to="/logout"
          className="flex items-center text-green-600 hover:text-green-800 transition duration-300 transform hover:translate-x-2"
        >
          Log out
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
