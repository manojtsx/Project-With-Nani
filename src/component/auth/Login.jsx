import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {useNavigate} from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  function handleVisibility() {
    setIsVisible(!isVisible);
  }
  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setUser({ ...user, [name]: value });
  }
  function handleLoginForm(event) {
    event.preventDefault();
    if (user.username === "admin" && user.password === "admin") {
      navigate("/dashboard");
    } else {
      window.alert("Wrong Credentials.");
    }
  }
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-200">
      <form
        className="bg-blue-400 rounded-xl px-10 py-14 text-white"
        onSubmit={handleLoginForm}
      >
        <div className="flex justify-center pb-4">
          <h1 className="text-4xl">Login Form</h1>
        </div>
        <div className="flex flex-col py-6">
          <label htmlFor="username" className="text-black">
            Username:
          </label>
          <input
            type="text"
            name="username"
            className="h-9 outline-none text-black px-2 border border-b-2 border-b-blue-500 focus:border-b-red-500"
            onChange={handleInputChange}
            value={user.username}
          />
        </div>
        <div className="flex flex-col py-6">
          <label htmlFor="password" className="text-black">
            Password:
          </label>
          <div className="relative text-black">
            <input
              type={isVisible ? "text" : "password"}
              name="password"
              className="h-9 outline-none px-2 pr-10 border border-b-2 border-b-blue-500 focus:border-b-red-500"
              onChange={handleInputChange}
              value={user.password}
            />
            {isVisible ? (
              <VisibilityIcon
                onClick={handleVisibility}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
              />
            ) : (
              <VisibilityOffIcon
                onClick={handleVisibility}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
              />
            )}
          </div>
        </div>
        <button
          type="submit"
          className="bg-green-500 w-full py-2 hover:bg-green-300 rounded-md transition-all duration-1000"
        >
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
