
import { AuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import {useContext, useEffect, useRef} from 'react';


const MessageContainer = (req, res) => {


	const {selectedConversation, setSelectedConversation, messages, setMessages} = useConversation();

	const {authUser, setAuthUser} = useContext(AuthContext);
	
	useEffect(() => {

		// THIs IS A CLEANUP FUNCtIOn (runs on unmount of the current view)
	  return () => {
		setSelectedConversation(null);
	  }
	}, [setSelectedConversation])
	

	
	
	return (
		<div className='md:min-w-[450px] flex flex-col '>
			
			{!selectedConversation ?(
				<div className="flex justify-center  w-full h-full p-3 bg-red-900"> <h1>  HELLO 👋👋{authUser.fullname} . SELECT ANYONE TO START CHAT  </h1></div>
			) : (

				<div className=" overflow-auto"> 
					<div className='bg-slate-500 px-4 py-2 mb-2'>
						<span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>{selectedConversation?.fullname}</span>
						<h6 style={{"fontSize":"10px"}}> {selectedConversation?._id}</h6>
					</div>

					<Messages />
					
					<MessageInput />
					</div>
			)}
				
					
		</div>
	);
};
export default MessageContainer;
