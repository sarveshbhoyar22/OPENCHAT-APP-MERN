import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config(); 
const generateTokensAndSetCookies = async (userId , res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET_KEY,{
        expiresIn:"5d"
    });  
    // console.log(token);
    
    res.cookie("jwt", token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true, //prevents XSS attacks cross-site scripting attacks
      sameSite: "strict",
      secure: process.env.NODE_ENV !== "development",
    });

    return token;
};

export default generateTokensAndSetCookies;


