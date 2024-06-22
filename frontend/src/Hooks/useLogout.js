import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";

export const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { authUser, setAuthUser } = useAuthContext();


  async function callTheLogoutAPI() {
    try {
      const response = await axios.post(
        "/api/auth/logout",
       {},

        {
          withCredentials: true,
        }
      );

      if (response.data.result) {
        localStorage.removeItem("chat-user");
        setAuthUser(null);

        toast.success("Logged out successfully");
      } else {
        toast.error(
          " RESPONSE IS FALSE " + response.data.message || "Logout failed"
        );
      }
    } catch (error) {
      // Extract a user-friendly message from the error object
      const errorMessage =
        error.response?.data?.message || "An error occurred during logout";
      toast.error(" AN ERROR :  " + errorMessage);
    } finally {
      setLoading(false);
      
    }
  }

  const logout = async () => {
    setLoading(true);
    setTimeout(callTheLogoutAPI,2000);
  };

  return { loading, logout };
};

export default useLogout;
