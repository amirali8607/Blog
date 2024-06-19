import React, { useMemo, useState } from "react";
import { useCollection } from "../hooks/useCollection";
import { Link } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";
import SearchBar from "../Components/SearchBar";
import { useAtom } from "jotai";
import { searchAtom } from "../Components/Atoms";
import { CreateBlogDialog } from "@/Components/CreateBlogDialog";
import { motion } from "framer-motion";
export default function Blog() {
  const [searchVal] = useAtom(searchAtom);
  const {
    mycollection: data,
    isLoading,
    error,
  } = useCollection("abdelahiBlog");
  const newData = useMemo(() => {
    if (data) {
      return data.filter((item) =>
        item.title.toLowerCase().includes(searchVal.toLowerCase()),
      );
    }
    return [];
  }, [searchVal, data]);
  const handleDelete = async (id) => {
    try {
      const ref = doc(db, "abdelahiBlog", id);
      await deleteDoc(ref);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="grid">
      {!isLoading && !error && <SearchBar />}
      {isLoading && (
        <div className="flex h-96 flex-col items-center justify-center rounded-2xl py-10">
          <div className="loader"></div>
        </div>
      )}
      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex h-96 items-center justify-center"
        >
          <div className="flex w-max flex-col items-center justify-center gap-4 p-10">
            <div className="flex flex-row gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-7 w-7 text-[#31304d]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                />
              </svg>
              <h1 className="text-center text-xl font-extrabold text-[#31304d] ">
                {error}
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-center text-sm font-semibold text-[#222235]">
                Make Sure you are connected to firebase!
              </p>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-center text-sm font-extralight text-[#31304d]">
                Firebase cannot display information for you, Connect to firebase
                to fix this error...
              </p>
            </div>
          </div>
        </motion.div>
      )}
      <div className="grid grid-cols-3 gap-8 p-10">
        {newData &&
          newData.map((myData) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              key={myData.id}
              className="grid w-full rounded-2xl border border-[#31304d] bg-[#9ba1ad] p-12 shadow-lg shadow-[#53526e] transition-all duration-500 hover:rotate-2"
            >
              <div className="grid grid-cols-3">
                <motion.h1 className="w-48 text-2xl font-extrabold">
                  {" "}
                  {myData.title}{" "}
                </motion.h1>
                <Link to={`/editBlog/${myData.id}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="ml-32 mt-1 h-7 w-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </Link>
                <svg
                  onClick={() => handleDelete(myData.id)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="ml-20 mt-1 h-7 w-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </div>
              <div className="grid gap-y-1">
                <motion.h3 className="font-sans font-light">
                  {myData.dataTime} (Year) is expression
                </motion.h3>
                <br />
                <div className="">
                  <motion.p className="font-sans font-semibold">
                    {myData.body} <br />{" "}
                  </motion.p>
                </div>
                <motion.h1 className="font-sans font-light">
                  Author : {myData.author}{" "}
                </motion.h1>
                <h4>tags:</h4>
                <motion.h1 className="font-mono font-semibold">
                  #{myData.tags[0]} #{myData.tags[1]} #{myData.tags[2]}{" "}
                </motion.h1>
              </div>
            </motion.div>
          ))}
        {!error && !isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex h-96 items-center justify-center rounded-2xl bg-[#31304d] text-center"
          >
            <CreateBlogDialog />
          </motion.div>
        )}
      </div>
    </div>
  );
}
