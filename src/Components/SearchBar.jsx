import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import { useAtom } from "jotai";
import { searchAtom } from "./Atoms";
import { motion } from "framer-motion";
export default function SearchBar() {
  const [searchVal, setSearchVal] = useAtom(searchAtom);
  // const handleClick = async () => {
  //   const q = query(
  //     collection(db, "abdelahiBlog"),
  //     where("title", "==", searchVal)
  //   );
  //   const data = await getDocs(q);
  // };
  return (
    <div className="flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex w-96 rounded-full border border-[#56548b] bg-[#566585] px-8 py-4 text-center shadow-lg shadow-[#31304d]"
      >
        <input
          type="text"
          className="w-full border-0 bg-inherit text-white placeholder-white outline-none"
          placeholder="Search Blog..."
          onChange={(e) => setSearchVal(e.target.value)}
          value={searchVal}
        />
        <svg
          // onClick={handleClick}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </motion.div>
    </div>
  );
}
