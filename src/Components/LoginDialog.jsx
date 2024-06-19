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
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";
import ForgotpasswordDialog from "./ForgotpasswordDialog";
export function LoginDialog() {
  const nav = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handelLogin = async () => {
    if (email && password != "") {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("Login Succesfully!");
        toast({
          title: "Message:",
          description: "Welcome! Login Succesfully!",
        });
        nav("/blogs");
      } catch (err) {
        console.log("Error! Email or password incorrect! Login Error:" + err);
        toast({
          title: "Message:",
          description: "Error! Email or Password incorrect",
        });
      }
    } else {
      toast({
        title: "Message:",
        description: "Please fill in the required fields!!!",
      });
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="navLink2">Login</Button>
      </DialogTrigger>
      <DialogContent className=" max-w-md p-10">
        <DialogHeader>
          <DialogTitle>Login Form</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="col-span-4"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              placeholder="Password"
              className="col-span-4"
            />
          </div>
          <div className="mx-auto flex items-center gap-28">
            <div className="flex gap-1">
              <Checkbox />
              <span className="text-sm text-[#31304d]">Remember Me</span>
            </div>
            <div>
              <ForgotpasswordDialog />
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" onClick={handelLogin} className="w-full">
              Login
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
