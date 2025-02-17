import React from 'react';

const Slider: React.FC = () => {
  const images = [
    'Images/Logo_1.png',
    'Images/Logo_2.png',
    'Images/Logo_3.png',
    'Images/Logo_4.png',
    'Images/Logo_5.png',
    'Images/Logo_1.png',
    'Images/Logo_2.png',
    'Images/Logo_3.png',
    'Images/Logo_4.png',
    'Images/Logo_5.png',
  ];

  return (
    <div className="relative bg-white w-full  overflow-hidden shadow-[0_10px_20px_-5px_rgba(0,0,0,0.125)]">
      {/* Left gradient overlay */}
      <div className="absolute left-0 top-0 w-[5%] h-full z-20 bg-white from-white to-transparent" />
      {/* Right gradient overlay */}
      <div className="absolute right-0 top-0 w-[5%] h-full z-20 bg-white from-white to-transparent" />

      {/* Slider track */}
      <div className="flex items-center animate-scroll">
        {[...images, ...images].map((src, index) => (
          <div
            key={index}
            className="w-[250px] h-full flex-shrink-0 flex items-center justify-center"
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="max-h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

