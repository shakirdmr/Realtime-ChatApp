import { useEffect, useRef } from "react";
import useGetMessages from "../../Hooks/useGetMessages";
import useConversation from "../../zustand/useConversation";
import Message from "./Message";

const Messages = () => {
  const { getMessages, loading } = useGetMessages();
  const {
    selectedConversation,
    setSelectedConversation,
    messages,
    setMessages,
  } = useConversation();

  useEffect(() => {
	scrollToBottom();
    getMessages();
  }, [selectedConversation]);

  const messageInputBox = useRef(null);



  const scrollToBottom = () => {

	setTimeout(()=>{
		if (messageInputBox.current) {
			messageInputBox.current.scrollIntoView({ behavior: 'smooth' });
		}
	},200)
	
  };

  return (
    <div className="px-4 flex-1 overflow-auto">



      {loading ? (
			<div className="flex justify-center">
        	<span className="loading loading-bars bg-yellow-500"></span>
			</div>
      		) 
		:
			(
			messages.map((singleMessage, key) => {
			return  (
			<div  key={singleMessage._id} ref={messageInputBox}>
				<Message  message={singleMessage} />
			</div>
			)

			})
			)
	  }

    </div>
  );
};
export default Messages;
