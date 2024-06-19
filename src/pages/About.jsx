import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function Document() {
  return (
    <div className="flex justify-center">
      <div
        className={
          "grid h-[76vh] w-4/5 grid-cols-2 place-content-center  gap-20"
        }
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={
            "grid place-content-center place-items-center gap-8 rounded-3xl border border-[#31304d] bg-[#B6BBC4] p-12 text-center shadow-lg shadow-[#76759b] transition-all duration-700 hover:scale-95 hover:bg-[#F0ECE]"
          }
        >
          <h1 className="text-4xl font-extrabold">Specialities</h1>
          <h2 className="font-sans text-sm font-semibold tracking-normal">
            In this Section, I want to tell you some of my speciality
            (programming languages and frameworks)
            <br />
            language including : #JavaScript , #HTML , #CSS , #Python <br />{" "}
            framework including : #ReactJs , #TailwindCss <br /> and also I
            Studied at Soroush University and Sarami School
          </h2>
          <h3 className="font-mono text-sm tracking-tighter">
            Click the button below to Call me | Contact
          </h3>
          <Link
            to="/contact"
            className="w-96 scale-90 rounded-full bg-[#31304D] py-2 text-white transition-all duration-500 hover:bg-[#5e5c92]"
          >
            Call me
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={
            "grid place-content-center place-items-center gap-8 rounded-3xl border border-[#31304d] bg-[#B6BBC4] p-12 text-center shadow-lg shadow-[#76759b] transition-all duration-700 hover:scale-95 hover:bg-[#F0ECE]"
          }
        >
          <h1 className={"text-4xl font-extrabold"}>Documents</h1>
          <h2 className={"font-sans text-sm font-semibold tracking-normal"}>
            In this section, I want to show you my documents <br /> As I said
            previous part,I have a series of specialities!
            <br /> including : #JavaScript , #HTML , #CSS , #Python and #ReactJs
            , #TailwindCss <br /> Now I want to show you my documents, including
            : #ICDL , #TTC , #CTFA , #CFA , #Bachelor
          </h2>
          <h3 className={"font-mono text-sm tracking-tighter"}>
            Click the button below to Post your blogs | Blogs
          </h3>
          <Link
            to="/Blogs"
            className={
              "w-96 scale-90 rounded-full bg-[#31304D] py-2 text-white transition-all duration-500 hover:bg-[#5e5c92]"
            }
          >
            Post Blog
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
