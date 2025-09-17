import React, { useEffect, useState } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { IoIosChatboxes } from "react-icons/io";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";

import { IoMdContacts } from "react-icons/io";
function MessageContainer() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  // const noChatSelected = false;

  const hideit = false; 
  useEffect(() => {
    //cleanUp Function (unmounts)

    return () => {
      setSelectedConversation(null);
    };
  }, [setSelectedConversation]);

  // const noChatSelected = false;
  return (
    <div className="flex flex-col md:min-w-[560px] ">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-slate-800 w-full h-12 px-10 py-3 flex items-center">
            <span className="hidden">
              <IoMdContacts />
            </span>
            <span className="w-8 h-8 p-1"> <img src={selectedConversation.profilePic} alt="" /></span>
            <span className="text-slate-300 font-bold  ">
              {selectedConversation.fullName}
            </span>
          </div>

          {/* Messages */}
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  console.log(authUser.fullName);
  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <div className=" absolute flex flex-col font-bold text-xl items-center justify-center">
        <p>Welcome {authUser.fullName} 😄</p>
        <p>Select a Chat to Start Messaging</p>
        <IoIosChatboxes className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
