import React, { useState } from 'react'
import axios from 'axios';
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast';

const useSendMessages = () => {
  
    const [loading, setLoading] = useState(false);
    const { messages = [], setMessages, selectedConversation } = useConversation();

    const sendMessage = async (message)=>{

       
        setLoading(true)
        
        try {

            const response = await axios.post(`api/message/send/${selectedConversation._id}`, {message}, {withCredentials:true});

           

            
            if(response.data.result)
                {
                 setMessages([...messages, response.data.message]);   
                }
            else
            toast.error("we hahve ERROR IN useSendMessage.js - "+response.data.message); 

        } catch (error) {
           toast.error("ERROR IN useSendMessage.js - "+error.message); 
        }
        finally{ 
        setLoading(false)
        }
    }

    return {loading, sendMessage};
}

export default useSendMessages