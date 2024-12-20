import User from "../models/user.model.js";

export const getUsersForSideBars = async (req, res) => {
    try {
        const loggedInUserId = await req.user._id;

        const filteredUsers = await User.find({_id:{$ne: loggedInUserId}}).select("-password"); // all users except logged in user //ne means not equal to
        
        res.status(200).json(filteredUsers);

    } catch (error) {
        // console.log("Error in getUsersForSideBars controller", error.message);
        console.error("Error in getUsersForSideBars controller", error.message);
        res.status(500).json({error:"Internal Server Error In getting user data for sidebars"})
    }
};