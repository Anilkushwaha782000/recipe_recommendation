import React from "react";
import { Card, CardMedia, CardContent, Typography, Box, Rating } from "@mui/material";

function RecipeCard({ title, description, image, rating, prepTime }) {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={`${title} image`}
      />
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Rating value={rating} precision={0.5} readOnly />
          <Typography variant="body2">{prepTime}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default RecipeCard;
