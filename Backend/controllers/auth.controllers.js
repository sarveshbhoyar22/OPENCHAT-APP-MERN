import User from "../models/user.model.js";
import express from "express";
import bcrypt from "bcryptjs";
import generateTokensAndSetCookies from "../utils/generateTokens.js";

export const signup = async (req, res) => {
  try {
    const { email, password, userName, fullName, gender, confirmPassword } =
      req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password don't Match" });
    }

    const user = await User.findOne({ userName });

    if (user) {
      return res.status(400).json({ error: "Username already exists in " });
    }

    //HASHING PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    // https://avatar-placeholder.iran.liara.run/

    const boysProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    const newUser = new User({
      email,
      fullName,
      userName,
      password: hashPassword,
      gender,
      profilePic: gender === "male" ? boysProfilePic : girlProfilePic,
    });
   

    if (newUser) {
      const tokens = generateTokensAndSetCookies(newUser._id, res);
      await newUser.save();

      console.log(tokens);
      console.log("userCreated");
      res.status(201)
      .cookie("jwt", tokens, {maxAge:0})
      .json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        userName: newUser.userName,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "User not created here" });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);

    res.status(500).json({ error: "Internal Sever Error", error });
  }
};

export const login = async (req, res) => {
  try {
    const {userName, password} = req.body;
    // console.log(username) 
    if(!userName || !password){
        return res.status(400).json({error:"From Backend: Msg : PLease enter All fields"});
    }
    
    const user = await User.findOne({userName});
    // console.log(user,":user");
    if(!user){
      return res.status(400).json({error:"user not found, signup first"})
    }
   
    const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
    if(!user || !isPasswordCorrect){
      return res.status(400).json({error:"Invalid credentials"})
    }

    const tokens = generateTokensAndSetCookies(user._id, res);
    if(!generateTokensAndSetCookies){
      throw new Error(error.message);
    }

    
    res.status(200)
    .json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      userName: user.userName,
      profilePic: user.profilePic,
    });
    


  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({error:"Internal Server Error In Login site"})
  }
  
}; 
 
export const logout = async (req, res) => {
  try {
    res.cookie("jwt","",{maxAge:0}); 
    
    res.status(200).json({message:"Logout Successfully"})
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({error:"Inter Server Error In Logout site"})  
       
  } 
};
