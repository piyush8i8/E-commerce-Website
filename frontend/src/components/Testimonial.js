import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import image1 from "../Images/nikhil.jpg";
import image2 from "../Images/avinash.jpg";
import image3 from "../Images/piyush.jpg";
import image4 from "../Images/tilak.jpg";

const Testimonial = () => {
  const testimonials = [

    {
      text: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.",
      image: image3,
      name: "Piyush Kumar",
      position: "CEO & Founder"
    },
    {
      text: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.",
      image: image1,
      name: "Nikhil Sharma",
      position: "Technical Head"
    },
    {
      text: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.",
      image: image2,
      name: "Avinash Singh",
      position: "Resource Head"
    },
    
    {
      text: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.",
      image: image4,
      name: "Tilakdhari Pandit",
      position: "Co-Founder"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <div
        style={{
          display: "block",
          background: "black",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          position: "absolute",
          left: "10px",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <FaChevronLeft style={{ color: "white" }} />
      </div>
    ),
    nextArrow: (
      <div
        style={{
          display: "block",
          background: "black",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          position: "absolute",
          right: "10px",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <FaChevronRight style={{ color: "white" }} />
      </div>
    )
  };

  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Testimonials</h2>
        </div>
        <div className="flex justify-center">
          <div className="w-full lg:w-10/12">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="mb-8">
                  <div className="text-center">
                    <blockquote className="mb-5">
                      <p className="text-lg text-gray-700">&ldquo;{testimonial.text}&rdquo;</p>
                    </blockquote>
                    <div className="flex justify-center">
                      <div className="w-24 h-24 rounded-full overflow-hidden">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="font-bold mt-4">{testimonial.name}</h3>
                    <span className="block mb-3 text-gray-500">{testimonial.position}</span>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
