import React, { useEffect, useState } from "react";
import Conversation from "./Conversation";
import useGetConversation from "../../Hooks/useGetConversation.js";
import { BiCloudLightRain } from "react-icons/bi";
import useConversation from "../../zustand/useConversation.js";

const Conversations = () => {
  const { loading, conversations } = useGetConversation();
  const {convoToShow, setConvoToShow} = useConversation();

  
  useEffect(() => {
    if (!loading) {
      setConvoToShow(conversations);
    }
  }, [loading, conversations]);

  return (
    <div className="flex flex-col overflow-auto mb-1 pr-3 pb-4">
      {loading ? <span className="loading loading-spinner"></span> : null}
      {convoToShow.map((convoElement, index) => (
        <Conversation key={convoElement._id} convo={convoElement} index={index} />
      ))}
    </div>
  );
};

export default Conversations;
