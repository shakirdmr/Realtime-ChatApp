import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

import useGetConversation from "../../Hooks/useGetConversation.js";
import Conversation from "../CONVO/Conversation";
import useConversation from "../../zustand/useConversation.js";

const SearchInput = () => {
  const { loading, conversations } = useGetConversation();

  const { convoToShow, setConvoToShow } = useConversation();

  const [search, setSearch] = useState("");

  const searchForTheUser = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);

    setSearch(e.target.value);

    console.log(searchValue.length);

    if (searchValue.length < 1) {
      setConvoToShow(conversations);
      return;
    }

    const convo = conversations.filter((c) =>
      c.fullname.toLowerCase().includes(search.toLowerCase())
    );

    setConvoToShow(convo);
  };

  return (
    <div className="w-full">
      <form className="flex items-center gap-2 relative">
        <input
          type="text"
          placeholder="Search users ..."
          className="input input-bordered rounded-xl w-full pr-[35px]"
          maxLength={30}
          value={search}
          onChange={(e) => {
            searchForTheUser(e);
          }}
        />

        <button
          type="submit"
          className="w-[30px] h-[30px] absolute right-0 mr-2  text-white"
        >
          <IoSearchSharp className="w-6 h-6 outline-none" />
        </button>
      </form>
    </div>
  );
};
export default SearchInput;
