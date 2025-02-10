import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  MenuItem,
  IconButton,
} from "@mui/material";
import { Fastfood, CalendarToday } from "@mui/icons-material";
import addMeal from '../resources/images/addmeal.png';

function AddMealForm() {
  const [meal, setMeal] = useState({
    day: "",
    mealType: "",
    mealName: "",
    calories: "",
  });

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeal((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Meal Added:", meal);
  };

  return (
    <>
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Grid container spacing={4}>
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <img
            src={addMeal}
            alt="Add Meal"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
            }}
          />
        </Grid>

        {/* Form Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={5} sx={{ p: 4, mb: 5, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "#333" }}>
              Meal Details
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                {/* Select Day */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    fullWidth
                    label="Select Day"
                    name="day"
                    value={meal.day}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    sx={{ backgroundColor: "#FFF", borderRadius: 1 }}
                    InputProps={{
                      startAdornment: (
                        <IconButton position="start">
                          <CalendarToday />
                        </IconButton>
                      ),
                    }}
                  >
                    {daysOfWeek.map((day) => (
                      <MenuItem key={day} value={day}>
                        {day}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                {/* Select Meal Type */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    fullWidth
                    label="Meal Type"
                    name="mealType"
                    value={meal.mealType}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    sx={{ backgroundColor: "#FFF", borderRadius: 1 }}
                    InputProps={{
                      startAdornment: (
                        <IconButton position="start">
                          <Fastfood />
                        </IconButton>
                      ),
                    }}
                  >
                    {mealTypes.map((type) => (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                {/* Meal Name */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Meal Name"
                    name="mealName"
                    value={meal.mealName}
                    onChange={handleChange}
                    variant="outlined"
                    placeholder="e.g., Grilled Chicken Salad"
                    required
                    sx={{ backgroundColor: "#FFF", borderRadius: 1 }}
                  />
                </Grid>

                {/* Calories */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type="number"
                    label="Calories"
                    name="calories"
                    value={meal.calories}
                    onChange={handleChange}
                    variant="outlined"
                    placeholder="e.g., 250"
                    sx={{ backgroundColor: "#FFF", borderRadius: 1 }}
                  />
                </Grid>

                {/* Submit Button */}
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                      mt: 2,
                      py: 1.5,
                      textTransform: "none",
                      backgroundColor: "#8f80c1",
                      "&:hover": { backgroundColor: "#8de3a2" },
                    }}
                  >
                    Add Meal
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
    
    <Box
        sx={{
          backgroundColor: "#f3f3f3",
          borderRadius: 2,
          textAlign: "center",
          p: 3,
        }}
      >
        <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold", color: "#333" }}>
          Ready to review your weekly meals?
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          component="a"
          href="/meal-summary"
          sx={{
            px: 4,
            textTransform: "none",
            backgroundColor: "#8f80c1",
            "&:hover": { backgroundColor: "#ff7f3e" },
          }}
        >
          View Meal Summary
        </Button>
      </Box>
    </>
  );
}

export default AddMealForm;
