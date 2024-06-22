import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../Hooks/useLogin.js";

const loginDetails = () => {
  const { loading, login } = useLogin();
  const [loginDetails, setLogin] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    login(loginDetails);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="box w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          👋👋 Welcome
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mt-5">
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={loginDetails.username}
              onChange={(e) => {
                setLogin({ ...loginDetails, username: e.target.value });
              }}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={loginDetails.password}
              onChange={(e) => {
                setLogin({ ...loginDetails, password: e.target.value });
              }}
            />
          </div>

          <div>
            <button className="btn btn-block btn-sm mt-5">
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "LogIn	"
              )}
            </button>
          </div>

          <Link
            to="/signup"
            className="text-sm  hover:underline hover:text-blue-600 mt-5 inline-block"
          >
            {"Don't"} have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};
export default loginDetails;
