import { set } from "mongoose";
import React from "react";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useGetConversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversation = async () => {
      setLoading(true);

      try {
        const res = await fetch("/api/users"); //as get request so, no method or body needed
        // console.log("res", res);
        const data = await res.json();
        if (data.error) {
          console.log(data.error);
          throw new Error(data.error);
        }
        setConversations(data);
      } catch (error) {
        console.log(error.message);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getConversation();
  }, []);

  return { loading, conversations };
};

export default useGetConversation;
