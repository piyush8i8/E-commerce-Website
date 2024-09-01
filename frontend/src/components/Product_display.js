import React, { useContext } from "react";
import PropTypes from 'prop-types';
import { storecontext } from "../Context/storeContext";
import Product_card from "./Product_card";

const ProductDisplay = ({ category }) => {
  const { product_list } = useContext(storecontext);

  return (
    <div className="bg-gray-200 dark:bg-gray-800 min-h-screen p-4">
      <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-gray-50 mb-8">
        Craftify Best Products for You!
      </h2>
      <div className="flex flex-wrap justify-center">
        {product_list && product_list.length > 0 ? (
          product_list.map((item, index) => {
            if (category === "All" || category === item.category) {
              return (
                <Product_card
                  key={item._id} // Using _id as key instead of index
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              );
            }
            return null;
          })
        ) : (
          <p className="text-gray-800 dark:text-gray-50">No products found.</p>
        )}
      </div>
    </div>
  );
};

ProductDisplay.propTypes = {
  category: PropTypes.string.isRequired,
};

export default ProductDisplay;
