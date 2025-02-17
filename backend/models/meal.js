import mongoose, { model } from "mongoose";
const addMelaSchema=new mongoose.Schema({
    mealname:{type:String,required:true},
    mealtype:{type:String,required:true},
    day:{type:String,required:true},
    calories:{type:String,required:true},
    createdAt:{type:Date,default:Date.now},
    userRef: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

})
const addmeal=mongoose.model("Addmeal",addMelaSchema)
export default addmeal