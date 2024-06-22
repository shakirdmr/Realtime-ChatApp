import { BiLogOut } from "react-icons/bi";
import useLogout from "../../Hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto flex gap-3">

      {!loading ? (<BiLogOut
        className="w-6 h-6 text-white cursor-pointer"
        onClick={logout}
      />) :( <span className="loading loading-spinner bg-yellow-500"></span>)}
      

     
    </div>
  );
};
export default LogoutButton;
