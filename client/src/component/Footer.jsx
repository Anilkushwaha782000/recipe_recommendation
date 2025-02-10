import React from 'react'
import { Box, Typography, IconButton, Divider, Container, Grid } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #6a1b9a, #ff6b6b)",
        color: "white",
        py: 5,
        px: 3,
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {/* Logo & Description */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              🍽️ Recipe Finder
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Discover delicious recipes tailored to your taste. Cook, explore, and enjoy!
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, cursor: "pointer", "&:hover": { opacity: 1 } }}>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, cursor: "pointer", "&:hover": { opacity: 1 } }}>
              Popular Recipes
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, cursor: "pointer", "&:hover": { opacity: 1 } }}>
              Contact
            </Typography>
          </Grid>

          {/* Social Media */}
          <Grid item xs={6} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton sx={{ color: "white", "&:hover": { color: "#d1c4e9" } }}>
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: "white", "&:hover": { color: "#f06292" } }}>
                <Instagram />
              </IconButton>
              <IconButton sx={{ color: "white", "&:hover": { color: "#64b5f6" } }}>
                <Twitter />
              </IconButton>
              <IconButton sx={{ color: "white", "&:hover": { color: "#ff3d00" } }}>
                <YouTube />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.3)" }} />

        {/* Copyright */}
        <Typography variant="body2" sx={{ opacity: 0.7 }}>
          © {new Date().getFullYear()} Recipe Finder. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
