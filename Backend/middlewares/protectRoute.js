import jwt from "jsonwebtoken";
import User from '../models/user.model.js';


const protectRoute = async (req,res,next)=>{
    try { 

        const token = await req.cookies.jwt; 
        // console.log("protectroute: ",token);
        
        if(!token){
            return res.status(401).json({error:"Unauthorised - No tokens provided"});
        }
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
         
        if(!decoded){
            return res.status(401).json({error:"Unauthorised - No tokens provided"});
        }


        const user = await User.findById(decoded.userId).select("-password");

        if(!user){
            res.status(404).json({error:"User Not Found"});
        }

        req.user = user;
        next();


    } catch (error) {
            console.log("Error in protectRoute middleware: ", error.message);
            res.status(500).json({error:"Internal Server Error While checking the tokens in protectRoutes"})
    }
}

export default protectRoute;