import React from "react";
import { Container, Box, Grid, Paper, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

function MealSummary({ mealPlan }) {
  const sampleMealPlan = {
    Monday: ["Breakfast: Oatmeal", "Lunch: Grilled Chicken Salad", "Dinner: Salmon with Veggies"],
    Tuesday: ["Breakfast: Smoothie", "Lunch: Turkey Sandwich", "Dinner: Stir-fry Tofu"],
    Wednesday: [],
    Thursday: ["Breakfast: Pancakes", "Lunch: Pasta Primavera"],
    Friday: ["Dinner: Pizza Night"],
    Saturday: ["Breakfast: Avocado Toast", "Lunch: Sushi"],
    Sunday: ["Lunch: BBQ Chicken", "Dinner: Spaghetti"],
  };

  const meals = mealPlan || sampleMealPlan;

  return (
    <Container maxWidth="" sx={{ mt: 3, pb: 5 }}>
      {/* Banner Section */}
      <Box
  sx={{
    position: "relative",
    height: 220,  // Slightly increased height for a more spacious feel
    background: "linear-gradient(135deg, #FF5F6D, #FFC371)", // Updated gradient for a more vibrant and modern look
    borderRadius: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: 8,
    mb: 5,
    transition: "all 0.3s ease-in-out",  // Smooth transition for hover effects
    "&:hover": {
      boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.2)", // Add hover effect with a deeper shadow
    },
  }}
>
  <Typography
    variant="h3"
    color="white"
    fontWeight={700}
    sx={{
      textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", // Adding a subtle text shadow for better readability
      letterSpacing: "0.5px",
      fontSize: "2.5rem",  // Adjusted font size for better impact
    }}
  >
    Weekly Meal Summary
  </Typography>
</Box>


      {/* Main Content */}
      <Grid container spacing={3}>
        {Object.keys(meals).map((day) => (
          <Grid item xs={12} sm={6} md={4} key={day}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Paper
                elevation={4}
                sx={{
                  p: 3,
                  height: "100%",
                  borderRadius: 3,
                  backgroundColor: "#ffffff",
                  transition: "0.3s",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                  "&:hover": {
                    boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <Typography variant="h6" textAlign="center" mb={2} color="primary" fontWeight={600}>
                  {day}
                </Typography>
                {meals[day].length > 0 ? (
                  <ul style={{ paddingLeft: "20px", margin: 0 }}>
                    {meals[day].map((meal, index) => (
                      <li key={index}>
                        <Typography variant="body1" sx={{ mb: 1 }}>
                          {meal}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    textAlign="center"
                    mt={2}
                    fontStyle="italic"
                  >
                    No meals added
                  </Typography>
                )}
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Call to Action Section */}
      <Box
  sx={{
    textAlign: "center",
    mt: 8,
    p: 5,  // Slightly increased padding for a more spacious feel
    background: "linear-gradient(135deg, #FF5F6D, #FFC371)", // Updated gradient for a more vibrant look
    borderRadius: 5,
    boxShadow: 6,
    transition: "all 0.3s ease-in-out",  // Smooth transition for hover effect
    "&:hover": {
      boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.15)", // More pronounced hover shadow
    },
  }}
>
  <Typography
    variant="h6"
    mb={3}  // Increased bottom margin for better spacing
    color="textPrimary"
    sx={{
      fontWeight: 600,  // Slightly bolder text for emphasis
      fontSize: "1.2rem",  // Adjusted font size for readability
      letterSpacing: "0.5px",  // Added letter spacing for a more elegant look
    }}
  >
    Want to make changes to your plan?
  </Typography>
  <Button
    variant="contained"
    sx={{
      textTransform: "none",
      px: 5,
      py: 1.5,
      fontSize: "1.2rem",  // Slightly larger font size for the button text
      borderRadius: 5,
      background: "linear-gradient(135deg, #8e2de2, #4a00e0)",  // Gradient background
      "&:hover": {
        background: "linear-gradient(135deg, #4a00e0, #8e2de2)",  // Reversed gradient on hover
        boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.1)",  // Add subtle shadow on hover
      },
      transition: "background 0.3s ease, box-shadow 0.3s ease",  // Smooth background and shadow transitions
    }}
  >
    Edit Your Plan
  </Button>
</Box>

    </Container>
  );
}

export default MealSummary;
