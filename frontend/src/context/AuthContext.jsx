import { createContext, useContext, useState } from "react";

// STEP 1
export const AuthContext = createContext();

// STEP 2
export const AuthContextProvider = ({ children }) => {
    
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);

    return <AuthContext.Provider value={{ authUser, setAuthUser }}>
        {children}</AuthContext.Provider>;
};



/*
BELOW CODE IS USED TO MAKE
  const { authUser, setAuthUser } = useContext(AuthContext);
  replaced with
  const { authUser, setAuthUser } = useAuthContext();
*/
export const useAuthContext = () => {
    return useContext(AuthContext);
};
