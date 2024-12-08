import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "#24243e" ,
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        marginTop: 'auto',
      }}
    >
      <Typography variant="body2" color="inherit">
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </Typography>
      <Box sx={{ marginTop: '10px' }}>
        {/* Social media links */}
        <Link
          href="https:www.linkedin.com/in/peace-nnorom-120048235"
          target="_blank"
          color="inherit"
          sx={{ marginRight: '10px' }}
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com/PeaceEgo"
          target="_blank"
          color="inherit"
          sx={{ marginRight: '10px' }}
        >
          GitHub
        </Link>
        <Link
          href="https://twitter.com"
          target="_blank"
          color="inherit"
        >
          Twitter
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
