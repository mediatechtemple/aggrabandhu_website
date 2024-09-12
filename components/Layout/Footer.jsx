// Footer.jsx

import React from 'react';
import { Container, Grid, Typography, Link, Box, IconButton } from '@mui/material';

import { Facebook, GitHub, Google, Pinterest, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-5">
  <Container>
    <Grid container spacing={4}>
      {/* About Us Section */}
      <Grid item md={4} sm={12}>
        <Typography variant="h6" gutterBottom>About Us</Typography>
        <Typography variant="body2">
          Smart Eye is a leading provider of information technology, consulting, and business process services. Our dedicated employees offer strategic insights, technological expertise and industry experience.
        </Typography>
        <Typography variant="body2">
          We focus on technologies that promise to reduce costs, streamline processes and speed time-to-market, backed by our strong quality processes and rich experience managing global...
        </Typography>
      </Grid>

      {/* Useful Links Section */}
      <Grid item md={4} sm={12}>
        <Typography variant="h6" gutterBottom>Useful Links</Typography>
        <ul className="list-none p-0">
          <li><Link href="#/about" color="inherit">About us</Link></li>
          <li><Link href="#/portfolio" color="inherit">Portfolio</Link></li>
          <li><Link href="#/products" color="inherit">Latest jobs</Link></li>
          <li><Link href="#/gallery" color="inherit">Gallery</Link></li>
          <li><Link href="#/contact" color="inherit">Contact us</Link></li>
        </ul>
      </Grid>

      {/* Contact Us Section */}
      <Grid item md={4} sm={12}>
        <Typography variant="h6" gutterBottom>Contact Us</Typography>
        <address>
          BlueDart <br />
          Marthandam (K.K District) <br />
          Tamil Nadu, IND <br />
          {/* Phone: <FontAwesomeIcon icon={faPhone} /> +91 9159669599 <br /> */}
          Email: <Link href="mailto:info@bluedart.in" color="inherit">info@bluedart.in</Link><br />
          Web: <Link href="http://www.bluedart.in" color="inherit">www.bluedart.in</Link>
        </address>
      </Grid>
    </Grid>
  </Container>

  {/* Footer Bottom */}
  <Box className="bg-gray-900 py-2 mt-5">
    <Container className="flex flex-col md:flex-row justify-between items-center">
      <Typography variant="body2" color="inherit" className="text-center md:text-left">
        <Link href="https://www.smarteyeapps.com/" color="inherit">2015 &copy; All Rights Reserved | Designed and Developed by Smarteyeapps</Link>
      </Typography>
      <div className="flex space-x-4 mt-2 md:mt-0">
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
    </Container>
  </Box>
</footer>

  );
};

export default Footer;
