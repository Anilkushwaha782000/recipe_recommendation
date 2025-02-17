import mongoose from "mongoose";
const customMealSchema=mongoose.Schema({
    recipe_name:{type:String,required:true},
    userRef: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    ingredients:{type:String,required:true},
    instructions:{type:String,required:true},
    createdAt:{type:Date,default:Date.now},
    category:{type:String,required:true},
    calories:{type:String,required:true},
    fat:{type:String,required:true},
    carbs:{type:String,required:true},
    protein:{type:String,required:true},

})
const customrecipe=mongoose.model("CustomRecipe",customMealSchema)
export default customrecipe