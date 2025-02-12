import React from "react";
import { Card, CardMedia, CardContent, Typography, Box, Rating } from "@mui/material";

function RecipeCard({ title, description, image, rating, prepTime }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: 6, // Increased shadow for depth
        transform: "rotateY(10deg)", // Tilt the card slightly for a 3D effect
        transition: "transform 0.3s ease-in-out",
        perspective: "1000px", // Creates the 3D depth effect
        "&:hover": {
          transform: "rotateY(0deg) scale(1.05)", // Straighten and enlarge on hover
          boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.3)", // Stronger shadow for hover
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={`${title} image`}
        sx={{
          transform: "translateZ(20px)", // Pops the image forward slightly
          transition: "transform 0.3s ease-in-out",
        }}
      />
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          gutterBottom
          sx={{ transform: "translateZ(10px)", transition: "transform 0.3s ease-in-out" }}
        >
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
