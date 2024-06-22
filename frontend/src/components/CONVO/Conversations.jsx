import React from "react";
import Conversation from "./Conversation";
import useGetConversation from "../../Hooks/useGetConversation.js";

const Conversations = () => {
  const { loading, conversations } = useGetConversation();

  return (
    <>
      <div className="py-2 flex flex-col overflow-auto mb-5">
       
        {loading ? <span className="loading loading-spinner"></span> : null}

        {conversations.map((convo) => {
          return <Conversation key={convo._id} convo={convo} />;
        })}

      </div>
    </>
  );
};

export default Conversations;
