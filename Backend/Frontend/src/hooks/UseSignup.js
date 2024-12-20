import React from "react";
import toast from "react-hot-toast";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import UseLogout from "./UseLogout";
import { Navigate } from "react-router-dom";

function handleInputErrors({
  fullName,
  userName,
  email,
  password,
  confirmPassword,
  gender,
}) {
  if (
    !fullName ||
    !userName ||
    !email ||
    !password ||
    !confirmPassword ||
    !gender
  ) {
    //react hot toasts
    toast.error("Please Fill all the fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Password don't Match");
    return false;
  }

  return true;
}

const UseSignup = () => {
  const [loading, setLoading] = useState(false);
  const { authUser, setAuthUser } = useAuthContext();
  const { logout } = UseLogout();
  const signup = async ({
    fullName,
    userName,
    email,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      userName,
      email,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;

    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          userName,
          email,
          password,
          confirmPassword, 
          gender,
        }),
      });

      console.log(res);
      const data = await res.json();
      console.log(data);
      if (data.error) {
        throw new Error(data.error);
      }

      //localStorage //by AuthContextProvider

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);

      //context

      if (res.ok) {
        // Handle successful signup
        toast.success("Signup successful! Redirecting... to login Page");
      

        // Redirect or perform other actions as needed
      } else {
        // toast.error(data.message || "Signup failed. Please try again.");
        logout();
      }
    } catch (error) {
      // toast.error(error.message);
      alert("LOGOUT and Login Again to Access the OPENCHAT")
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default UseSignup;
