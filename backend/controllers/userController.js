import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'  // authentication
import bcrypt from 'bcrypt'   // encryption
import validator from "validator";

// login user
const loginUser = async (req,res) => {
    const {email,password} = req.body;
    try{
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(400).json({success:false,message:"Invalid email or password"});
        }
        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.status(400).json({success:false,message:"Invalid email or password"});
        }
        const token = createToken(user._id);
        res.json({success:true,token})
    }
    catch(err){
        console.log(err);
        res.json({success:false,message:err})
    }
}

const createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

// register user
const registerUser = async (req,res) => {
    const {name,password,email} = req.body;
    try{
        // checking if user already exists
        const exists = await userModel.findOne({email})
        if(exists){
            return res.json({success:false,message:"User already exists"})
        }

        // validating email format and strong password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter a valid email"})
        }
        if(password.length < 8){
            return res.json({success:false,message:"Please enter a strong password"})
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new userModel({
            name: name,
            email:email,
            password:hashedPassword
        })

        // save user in database
        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true,token})
        
    }catch(err){
        console.log(err)
        res.json({success:false,message:err})
    }
}

export  {loginUser,registerUser}