import React, { useState } from "react";
import { auth } from "../firebase/config";
import { sendPasswordResetEmail } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useToast } from "./ui/use-toast";
const Forgotpass = () => {
  const nav = useNavigate();
  const { toast } = useToast();
  const forgotpassSchema = z.object({
    email: z.string().email("Email Must Be at Least @ and .com"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(forgotpassSchema) });

  const onSubmit = async (data) => {
    try {
      await sendPasswordResetEmail(auth, data.email);
      toast({
        title: "Message:",
        description: "Password reset has been email sent!",
      });
      console.log("Password Reset Sent Succesfully!");
      nav("/");
    } catch (error) {
      console.error("Forgot Password Error:", error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto my-10 flex w-[35%] flex-col gap-12 rounded-lg border border-[#31304d] p-12 text-center shadow-lg shadow-[#31304d] backdrop-blur-lg backdrop-filter [&>input]:w-full [&>input]:px-2 [&>input]:py-2"
    >
      <h1 className={"text-5xl text-[#31304d]"}>Reset Password</h1>
      <div className="flex flex-col gap-y-1 [&>input]:p-2">
        <input
          placeholder="Email"
          {...register("email")}
          className={`rounded-md border-2 border-[#96a2b9] bg-inherit text-[#31304d] placeholder-[#31304d] outline-none transition-all duration-500 hover:border-[#4b4a69] ${
            errors.email ? "border-red-800" : ""
          }`}
        />
        {errors.email && (
          <p className="text-sm tracking-tight text-red-900">
            {errors.email.message}
          </p>
        )}
      </div>
      <input
        type="submit"
        value="Register"
        className="w-full rounded-md border-2 border-[#96a2b9] bg-stone-300 py-2 text-[#31304d] transition-all duration-500 hover:border-[#4b4a69]"
      />
      <div>
        <h3 className="text-[#31304d] ">
          You Have an Account?{" "}
          <Link to="/login" className="font-bold text-[#31304d]">
            Login
          </Link>
        </h3>
      </div>
    </form>
  );
};
export default Forgotpass;
