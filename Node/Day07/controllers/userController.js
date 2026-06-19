import userModel from "../model/userModel.js"
import bcrypt from "bcrypt"

export const userRegister= async(req,res)=>{

    try {
        const {name,email,password} = req.body

        if(!name || !email || !password){
            res.status(400).json({msg:"Fill required columns"})
            return
        }

        const existingUser = await userModel.findOne({email})

        if(existingUser){
            res.status(400).json({msg:"Email already exists"})
            return
        }

        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = await userModel.create({name,email,password:hashedPassword})
        res.status(201).json({msg:"User successfully created"})
        
    } catch (error) {

        console.log("Error",error);
        res.status(500).json({msg:"Error",error})
 
    }
}

export const userLogin =async(req,res)=>{

    try {

        const {email,password} = req.body
        const user = await userModel.findOne({email})
        if(!user){
            res.status(404).json({msg:"User not found"})
            return
        }

        const checkPass = await bcrypt.compare(password,user.password)
        if(!checkPass){
            res.status(400).json({msg:"Invalid password"})
            return
        }
        res.status(200).json({msg:"Successfully login"});
        
    } catch (error) {
        console.log("Error",error);
        res.status(500).json({msg:"Error",error})
        
    }
}

export const getUser=async(req,res)=>{
    try {
    const users = await userModel.find();
    res.json({ msg: "Users fetched", users })
  } catch (error) {
    res.status(500).json({msg:"Error fetching users"})
  }

}