import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Tooltip,
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
import DeleteIcon from '@mui/icons-material/Delete';
import EditProfileModal from "../component/EditProfileModal";
import EditIcon from "@mui/icons-material/Edit";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import useAuthStore from "../store/userAuthStore";
import axios from "axios";
import { ToastContainer, toast, Slide } from 'react-toastify';
const ProfilePage = () => {
  const [tabValue, setTabValue] = useState(0);
  const [openModal, setOpenModal] = useState(true);
  const [dietaryPreferences, setDietaryPreferences] = useState([]);
  const [cuisinePreferences, setCuisinePreferences] = useState([]);
  const user = useAuthStore((state) => state.user)
  const update = useAuthStore((state) => state.update);
  const [isEditing, setIsEditing] = useState(false);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const signout = useAuthStore((state) => state.signout);
  useEffect(() => {
    if (!user) return
    const fetchCustomMealdata = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/getusercustommeal?userId=${user.id}`)
        setSavedRecipes(response.data)
      } catch (error) {
        console.error("Error fetching meals:", error.message);
      }
    }
    fetchCustomMealdata();
  }, [user])
  const notify = (user, msg,callback) => {
    if (!user) return
    if (user) {
      toast(msg, { transition: Slide, autoClose: 1000, onClose: callback ? () => callback() : undefined });
    }
  };
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };
  const handleClose = () => {
    setIsEditing(false);
  };
  const handleSave = (updatedUser) => {
    update(updatedUser);
    notify(user, "Profile updated Successfully!!",() => {
      setIsEditing(false);
    });
  };
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      signout(user.id);
    } catch (error) {
      console.log("There is some error " + error.message);
    }
  }
  const onDelete=async(id)=>{
  try {
    const response=await axios.post(`http://localhost:5000/api/v1/deletecustomrecipe/${id}`,{userId:user.id},{withCredentials: true,
      headers:{
        'Content-Type': 'application/json',
      }
     })
    if(response.statusText=="OK"){
      notify(user, "Meal deleted Successfully!!");
      setSavedRecipes(savedRecipes.filter((recipe) => recipe._id !== id))
    }
  } catch (error) {
    console.log("There is some error when deleting recipe" + error.message);
  }
  }
  return (
    <Box sx={{ px: 3, py: 4, maxWidth: 1200, mx: "auto" }}>
      <ToastContainer position="top-center" />
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
          <motion.div
            whileHover={{ rotateX: 10, rotateY: 10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            style={{ display: "inline-block" }}
          >
            <Tooltip title={user?.email || "test@gmail.com"}>
              <Avatar
                src="https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Blank&facialHairType=Blank&clotheType=CollarSweater&clotheColor=PastelRed&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                alt="Profile Picture"
                sx={{ width: 120, height: 120 }}
              />
            </Tooltip>
          </motion.div>
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
          {user && (
            <>
              <Typography variant="h5" fontWeight="bold">
                {user.username}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {user.email || "Test@gmail.com"}
              </Typography>
              <Typography variant="body2" color="textSecondary" mt={1}>
                Bio: Passionate about exploring cuisines and sharing recipes.
              </Typography>
            </>
          )}
        </Box>
        <Button
          startIcon={<EditIcon />}
          variant="outlined"
          onClick={() => handleEditClick()}
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
                <Grid item xs={12} sm={6} md={4} key={recipe._id} sx={{
                  position: "relative", 
                  "&:hover": {
                    "& .delete-icon": {
                      opacity: 1, 
                      visibility: "visible", 
                    },
                  },
                }}>
                  <IconButton
                     onClick={()=>onDelete(recipe._id)}
                    color="error"
                    className="delete-icon"
                    sx={{
                      position: "absolute", 
                      top: 10,
                      right: 2,
                      opacity: 0, 
                      visibility: "hidden", 
                      transition: "opacity 0.3s ease, visibility 0.3s ease",
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
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
                      alt={recipe.category}
                      style={{ width: "100%", height: 150, objectFit: "cover" }}
                    />
                    <Typography variant="body1" p={2}>
                      {recipe.recipe_name}
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
            <TextField fullWidth label="Email" value={user?.email || "test@gmail.com"} disabled sx={{ mb: 2 }} />
            <Button variant="contained" color="error" onClick={(e) => handleDelete(e)}>
              Delete Account
            </Button>
          </Box>
        )}
      </Box>
      {isEditing && <EditProfileModal onClose={handleClose} user={user} onSave={handleSave} />}
    </Box>
  );
};

export default ProfilePage;
