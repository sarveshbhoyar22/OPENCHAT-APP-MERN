import React, { useState } from "react";
import SideBar from "../../components/sidebar/SideBar";
import MessageContainer from "../../components/messageContainer/MessageContainer";

const Home = () => {
  return ( 
    <>
      <div className="flex flex-col items-start">
        <h1 className="font-extrabold text-sky-400 p-2 text-xl">
          <span>Open</span>
          <span className="text-yellow-600"> Chat</span>
        </h1>
<<<<<<< HEAD
        <div className={`flex sm:h-[450px] md:h-[550px] rounded-xl border-[1px] border-slate-500 overflow-hidden bg-gray-400 bg-clip-padding  backdrop-filter backdrop-blur-xl bg-opacity-0`}>
          
=======
        <div className=" flex sm:h-[450px] md:h-[550px] rounded-xl border-[1px] border-slate-500 overflow-hidden bg-gray-400 bg-clip-padding  backdrop-filter backdrop-blur-xl bg-opacity-0">
>>>>>>> 1785735d383a4cb5191611a38213756b25e5c07b
          <SideBar />

          <MessageContainer />
        </div>
      </div>
    </>
  );
};

export default Home;
