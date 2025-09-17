import React from "react";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
const UseLogin = () => {
  const [loading, setloading] = useState(false);
  const { authUser, setAuthUser } = useAuthContext();
  
  function handleInputErrors(userName, password) {
    if (!userName || !password) {
      //react hot toasts.
      toast.error("Please Fill all the fields");
      return false;
    }
    return true;
  }

  const login = async (userName, password) => {
    setloading(true);
    try {
      const success = handleInputErrors(userName, password);
      if (!success) return;
      // console.log(userName, password);
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName,
          password,
        }),
      });

      console.log(res);
      const data = await res.json();
      console.log(data);
<<<<<<< HEAD
        if (data.error) {
          throw new Error(data.error);
        }
=======
      if (data.error) {
        throw new Error(data.error);
      }
>>>>>>> 1785735d383a4cb5191611a38213756b25e5c07b

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);

      if (res.ok) {
        // Handle successful signup
        toast.success("login successful!");
        // Redirect or perform other actions as needed
      } else {
        toast.error(data.message || "login failed. Please try again.");
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    } finally {
      setloading(false);
    }
  };
  return { loading, login };
};

export default UseLogin;
