import { useEffect } from "react";
import useGetMessages from "../../Hooks/useGetMessages";
import useConversation from "../../zustand/useConversation";
import Message from "./Message";

const Messages = () => {

	const {getMessages, loading} = useGetMessages();
	const {selectedConversation, setSelectedConversation, messages, setMessages} = useConversation();

	useEffect( ()=>{
		getMessages();

		
	} ,[selectedConversation]);
	
	return (
		<div className='px-4 flex-1 overflow-auto'>
			{messages.map( (singleMessage, key)=>{
				return <Message key={key} message={singleMessage} />
			})}
		</div>
	);
};
export default Messages;
