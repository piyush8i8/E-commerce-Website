import React, { useContext } from "react";
import { storecontext } from "../Context/storeContext";
import { assets } from "../assets/assets";

const Product_card = ({ id, name, price, description, image }) => {
  const { cartitems, addToCart, removeFromCart, url } = useContext(storecontext);

  return (
    <div className="max-w-xs w-full p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700">
        <div>
          <img className="object-cover h-64 w-full" src={`${url}/images/${image}`} alt={name} />
        </div>
        <div className="flex flex-col gap-1 mt-4 px-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-50">{name}</h2>
          <span className="font-normal text-gray-600 dark:text-gray-300 text-sm ">{description}</span>
          <span className="font-semibold text-gray-800 dark:text-gray-50">${price}</span>
        </div>
        <div className="flex gap-4 mt-4 px-4">
          <img src={assets.rating_starts} alt="Rating stars" />
        </div>
        <div className="mt-4 p-4 border-t border-gray-200 dark:border-gray-500">
          <div className="flex items-center space-x-2">
            {!cartitems[id] ? (
              <img
                src={assets.add_icon_white}
                onClick={() => addToCart(id)}
                className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform duration-150"
                alt="Add to Cart"
              />
            ) : (
              <div className="flex items-center space-x-2">
                <img
                  src={assets.remove_icon_red}
                  onClick={() => removeFromCart(id)}
                  className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform duration-150"
                  alt="Remove from Cart"
                />
                <p className="text-base font-bold text-gray-800 dark:text-gray-50">{cartitems[id]}</p>
                <img
                  src={assets.add_icon_green}
                  onClick={() => addToCart(id)}
                  className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform duration-150"
                  alt="Add to Cart"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_card;
