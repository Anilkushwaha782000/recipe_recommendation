import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  AppBar,
  Toolbar,
} from "@mui/material";
import Aboutbanner from '../resources/images/Aboutbanner.png';

const AboutUsPage = () => {
  return (
    <>
      {/* Hero Banner */}
      <Box
  sx={{
    height: "60vh",
    background: "linear-gradient(135deg, #6a1b9a, #ff6b6b)",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    px: 2,
    position: "relative",
    borderRadius: 3,
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(10px)",
    },
  }}
>
  <Typography
    variant="h3"
    sx={{
      zIndex: 2,
      fontWeight: "bold",
      textShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
      fontFamily: "Poppins, sans-serif",
    }}
  >
    Explore the World of Recipes
  </Typography>
</Box>


      {/* About Section */}
      <Container maxWidth="lg" sx={{ my: 6}}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
              About Us
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Recipe Finder is your ultimate culinary companion. Our mission is
              to bring people closer to the joy of cooking by helping them
              explore new recipes, organize their favorites, and share their
              creations with a community of food lovers.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Join us to turn your kitchen into a playground for culinary
              experiments, where every dish tells a story and every meal
              becomes a celebration.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src="https://cdn.pixabay.com/photo/2020/03/16/12/46/food-4936947_1280.jpg"
              alt="About Us"
              style={{
                width: "100%",
                borderRadius: "12px",
                height: "300px",
                objectFit: "cover",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Features Section */}
      <Box sx={{ backgroundColor: "#fafafa", py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{ textAlign: "center", fontWeight: "bold", mb: 4 }}
          >
            Why Choose Us
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={6}
                sx={{
                  p: 3,
                  textAlign: "center",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderRadius: "12px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Discover Recipes
                </Typography>
                <Typography color="text.secondary">
                  Explore thousands of curated recipes across various cuisines
                  and dietary preferences.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={6}
                sx={{
                  p: 3,
                  textAlign: "center",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderRadius: "12px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Save Your Favorites
                </Typography>
                <Typography color="text.secondary">
                  Organize and save recipes for quick access anytime, anywhere.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={6}
                sx={{
                  p: 3,
                  textAlign: "center",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderRadius: "12px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Share Creations
                </Typography>
                <Typography color="text.secondary">
                  Share your own recipes with the community and inspire others
                  to cook.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact Us Section */}
      <Container maxWidth="lg" sx={{ my: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
              Contact Us
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Have questions or suggestions? We'd love to hear from you. Fill
              out the form below, and we'll get back to you as soon as
              possible.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={6} sx={{ p: 3, borderRadius: "12px" }}>
              <Box component="form">
                <TextField
                  fullWidth
                  label="Your Name"
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Your Email"
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  sx={{ mb: 2 }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    borderRadius: "50px",
                    textTransform: "none",
                    transition: "background-color 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#3f51b5",
                    },
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Footer Banner */}
      <Box
        sx={{
          backgroundColor: "#b53fa2",
          color: "white",
          textAlign: "center",
          py: 4,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Join the Recipe Finder Community Today!
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          Discover new recipes and share your culinary journey with food lovers
          worldwide.
        </Typography>
      </Box>
    </>
  );
};

export default AboutUsPage;
