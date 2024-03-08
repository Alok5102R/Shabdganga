import React, { useState, useEffect } from "react";

const Slider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length ? 0 : prevSlide + 1
      );
    }, 3000); // Change interval time as per your requirement
    return () => clearInterval(interval);
  }, [images]);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length ? 0 : prevSlide + 1
    );
  };

  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }

  // Duplicate the first and last images to create a continuous loop
  const loopedImages = [images[images.length - 1], ...images, images[0]];


  return (
    <div className="relative w-full h-36 overflow-hidden">
      <div
        className="absolute flex transition-transform duration-500"
        style={{
          transform: `translateX(-${(currentSlide * (100 / loopedImages.length))}%)`,
          width: `${loopedImages.length * 100}%`, // Set the width to accommodate all looped images
        }}
      >
        {loopedImages.map((image, index) => (
          <div key={index} className="w-full h-full">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-0 bottom-0 left-0 flex items-center justify-center w-12 bg-black bg-opacity-50 text-white hover:bg-opacity-75"
        
      >
        {"<"}
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-0 bottom-0 right-0 flex items-center justify-center w-12 bg-black bg-opacity-50 text-white hover:bg-opacity-75"
        
      >
        {">"}
      </button>
    </div>
  );
};

export default Slider;
