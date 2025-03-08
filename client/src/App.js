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
import ProtectedRoute from "./component/ProtectedRoute";
import RecipeCategory from "./pages/RecipeCategory";
function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index  element={<HomePage />} />
        <Route path="/customrecipe" element={<ProtectedRoute><CustomRecipeCreation/></ProtectedRoute>} />
        <Route path="/recipes" element={<RecipeListingPage />} />
        <Route path="/recipe/:id" element={<RecipeCard />} />
        <Route path="/login" element={<AuthPage/>} />
        <Route path="/planner" element={<ProtectedRoute><DietaryPlanner/></ProtectedRoute>} />
        <Route path="/mealsummary" element={<MealSummary />} />
        <Route path="/addmeal" element={<ProtectedRoute><AddMealForm/></ProtectedRoute>}/>
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/meal" element={<RecipeCategory/>}/>
        <Route path="/profile" element={<ProtectedRoute><ProfilePage/></ProtectedRoute>} />
        </Route>
      </Routes>
  );
}

export default App;
