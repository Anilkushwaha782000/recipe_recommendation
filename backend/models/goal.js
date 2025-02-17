import mongoose from "mongoose";
const goalSchema=mongoose.Schema({
    dailycalories:{type:String,required:true},
    protine:{type:String,required:true},
    creatdAt:{
        type:Date,
        default:Date.now
    },
    userRef: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
})
const dailygoal=mongoose.model("Dailygoal",goalSchema)
export default dailygoal