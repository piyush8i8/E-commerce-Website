import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const storecontext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartitems, setCartItems] = useState({});
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");
  const [product_list, setProductList] = useState([]);

  const fetchProductList = async () => {
    try {
      const response = await axios.get(`${url}/api/product/list`);
      setProductList(response.data.data);
    } catch (error) {
      console.error("Error fetching product list", error);
    }
  };

  const loadcartData = async (token) => {
    try {
      const response = await axios.get(`${url}/api/cart/get`, { headers: { Authorization: `Bearer ${token}` } });
      setCartItems(response.data.cartData);
    } catch (error) {
      console.error("Error loading cart data", error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await fetchProductList();
      const savedToken = localStorage.getItem("token");
      if (savedToken) {
        setToken(savedToken);
        await loadcartData(savedToken);
      }
    };
    loadData();
  }, []);

  const addToCart = async (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
    }));

    if (token) {
      try {
        await axios.post(`${url}/api/cart/add`, { itemId }, { headers: { Authorization: `Bearer ${token}` } });
      } catch (error) {
        console.error("Error adding item to cart", error);
      }
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => {
      const updatedCartItems = { ...prev };
      if (updatedCartItems[itemId] > 1) {
        updatedCartItems[itemId] -= 1;
      } else {
        delete updatedCartItems[itemId];
      }
      return updatedCartItems;
    });

    if (token) {
      try {
        await axios.post(`${url}/api/cart/remove`, { itemId }, { headers: { Authorization: `Bearer ${token}` } });
      } catch (error) {
        console.error("Error removing item from cart", error);
      }
    }
  };

  useEffect(() => {
    console.log(cartitems);
  }, [cartitems]);

  const contextvalue = {
    product_list,
    cartitems,
    setCartItems,
    addToCart,
    removeFromCart,
    url,
    token,
    setToken,
  };

  return (
    <storecontext.Provider value={contextvalue}>
      {props.children}
    </storecontext.Provider>
  );
};

export default StoreContextProvider;
