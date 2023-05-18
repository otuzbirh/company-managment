import React from 'react';
import { Typography, Box } from '@mui/material';



const Footer = () => {

  return (
    <Box sx={{backgroundColor: '#f9f9f9', padding: 2, marginTop: 'auto', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;'}}>
     
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
      © {new Date().getFullYear()}  All rights reserved.
      </Typography>
    
    </Box>
  );
};

export default Footer;
