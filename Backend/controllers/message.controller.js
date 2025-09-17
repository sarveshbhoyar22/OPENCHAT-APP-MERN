import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import mongoose from "mongoose";
import { getReceiverSocketId } from "../socket/socket.js";
import { io } from "../socket/socket.js";
export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user.id;

    // console.log("senderId:", senderId, ", receiverId:", receiverId);

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
      await conversation.save();
    }

    const newMessage = new Message({
      senderId: senderId,
      receiverId: receiverId,
      message: message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    
    // await conversation.save();
    // await newMessage.save();

    //this will run parallel
    Promise.all([conversation.save(), newMessage.save()]);

    const receiverSocketId = getReceiverSocketId(receiverId);

    if (receiverSocketId) {
      //io.to (<socket_id>).emit(<event_name>, <data>) use to send events to spe
      io.to(receiverSocketId).emit("newMessage", newMessage); 

    }



    res.status(201).json(newMessage);

    //  res.status(200).json({message:"Message Sent"})/
  } catch (error) {
    console.log("Error in sendMessage controller: ", error.message);
    res.status(500).json({ error: "Inter Server Error while sending message" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id:userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages"); // Not references but actual Messages

    if(!conversation) return res.status(200).json([]);

    const messages = conversation.messages;

    res.status(200).json(messages);



  } catch (error) {
    console.log("Error in getMessage controller: ", error.message);
    res.status(500).json({ error: "Inter Server Error while getting message" });
  }
};


