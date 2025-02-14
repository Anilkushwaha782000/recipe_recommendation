import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, Container, Typography, Drawer, IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import useAuthStore from '../store/userAuthStore';
import axios from 'axios';
function Navbar() {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const user=useAuthStore((state)=>state.user)
  const logout=useAuthStore((state)=>state.logout)
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (link) => {
    setAnchorEl(null);
    if(link=='profile'){
      navigate('/profile')
    }
    else if(link=='setting'){
      navigate('/setting')
    }
    else if(link=='addaccount'){
      navigate('/addaccount')
    }
    else if(link=='account'){
      navigate('/account');
    }
    else return;

  };
  const handleLogout=async()=>{
    try {
      logout();
     const response= await axios.post("http://localhost:5000/api/auth/logout")
     console.log("logout>>",response.data);
    } catch (error) {
      console.log("logout error>>",error.message);
    }
  }
  return (
    <AppBar
      position="static"
      sx={{
        background: 'rgba(255, 255, 255, 0.8)', // Glass effect
        backdropFilter: 'blur(10px)',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        padding: '10px 0',
      }}
    >
      <Container>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <Button
            href="/"
            sx={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: 'primary.main',
              '&:hover': { color: 'secondary.main', background: 'transparent' },
            }}
          >
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.2 }}
              whileHover={{ scale: 1.3, rotate: 10 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
            >
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                🍽️
              </Typography>
            </motion.div>
          </Button>

          {/* Hamburger Menu for Small Screens */}
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton onClick={handleDrawerToggle} color="primary">
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Navigation Links (Desktop) */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 3,
            }}
          >
            {['recipes', 'planner', 'custom-recipe', 'about'].map((item) => (
              <Button
                key={item}
                href={`/${item}`}
                sx={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: 'text.primary',
                  '&:hover': { color: 'secondary.main', background: 'transparent' },
                }}
              >
                {item}
              </Button>
            ))}
            {user ? (
                      <Tooltip title="Account settings">
                      <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2,color:"#6d3f66" }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                      >
                        <Avatar sx={{ width: 32, height: 32 }}>{user.username.split(" ").map(name => name[0]).join("").toUpperCase()}</Avatar>
                      </IconButton>
                    </Tooltip>
             
            ) : (
              <Button
                href="/login"
                sx={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: 'text.primary',
                  '&:hover': { color: 'secondary.main', background: 'transparent' },
                }}
              >
                Login
              </Button>
            )}
          </Box>
          <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={()=>handleClose('profile')}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={()=>handleClose('myaccount')}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={()=>handleClose('addaccount')}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={()=>handleClose('settting')}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={()=>handleLogout()}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
        </Toolbar>
      </Container>

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{
            width: 250,
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            backgroundColor: 'background.paper',
          }}
        >
          {['recipes', 'planner', 'custom-recipe', 'about'].map((item) => (
            <Button
              key={item}
              href={`/${item}`}
              sx={{
                fontSize: '1rem',
                fontWeight: '600',
                color: 'text.primary',
                '&:hover': { color: 'secondary.main', background: 'transparent' },
              }}
            >
              {item}
            </Button>
          ))}
          {user ? (
              <Button
                sx={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: 'blue',
                  '&:hover': { color: 'secondary.main', background: 'transparent' },
                }}
              >
                {user.username} {/* Display username if logged in */}
              </Button>
            ) : (
              <Button
                href="/login"
                sx={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: 'text.primary',
                  '&:hover': { color: 'secondary.main', background: 'transparent' },
                }}
              >
                Login
              </Button>
            )}
        </Box>
      </Drawer>
      
    </AppBar>
  );
}

export default Navbar;
