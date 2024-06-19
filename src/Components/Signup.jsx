import React, { useState } from "react";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const Signup = () => {
  const nav = useNavigate()

  const registerSchema = z.object({
    username: z
      .string()
      .min(8, "Username Must Be at Least 8 Characters")
      .regex(
        new RegExp(
          /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=.\-_*])([a-zA-Z0-9@#$%^&+=*.\-_]){3,}$/
        ),"Password must contain at least one uppercase letter,\n one lowercase letter, one number, one special character,\n and no spaces"
      ),
    email: z.string().email("Email Must Be at Least @ and .com"),
    password: z
      .string()
      .min(8, "Password Must Be at Least 8 Characters")
      .max(18, "Password should not be more than 18 Characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerSchema) });

  const onSubmit = async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      console.log("Create Account Succesfully!");
      nav('/')
    } catch (error) {
      console.error("Register Error:", error);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col p-12 backdrop-filter backdrop-blur-lg shadow-lg shadow-[#31304d] border border-[#31304d] rounded-lg min-h-96 gap-6 text-center mt-32 [&>input]:py-2 [&>input]:px-2 [&>input]:w-full"
      >
        <h1 className={"text-5xl text-[#31304d]"}>Create Account</h1>
        <div className="flex flex-col gap-y-1 [&>input]:p-2">
          <input
            placeholder="Username"
            {...register("username")}
            className={`rounded-md outline-none text-[#31304d] bg-inherit border-2 border-[#96a2b9] placeholder-[#31304d] hover:border-[#4b4a69] transition-all duration-500 ${
              errors.username ? "border-red-800" : ""
            }`}
          />
          {errors.username && (
            <p className="text-red-900 tracking-tight text-sm">
              {errors.username.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-y-1 [&>input]:p-2">
          <input
            placeholder="Email"
            {...register("email")}
            className={`rounded-md outline-none text-[#31304d] bg-inherit border-2 border-[#96a2b9] placeholder-[#31304d] hover:border-[#4b4a69] transition-all duration-500 ${
              errors.email ? "border-red-800" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-900 tracking-tight text-sm">
              {errors.email.message}
            </p>
          )}
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
          {errors.password && (
            <p className="text-red-900 tracking-tight text-sm">
              {errors.password.message}
            </p>
          )}
        </div>
        <input
          type="submit"
          value="Register"
          className="bg-stone-300 text-[#31304d] py-2 rounded-md w-full border-2 border-[#96a2b9] hover:border-[#4b4a69] duration-500 transition-all"
        />
        <div>
          <h3 className="text-[#31304d] ">
            You Have an Account?{" "}
            <Link to="/login" className="text-[#31304d] font-bold">
              Login
            </Link>
          </h3>
        </div>
      </form>
    </div>
  );
};
export default Signup;
