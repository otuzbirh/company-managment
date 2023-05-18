import React from 'react';
import { AppBar, Toolbar, Typography, Avatar, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';


const Header = ({handleOpen, open}) => {

  const name = useSelector((state) => state.auth.name)
  const email = useSelector((state) => state.auth.email);
  const imageUrl = useSelector((state) => state.auth.picture);

  ;


 
  return (
    <AppBar position="static" sx={{backgroundColor: '#f9f9f9'}}>
      <Toolbar sx={{ display: 'flex', justifyContent: open === false ?  'space-between' : 'flex-end' }}>
       { open  === false ? <Typography variant="h6" noWrap>
          <MenuIcon onClick={handleOpen} sx={{color: '#253237', '&:hover': {cursor: 'pointer'}}} />
        </Typography> : ""
        }
       <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Typography sx={{color: '#253237', fontWeight: 500, marginRight: 2}}>{name || "user" } </Typography>
        
        <Avatar alt="Profile" src={imageUrl}/>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
