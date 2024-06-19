import { Button } from "@/Components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { useToast } from "./ui/use-toast";
import { useState } from "react";
import { db } from "@/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { Textarea } from "./ui/textarea";
import { Close } from "@radix-ui/react-dialog";
export function CreateBlogDialog() {
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [dataTime, setDataTime] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [newTags, setNewTags] = useState("");
  const [tags, setTags] = useState([]);
  const handelSubmit = async (e) => {
    e.preventDefault();
    const doc = { title, dataTime, body, author, tags };
    if (title && dataTime && body && author != "") {
      try {
        const ref = collection(db, "abdelahiBlog");
        await addDoc(ref, doc);
        toast({
          title: "Message:",
          description: "congratulations! Your blog has been created.",
        });
        setAuthor("");
        setBody("");
        setDataTime("");
        setNewTags("");
        setTitle("");
        setTags("");
      } catch (error) {
        console.log("ERROR!" + error);
        toast({
          title: "Message:",
          description: "Sorry! Your blog was not created.",
        });
      }
    } else {
      toast({
        title: "Message:",
        description: "Please fill in the required fields!!!",
      });
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
    <Dialog>
      <DialogTrigger asChild>
        <Button className="-mt-4 font-sans text-8xl font-bold text-white">
          +
        </Button>
      </DialogTrigger>
      <DialogContent className=" max-w-lg p-10">
        <DialogHeader>
          <DialogTitle>Create Blog Form</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-4 items-center gap-4">
          <Input
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
            className="col-span-4"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Input
            placeholder="DataTime"
            className="col-span-4 text-[#31304d]"
            type="date"
            onChange={(e) => setDataTime(e.target.value)}
            value={dataTime}
            required
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Input
            placeholder="Author"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            required
            className="col-span-4"
          />
        </div>
        <div className={"flex gap-4"}>
          <Input
            placeholder="Tags"
            className="col-span-4 rounded-md p-1 font-sans outline-none"
            onChange={(e) => setNewTags(e.target.value)}
            value={newTags}
          />
          <Button
            type="button"
            className="w-full rounded-md bg-[#31304d] p-1 font-sans text-white transition-all duration-500 hover:scale-95"
            onClick={handleAdd}
          >
            Add
          </Button>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Textarea
            rows="2"
            className="col-span-4 p-2 font-sans outline-none"
            placeholder="Caption"
            onChange={(e) => setBody(e.target.value)}
            value={body}
            required
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              type="submit"
              onClick={handelSubmit}
              className="w-full transition-all duration-500 hover:scale-95"
            >
              Submit
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
