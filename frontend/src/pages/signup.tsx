import axios from "axios";
import { useRef } from "react";
import { redirect } from "react-router-dom";
import Heading from "../components/heading";

const Signup = () => {
  const firstName = useRef("");
  const lastName = useRef("");
  const email = useRef("");
  const password = useRef("");

  const onButtonClick = () => {
    const data = {
      firstName: firstName.current,
      lastName: lastName.current,
      username: email.current,
      password: password.current,
    };

    axios.post("http://localhost:3000/api/v1/user/signup", data).then((res) => {
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        redirect("/dashboard");
      } else redirect("/signup");
    });
  };
  return (
    <div className="w-full h-screen bg-gray-400 flex justify-center items-center">
      <div className="lg:w-[35vw] w-80 bg-white rounded-lg flex flex-col items-center  py-10 px-8">
        <Heading label="Sign Up" />
        <p className="text-lg text-center text-gray-500 mb-6 w-[25vw]">
          Enter your information to create an account
        </p>
        <div className="flex flex-col gap-2 w-full">
          <div className="w-full">
            <p className="font-bold">First Name</p>
            <input
              type="text"
              className=" border-2 border-black rounded-md w-full py-2 px-1  outline-none "
              onChange={(e) => {
                firstName.current = e.target.value;
              }}
            />
          </div>
          <div className="w-full">
            <p className="font-bold">Last Name</p>
            <input
              type="text"
              className=" border-2 border-black rounded-md w-full py-2 px-1  outline-none "
              onChange={(e) => {
                lastName.current = e.target.value;
              }}
            />
          </div>
          <div className="w-full">
            <p className="font-bold">Email</p>
            <input
              type="email"
              className=" border-2 border-black rounded-md w-full py-2 px-1  outline-none "
              onChange={(e) => {
                email.current = e.target.value;
              }}
            />
          </div>
          <div className="w-full">
            <p className="font-bold">Password</p>
            <input
              type="password"
              className=" border-2 border-black rounded-md w-full py-2 px-1  outline-none "
              onChange={(e) => {
                password.current = e.target.value;
              }}
            />
          </div>
        </div>
        <button
          className="py-[14px] w-[9rem] cursor-pointer bg-black text-white text-xl rounded-lg px-2 my-4"
          onClick={onButtonClick}
        >
          Sign Up
        </button>
        <p>Already have an account? Login</p>
      </div>
    </div>
  );
};

export default Signup;
