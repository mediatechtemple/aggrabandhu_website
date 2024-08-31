'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import WhatWeDo from "@/components/Home/WhatWeDo";
import Events from "@/components/Home/Events";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // Automatically change the image after a set timer
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Change the image every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
    <div className="slider-detail relative">
      <div className="carousel-inner relative w-full overflow-hidden">
        <Image
          className="block w-full"
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          layout="responsive"
          width={1920}
          height={1080}
        />
        <div className="carousel-caption absolute text-center top-1/3 left-0 right-0 px-4">
          <h5 className="text-2xl text-white font-bold animate-bounce mb-4">{images[currentIndex].captionTitle}</h5>
          <p className="animate-bounce mb-6 text-yellow-100">{images[currentIndex].captionText}</p>
          <button className="bg-green-500 text-white px-6 py-3 rounded animate-bounce">Donate Now</button>
        </div>
      </div>

      <button
        className="carousel-control-prev absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white"
        onClick={handlePrev}
      >
        <span className="sr-only">Previous</span>
        &#10094;
      </button>
      <button
        className="carousel-control-next absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white"
        onClick={handleNext}
      >
        <span className="sr-only">Next</span>
        &#10095;
      </button>
    </div>
    <WhatWeDo/>
    <Events/>
    </>
  );
}
