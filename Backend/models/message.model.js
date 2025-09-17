 import mongoose from "mongoose"

 const messageSchema = new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
<<<<<<< HEAD
    createdAt:{
        type:Date,
        default:Date.now,
    },
=======
   createdAt:{
    type:Date,
    default:Date.now,
   }
>>>>>>> 1785735d383a4cb5191611a38213756b25e5c07b
        //createdAt, UpdatedAt
},{timestamps:true});

const Message = mongoose.model("Message",messageSchema);
export default Message;

<<<<<<< HEAD
        
=======
        
>>>>>>> 1785735d383a4cb5191611a38213756b25e5c07b
