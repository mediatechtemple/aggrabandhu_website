// components/Header.js

import Image from "next/image";
import Link from "next/link";
import { IconButton } from "@mui/material";
import { Facebook, GitHub, Google, Pinterest, Twitter } from "@mui/icons-material";


export default function Header() {
    return (
      <header>
        {/* Top Header */}
        <div className="bg-gray-800 text-white">
  <div className="container mx-auto px-4 py-2">
    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 items-center text-center md:text-left">
        <span className="flex items-center">
          <i className="fas fa-envelope-square mr-2"></i>
          sales@smarteyeapps.com
        </span>
        <span className="flex items-center">
          <i className="fas fa-phone-square mr-2"></i>
          +123 987 887 765
        </span>
      </div>

      <div className="flex space-x-4">
        <IconButton color="inherit" href="https://github.com">
          <GitHub />
        </IconButton>
        <IconButton color="inherit" href="#">
          <Google />
        </IconButton>
        <IconButton color="inherit" href="#">
          <Pinterest />
        </IconButton>
        <IconButton color="inherit" href="#">
          <Twitter />
        </IconButton>
        <IconButton color="inherit" href="#">
          <Facebook />
        </IconButton>
      </div>
      
    </div>
  </div>
</div>

  








  
        {/* Navigation Header */}
        <div className="bg-white shadow-md">
  <div className="container mx-auto px-4 py-3">
    <div className="flex items-center justify-between">
      {/* Logo and Mobile Menu Button */}
      <div className="flex items-center space-x-4">
        <Image src="/images/agarsen.png" alt="Logo" width={50} height={50}/>
        <button className="lg:hidden text-2xl">
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex space-x-6">
        <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
        <Link href="/About_us" className="text-gray-700 hover:text-gray-900">About Us</Link>
        <Link href="/Member_List" className="text-gray-700 hover:text-gray-900">Member List</Link>
        <Link href="/Donation_List" className="text-gray-700 hover:text-gray-900">Donation List</Link>
        <Link href="/Rules_Regulations" className="text-gray-700 hover:text-gray-900">Rules & Regulation</Link>
        <Link href="/Contact_Us" className="text-gray-700 hover:text-gray-900">Contact us</Link>
      </nav>

      {/* Donate Button */}
      <div className="hidden lg:block">
        <button className="bg-green-500 text-white py-2 px-4 rounded">
          Donate Now
        </button>
      </div>
    </div>
  </div>
</div>


        
      </header>
    );
  }
  

