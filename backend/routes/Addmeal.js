import express from "express";
import addmeal from "../models/meal.js";
import User from "../models/User.js";
import dailygoal from "../models/goal.js";
import customrecipe from "../models/custommeal.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import connectionDatabase from "../dbUtil/ConnectDb.js";
dotenv.config();
const router = express.Router();
connectionDatabase()
router.post("/addmeal", async (req, res) => {
    try {
        const{mealname,mealtype,day,calories,userId}=req.body;
        const existUser=await User.findById(userId);
        if(!existUser) return res.status(404).json({message:"User not found"});
        const newMeal=new addmeal({mealname,mealtype,day,calories,userRef:userId});
        const savedMeal=await newMeal.save();
        return res.status(201).json({message:"Meal added successfully",savedMeal});
        
    } catch (error) {
        res.status(500).json({message:error.message});
    }
})
router.get("/getusermeal",async (req,res)=>{
    try {
        const {userId}=req.query
        if(!userId) return res.status(404).json({message:"User Id is required"})
        const meals = await addmeal.find({ userRef:userId });
        return res.json(meals);

    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
})
router.get("/getusercustommeal",async (req,res)=>{
    try {
        const {userId}=req.query
        if(!userId) return res.status(404).json({message:"User Id is required"})
        const custommeals = await customrecipe.find({ userRef:userId });
        return res.json(custommeals);

    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
})
router.post("/savegoal",async(req,res)=>{
    try {
        const{dailycalories,protine,userId}=req.body;
        const existUser=await User.findById(userId);
        if(!existUser) return res.status(404).json({message:"User not found"});
        const newgoal=new dailygoal({dailycalories,protine,userRef:userId});
        const savedgoal=await newgoal.save();
        return res.status(201).json({message:"Daily intake calories saved successfully",savedgoal});
        
    } catch (error) {
        res.status(500).json({message:error.message});
    }
})
router.post("/customrecipe",async(req,res)=>{
    try {
        const{protein,recipe_name,ingredients,instructions,category,calories,fat,carbs,userId}=req.body;
        const existUser=await User.findById(userId);
        if(!existUser) return res.status(404).json({message:"User not found"});
        const newcustommeal=new customrecipe({protein,recipe_name,ingredients,instructions,category,calories,fat,carbs,userRef:userId});
        const custommeal=await newcustommeal.save();
        return res.status(201).json({message:"Custom recipe details saved successfully",custommeal});
        
    } catch (error) {
        res.status(500).json({message:error.message});
    }
})
router.post("/deletecustomrecipe/:id",async(req,res)=>{
    try {
        const{userId}=req.body;
        const { id } = req.params; 
        const existUser=await User.findById(userId);
        if(!existUser) return res.status(404).json({message:"User not found"});
        const meal = await customrecipe.findOne({ _id: id, userRef:userId });
        if (!meal) {
            return res.status(404).json({ message: "Meal not found or unauthorized to delete" });
        }
        const result = await customrecipe.findByIdAndDelete(id);
        if (!result) {
         return res.status(404).json({ message: 'Recipe not found' });
        }
        return res.status(200).json({message:"Recipe deleted successfully"});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
})
router.post("/deletemeal/:id",async(req,res)=>{
    try {
        const{userId}=req.body;
        const { id } = req.params; 
        const existUser=await User.findById(userId);
        if(!existUser) return res.status(404).json({message:"User not found"});
        const meal = await addmeal.findOne({ _id: id, userRef:userId });
        if (!meal) {
            return res.status(404).json({ message: "Meal not found or unauthorized to delete" });
        }
        const result = await addmeal.findByIdAndDelete(id);
        if (!result) {
         return res.status(404).json({ message: 'Recipe not found' });
        }
        return res.status(200).json({message:"Recipe deleted successfully"});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
})
// router.get("/getcategorizedmeal",async (req,res)=>{
//     try {
//         const {category,userId}=req.query
//         if(!userId) return res.status(404).json({message:"User Id is required"})
//         const URL=`https://forkify-api.herokuapp.com/api/search?q=${category}`
//         const fetchedmealdata= await fetch(URL)
//         if (!fetchedmealdata.ok) {
//             return res.status(fetchedmealdata.status).json({ message: 'Failed to fetch data from the API' });
//         }
//         const data = await fetchedmealdata.json();
//         return res.json(data);
//     } catch (error) {
//         return res.status(500).json({ error: error.message});
//     }
// })
export default router;

