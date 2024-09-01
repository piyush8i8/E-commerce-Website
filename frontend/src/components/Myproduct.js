import React from 'react';

const Myproduct = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 lg:mb-0">
            <div className="flex">
              <div className="w-1/3">
                <img
                  src="https://imgmedia.lbb.in/media/2020/12/5feb28bee2a8d94d5d5ae0cd_1609246910165.jpg"
                  alt="Coconut shell craft"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-2/3 pl-4">
                <h3 className="text-lg font-semibold">Coconut shell craft</h3>
                <p className="text-gray-700">Viskaa is the authentic Indian handcrafted products from corners of India.</p>
                <p>
                  <a href="#" className="text-yellow-500 hover:text-yellow-700 ease-in-out no-underline">Read More</a>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 lg:mb-0">
            <div className="flex">
              <div className="w-1/3">
                <img
                  style={{ height: '125px' }}
                  src="https://cdn.shopify.com/s/files/1/0612/3670/7497/files/fyrjdrtdr_phanda_chikankari_embroidery_3b086d3a-ee95-40c1-8456-b821bbfb676d_1024x1024.png?v=1675872963"
                  alt="Chikankari Embroidery"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-2/3 pl-4">
                <h3 className="text-lg font-semibold">Chikankari Embroidery</h3>
                <p className="text-gray-700">Chikankari is hand embroidery on a variety of textile fabrics.</p>
                <p>
                  <a href="#" className="text-yellow-500 hover:text-yellow-700 ease-in-out no-underline ">Read More</a>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 lg:mb-0">
            <div className="flex">
              <div className="w-1/3">
                <img
                  style={{ height: '125px' }}
                  src="https://coshal.com/cdn/shop/files/Metal_Mask_Dhokra_Brass_Decor_Wall_hanging_Statue_and_Sculptures_Best_for_wall_hanging_Coshal_CD18_1.jpg?v=1697557486"
                  alt="Dokia Metal Craft"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-2/3 pl-4">
                <h3 className="text-lg font-semibold">Dokia Metal Craft</h3>
                <p className="text-gray-700">It is basically a brass-work (Metal Craft) done by the Malhore castes of the state.</p>
                <p>
                  <a href="#" className="text-yellow-500 hover:text-yellow-700 ease-in-out no-underline">Read More</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myproduct;
