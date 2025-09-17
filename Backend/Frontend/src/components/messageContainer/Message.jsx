import React, { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext.jsx";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../../../utils/extraxtTime.js";
const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  console.log(authUser.profilePic,"Message.jsx")
  const fromMe = message.senderId === authUser._id;
  console.log(authUser);

  // const isFromSelectedUser =selectedConversation && message.receiverId === selectedConversation.userId;
  const chatClassName = fromMe ? "chat-end" :"chat-start"   ;
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic || "";
  const BubbleBgColor = fromMe ? "bg-sky-600" : "bg-slate-700";
  const shouldShake = message.shouldShake ? "shake" : " ";

  let formatedTime = extractTime(message.createdAt);

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full text-base-200">
          <img src={profilePic} alt="Tailwind CSS chat bubble component" />
        </div>
      </div>
      <div className={`chat-bubble text-slate-200 ${BubbleBgColor} ${shouldShake}`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formatedTime}
      </div>
    </div>
  );
};

export default Message;
