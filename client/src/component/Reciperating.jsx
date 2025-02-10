import React, { useState } from "react";
import { Grid, Typography, TextField, Button, Box } from "@mui/material";
import RecipeCard from "./ReciepeCard";

const recipesData = [
  {
    title: "Spaghetti Carbonara",
    description: "Classic Italian pasta dish with creamy sauce.",
    image: "https://via.placeholder.com/200",
    rating: 4.5,
    reviews: 120,
  },
  {
    title: "Chicken Curry",
    description: "Spicy and flavorful curry for any occasion.",
    image: "https://via.placeholder.com/200",
    rating: 4.8,
    reviews: 200,
  },
];

function RecipeRatingPage() {
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newReview = {
      name: formData.get("name"),
      comment: formData.get("comment"),
    };
    setReviews([...reviews, newReview]);
    e.target.reset();
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Top Rated Recipes
      </Typography>
      <Grid container spacing={2}>
        {recipesData.map((recipe, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <RecipeCard {...recipe} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h5" gutterBottom>
          Leave a Review
        </Typography>
        <form onSubmit={handleReviewSubmit}>
          <TextField
            fullWidth
            name="name"
            label="Your Name"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            name="comment"
            label="Your Review"
            variant="outlined"
            margin="normal"
            required
            multiline
            rows={4}
          />
          <Button variant="contained" color="primary" type="submit">
            Submit Review
          </Button>
        </form>
      </Box>

      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h5" gutterBottom>
          Reviews
        </Typography>
        {reviews.map((review, index) => (
          <Box key={index} sx={{ marginBottom: 2 }}>
            <Typography variant="subtitle1">{review.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {review.comment}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default RecipeRatingPage;
