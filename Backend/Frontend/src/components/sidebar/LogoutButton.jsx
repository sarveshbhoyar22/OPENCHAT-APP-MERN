import React from "react";
import { BiLogOut } from "react-icons/bi";
import UseLogout from "../../hooks/UseLogout";
import { useAuthContext } from "../../context/AuthContext";
function LogoutButton() {
  const { loading, logout } = UseLogout();
  const {authUser} = useAuthContext();

  return (
    <div className="flex flex-col justify-center items-start mt-auto">
      {!loading ? (
        <div className="flex items-center ">
          <div className="flex items-center hover:cursor-pointer" onClick={logout}>
            <BiLogOut className="w-6 h-6 cursor-pointer m-2 " />
            Logout{" "}
          </div>
          <div className="flex items-center p-3 ml-24  hover:cursor-pointer">
            <img 
              className="w-4 h-4 rounded-full"
              src={authUser.profilePic}      
              alt=""
            />
            <span className="text-sm font-bold p-1"> {authUser.fullName}</span>
          </div>
        </div>
      ) : (
        <span className="loading loading-spinner"></span>
      )} 
    </div>
  );
}

export default LogoutButton;
