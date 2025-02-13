import mongoose from "mongoose";
const UserSchema=new mongoose.Schema({
    username: {
        type: String,
        required: [true, "username is required"],
        unique: true,
        minlength: [3, "Username must be at least 3 characters long"]
      },
      email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"]
      },
      password: {
        type: String,
        required: [true, "password is required"],
        minlength: [6, "Password must be at least 6 characters long"],
      },
      role:{
        type:String,
        enum:["admin","user"],
        default:"user"
      },
      createdAt:{
        type:Date,
        default:Date.now
      }
})
const User=mongoose.model("User",UserSchema)
export default User;