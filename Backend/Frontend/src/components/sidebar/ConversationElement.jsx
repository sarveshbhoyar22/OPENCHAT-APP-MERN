import React from 'react'
import useConversation from '../../zustand/useConversation';
import { useSocketContext } from '../../context/SocketContext';

function ConversationElement({conversation, lastIdx}) {
  const {selectedConversation, setSelectedConversation} = useConversation();

  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id)

  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-sky-700 rounded p-2 py-1 cursor-pointer
            ${isSelected ? "bg-sky-700" : ""}
        `}
          onClick={()=> setSelectedConversation(conversation)}
        >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img
              src={conversation.profilePic}
              // src="https://avatar.iran.liara.run/public"
              alt="User Avatar"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <span className="text-sm font-bold">{conversation.fullName}</span>
            <span className="text-xl">🕐</span>
          </div>
          <span className="text-xs text-gray-400">Message</span>
        </div>
      </div>

      {/* divider class */}

      {!lastIdx && <div className="divider my-0 py-0 h-1"></div>}
    </>
  );
}

export default ConversationElement


/*function ConversationElement() {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://avatar.iran.liara.run/public/boy"
              alt="User Avatar"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className='flex gap-3 justify-between'>
            <span className="text-sm font-bold">User Name</span>
            <span className='text-xl'>🕐</span>
          </div>
          <span className="text-xs text-gray-400">Message</span>
        </div>
      </div>

      {/* divider class *}
      <div className='divider my-0 py-0 h-1'></div>
    </>
  );
}

export default ConversationElement*/