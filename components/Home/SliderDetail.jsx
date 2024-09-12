'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const images = [
  {
    src: "/images/slider/slide-02.jpg",
    alt: "First slide",
    captionTitle: "Support Child for Education",
    captionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent.",
  },
  {
    src: "/images/slider/slide-03.jpg",
    alt: "Third slide",
    captionTitle: "We Need Your Support",
    captionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent.",
  },
];

export default function SliderDetail() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Change the image every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative w-full h-64 md:h-80 lg:h-[500px]">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 bg-black bg-opacity-50">
          <h5 className="text-xl md:text-2xl lg:text-3xl text-white font-bold mb-4">
            {images[currentIndex].captionTitle}
          </h5>
          <p className="text-sm md:text-base lg:text-lg text-yellow-100 mb-6">
            {images[currentIndex].captionText}
          </p>
          <button className="bg-green-500 text-white px-4 py-2 rounded md:px-6 md:py-3 lg:px-8 lg:py-4">
            Donate Now
          </button>
        </div>
      </div>

      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
        onClick={handlePrev}
      >
        <span className="sr-only">Previous</span>
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
        onClick={handleNext}
      >
        <span className="sr-only">Next</span>
        &#10095;
      </button>
    </div>
  );
}
