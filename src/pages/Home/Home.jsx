import React from "react";
import { Link } from "react-router-dom";
import Article from "./Article";
import image from "../../assest/homePic2.jpg";
import SlideShow from "./SlideShow";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div>
      <div
        className={"mx-auto flex w-4/5 items-center justify-center gap-x-20"}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          layout
          className={"flex flex-col gap-9"}
        >
          <h1 className={" text-xl"}>Introduction For You </h1>
          <h2 className={"text-4xl"}>
            Post Your Information and Daily life as a Blog here.
          </h2>
          <h3 className={"text-md font-mono tracking-tighter"}>
            Hi everyone, im amirali abdelahi from iran in esfahan city. <br />{" "}
            Click Start Button Please For Post Blog Yourself | Blogs
          </h3>
          <div className="flex flex-row gap-7 [&>*]:text-xl">
            <h1>8587+ Player</h1>
            <h1>2578+ Students</h1>
            <h1>1256+ Blogs</h1>
          </div>
          <Link
            to="/blogs"
            className={
              "w-32 rounded-full bg-[#31304D] py-3 text-center text-white transition-all duration-500 hover:bg-[#5e5c92]"
            }
          >
            Start
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, rotate: 360, scale: 1 }}
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          layout
        >
          <motion.img
            whileHover={{ opacity: 0.95 }}
            src={image}
            className="h-[28rem] rounded-t-full border-8 border-[#31304D] object-cover"
            alt=""
          />
        </motion.div>
      </div>
      <SlideShow />
      <Article />
    </div>
  );
}
