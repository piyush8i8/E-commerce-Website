import React from "react";
import { menu_list } from "../assets/assets";
import './Product.css';

let Product = ( {category, setcategory}) => {
  return (
    <div>
        <div class="max-w-3xl mx-auto text-center mt-12">
  <h1 class="text-4xl font-bold text-gray-900 leading-tight mb-2 border-b-2 border-gray-500 pb-2">
  Explore our product
  </h1>
  <p class="text-lg text-gray-800 mb-8">An artifact product is a tangible item, often handmade or crafted, that holds cultural, historical, or artistic significance, reflecting the unique heritage and craftsmanship of a particular community or time period.</p>
</div>
      <h1></h1>
      <div className="flex flex-wrap justify-center "  >
        {menu_list.map((item, index) => {
          return (
            <div  className="m-2 product_list" onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item. menu_name)} key={index}>
              <img className={`${category === item.menu_name ? "active" : ""} rounded-full w-34 h-28`} src={item.menu_image} alt="" />

              {/* <img  className={category===item.menu_name?"active":""} src={item.menu_image} alt="" /> */}
              <p className="text-center">{item.menu_name}</p>
              <div class="max-w-3xl mx-auto text-center mt-12">
  <h1 class="text-4xl font-bold text-gray-900 leading-tight mb-2 border-b-2 border-gray-500 pb-2">
  
  </h1></div>
            </div>
          );
        })}
      </div>

        

    </div>
  );
};

export default Product;
