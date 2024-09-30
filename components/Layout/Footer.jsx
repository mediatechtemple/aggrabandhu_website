// Footer.jsx

import React from 'react';
import { Container, Grid, Typography, Link, Box} from '@mui/material';

import { Facebook, GitHub, Google, Pinterest, Twitter } from '@mui/icons-material';
import Image from 'next/image';
import { IconButton } from '@mui/material';  // Importing MUI IconButton
import { FaWhatsapp, FaYoutube, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';  // Importing icons from react-icons


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-5 mt-4">
  <Container>
  <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-8">
    {/* About Us Section */}
    <div className="flex-1 flex flex-col  justify-around text-center">
    <Image src="/Images/logo/logo1.jpg" alt="Logo" width={100} height={100}  
    className="mx-auto" 
    style={{borderRadius: "50%"}} />
              
      <p className=" font-serif  ml-2 px-1 text-lg  text-white">AGGRABANDHU SEVARTH SANSTHAN</p>
       
    </div>





    {/* Useful Links Section */}
    <div className="flex-1">
      <Typography variant="h6" gutterBottom className='text-center no-underline'>
        Menu
      </Typography> 
      <ul  className="flex flex-col text-center justify-between list-none p-0 space-y-4">
        <li>
          <Link href="/" color="inherit">
            Home
          </Link>
        </li>
        <li>
          <Link href="/About_us" color="inherit">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/Member_List" color="inherit">
            Member List
          </Link>
        </li>
        <li>
          <Link href="/Donation_List" color="inherit">
            Donation List
          </Link>
        </li>
        <li>
          <Link href="/Rules_Regulations" color="inherit">
            Rules & Regulation
          </Link>
        </li>
        <li>
          <Link href="Contact_Us" color="inherit">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>









    {/* Contact Us Section */}
    {/* <div className="flex-1">
      <Typography variant="h6" gutterBottom className='text-center'>
        Contact Us
      </Typography>
      <div className="flex flex-col justify-center items-center space-y-4 mt-2 md:mt-0">
        <div className="flex flex-col ">
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
    </div> */}

   <div className="flex flex-col flex-1 space-y-4">
    <p className='text-center'>
      Links
    </p>
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
      </div>







  </div>
</Container>











  {/* Footer Bottom */}
  <Box className="bg-gray-900 py-2 ">






    <Container className="flex flex-col md:flex-row justify-between items-center">
      <Typography variant="body2" color="inherit" className="text-center md:text-left">
        All Right Reserved to Agrabandhu Sewarth Sansthan (ABSS) -	Desing & Developed by<Link href="https://www.mediatechtemple.com/" color="inherit"> MediaTechTemple (Take to Our Website)</Link>
      </Typography>

      {/* <div className="flex space-x-4 mt-2 md:mt-0">
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
      </div> */}


    </Container>
  </Box>


</footer>

  );
};

export default Footer;
