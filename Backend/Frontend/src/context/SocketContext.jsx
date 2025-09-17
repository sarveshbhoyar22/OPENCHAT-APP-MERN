// import { createContext, useState, useEffect } from "react";
// import { useAuthContext } from "./AuthContext";
// import io from "socket.io-client";

// export const SocketContext = createContext();

// export const SocketContextProvider = ({ children }) => {
//   const [socket, setSocket] = useState(null);
//   const [onlineUsers, setOnlineUsers] = useState([]);
//   const { authUser } = useAuthContext();
//   useEffect(() => {
//     if (authUser) {
//       const socket = io("http://localhost:5000");
//       setSocket(socket);

//       return () => socket.close();
//     } else {
//       if (socket) {
//         socket.close();
//         setSocket(null);
//       }
//     }
//   }, [authUser]);

//   return (
//     <SocketContextProvider value={{ socket, onlineUsers }}>
//       {children}
//     </SocketContextProvider>
//   );
// };

import { createContext, useState, useEffect, useContext } from "react";
import { io } from "socket.io-client";
import { useAuthContext } from "./AuthContext";

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  // console.log(authUser._id,"hello");

  useEffect(() => {
    if (authUser) {
      const socket = io("import.meta.env.VITE_BASE_URL", {
        query: {
          userId: authUser._id,
        },
        transports: ["websocket"]
      });
      // console.log("authUser", authUser);

      setSocket(socket);
      if (socket) {
        console.log("socket", socket.id);
      }else{
        console.log("no socket")
      }

      // socket.on() is used to listen to the events. can be used both on client and server side
      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });
 
      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
