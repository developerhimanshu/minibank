import { useRef } from "react";
import Heading from "../components/heading";
import InputBox from "../components/inputbox";
import { SubHeading } from "../components/subheading";
import { Link, redirect, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const navigate = useNavigate();
  const onButtonClick = async () => {
    const data = {
      username: emailRef.current,
      password: passwordRef.current,
    };
    const response = await axios.post(
      "http://localhost:3000/api/v1/user/signin",
      data
    );
    if (response.status == 200) {
      const user = {
        name: response.data.name,
        token: response.data.token,
        id: response.data.id,
      };
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/dashboard");
    } else {
      navigate("/signin");
    }
  };

  const emailRef = useRef("");
  const passwordRef = useRef("");
  return (
    <div className="w-full h-screen bg-gray-400 flex justify-center items-center">
      <div className="lg:w-[30vw] w-80 bg-white rounded-lg flex flex-col items-center  py-10 px-8">
        <Heading label="Sign In" />

        <SubHeading
          label="Enter your credintials to access your account"
          className="text-center"
        />

        <InputBox
          label="Email"
          placeholder="johndoe@example.com"
          onInputChange={(e) => {
            emailRef.current = e.target.value;
          }}
          type="text"
        />

        <InputBox
          label="Password"
          placeholder="123456"
          onInputChange={(e) => {
            passwordRef.current = e.target.value;
          }}
          type="password"
        />
        <button
          className="py-[14px] w-[9rem] cursor-pointer bg-black text-white text-xl rounded-lg px-2 my-4"
          onClick={onButtonClick}
        >
          Sign In
        </button>
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
