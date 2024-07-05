import React from "react";
import useConversation from "../../zustand/useConversation";


const Conversation = ({ convo, index }) => {

  const {selectedConversation, setSelectedConversation} = useConversation();

  const isSelected = selectedConversation?._id === convo._id;

  return (
    <> 
      <div
        onClick={ ()=>setSelectedConversation(convo)}
        id={index}
        className={`flex gap-2 items-center hover:bg-sky-900 rounded p-2 py-1 cursor-pointer
           ${isSelected ?"bg-sky-400" :""}
           ${
          convo.online ? "bg-sky-500" : ""
        }`}
      >
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src={convo.profilePic || "/path/to/default/avatar.jpg"} alt="user avatar" />
              </div>
            </div>

            <div className="flex flex-col flex-1">
              <div className="flex gap-3 justify-between">
                <p className="font-bold text-gray-200">{convo.fullname}</p>
              </div>
            </div>

            {/* <div class="bg-yellow-300 text-black  badge badge-primary badge-sm rounded-full">8</div> */}

            
      </div>

      <div className="divider my-0 py-0 h-1" />
    </>
  );
};

export default Conversation;
