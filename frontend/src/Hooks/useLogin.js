import axios from "axios"
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext, useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);

  const { authUser, setAuthUser } = useContext(AuthContext);
//   THIS IS ANOTHRR WAY TO USE ABOVE =  const { authUser, setAuthUser } = useAuthContext();

  const login = async ({
    username,
    password,
    
  }) => {
    
    setLoading(true);

    
    const success = handleInputErrors({
     
      username,
      password,
      
    });
    if (!success) return;

    try {
      const response = await axios.post("/api/auth/login", {
        username,
        password,  
      },
       { withCredentials: true });

      if (response.data.result) {
        toast.success("Logged In");


        localStorage.setItem(
          "chat-user",
          JSON.stringify(response.data.message._id)
        );

        setAuthUser(response.data.message._id);


      } 
      else toast.error(response.data.message);


    } catch (error) {

      toast.error(error.message);
    } finally {

      setLoading(false);
    }
  };

  return { loading, login };
};
export default useLogin;



function handleInputErrors({
  username,
  password,
}) {
  if ( !username || !password ) {
    toast.error("Please fill in all fields");
    return false;
  }

  return true;
}
