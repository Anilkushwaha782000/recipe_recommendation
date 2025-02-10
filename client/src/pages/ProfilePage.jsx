import React, { useState } from "react";
import {
  Box,
  Avatar,
  Typography,
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  IconButton,
  Divider,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Chip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

const ProfilePage = () => {
  const [tabValue, setTabValue] = useState(0);
  const [dietaryPreferences, setDietaryPreferences] = useState([]);
  const [cuisinePreferences, setCuisinePreferences] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([
    { id: 1, title: "Spaghetti Carbonara", image: "https://via.placeholder.com/150" },
    { id: 2, title: "Chicken Curry", image: "https://via.placeholder.com/150" },
  ]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ px: 3, py: 4, maxWidth: 1200, mx: "auto" }}>
      {/* User Info Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 4,
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
        }}
      >
        <Box position="relative">
          <Avatar
            src="https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Blank&facialHairType=Blank&clotheType=CollarSweater&clotheColor=PastelRed&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
            alt="Profile Picture"
            sx={{ width: 120, height: 120 }}
          />
          <IconButton
            size="small"
            sx={{
              position: "absolute",
              bottom: 5,
              right: 5,
              backgroundColor: "white",
            }}
          >
            <AddAPhotoIcon />
          </IconButton>
        </Box>
        <Box>
          <Typography variant="h5" fontWeight="bold">
            John Doe
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            johndoe@example.com
          </Typography>
          <Typography variant="body2" color="textSecondary" mt={1}>
            Bio: Passionate about exploring cuisines and sharing recipes.
          </Typography>
        </Box>
        <Button
          startIcon={<EditIcon />}
          variant="outlined"
          sx={{ alignSelf: "flex-start" }}
        >
          Edit Profile
        </Button>
      </Box>

      {/* Tabs for Different Sections */}
      <Tabs value={tabValue} onChange={handleTabChange} variant="scrollable" scrollButtons="auto">
        <Tab label="Preferences" />
        <Tab label="Saved Recipes" />
        <Tab label="Shopping List" />
        <Tab label="Achievements" />
        <Tab label="Account Settings" />
      </Tabs>

      <Divider sx={{ my: 3 }} />

      {/* Tab Panels */}
      <Box>
        {tabValue === 0 && (
          <Box>
            {/* Preferences Section */}
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Dietary Preferences
            </Typography>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Select Dietary Preferences</InputLabel>
              <Select
                multiple
                value={dietaryPreferences}
                onChange={(e) => setDietaryPreferences(e.target.value)}
              >
                {["Vegetarian", "Vegan", "Gluten-Free", "Keto"].map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Typography variant="h6" fontWeight="bold" mb={2}>
              Favorite Cuisines
            </Typography>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Select Favorite Cuisines</InputLabel>
              <Select
                multiple
                value={cuisinePreferences}
                onChange={(e) => setCuisinePreferences(e.target.value)}
              >
                {["Italian", "Indian", "Mexican", "Chinese"].map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        )}

        {tabValue === 1 && (
          <Box>
            {/* Saved Recipes Section */}
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Saved Recipes
            </Typography>
            <Grid container spacing={2}>
              {savedRecipes.map((recipe) => (
                <Grid item xs={12} sm={6} md={4} key={recipe.id}>
                  <Box
                    sx={{
                      border: "1px solid #ddd",
                      borderRadius: 2,
                      overflow: "hidden",
                      cursor: "pointer",
                      "&:hover": { boxShadow: 3 },
                    }}
                  >
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      style={{ width: "100%", height: 150, objectFit: "cover" }}
                    />
                    <Typography variant="body1" p={2}>
                      {recipe.title}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {tabValue === 2 && (
          <Box>
            {/* Shopping List Section */}
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Shopping List
            </Typography>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>🍎</Avatar>
                </ListItemAvatar>
                <ListItemText primary="Apples" secondary="2 kg" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>🥩</Avatar>
                </ListItemAvatar>
                <ListItemText primary="Chicken Breast" secondary="1.5 kg" />
              </ListItem>
            </List>
          </Box>
        )}

        {tabValue === 3 && (
          <Box>
            {/* Achievements Section */}
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Achievements
            </Typography>
            <Box display="flex" gap={2} flexWrap="wrap">
              <Chip label="First Recipe Cooked!" color="primary" />
              <Chip label="5 Cuisines Tried" color="success" />
              <Chip label="10 Recipes Saved" color="warning" />
            </Box>
          </Box>
        )}

        {tabValue === 4 && (
          <Box>
            {/* Account Settings Section */}
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Account Settings
            </Typography>
            <TextField fullWidth label="Email" value="johndoe@example.com" disabled sx={{ mb: 2 }} />
            <Button variant="contained" color="error">
              Delete Account
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ProfilePage;
