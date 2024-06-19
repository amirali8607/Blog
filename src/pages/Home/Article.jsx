import React from "react";
import mypic1 from "../../assest/myPic4.jpg";
import mypic2 from "../../assest/myPic3.jpg";
import mypic3 from "../../assest/myPic5.jpg";
import { motion } from "framer-motion";
export default function Article() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="grid h-screen place-content-center place-items-center"
    >
      <div className={"grid w-4/5 grid-cols-3 gap-10 text-center "}>
        <div
          className={
            "grid grid-rows-2 rounded-3xl border border-[#31304d] bg-[#B6BBC4] shadow-lg shadow-[#76759b] duration-500 hover:rotate-2 hover:scale-95"
          }
        >
          <div>
            <img src={mypic1} className={"h-full rounded-t-3xl"} alt="" />
          </div>
          <div className={"p-3"}>
            <h1 className={"text-2xl"}>Earth From The Outside</h1>
            <br />
            <p className={"font-sans text-sm text-neutral-950"}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
              dicta nihil architecto vitae temporibus deserunt sequi molestiae
              exercitationem, tempora cum obcaecati ipsam saepe eos libero
              praesentium at quos quaerat error.
            </p>
          </div>
        </div>
        <div
          className={
            "grid grid-rows-2 rounded-3xl border border-[#31304d] bg-[#B6BBC4] shadow-lg shadow-[#76759b] duration-500 hover:rotate-2 hover:scale-95"
          }
        >
          <div>
            <img src={mypic2} className={"h-full rounded-t-3xl"} alt="" />
          </div>
          <div className={"p-3"}>
            <h1 className={"text-3xl"}>Electric Car</h1>
            <br />
            <p className={"font-sans text-sm text-neutral-950"}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
              dicta nihil architecto vitae temporibus deserunt sequi molestiae
              exercitationem, tempora cum obcaecati ipsam saepe eos libero
              praesentium at quos quaerat error.
            </p>
          </div>
        </div>
        <div
          className={
            "grid grid-rows-2 rounded-3xl border border-[#31304d] bg-[#B6BBC4] shadow-lg shadow-[#76759b] duration-500 hover:rotate-2 hover:scale-95"
          }
        >
          <div>
            <img src={mypic3} className={"h-full rounded-t-3xl"} alt="" />
          </div>
          <div className={"p-3"}>
            <h1 className={"text-3xl"}>Amazing Moon</h1>
            <br />
            <p className={"font-sans text-sm text-neutral-950"}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
              dicta nihil architecto vitae temporibus deserunt sequi molestiae
              exercitationem, tempora cum obcaecati ipsam saepe eos libero
              praesentium at quos quaerat error.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
