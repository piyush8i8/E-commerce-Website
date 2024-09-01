import React from 'react';

const MYna = () => {
  return (
    <div className="bg-green-100  relative">
      <link
        href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
        rel="stylesheet"
      />
      <div className="fixed bg-white text-green-800 px-10 py-1 z-10 w-full shadow-md">
        <div className="flex items-center justify-between py-2 text-5xl">
          <div className="font-bold text-green-900 text-xl">
            Admin<span className="text-green-600">Panel</span>
          </div>
          <div className="flex items-center text-gray-500">
            <span className="material-icons-outlined p-2 cursor-pointer hover:text-green-600 transition-colors duration-300" style={{ fontSize: 30 }}>
              search
            </span>
            <span className="material-icons-outlined p-2 cursor-pointer hover:text-green-600 transition-colors duration-300" style={{ fontSize: 30 }}>
              notifications
            </span>
            <div
              className="bg-center bg-cover bg-no-repeat rounded-full inline-block h-12 w-12 ml-2 transform transition-transform duration-300 hover:scale-110"
              style={{
                backgroundImage: 'url(https://i.pinimg.com/564x/de/0f/3d/de0f3d06d2c6dbf29a888cf78e4c0323.jpg)',
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MYna;
