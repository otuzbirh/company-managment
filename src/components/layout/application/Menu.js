import React  from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
  Box,
  Divider,
  
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Apartment, AddBusiness, Close, Logout, Preview, DragIndicator } from '@mui/icons-material';

const drawerWidth = 240;

const Menu = ({open, handleClose}) => {

  
  const menuItems = [
    { text: 'Companies', icon: <Apartment />, path: '/application/companies' },
    { text: 'Create Company', icon: <AddBusiness />, path: '/application/create-company' },
    { text: 'Drag Companies', icon: <DragIndicator />, path: '/companies/drag' },
    { text: 'Text', icon: <Preview />, path: '/text' },
  ];


  return (
    <>
       
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          display: open ? 'block' : 'none',
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            backgroundColor: '#1a233a',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
          <Typography variant="h6" sx={{ color: 'white', flexGrow: 1 }}>
           Company App
          </Typography>

          <IconButton
            edge="start"
            color="primary"
            aria-label="menu"
            onClick={handleClose}
            sx={{  zIndex: '100', color: 'white' }}
          >
            {open ? <Close /> : ""}
          </IconButton>
       
        </Box>
     
        <Divider />

        <List>
          {menuItems?.map((item) => (
            <ListItem
              button
              key={item.text}
              component={Link}
              to={item.path}
              sx={{
                color: 'white',
                '&.Mui-selected': {
                  backgroundColor: '#ffd54f',
                },
                '&:hover': {
                  backgroundColor: '#546e7a',
                },
              }}
            >
              <ListItemIcon sx={{ color: 'white' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>

        <Divider />

        <Box sx={{ p: 2 }}>
          <ListItem
            button
            sx={{
              color: 'white',
              '&:hover': {
                backgroundColor: '#546e7a',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'white' }}>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </Box>
      </Drawer>
    </>
  );
};

export default Menu;
