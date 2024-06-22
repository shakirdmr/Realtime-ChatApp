import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const getConversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {

    const getConvo = async () => {
      setLoading(true);

      try {
        const response = await axios.get("/api/users/",{withCredentials:true});

        if (response.data.result) {
          setConversations(response.data.message);

          toast.success("GOT ALL USERS SUCCEFULLY");
        } else throw new Error(response.data.message);
      } catch (error) {

        toast.error("FAILED TO GET ALL USERS - "+error.message);
      } finally {
        setLoading(false);
      }
    };


    getConvo();
  }, []);



  return {loading,conversations }

};

export default getConversation;
