import React, { useState } from 'react';
import {
  Box,
  TextField,
  Typography,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import { FileUpload } from '@mui/icons-material';
import customRecipeBanner from '../resources/images/custom.png';
import useAuthStore from '../store/userAuthStore';
import useRecipeStore from '../store/userStoreddata';
const categories = ['Appetizer', 'Main Dish', 'Dessert', 'Snack', 'Beverage'];
import { ToastContainer, toast,Slide } from 'react-toastify';
const CustomRecipeCreation = () => {
  const user=useAuthStore((state)=>state.user)

  const addcustomMeal=useRecipeStore((state)=>state.addCustommeal)
  const [recipe, setRecipe] = useState({
    recipe_name: '',
    ingredients: '',
    instructions: '',
    calories: '',
    protein: '',
    carbs: '',
    fat: '',
    category: '',
    image: null,
  });
    const notify = (user,msg) => {
      if(!user)return
      if(user){
        toast(msg, { transition: Slide, autoClose: 1000 });
      }
    };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prevRecipe) => ({ ...prevRecipe, [name]: value }));
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setRecipe((prevRecipe) => ({ ...prevRecipe, image: URL.createObjectURL(file) }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedMeal = {
      ...recipe,
      userId: user.id,
    };
    setRecipe(updatedMeal);
    try {
      addcustomMeal(updatedMeal);
      notify(user,"Custom recipe saved Successfully!!");
    } catch (error) {
      console.log('There is some error while saving the data:', error.message);
    }
    console.log('Recipe submitted:', recipe);
  };

  return (
    <Box sx={{ py: 5, maxWidth: 1200, mx: 'auto'}}>
      <ToastContainer position="top-center"/> 
      <Grid container spacing={4}>
        {/* Image Section */}
        <Grid item xs={12} md={5}>
          <Card
            sx={{
              borderRadius: 2,
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              height: '100%',
            }}
          >
            <CardMedia
              component="img"
              height="100%"
              image={recipe.image || customRecipeBanner}
              alt="Recipe Image"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" textAlign="center">
                {recipe.image ? 'Uploaded Recipe Photo' : 'Default Recipe Banner'}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Form Section */}
        <Grid item xs={12} md={7}>
  <Paper
    sx={{
      padding: 4,
      borderRadius: 5,
      boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.15)',
      background: 'linear-gradient(135deg, #f5f5f5, #ffffff)',
    }}
  >
    <Typography
      variant="h4"
      align="center"
      fontWeight="bold"
      gutterBottom
      sx={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '0.5px' }}
    >
      Create Your Custom Recipe
    </Typography>

    <form onSubmit={handleSubmit}>
      <TextField
        label="Recipe Name"
        name="recipe_name"
        fullWidth
        variant="outlined"
        value={recipe.recipe_name}
        onChange={handleInputChange}
        sx={{
          mb: 3,
          borderRadius: 2,
          backgroundColor: '#fafafa',
          '& .MuiInputBase-root': {
            borderRadius: '10px',
          },
        }}
      />
      <TextField
        label="Ingredients (comma separated)"
        name="ingredients"
        fullWidth
        variant="outlined"
        value={recipe.ingredients}
        onChange={handleInputChange}
        multiline
        rows={4}
        sx={{
          mb: 3,
          borderRadius: 2,
          backgroundColor: '#fafafa',
          '& .MuiInputBase-root': {
            borderRadius: '10px',
          },
        }}
      />
      <TextField
        label="Preparation Steps"
        name="instructions"
        fullWidth
        variant="outlined"
        value={recipe.instructions}
        onChange={handleInputChange}
        multiline
        rows={6}
        sx={{
          mb: 3,
          borderRadius: 2,
          backgroundColor: '#fafafa',
          '& .MuiInputBase-root': {
            borderRadius: '10px',
          },
        }}
      />

      <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
        Nutritional Information
      </Typography>
      <Grid container spacing={2}>
        {['calories', 'protein', 'carbs', 'fat'].map((field) => (
          <Grid item xs={6} sm={3} key={field}>
            <TextField
              label={field.charAt(0).toUpperCase() + field.slice(1)}
              name={field}
              fullWidth
              variant="outlined"
              value={recipe.field}
              onChange={handleInputChange}
              sx={{
                borderRadius: 2,
                backgroundColor: '#fafafa',
                '& .MuiInputBase-root': {
                  borderRadius: '10px',
                },
              }}
            />
          </Grid>
        ))}
      </Grid>

      <FormControl fullWidth sx={{ mt: 4 }}>
        <InputLabel>Category</InputLabel>
        <Select
          label="Category"
          name="category"
          value={recipe.category}
          onChange={handleInputChange}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '10px',
            },
          }}
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button
        variant="contained"
        component="label"
        startIcon={<FileUpload />}
        sx={{
          mt: 3,
          background: 'linear-gradient(135deg, #f06292, #8e24aa)',
          borderRadius: 3,
          '&:hover': { background: '#ad1457' },
        }}
      >
        Upload Recipe Photo
        <input type="file" hidden accept="image/*" onChange={handleImageChange} />
      </Button>

      <Button
        variant="contained"
        type="submit"
        fullWidth
        sx={{
          mt: 4,
          background: 'linear-gradient(135deg, #8e24aa, #6d1b7b)',
          color: 'white',
          borderRadius: 3,
          '&:hover': { background: '#6d1b7b' },
        }}
      >
        Submit Recipe
      </Button>
    </form>
  </Paper>
</Grid>

      </Grid>
    </Box>
  );
};

export default CustomRecipeCreation;
