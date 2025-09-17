import React, { useState } from "react";
import { Link } from "react-router-dom";
//rface
import loginSound from "../../assets/loginSound.mp3";
import UseLogin from "../../hooks/UseLogin";
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const { loading, login } = UseLogin();
  
  const handleSubmit = async (e) => {
    e.preventDefault(); // to prevent refresh at every submit
    // console.log(username, password);
    await login(username, password);
    const sound=  new Audio(loginSound);
    sound.play();
    // console.log("hello user");
  };

  return (
    <div className="flex felx-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
        <h1 className="text-3xl font-bold text-center text-gray-300">
          Login
          <span className="text-sky-500"> Open</span>
          <span className="text-yellow-500"> Chat</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full h-10 p-2 input input-info"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full h-10 p-2 input input-info"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            to={"/signup"}
            className="text-sm hover:text-blue-500 hover:cursor-pointer"
          >
            Don't have any account!
          </Link>

          <div className="justify-center items-center flex m-2 ">
            <button
              className="btn btn-block btn-md btn-info"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

/* STARTER CODE FOR THIS PAGE:
const Login = () => {
  return (
    <div className="flex felx-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
        <h1 className="text-3xl font-bold text-center text-gray-300">
          Login
          <span className="text-yellow-500"> Chat App</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full h-10 p-2 input input-info"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              className="w-full h-10 p-2 input input-info"
            />
          </div>
          <a
            href="#"
            className="text-sm hover:text-blue-500 hover:cursor-pointer"
          >
            Don't have any account!
          </a>

          <div className="justify-center items-center flex m-2 ">
            <button className="btn btn-block btn-md btn-info">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
*/
