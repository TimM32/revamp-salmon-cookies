'use client';

import { useState } from 'react';
import { AppBar, Box, Button, IconButton, Modal, Toolbar, Typography } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Salmon Cookies
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleOpen}
          >
          </IconButton>
          {/* <ShoppingCartIcon /> */}
          <Button color="inherit" onClick={handleOpen}>About Us </Button>
          <Button color="inherit" onClick={handleOpen}>Sales Info </Button>
          <Button color="inherit" onClick={handleOpen}>Contact us </Button>
          <Button color="inherit" onClick={handleOpen}>Cart </Button>
        </Toolbar>
      </AppBar>

      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="cart-modal"
        aria-describedby="cart-modal-description"
      >
      </Modal> */}
    </Box>
  );
};

export default Header;
