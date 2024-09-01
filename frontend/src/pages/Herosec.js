import { assets } from '../assets/assets';
import { Link, useNavigate } from "react-router-dom";

let Herosec = () => {
    return (
        <div>
            <section className="px-3 py-5 bg-neutral-100 lg:py-10">
                <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
                    <div className="order-2 lg:order-1 flex flex-col justify-center items-center text-green-600 opacity-0 transform translate-y-10 lg:translate-y-0 lg:opacity-100 lg:transition-opacity lg:duration-500">
                        <p className="text-4xl font-bold md:text-7xl">25% OFF</p>
                        <p className="text-4xl font-bold md:text-7xl">SUMMER SALE</p>
                        <p className="mt-2 text-sm md:text-lg">For a limited time only!</p>
      
                    </div>
                    <div className="order-1 lg:order-2 opacity-0 transform translate-x-[-20px] lg:translate-x-0 lg:opacity-100 lg:transition-opacity lg:duration-500 lg:delay-200">
                        <img className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]" src="https://images.unsplash.com/photo-1628074958552-7c9d0b4173b7?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0aWZhY3R8ZW58MHx8MHx8fDA%3D" alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Herosec;
