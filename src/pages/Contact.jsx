import React, { useState } from "react";
import contactPic from "../assest/contact.avif";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/Components/ui/use-toast";
export default function Contact() {
  const nav = useNavigate();
  const { toast } = useToast();
  const massageSchema = z.object({
    email: z.string().email("Email Must Be at Least @ and .com"),
    mtext: z
      .string()
      .min(30, "Massage Must Be at Least 30 Characters")
      .max(200, "Password should not be more than 200 Characters"),
    name: z.string().min(6, "Your name must be at least 6 characters"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(massageSchema) });
  const onSubmit = () => {
    try {
      toast({
        title: "Message:",
        description: "Your massage has been sent; Anserw soon!",
      });
      nav("/");
    } catch (error) {
      console.error("Message Error:", error);
    }
  };
  return (
    <div
      className={
        "mx-auto grid w-10/12 grid-cols-2 place-items-center gap-12 rounded-2xl p-8 text-center"
      }
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="h-full w-full"
      >
        <img
          className={
            "h-full w-full rounded-3xl  border border-[#31304d] shadow-lg shadow-[#76759b]"
          }
          src={contactPic}
          alt=""
        />
      </motion.div>
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid w-full grid-rows-3 gap-y-6 rounded-3xl border border-[#31304d] bg-[#B6BBC4] p-12 shadow-lg shadow-[#76759b]"
      >
        <h1 className={"text-4xl font-extrabold"}>Contact Us</h1>
        <div className="flex flex-col gap-y-1">
          <input
            placeholder="Name"
            {...register("name")}
            className={`rounded-md border-2 border-[#7e92b8] bg-inherit p-2 text-[#31304d] placeholder-[#31304d] outline-none transition-all duration-500 hover:border-[#4b4a69] ${
              errors.name ? "border-red-800" : ""
            }`}
          />
          {errors.name && (
            <p className="text-sm tracking-tight text-red-900">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-y-1">
          <input
            placeholder="Email"
            {...register("email")}
            className={`rounded-md border-2 border-[#7e92b8] bg-inherit p-2 text-[#31304d] placeholder-[#31304d] outline-none transition-all duration-500 hover:border-[#4b4a69] ${
              errors.email ? "border-red-800" : ""
            }`}
          />
          {errors.email && (
            <p className="text-sm tracking-tight text-red-900">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-y-1">
          <textarea
            placeholder="Massage Text"
            {...register("mtext")}
            className={`rounded-md border-2 border-[#7e92b8] bg-inherit p-2 text-[#31304d] placeholder-[#31304d] outline-none transition-all duration-500 hover:border-[#4b4a69] ${
              errors.email ? "border-red-800" : ""
            }`}
            cols="30"
            rows="4"
          />
          {errors.mtext && (
            <p className="text-sm tracking-tight text-red-900">
              {errors.mtext.message}
            </p>
          )}
        </div>
        <button
          className={
            "rounded-lg bg-[#31304d] px-9 py-2 text-white transition-all duration-500 hover:bg-[#5e5c92]"
          }
        >
          Send
        </button>
      </motion.form>
    </div>
  );
}
