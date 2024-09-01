import React, { useState, useEffect } from 'react';
import hero1 from '../Images/h1.jpg';
import h2 from '../Images/h2.jpg';
import h3 from '../Images/h3.jpg';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      src: hero1,
      alt: 'Slide 1',
    
    },
    {
      src: h2,
      alt: 'Slide 2',
    },
    {
      src: h3,
      alt: 'Slide 3',
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-screen p-8">
      <div id="default-carousel" className="relative w-full h-full">
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentSlide ? 'block' : 'hidden'
              }`}
            >
              <img src={slide.src} alt={slide.alt} className="object-cover w-full h-full" />
              {slide.caption && (
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-white md:text-2xl dark:text-gray-800">
                  {slide.caption}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-gray-400' : 'bg-gray-300'} hover:bg-gray-400 focus:outline-none transition`}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </div>

        <button
          type="button"
          className="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
          onClick={handlePrev}
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <button
          type="button"
          className="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
          onClick={handleNext}
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
