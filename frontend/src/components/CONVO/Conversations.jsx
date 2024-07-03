import React from "react";
import Conversation from "./Conversation";
import useGetConversation from "../../Hooks/useGetConversation.js";

const Conversations = () => {
  const { loading, conversations } = useGetConversation();

  return (
    <>
      <div className="py-2 flex flex-col overflow-auto mb-5">
       
        {loading ? <span className="loading loading-spinner"></span> : null}

        {conversations.map( (convoElement, index) => {
          return <Conversation key={convoElement._id} convo={convoElement}  index={index}/>;
        })}

      </div>
    </>
  );
};

export default Conversations;
