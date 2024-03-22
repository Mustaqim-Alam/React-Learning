import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as storeLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index.js";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import authService from "../appwrite/auth.js";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  async function login(data) {
    setError("");
    console.log("Login Clicked");
    try {
      const session = await authService.login(data);
      console.log(session);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(storeLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
      console.log("failed to login", error);
    }
  }

  return (
    <div className=" flex items-center justify-center w-full ">
      <div className=" mx-auto mx-w-lg w-1/2 bg-gray-100 rounded-xl p-10 border border-black/10">
        <div className=" mb-2 flex justify-center">
          <span className=" inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className=" text-center text-2xl font-bold loading-tight ">
          Sign in to your account
        </h2>
        <p className=" mt-2 text-center text-base text-black/60 ">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className=" font-medium text-primary transition-all duration-200 hover:underline "
          >
            Sign Up
          </Link>
        </p>

        {error && <p className=" text-rose-600 mt-8 text-center ">{error}</p>}

        <form onSubmit={handleSubmit(login)} className=" mt-8 ">
          <div className=" space-y-5 ">
            <Input
              label="Email: "
              placeholder="Enter your email address"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="Password: "
              placeholder="Enter your password"
              type="password"
              {...register("password", {
                required: true,
                // validate: {
                //   matchPattern: (value) =>
                //     /^(?=.*\d)( ?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
                //       value
                //     ) || "Please enter a valid password",
                // },
              })}
            />
            <Button type="submit" className=" w-full hover:bg-blue-700 ">
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
