import { BiLogOut } from "react-icons/bi";
import useLogout from "../../Hooks/useLogout";
import { useContext } from "react";
import { AuthContext, useAuthContext } from "../../context/AuthContext";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  
  
  const {authUser, setAuthUser} = useContext(AuthContext);
  const profilePic = authUser.profilePic;

  return (
    <div className="w-full flex items-center bg-green-900 p-2 rounded text-white">

      {!loading ? (
        <>


        
        <BiLogOut
        className="w-6 h-6 text-white cursor-pointer"
        onClick={logout}
        /> 
        <div className=" w-full  flex  justify-end  items-center gap-3">

          <div className=' chat-image avatar '>
            <div className='w-9 rounded-full'>
              <img alt='Tailwind CSS chat bubble component' src={profilePic} />
            </div>
          </div>

        <div className="flex flex-col">
          {authUser.fullname} 
           <p className="text-[12px]">@{authUser.username}</p>
        </div>

        </div>
      </>
    ) :( <span className="loading loading-spinner bg-yellow-500"></span>)}
      

     
    </div>
  );
};
export default LogoutButton;
