import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-8 text-gray-600">
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap justify-between">
          <div className="px-4 my-4 w-full xl:w-1/5">
            <a href="/" className="block w-56 mb-10">
              <h1 className="text-green-600 text-4xl font-bold">Craftify</h1>
            </a>
            <p className="text-justify">
              Craftify is a collection of UI Components created using Tailwind CSS Framework.
              The UI Components give you all of the building blocks you need to build any designs
              without any annoying opinionated styles you have to fight to override.
            </p>
          </div>
          <div className="px-4 my-4 w-full sm:w-auto">
            <div>
              <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-green-500">
                Company
              </h2>
            </div>
            <ul className="leading-8">
              <li>
                <a href="#" className="hover:text-green-400 transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors duration-300">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors duration-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 my-4 w-full sm:w-auto">
            <div>
              <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-green-500">
                Blog
              </h2>
            </div>
            <ul className="leading-8">
              <li>
                <a href="#" className="hover:text-green-400 transition-colors duration-300">
                  Getting Started With HTML and CSS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors duration-300">
                  What Is Flex And When to Use It?
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors duration-300">
                  How TailwindCSS Can Help Your Productivity?
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors duration-300">
                  5 Tips to Make Responsive Website
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors duration-300">
                  See More
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
            <div>
              <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-green-500">
                Connect With Us
              </h2>
            </div>
            <a
              href="#"
              className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-green-400 hover:border-green-400 transition-colors duration-300"
            >
              <img
                src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg"
                alt="Instagram"
                className="w-full h-full"
              />
            </a>
            {/* Include other social icons similarly */}
          </div>
        </div>
      </div>
      <div className="bg-green-600 py-4 text-gray-100">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="px-4 w-full text-center sm:w-auto sm:text-left">
              Copyright © 2020 -{' '}
              <script>
                {`
                  document.write(new Date().getFullYear());
                `}
              </script>{' '}
              Craftify. All Rights Reserved.
            </div>
            <div className="px-4 w-full text-center sm:w-auto sm:text-left">
              Made with ❤️ by Piyush.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
