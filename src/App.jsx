import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./Components/Navbar";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./Components/Login";
import Forgotpass from "./Components/Forgotpassword";
import Blog from "./pages/Blog";
import CreateBlog from "./Components/CreateBlog";
import EditBlog from "./Components/EditBlog";
import Signup from "./Components/Signup";
import "./App.css";
import { LoginDialog } from "./Components/LoginDialog";
import { Toaster } from "./Components/ui/toaster";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blog />} />
          {/* <Route path="/createBlog" element={<CreateBlog />} /> */}
          <Route path="/editBlog/:id" element={<EditBlog />} />
          {/* forms */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/signup" element={<Signup />} /> */}
          {/* <Route path="/forgotpass" element={<Forgotpass />} /> */}
        </Routes>
      </BrowserRouter>
      <Toaster />
      <div className="flex w-screen flex-row justify-center">
        <p className="font-extrabold text-[#31304d]">
          © 2024 AbdelahiBlog inc.
        </p>
      </div>
    </div>
  );
}

export default App;
