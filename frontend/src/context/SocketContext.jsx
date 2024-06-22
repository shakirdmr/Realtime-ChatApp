import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from 'socket.io-client';

export const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
};


export const SocketContextProvider = ({children})=>{

    const [socket, setSocket] = useState(null);
    const [onlineUsers,setOnlineUSers] = useState([]);
    const {authUser} = useAuthContext();

    useEffect( ()=>{

        if(authUser)
        {
             // Establish connection with the server
            const socket = io("http://localhost:5000",{
                query:{
                    userId: authUser._id
                }
            });

            setSocket(socket);

            //LISTENER
            socket.on("getOnnlineUsers", (users)=>{
                setOnlineUSers(users);
            });


            return ()=> socket.close();
        }
        else{
            if(socket) {
                socket.close();
                setSocket(null);
            }
            
        }

    },[authUser]);


    return <SocketContext.Provider value={{socket, onlineUsers}}> 
    {children}</SocketContext.Provider>;
};