import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddPost />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
