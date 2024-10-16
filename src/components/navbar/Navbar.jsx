"use client";
import React, { useState } from "react";
import abssLogo from "../../public/images/abssLogo.png";
import websiteName from "../../public/images/websiteName.png";
import dropdown from "../../public/images/dropdown.png";
import Image from "next/image";
import { Button } from "../ui/button";
import { IoMenu, IoClose } from "react-icons/io5"; // Importing React Icons
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Member List", path: "/members" },
    { name: "Donation List", path: "/donations" },
    { name: "Rules & Regulations", path: "/rule" },
  ];

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white shadow fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Image
              src={abssLogo}
              alt="Logo"
              className="object-contain w-20 h-auto"
            />
            <Image
              src={websiteName}
              alt="Website Name"
              className="object-contain w-48 h-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map(({ name, path }) => (
              <Link
                key={name}
                href={path}
                className="flex items-center hover:text-blue-600 transition-all duration-200"
              >
                {name}{" "}
                {name === "Home" && (
                  <Image src={dropdown} alt="dropdown" className="w-3 inline" />
                )}
              </Link>
            ))}
            <Link
              href={"https://dashboard.aggrabandhuss.org/Login"}
              className="text-wrap border-2 border-green-500 text-white bg-orange-600 rounded-full px-4 py-2 hover:bg-orange-700"
            >
              Login / Apply Membership
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 text-gray-800 hover:bg-gray-200 focus:outline-none"
            >
              {isOpen ? (
                <IoClose className="w-6 h-6" />
              ) : (
                <IoMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 uppercase flex flex-col items-center">
            {navItems.map(({ name, path }) => (
              <Link
                key={name}
                href={path}
                className="text-sm flex items-center hover:text-blue-600 transition-all duration-200"
              >
                {name}{" "}
                {name === "Home" && (
                  <Image src={dropdown} alt="dropdown" className="w-3 inline" />
                )}
              </Link>
            ))}
            <Button className="uppercase border-2 border-green-500 text-white bg-orange-600 rounded-full px-4 py-2 hover:bg-orange-700">
              Login/Apply Membership
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
