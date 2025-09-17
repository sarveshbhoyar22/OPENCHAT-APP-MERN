import { createContext , useContext, useState} from "react";


export const AuthContext = createContext();

export const useAuthContext = ()=>{
    return useContext(AuthContext);
}
export const AuthContextProvider = ({children})=>{

    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null)
<<<<<<< HEAD
    
=======

>>>>>>> 1785735d383a4cb5191611a38213756b25e5c07b
    return   <AuthContext.Provider value={{authUser,setAuthUser}}>{children}</AuthContext.Provider>
}



