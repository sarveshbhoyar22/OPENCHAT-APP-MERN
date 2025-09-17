import React, { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation';
import { useSocketContext } from '../context/SocketContext';
import toast from 'react-hot-toast';

import notifysound from "../assets/notify.mp3"
const useListenMessages = () => {
  const [loading, setLoading] = useState(false);
  const {socket} = useSocketContext();
  const {messages, setMessages, selectedConversation} = useConversation();

 useEffect(()=>{
    setLoading(true);
    try {
        socket?.on("newMessage" , (newMessage)=>{
            newMessage.shouldShake = true;
            const sound = new Audio(notifysound);
            sound.play();
            setMessages([...messages,newMessage])
        })

        return ()=> socket?.off("newMessage")

    } catch (error) {
        toast.error(error.message)
    }finally{
        setLoading(false);
    }
 },[socket,setMessages, messages])
}

export default useListenMessages