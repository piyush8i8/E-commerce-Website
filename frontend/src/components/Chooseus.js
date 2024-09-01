import React from 'react';
import image from "../Images/horse.jpg";
import image1 from "../Images/truck.svg";
import image2 from "../Images/bag.svg";
import image3 from "../Images/support.svg";
import image4 from "../Images/return.svg";

// Define a functional component for the feature items
const FeatureItem = ({ iconSrc, title, description }) => (
  <div className="w-full md:w-1/2 lg:w-1/2 p-4">
    <div className="flex items-center bg-white rounded-lg p-5 shadow-md">
      <div className="flex-shrink-0">
        <img src={iconSrc} alt="Icon" className="w-12 h-12 md:w-16 md:h-16" />
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

// Define the main component
const Chooseus = () => (
  <div className="py-12 bg-gray-100">
    <div className="container mx-auto px-6 md:px-12 lg:px-24">
      <div className="flex flex-wrap justify-between items-center">
        <div className="w-full lg:w-1/2 p-5">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Choose Us</h2>
          <p className="mt-4 text-gray-600">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>

          <div className="flex flex-wrap mt-8">
            <FeatureItem
              iconSrc={image1}
              title="Fast Shipping"
              description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
            />
            <FeatureItem
              iconSrc={image2}
              title="Easy to Shop"
              description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
            />
            <FeatureItem
              iconSrc={image3}
              title="24/7 Support"
              description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
            />
            <FeatureItem
              iconSrc={image4}
              title="Free Returns"
              description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 p-5">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img src={image} alt="Image" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Chooseus;
