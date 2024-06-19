import React, { useState } from "react";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const nav = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log("Login Succesfully!")
      nav('/')
    } catch (error) {
      console.error("Login Error:", error);
    }
  };


  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col p-12 backdrop-filter backdrop-blur-lg shadow-lg shadow-[#31304d] border border-[#31304d] rounded-lg min-h-96 gap-6 text-center mt-32 [&>input]:py-2 [&>input]:px-2 [&>input]:w-full"
      >
        <h1 className={"text-5xl text-[#31304d]"}>Login</h1>
        <div className="flex flex-col gap-y-1 [&>input]:p-2">
         <input
            placeholder="Email"
            {...register("email")}
            className={`rounded-md outline-none text-[#31304d] bg-inherit border-2 border-[#96a2b9] placeholder-[#31304d] hover:border-[#4b4a69] transition-all duration-500 ${
               errors.email ? "border-red-800" : ""
            }`}
         />
         {errors.email && <p className="text-red-900 tracking-tight text-sm">{errors.email.message}</p>}
        </div>
        <div className="flex flex-col gap-y-1 [&>input]:p-2">
           <input
             placeholder="Password"
             type="password"
             {...register("password")}
             className={`rounded-md outline-none text-[#31304d] bg-inherit border-2 border-[#96a2b9] placeholder-[#31304d] hover:border-[#4b4a69] transition-all duration-500 ${
               errors.password ? "border-red-800" : ""
             }`}
           />
           {errors.password && <p className="text-red-900 tracking-tight text-sm">{errors.password.message}</p>}
        </div>
        <div className="grid grid-cols-2 gap-14">
          <div className="flex flex-row gap-1">
            <input type="checkbox" />
            <span className="text-[#31304d]">Remember Me</span>
          </div>
          <div>
            <Link to="/forgotpass" className="text-[#31304d]">
              Forgot Password?
            </Link>
          </div>
        </div>
        <input
          type="submit"
          value="Login"
          className="bg-stone-300 text-[#31304d] py-2 rounded-md w-full border-2 border-[#96a2b9] hover:border-[#4b4a69] duration-500 transition-all"
        />
        <div>
          <h3 className="text-[#31304d] ">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#31304d] font-bold">
              Register
            </Link>
          </h3>
        </div>
      </form>
    </div>
  );
};

export default Login;