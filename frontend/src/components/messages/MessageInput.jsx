import { BsSend } from "react-icons/bs";
import useSendMessages from "../../Hooks/useSendMessages";
import { useState } from "react";

const MessageInput = () => {
  const [ myCurrentMessage, setMyCurrentMessage ] = useState("");
  const { loading, sendMessage } = useSendMessages();

  const sendMyMEssage = async (e) => {
    e.preventDefault();

	console.log(myCurrentMessage)
	if(!myCurrentMessage)
		return;

    await sendMessage(myCurrentMessage);

	setMyCurrentMessage("");
  };

  return (
    <form className="px-4 my-3 relative " onSubmit={sendMyMEssage}>
      <div className="w-full">

        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white"
          value={myCurrentMessage}
          onChange={(e) => setMyCurrentMessage(e.target.value)}
          placeholder="Send a message"
        />


        {loading ? (
          <span className="loading loading-spinner absolute inset-y-0 end-0 flex items-center pe-7"></span>
        ) : (
          <button
            type="submit"
            className=" absolute inset-y-0 end-0 flex items-center pe-7"
          >
            <BsSend />
          </button>
        )}
      </div>
    </form>
  );
};
export default MessageInput;
