import { useState } from "react";
import Herosec from "./Herosec";
import Product from "./Product";
import Product_display from "../components/Product_display";
import Appdownload from "../components/Appdownload";
import Crausel from "../components/Crausel";


let Home=()=>{
      const [category, setcategory]= useState("All")


    return <div>
      <Crausel></Crausel>
      <Herosec></Herosec>
      <Product  category={category} setcategory={setcategory}></Product>
     <Product_display  category={category}></Product_display>
    <Appdownload></Appdownload>
    </div>
};

export default Home;