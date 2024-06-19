import React, { useState } from "react";
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
import { auth } from "../firebase/config";
import { sendPasswordResetEmail } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "./ui/use-toast";
import { LoginDialog } from "./LoginDialog";
const ForgotpasswordDialog = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const handleReset = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast({
        title: "Message:",
        description: "Password reset has been email sent!",
      });
      console.log("Password Reset Sent Succesfully!");
      nav("/");
    } catch (error) {
      console.error("Forgot Password Error:", error);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="fpass">Forget Password?</Button>
      </DialogTrigger>
      <DialogContent className="max-w-sm p-10">
        <DialogHeader>
          <DialogTitle>Reset Password Form</DialogTitle>
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
          <div className="mx-auto flex gap-2">
            <h3 className="text-[#31304d] ">You Have an Account? </h3>
            <h3>
              <DialogClose className="font-bold text-[#31304d]">
                Login
              </DialogClose>
            </h3>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={handleReset} className="w-full" type="submit">
              Reset
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default ForgotpasswordDialog;
