import HomePage from "./component/Home";
import CustomRecipeCreation from "./pages/Customrecipe";
import RecipeListingPage from "./pages/Recipelisting";
import RecipeCard from "./pages/RecipeCard";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import DietaryPlanner from "./pages/Dietaryplanner";
import MealSummary from "./pages/Mealsummary";
import AddMealForm from "./pages/Mealform";
import AboutUsPage from "./pages/AboutUs";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./component/Layout";
import React from 'react';
function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index  element={<HomePage />} />
        <Route path="/custom-recipe" element={<CustomRecipeCreation />} />
        <Route path="/recipes" element={<RecipeListingPage />} />
        <Route path="/recipe/:id" element={<RecipeCard />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/planner" element={<DietaryPlanner />} />
        <Route path="/meal-summary" element={<MealSummary />} />
        <Route path="/add-meal" element={<AddMealForm />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/my-profile" element={<ProfilePage />} />
        </Route>
      </Routes>
  );
}

export default App;
