import axios from "axios";
import { useState } from "react"
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {

    const [loading, setLoading] = useState(false);

    const {selectedConversation, setSelectedConversation, messages, setMessages} = useConversation();

    const getMessages = async ()=>{

        try {
            setLoading(true);

            
            
            const response = await axios.get(`api/message/getMessages/${selectedConversation._id}` , {withCredentials:true});
            


            // console.log(response)

            if(!response.data.result)
                {
                    toast.error("we useGetMessage.js error - "+response.data.message);
                    return;
                }
            
            setMessages(response.data.message);

            toast.success("GOT ALL MESSAGES");
            
        } catch (error) {
            toast.error("useGetMessage.js error - "+error.message);
            
        }
        finally{

            setLoading(false);
        }

    }

  return  {getMessages, loading}
}

export default useGetMessages