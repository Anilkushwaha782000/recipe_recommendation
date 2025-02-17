import { create } from "zustand";
import axios from "axios";
const useRecipeStore = create((set,get) => ({
    savedRecipes: [],
    savedGoal:[],
    customRecipe:[],
    addRecipe: async (updatedMeal) => {
        try {
            const responsedata=await axios.post("http://localhost:5000/api/v1/addmeal",updatedMeal,{
                withCredentials:true,
                headers:{
                  'Content-Type': 'application/json',
                }
              })
          const newRecipe = await responsedata.data.savedMeal;
          set((state) => ({ savedRecipes: [...state.savedRecipes, newRecipe] }));
        } catch (error) {
          console.error("Error adding recipe:", error);
        }
      },
      addGoal: async (goalData) => {
        try {
            const responsedata=await axios.post("http://localhost:5000/api/v1/savegoal",goalData,{
                withCredentials:true,
                headers:{
                  'Content-Type': 'application/json',
                }
              })
          const newgoal = await responsedata.data.savedgoal;
          set((state) => ({ savedGoal: [...state.savedRecipes, newgoal] }));
        } catch (error) {
          console.error("Error adding recipe:", error);
        }
      },
      addCustommeal: async (custommealdata) => {
        try {
            const responsedata=await axios.post("http://localhost:5000/api/v1/customrecipe",custommealdata,{
                withCredentials:true,
                headers:{
                  'Content-Type': 'application/json',
                }
              })
          const custommeal = await responsedata.data.custommeal;
          set((state) => ({ customRecipe: [...state.customRecipe, custommeal] }));
        } catch (error) {
          console.error("Error adding recipe:", error);
        }
      },
    
}));

export default useRecipeStore;
