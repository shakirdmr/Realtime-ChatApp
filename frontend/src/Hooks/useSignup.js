import axios from "axios"
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext, useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const { authUser, setAuthUser } = useContext(AuthContext);
//   THIS IS ANOTHRR WAY TO USE ABOVE =  const { authUser, setAuthUser } = useAuthContext();

  const signup = async ({
    fullname,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    console.log("STARTED TO CREATE USER");

    const success = handleInputErrors({
      fullname,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;

    setLoading(true);
    try {
      const response = await axios.post("/api/auth/register", {
        fullname,
        username,
        password,
        confirmPassword,
        gender,
      },{
        withCredentials:true
      });

      if (response.data.success) {
        toast.success("NEW USER ACCOUNT CREATED ");


        localStorage.setItem(
          "chat-user",
          JSON.stringify(response.data.message)
        );

        
        setAuthUser(response.data.message);


      } else toast.error(response.data.message);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};
export default useSignup;



function handleInputErrors({
  fullname,
  username,
  password,
  confirmPassword,
  gender,
}) {
  console.log({ fullname, username, password, confirmPassword, gender });
  if (!fullname || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}
