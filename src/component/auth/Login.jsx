import React from "react";

function Login() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-200">
      <form className="bg-blue-400 rounded-xl px-10 py-14 text-white">
        <div className="flex justify-center pb-4">
          <h1 className="text-4xl">Login Form</h1>
        </div>
        <div className="flex flex-col py-6">
          <label htmlFor="username" className="text-black">
            Username:
          </label>
          <input
            type="text"
            className="h-9 outline-none text-black px-2 border border-b-2 border-b-blue-500 focus:border-b-red-500"
          />
        </div>
        <div className="flex flex-col py-6">
          <label htmlFor="password" className="text-black">
            Password:
          </label>
          <input
            type="password"
            className="h-9 outline-none text-black px-2 border border-b-2 border-b-blue-500 focus:border-b-red-500"
          />
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
