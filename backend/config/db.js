import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://prachitiwari:prachi0659@cluster0.teeunpx.mongodb.net/BookAttic').then(()=>console.log("DB connected"))
}