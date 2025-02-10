import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
} from '@mui/material';
import Navbar from './Navbar';

const HomePage = () => {
  const mealData=[{
    title: 'AI-Powered Suggestions',
    description: 'Get recipe ideas tailored to your preferences and dietary needs.',
    img: 'https://cdn.pixabay.com/photo/2019/06/26/18/00/suggestion-4300902_1280.jpg',
  }, {
    title: 'Seamless Meal Planning',
    description: 'Plan your week with intelligent meal recommendations.',
    img: 'https://cdn.pixabay.com/photo/2017/01/30/13/49/pancakes-2020863_1280.jpg',
  }, {
    title: 'Detailed Nutritional Insights',
    description: 'Track calories, macros, and more for a healthy lifestyle.',
    img: 'https://cdn.pixabay.com/photo/2023/09/25/07/55/salad-8274421_1280.jpg',
  }]
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          backgroundImage: 'url("https://images.unsplash.com/photo-1516824467205-afa656d31a79?q=80&w=1470&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          textAlign: 'center',
          overflow: 'hidden',
          borderRadius: '0 0 50px 50px',
          boxShadow: '0px 10px 30px rgba(0,0,0,0.2)',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.4)',
          }}
        />
        <Box zIndex={1}>
          <Typography variant="h2" fontWeight="bold" sx={{ textShadow: '2px 2px 10px rgba(0,0,0,0.5)' }}>
            Discover Premium Recipes
          </Typography>
          <Typography variant="h6" sx={{ mt: 2, opacity: 0.9 }}>
            Elevate your cooking experience with curated recipes.
          </Typography>
          <Button
            variant="contained"
            component="a"
            href='/recipes'
            sx={{ mt: 3, backgroundColor: '#ff3366', padding: '12px 24px', fontSize: '16px', borderRadius: '25px', boxShadow: '0px 4px 12px rgba(255, 51, 102, 0.4)', '&:hover': { backgroundColor: '#cc0052' } }}
          >
            Explore Now
          </Button>
        </Box>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          Why Choose Us?
        </Typography>
        <Grid container spacing={4}>
          {mealData.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                borderRadius: '15px',
                overflow: 'hidden',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                '&:hover': { transform: 'scale(1.05)', boxShadow: '0px 6px 30px rgba(0, 0, 0, 0.2)' }
              }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={feature.img}
                  alt={feature.title}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #6d1b7b 30%, #ff3366 90%)',
          color: '#fff',
          py: 6,
          textAlign: 'center',
          borderRadius: '50px 50px 0 0',
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Ready to Cook Like a Pro?
        </Typography>
        <Typography variant="h6" sx={{ mt: 2, opacity: 0.9 }}>
          Join now and unlock premium features for your culinary journey!
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 3, backgroundColor: '#ff3366', padding: '12px 24px', fontSize: '16px', borderRadius: '25px', boxShadow: '0px 4px 12px rgba(255, 51, 102, 0.4)', '&:hover': { backgroundColor: '#cc0052' } }}
          component="a"
          href="/login"
        >
          Join Now
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
