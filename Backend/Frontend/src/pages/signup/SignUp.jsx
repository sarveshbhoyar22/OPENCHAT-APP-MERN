import React from "react";
import GenderCheckBox from "./GenderCheckBox.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";

import UseSignup from "../../hooks/UseSignup";
const Signup = () => {
  
  const [inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "", 
    confirmPassword: "",
    gender: "",
  });

  // console.log("hello1")
  const { loading = false, signup } = UseSignup();
  // console.log("hello2")

  const handleCheckBox = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  // to prevent refresh at every submit

    // we will signup here
    await signup(inputs);

   
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-bold text-center text-gray-300">
          SignUp
          <span className="text-sky-500"> Open</span>
          <span className="text-yellow-500"> Chat</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              {" "}
              <span className="label-text text-base">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full input input-md input-info"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              {" "}
              <span className="label-text text-base">UserName</span>
            </label>
            <input
              type="text"
              placeholder="Enter UserName"
              value={inputs.userName}
              onChange={(element) =>
                setInputs({ ...inputs, userName: element.target.value })
              }
              className="w-full input input-md input-info"
            />
          </div>
          <div>
            <label className="label p-2">
              {" "}
              <span className="label-text text-base">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              className="w-full input input-md input-info"
            />
          </div>
          <div>
            <label className="label p-2">
              {" "}
              <span className="label-text text-base">Confirm Password!</span>
            </label>
            <input
              type="text"
              placeholder="Enter Confirm Password!"
              className="w-full input input-md input-info"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              {" "}
              <span className="label-text text-base">Email</span>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
              className="w-full input input-md input-info"
            />
          </div>

          {/*Gender Checkbox  */}
          <GenderCheckBox
            onCheckBoxChange={handleCheckBox}
            selectedGender={inputs.gender}
          />

          <Link
            to="/login"
            className="hover:underline hover:text-slate-300 text-sm p-2"
          >
            Already have Account?!
          </Link>
          <div className="flex justify-center">
            <button
              type="submit"
              className="btn btn-block btn-info"
              disabled={loading}
            >
              {
                loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "SignUp"
                )
              }

            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
