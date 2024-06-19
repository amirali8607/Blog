import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase/config";
import { useNavigate } from "react-router-dom";

export default function CreateBlog() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [dataTime, setDataTime] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  //handle add
  const [newTags, setNewTags] = useState("");
  const [tags, setTags] = useState([]);
  //...
  const handleSubmit = async (e) => {
    e.preventDefault();
    const doc = { title, dataTime, body, author, tags };
    try {
      const ref = collection(db, "abdelahiBlog");
      await addDoc(ref, doc);
      navigate("/blogs");
    } catch (error) {
      console.log("ERROR!" + error);
    }
  };
  const handleAdd = (e) => {
    e.preventDefault();
    if (newTags && !tags.includes(newTags)) {
      setTags((prevTags) => [...prevTags, newTags]);
    }
    setNewTags("");
  };
  return (
    <form
      className="grid grid-rows-6 place-content-center"
      onSubmit={handleSubmit}
    >
      <div className=" flex flex-col gap-5 rounded-xl border border-[#31304d] px-12 py-8 text-center shadow-xl shadow-[#31304d] backdrop-blur-lg [&>*]:rounded-md [&>input]:w-96 [&>input]:border [&>input]:border-[#31304d] [&>input]:p-1 [&>input]:font-sans [&>input]:outline-none">
        <h1 className="text-5xl text-[#31304d]">Create Blog</h1>
        <input
          placeholder="Title"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
        <input
          placeholder="DataTime"
          className="text-[#31304d]"
          type="date"
          onChange={(e) => setDataTime(e.target.value)}
          value={dataTime}
          required
        />
        <textarea
          rows="2"
          className="w-96 border border-[#31304d] p-2 font-sans outline-none"
          placeholder="Caption"
          type="text"
          onChange={(e) => setBody(e.target.value)}
          value={body}
          required
        />
        <input
          placeholder="Author"
          type="text"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          required
        />
        <div className={"flex flex-row gap-4"}>
          <input
            placeholder="Tags"
            className="rounded-md border border-[#31304d] p-1 font-sans outline-none"
            type="text"
            onChange={(e) => setNewTags(e.target.value)}
            value={newTags}
          />
          <button
            type="button"
            className="w-full rounded-md border border-[#31304d] bg-[#31304d] p-1 font-sans text-white transition-all duration-500 hover:scale-95 hover:border-[#31304d] hover:bg-[#31304d]"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
        <input
          type="submit"
          value="Submit"
          className=" bg-[#31304d] p-1 font-sans text-white transition-all duration-500  hover:scale-95 hover:border-[#31304d] hover:bg-[#31304d]"
        />
      </div>
    </form>
  );
}
