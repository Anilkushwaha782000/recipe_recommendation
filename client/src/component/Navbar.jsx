import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, Container, Typography, Drawer, IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

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
            {['recipes', 'planner', 'custom-recipe', 'about', 'login'].map((item) => (
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
          </Box>
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
          {['recipes', 'planner', 'custom-recipe', 'about', 'login'].map((item) => (
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
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
