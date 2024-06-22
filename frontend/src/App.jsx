import Home from "./pages/home/Home.jsx";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Signup from "./pages/signup/Signup.jsx";
import {Toaster} from 'react-hot-toast';
import axios from 'axios';
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext.jsx";

function App() {
  axios.defaults.baseURL = 'http://localhost:5000';

  const {authUser, setAuthUser} = useContext(AuthContext);

  return (

    <>
      <BrowserRouter>
        <Routes>
            
            <Route index element={authUser? <Navigate to="/home" /> : <Login />} />
            <Route path="/home" element={authUser? <Home /> : <Navigate to="/" />  } />
            <Route path="/signup" element={authUser? <Navigate to="/home" /> : <Signup />} />
            
        </Routes>

        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
