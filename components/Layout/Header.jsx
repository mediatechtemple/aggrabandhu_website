// components/Header.js

import Image from "next/image";
import Link from "next/link";
import { IconButton } from "@mui/material";
import { Facebook, GitHub, Google, Pinterest, Twitter } from "@mui/icons-material";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function Header() {
    return (
      <header >
        {/* Top Header */}
        <div className="bg-gray-800 text-white">
  <div className="container mx-auto px-4 py-2">
    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 items-center text-center md:text-left">
        <span className="flex items-center  ">
          <AiOutlineMail className="mr-2" />
          aggrabandhusewasansthan@gmail.com
        </span>
        <span className="flex items-center">
        <FaWhatsapp className="mr-2"/>
          7830305040
        </span>
      </div>

      {/* <div className="flex space-x-4">
        <IconButton color="inherit" href="https://whatsapp.com/channel/0029VajOtfp59PwSxSNdHT1W" target="_blank">
        <FaWhatsapp />
        </IconButton>
        <IconButton color="inherit" href="https://www.youtube.com/@AggrabandhuSewaSansthan" target="_blank">
          <FaYoutube />
        </IconButton>
        <IconButton color="inherit" href="https://instagram.com" target="_blank">
        <FaInstagram />
      </IconButton>
        <IconButton color="inherit" href="#">
          <Twitter />
        </IconButton>
        <IconButton color="inherit" href="https://www.facebook.com/aggrabandhusevarthsansthan/" target='_blank'>
          <Facebook />
        </IconButton>
      </div> */}

            <div className="hidden lg:block">
              <button className="bg-green-500 text-white py-2 px-4 rounded" >
              <Link href="https://dashboard.aggrabandhuss.org/Login/" className="text-gray-700 hover:text-gray-900">Login/Apply Membership</Link>
              </button>
            </div>
      
    </div>
  </div>
</div>

  








  
        {/* Navigation Header */}
        <div className="bg-white shadow-md">
          <div className=" py-3">
          <div className="flex items-center justify-around">
            {/* Logo and Mobile Menu Button */}

            
            <div className="flex items-center ml-0">
              <Image src="/Images/logo/logo1.jpg" alt="Logo" width={50} height={50} 	style={{borderRadius: "50%"}} />
              
              <p className=" font-serif  ml-2 px-1 text-lg  text-[#2C5F2D]">AGGRABANDHU SEVARTH SANSTHAN</p>
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
            {/* <div className="hidden lg:block">
              <button className="bg-green-500 text-white py-2 px-4 rounded" >
              <Link href="https://dashboard.aggrabandhuss.org/Login/" className="text-gray-700 hover:text-gray-900">Login/Apply membership</Link>
              </button>
            </div> */}




          </div>
          </div>
      </div>


        
      </header>
    );
  }
  

