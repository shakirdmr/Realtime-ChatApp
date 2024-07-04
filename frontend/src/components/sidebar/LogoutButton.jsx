import { BiLogOut } from "react-icons/bi";
import useLogout from "../../Hooks/useLogout";
import { useContext } from "react";
import { AuthContext, useAuthContext } from "../../context/AuthContext";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  
  
  const {authUser, setAuthUser} = useContext(AuthContext);
  const profilePic = authUser.profilePic;

  return (
    <div className="mt-auto flex gap-3">

      {!loading ? (
        <>
        
        <BiLogOut
        className="w-6 h-6 text-white cursor-pointer"
        onClick={logout}
        /> 
        <div className="w-full  flex justify-end items-end gap-2">

            <div className='chat-image avatar'>
            <div className='w-6 rounded-full'>
              <img alt='Tailwind CSS chat bubble component' src={profilePic} />
            </div>
          </div>

          {authUser.fullname} 

        </div>
      </>
    ) :( <span className="loading loading-spinner bg-yellow-500"></span>)}
      

     
    </div>
  );
};
export default LogoutButton;
