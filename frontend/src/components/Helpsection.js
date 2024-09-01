import React from 'react';
import image from "../Images/interior.png"

const Helpsection = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between">
            <div>
                <img src={image} className='w-full'/>
            </div>
          <div className="lg:w-1/2 lg:pl-10 p-5">
            <h2 className="text-3xl font-bold mb-4">We Help You Make Modern Interior Design</h2>
            <p className="mb-4">
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac
              aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi
              tristique senectus et netus et malesuada
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Donec vitae odio quis nisl dapibus malesuada</li>
              <li>Donec vitae odio quis nisl dapibus malesuada</li>
              <li>Donec vitae odio quis nisl dapibus malesuada</li>
              <li>Donec vitae odio quis nisl dapibus malesuada</li>
            </ul>
            <p>
              <a href="/about" className="inline-block bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 ease-in-out no-underline">
                Explore
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Helpsection;

