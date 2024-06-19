import { Link, useNavigate } from "react-router-dom";
import { LoginDialog } from "./LoginDialog";
import { buttonVariants } from "./ui/button";
import { SignupDialog } from "./SignupDialog";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/config";
import { useToast } from "./ui/use-toast";
import { motion } from "framer-motion";
export default function Navbar() {
  const nav = useNavigate();
  const { toast } = useToast();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast({ title: "Message:", description: "Log out Succesfully!" });
      nav("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <motion.nav
      layout
      initial={{ opacity: 0, y: -360 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className={
        "mx-auto my-6 flex max-w-6xl items-center justify-between rounded-xl border border-[#F0ECE5d] bg-primary px-12 py-6 shadow-xl shadow-[#6e6da3]"
      }
    >
      <Link to="/">
        <div className="flex items-center gap-2">
          <h1 className="text-[#F0ECE5] transition-all duration-500 hover:scale-125">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-9 w-9"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.072a8.25 8.25 0 1 0 10.562-.766 4.5 4.5 0 0 1-1.318 1.357L14.25 7.5l.165.33a.809.809 0 0 1-1.086 1.085l-.604-.302a1.125 1.125 0 0 0-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 0 1-2.288 4.04l-.723.724a1.125 1.125 0 0 1-1.298.21l-.153-.076a1.125 1.125 0 0 1-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 0 1-.21-1.298L9.75 12l-1.64-1.64a6 6 0 0 1-1.676-3.257l-.172-1.03Z"
                clipRule="evenodd"
              />
            </svg>
          </h1>
          <h1 className="text-3xl font-extrabold tracking-wide text-[#F0ECE5]">
            Abdelahi Weblog
          </h1>
        </div>
      </Link>
      <div className={"flex items-center gap-4 pt-1 text-[#F0ECE5]"}>
        <Link className={buttonVariants({ variant: "navLink1" })} to="/contact">
          Contact Us
        </Link>
        <Link className={buttonVariants({ variant: "navLink1" })} to="/about">
          About
        </Link>
        <Link className={buttonVariants({ variant: "navLink1" })} to="/blogs">
          Blogs
        </Link>
        <SignupDialog />
        <LoginDialog />
        <svg
          onClick={handleLogout}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7 rounded-full  bg-[#5453ac] p-1 transition-all duration-500 hover:scale-125 hover:bg-[#3d3c9c]"
        >
          <path
            fillRule="evenodd"
            d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </motion.nav>
  );
}
