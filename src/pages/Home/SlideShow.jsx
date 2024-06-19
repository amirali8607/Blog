import { useState } from "react";
import { motion } from "framer-motion";
export default function SlideShow() {
  const slider = [
    {
      url: "https://img.freepik.com/free-photo/beautiful-shot-wild-landscape-sunset_181624-52160.jpg?size=626&ext=jpg",
    },
    {
      url: "https://img.freepik.com/free-photo/beautiful-shot-lake-surrounded-by-trees-near-snowy-mountain_181624-2084.jpg?size=626&ext=jpg",
    },
    {
      url: "https://img.freepik.com/free-photo/beautiful-view-pond-reflecting-green-trees-shore-surrounded-by-snowy-mountains_181624-4447.jpg?size=626&ext=jpg",
    },
    {
      url: "https://img.freepik.com/free-photo/beautiful-shot-natural-scenery-autumn_181624-25934.jpg?size=626&ext=jpg",
    },
  ];
  const [index, setIndex] = useState(0);
  const prevIndex = () => {
    if (index === 0) setIndex(slider.length - 1);
    else setIndex(index - 1);
  };
  const nextIndex = () => {
    if (index === slider.length - 1) setIndex(0);
    else setIndex(index + 1);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="flex h-screen flex-col items-center justify-center"
    >
      <div className="m-auto flex h-[600px] w-full max-w-[1400px] flex-row gap-x-10 py-16">
        <div
          onClick={prevIndex}
          className="flex h-[475px] w-60 cursor-pointer items-center  justify-center text-black"
        >
          <svg
            onClick={prevIndex}
            xmlns="http://www.w3.org/4000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-9 w-9 rounded-full bg-[#B6BBC4] p-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </div>
        <div
          className="h-full w-full rounded-3xl border-4 border-[#31304D] bg-cover bg-center duration-150"
          style={{ backgroundImage: `url(${slider[index].url})` }}
        ></div>
        <div
          onClick={nextIndex}
          className="flex h-[475px] w-60 cursor-pointer items-center  justify-center text-3xl text-black"
        >
          <svg
            onClick={nextIndex}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-9 w-9 rounded-full bg-[#B6BBC4] p-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>
      <div className="-mt-24 flex justify-center gap-3">
        <div className="h-2 w-2 rounded-full bg-[#31304D]"></div>
        <div className="h-2 w-2 rounded-full bg-[#31304D]"></div>
        <div className="h-2 w-2 rounded-full bg-[#31304D]"></div>
        <div className="h-2 w-2 rounded-full bg-[#31304D]"></div>
      </div>
    </motion.div>
  );
}
