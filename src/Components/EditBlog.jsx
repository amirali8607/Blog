import { doc, getDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { useNavigate, useParams } from "react-router-dom";
export default function EditBlog() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [dataTime, setDataTime] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  //handle add
  // const [newTags,setNewTags] = useState('')
  // const [tags,setTags] = useState([])
  //...
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const ref = doc(db, "abdelahiBlog", id);
      await updateDoc(ref, {
        title: title,
        dataTime: dataTime,
        body: body,
        author: author,
      });
      navigate("/blogs");
    } catch (error) {
      console.error("Edit Error:" + error);
    }
  };
  // const handleAdd = (e) => {
  //    e.preventDefault()
  //    if(newTags && !tags.includes(newTags)){
  //       setTags(prevTags => [...prevTags,newTags])
  //    }
  //    setNewTags('')
  // }
  return (
    <form
      className="grid grid-rows-6 place-content-center overflow-hidden"
      onSubmit={handleSubmit}
    >
      <div className=" flex flex-col gap-5 rounded-xl border-2 border-[#31304d] px-12 py-8 text-center backdrop-blur-lg [&>*]:rounded-md [&>input]:w-96 [&>input]:border [&>input]:border-[#31304d] [&>input]:p-2 [&>input]:font-sans [&>input]:outline-none">
        <h1 className="text-5xl text-[#31304d]">Edit Blog</h1>
        <input
          placeholder="Title"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
        <input
          placeholder="DataTime"
          type="date"
          onChange={(e) => setDataTime(e.target.value)}
          value={dataTime}
          required
        />
        <textarea
          rows="3"
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
        {/* <div className={'w-full grid-cols-2'}>
               <input placeholder='Tags...' className='p-2 outline-none rounded-md font-sans border border-[#31304d]' type="text" onChange={(e) => setNewTags(e.target.value)} value={newTags}/>
               <button type='button' className='px-7 p-2 mx-4 rounded-md bg-[#31304d] text-white font-sans hover:scale-95 duration-500 transition-all hover:bg-[#5e5c92]' onClick={handleAdd}>Add</button>
               {tags && <p className='font-extralight font-sans'>Current Tags : {tags.map(i => <em key={i}>{i}.</em> )}</p>}
            </div> */}
        <input
          type="submit"
          value="Submit"
          className="w-96 bg-[#31304d] p-2 font-sans text-white transition-all duration-500  hover:scale-95 hover:border-[#31304d] hover:bg-[#31304d]"
        />
      </div>
    </form>
  );
}
