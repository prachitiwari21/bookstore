import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import bookRouter from "./routes/bookRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'

// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())  // using this , whenerver we get request from frontend, it will be parsed using json
app.use(cors())   // using this we can access backend from frontend

// db connection
connectDB();

//api endpoints
app.use("/api/book",bookRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)


app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`);
})

// mongodb+srv://prachitiwari:prachi0659@cluster0.teeunpx.mongodb.net/?