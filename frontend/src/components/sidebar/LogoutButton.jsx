import { BiLogOut } from "react-icons/bi";
import useLogout from "../../Hooks/useLogout";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  const {authUser, setAuthUser} = useContext(AuthContext);

  return (
    <div className="mt-auto flex gap-3">

      {!loading ? (
        <>
        
        <BiLogOut
        className="w-6 h-6 text-white cursor-pointer"
        onClick={logout}
      /> {authUser.fullname} 
      </>
    ) :( <span className="loading loading-spinner bg-yellow-500"></span>)}
      

     
    </div>
  );
};
export default LogoutButton;
