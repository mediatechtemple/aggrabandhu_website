"use client"; 

import React from "react";
import Image from "next/image";
import notFoundImage from "../../public/images/pageNotFound.png"; 
import Link from "next/link";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <Image
        src={notFoundImage}
        alt="Not Found"
        className="w-1/2 md:w-1/3 lg:w-1/4 mb-6"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition duration-200"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default PageNotFound;
