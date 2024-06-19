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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";
import { useState } from "react";
import ForgotpasswordDialog from "./ForgotpasswordDialog";
export function SignupDialog() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");
  const handleSignup = async () => {
    if (email && confpassword && password != "") {
      if (password === confpassword) {
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          console.log("Signup Succesfully!");
          toast({
            title: "Message:",
            description: "Register Succesfully! Please Login!",
          });
          <ForgotpasswordDialog />;
        } catch (err) {
          console.log("This email exists in the system! Signup Error:" + err);
          toast({
            title: "Message:",
            description: "Error! this email exists in the system",
          });
        }
      } else {
        toast({
          title: "Message:",
          description: "The password don't match each other",
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
        <Button variant="navLink2">Signup</Button>
      </DialogTrigger>
      <DialogContent className="max-w-md p-10">
        <DialogHeader>
          <DialogTitle>Register Form</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              placeholder="Email"
              className="col-span-4 outline-none"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              placeholder="Password"
              className="col-span-4 outline-none"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              onChange={(e) => setConfPassword(e.target.value)}
              type="password"
              id="confirmpassword"
              placeholder="Confirm Password"
              className="col-span-4 outline-none"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={handleSignup} className="w-full" type="submit">
              Register
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
