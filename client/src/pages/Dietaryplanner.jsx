import React, { useState } from "react";
import planner from '../resources/images/planner.png';
import {
  Container,
  Box,
  Grid,
  Typography,
  Button,
  Paper,
  TextField,
  Menu,
  MenuItem,
  Snackbar,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Slide } from "@mui/material";
import { Add, Edit, Delete } from "@mui/icons-material";

function DietaryPlanner() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [goalSaved, setGoalSaved] = useState(false);
  const openMenu = Boolean(anchorEl);
  const openSnackbar = goalSaved;

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSaveGoals = () => {
    // Save goals logic here
    setGoalSaved(true);
  };

  const handleCloseSnackbar = () => {
    setGoalSaved(false);
  };

  return (
    <Container maxWidth={false} sx={{ mt: 3, padding: 0 }}>
      {/* Banner Section */}
      <Box
  sx={{
    position: "relative",
    height: 350,
    background: "linear-gradient(135deg, #6a1b9a, #ff6b6b)",
    borderRadius: 2,
    mb: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(255, 255, 255, 0.08)",
      borderRadius: 2,
      backdropFilter: "blur(8px)",
    },
  }}
>
  <Typography
    variant="h3"
    color="white"
    fontWeight="bold"
    sx={{
      zIndex: 1,
      fontFamily: "Poppins, sans-serif",
      textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
    }}
  >
    Your Personalized Dietary Planner
  </Typography>
</Box>


      {/* Main Content */}
      <Grid container spacing={4}>
        {/* Goals Section */}
        <Grid item xs={12} md={4}>
  <Paper elevation={6} sx={{ padding: 4, borderRadius: 4, boxShadow: theme.shadows[8], backgroundColor: '#ffffff' }}>
    <Typography
      variant="h5"
      fontWeight="bold"
      gutterBottom
      color="primary"
      sx={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '0.5px', textAlign: 'center' }}
    >
      Set Your Dietary Goals
    </Typography>

    <TextField
      fullWidth
      label="Daily Calories Goal"
      variant="outlined"
      sx={{
        mb: 3,
        borderRadius: '10px',
        backgroundColor: '#fafafa',
        '& .MuiInputBase-root': {
          borderRadius: '10px',
        },
      }}
      InputLabelProps={{
        style: { fontFamily: 'Poppins, sans-serif' },
      }}
    />
    
    <TextField
      fullWidth
      label="Daily Protein Goal (g)"
      variant="outlined"
      sx={{
        mb: 3,
        borderRadius: '10px',
        backgroundColor: '#fafafa',
        '& .MuiInputBase-root': {
          borderRadius: '10px',
        },
      }}
      InputLabelProps={{
        style: { fontFamily: 'Poppins, sans-serif' },
      }}
    />

    <Button
      fullWidth
      variant="contained"
      color="primary"
      sx={{
        py: 1.5,
        fontWeight: "bold",
        fontFamily: 'Poppins, sans-serif',
        borderRadius: 20,
        '&:hover': {
          backgroundColor: theme.palette.primary.dark,
        },
      }}
      onClick={handleSaveGoals}
    >
      Save Goals
    </Button>
  </Paper>
</Grid>


        {/* Weekly Meal Plan Section */}
        <Grid item xs={12} md={8} sx={{ marginBottom: '8px' }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom color="secondary" sx={{ fontFamily: 'Poppins, sans-serif' }}>
            Your Weekly Meal Plan
          </Typography>
          <Grid container spacing={3}>
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(
              (day) => (
                <Grid item xs={12} sm={6} md={4} key={day}>
                <Paper
                  elevation={4}
                  sx={{
                    padding: 3,
                    textAlign: "center",
                    borderRadius: "16px",
                    background: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
                    color: "white",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.15)",
                    },
                  }}
                >
                  <Typography 
                    variant="h6" 
                    fontWeight="bold" 
                    sx={{ 
                      fontFamily: "Poppins, sans-serif",
                      textTransform: "uppercase",
                      letterSpacing: "1px"
                    }}
                  >
                    {day}
                  </Typography>
              
                  <Button
                    variant="contained"
                    sx={{ 
                      mt: 2, 
                      fontWeight: "bold", 
                      fontFamily: "Poppins, sans-serif",
                      borderRadius: "30px",
                      background: "white",
                      color: "#ff6b6b",
                      "&:hover": {
                        background: "#ffe0e0",
                      }
                    }}
                    component="a"
                    href="/add-meal"
                  >
                    Add Meal
                  </Button>
                </Paper>
              </Grid>              
              )
            )}
          </Grid>
        </Grid>
      </Grid>

      {/* Floating Action Button */}
      <Box sx={{ position: "fixed", bottom: 20, right: 20, zIndex: 10 }}>
        <IconButton
          variant="contained"
          color="secondary"
          sx={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            boxShadow: theme.shadows[4],
            transition: "transform 0.3s",
            backgroundColor: '#6a1b9a',
            "&:hover": {
              transform: "scale(1.1)",
              backgroundColor: '#8e24aa',
            },
          }}
          onClick={handleMenuClick}
        >
          <Add sx={{ color: 'white' }} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleMenuClose}
          PaperProps={{
            sx: { maxHeight: 200, borderRadius: 2, boxShadow: theme.shadows[4] },
          }}
        >
          <MenuItem onClick={handleMenuClose} sx={{ fontFamily: 'Poppins, sans-serif' }}><Add sx={{ mr: 1 }} />Add New Meal</MenuItem>
          <MenuItem onClick={handleMenuClose} sx={{ fontFamily: 'Poppins, sans-serif' }}><Edit sx={{ mr: 1 }} />Edit Meal</MenuItem>
          <MenuItem onClick={handleMenuClose} sx={{ fontFamily: 'Poppins, sans-serif' }}><Delete sx={{ mr: 1 }} />Delete Meal</MenuItem>
        </Menu>
      </Box>
      {/* Snackbar Notification */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        TransitionComponent={Slide}
        message="Goals Saved Successfully!"
        sx={{ fontFamily: 'Poppins, sans-serif' }}
        // action={
        //   <IconButton size="small" color="inherit" onClick={handleCloseSnackbar}>
        //     <Close fontSize="small" />
        //   </IconButton>
        // }
      />
    </Container>
  );
}

export default DietaryPlanner;