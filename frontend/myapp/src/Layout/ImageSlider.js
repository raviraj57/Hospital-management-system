// src/Layout/ImageSlider.js
import React, { useState, useEffect } from "react";

const images = [
  "https://wp.globaluniversitysystems.com/mua/wp-content/uploads/sites/10/2023/02/istock-482499394.webp",
  "https://upload.wikimedia.org/wikipedia/commons/a/a8/Smiley_Doctor.jpg",
  "https://apolloranchi.com/wp-content/uploads/2022/02/Untitled-2-02-1-min.jpg",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container relative w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          } absolute inset-0 transition-opacity duration-1000`}
          style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
      ))}
      <div className="slider-controls absolute bottom-0 left-0 right-0 flex justify-center p-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`mx-1 w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
