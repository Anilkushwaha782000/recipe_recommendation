import express from "express";
import User  from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const router = express.Router();
const secret = process.env.JWT_SECRET;
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }
    const salt=await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ username, email, password:hashedPassword });
    await newUser.save();
    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
router.post("/login",async(req,res)=>{
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if(!user)return res.status(404).json({message:"User not found"});
    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch)return res.status(401).json({message:"Invalid crdentials"});
    const token=jwt.sign({
      id:user._id,
      email:user.email,
      username:user.username
    },process.env.JWT_SECRET,{
      expiresIn:"1h"
    })
    return res.status(200).json({token,user: { id: user._id, username: user.username, email: user.email }});
  } catch (error) {
    return res.status(500).json({ error: err.message });
  }
})
router.post("/logout",async (req,res)=>{
  try {
  res.clearCookie("token", { httpOnly: true, secure: true, sameSite: "None" });
  return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    return res.status(500).json({ error: err.message });
    
  }
})
export default router;
