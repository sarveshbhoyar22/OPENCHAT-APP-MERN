import React, { useEffect, useRef } from "react";
import Message from "./Message";
import { use } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import useConversation from "../../zustand/useConversation";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();

  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behaviour: "smooth" });
    }, 100);
  }, [messages]);

  console.log("messages: ", messages);
  return (
    <div className="flex-1 overflow-auto px-4 ">
      {loading && [...Array(4)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center text-gray-400 mt-8">
          Send a Message to Start Conversation
        </p>
      )}

      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message key={message._id} message={message} />
          </div>
        ))}
    </div>
  );
};

export default Messages;
