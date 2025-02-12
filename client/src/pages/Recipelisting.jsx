import React, { useState } from "react";
import FoodListening from "../resources/images/FoodListening.png";
import chicken from "../resources/images/chicken.png";
import avocado from "../resources/images/av0cado.png";
import carbonara from "../resources/images/carbonara.png";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { motion } from "framer-motion";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  Container,
  InputAdornment,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RecipeCard from "./RecipeCard";

const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish with creamy sauce.",
    image: `${carbonara}`,
    rating: 4.5,
    prepTime: "30 mins",
  },
  {
    id: 2,
    title: "Chicken Curry",
    description: "Spicy and flavorful curry for any occasion.",
    image: `${chicken}`,
    rating: 4.8,
    prepTime: "45 mins",
  },
  {
    id: 3,
    title: "Avocado Toast",
    description: "Healthy and quick breakfast option.",
    image: `${avocado}`,
    rating: 4.2,
    prepTime: "15 mins",
  },
  {
    id: 4,
    title: "Avocado Toast",
    description: "Healthy and quick breakfast option.",
    image: `${avocado}`,
    rating: 4.2,
    prepTime: "15 mins",
  },
  {
    id: 5,
    title: "Avocado Toast",
    description: "Healthy and quick breakfast option.",
    image: `${avocado}`,
    rating: 4.2,
    prepTime: "15 mins",
  },
];

function RecipeListingPage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const filteredRecipes = recipes
    .filter((recipe) =>
      recipe.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "rating") return b.rating - a.rating;
      if (sort === "prepTime") return parseInt(a.prepTime) - parseInt(b.prepTime);
      return 0;
    });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(filteredRecipes.length / itemsPerPage);
  const displayedRecipes = filteredRecipes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <Box sx={{ fontFamily: "Inter, sans-serif", background: "radial-gradient(#994f8d, #dbd3d305)" }}>
      <Box
        sx={{
          background: "linear-gradient(135deg, #ff6b6b, #6d1b7b)",
          textAlign: "center",
          py: 6,
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
         <motion.div
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }} 
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          color: "#fff",
          textTransform: "uppercase",
          letterSpacing: "1.5px",
        }}
      >
        Featured Recipes
      </Typography>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }} // Slight delay for the subtitle
      >
        <Typography
          variant="body1"
          mt={2}
          mb={4}
          sx={{ color: "#f8f8f8", opacity: 0.9 }}
        >
          Handpicked recipes to inspire your next meal.
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }} // Button appears with a slight scale effect
      >
        <Button
          variant="contained"
          sx={{
            fontWeight: "bold",
            borderRadius: "30px",
            padding: "12px 24px",
            background: "linear-gradient(45deg, #ff3d3d, #ff6b6b)",
            boxShadow: "0 4px 10px rgba(255, 107, 107, 0.4)",
            "&:hover": {
              background: "linear-gradient(45deg, #ff1e1e, #ff5252)",
            },
          }}
        >
          Explore Featured Recipes
        </Button>
      </motion.div>
    </motion.div>
      </Box>


      {/* Recipe Categories */}
    <Box sx={{ py: 6 }}>
      <Container>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          sx={{ color: "#6d1b7b", textTransform: "uppercase" }}
        >
          Recipe Categories
        </Typography>
        {/* Perspective added to Grid container */}
        <Grid 
          container 
          spacing={4} 
          mt={4} 
          sx={{ perspective: "1000px" }} // Perspective effect
        >
          {["Breakfast", "Lunch", "Dinner", "Desserts", "Snacks"].map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  borderRadius: "8px",
                  backgroundColor: "#fff",
                  transformStyle: "preserve-3d", // Ensures proper 3D effect
                  transition: "transform 0.5s ease",
                  "&:hover": {
                    transform: "rotateY(15deg) scale(1.05)", // Rotate and scale on hover
                    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    textAlign="center"
                    sx={{ color: "#6d1b7b" }}
                  >
                    {category}
                  </Typography>
                  <Typography
                    variant="body2"
                    textAlign="center"
                    mt={1}
                    sx={{ color: "#555" }}
                  >
                    Discover recipes perfect for {category.toLowerCase()}!
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>

      {/* Recipe Listing */}
      <Container sx={{ mt: 6, mb: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            mb: 4,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextField
            label="Search Recipes"
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              width: { xs: "100%", sm: "300px" },
              backgroundColor: "#fff",
              borderRadius: "30px",
              paddingLeft: "16px",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ color: "#6d1b7b" }}>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            aria-label="Search Recipes"
          />
          <Select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            displayEmpty
            sx={{
              width: { xs: "100%", sm: "200px" },
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "30px",
            }}
            aria-label="Sort Recipes"
          >
            <MenuItem value="">Sort By</MenuItem>
            <MenuItem value="rating">Rating</MenuItem>
            <MenuItem value="prepTime">Preparation Time</MenuItem>
          </Select>
        </Box>

        <Grid container spacing={4}>
          {displayedRecipes.map((recipe) => (
            <Grid item xs={12} sm={6} md={4} key={recipe.id}>
              <RecipeCard {...recipe} />
            </Grid>
          ))}
        </Grid>

        <Stack spacing={2} sx={{ alignItems: "center", mt: 4}}>
          <Pagination
            count={totalPages}
            color="secondary"
            page={currentPage}
            onChange={handlePageChange}
            sx={{
              borderRadius: "30px",
              padding: "10px 20px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              border: "1px solid white",
              background: "aliceblue" 
            }}
          />
        </Stack>
      </Container>

      {/* Newsletter Section */}
      <Box sx={{ backgroundColor: "#6d1b7b", textAlign: "center", py: 8, color: "white", borderRadius: "8px" }}>
        <Typography variant="h4" fontWeight="bold" sx={{ textTransform: "uppercase" }}>
          Stay Inspired with New Recipes!
        </Typography>
        <Typography variant="body1" mt={2} mb={4}>
          Sign up for our newsletter to receive the latest recipes, cooking tips, and more.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
          <TextField
            placeholder="Enter your email"
            variant="outlined"
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              width: { xs: "90%", sm: "400px" },
            }}
            InputProps={{ style: { color: "black" } }}
          />
          <Button
            variant="contained"
            color="secondary"
            sx={{
              fontWeight: "bold",
              backgroundColor: "#ff6b6b",
              "&:hover": {
                backgroundColor: "#ff3d3d",
              },
              borderRadius: "30px",
              padding: "12px 24px",
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default RecipeListingPage;
