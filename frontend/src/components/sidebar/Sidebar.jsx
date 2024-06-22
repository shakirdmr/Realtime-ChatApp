import Conversations from "../CONVO/Conversations.jsx";
import LogoutButton from "./LogoutButton.jsx";
// import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className='border-r border-slate-500 p-4 flex flex-col outerBox'>
			<SearchInput />
			<div className='divider px-3'></div>

			
			<Conversations />
			<LogoutButton />
		</div>
	);
};
export default Sidebar;
