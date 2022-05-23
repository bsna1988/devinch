import React from "react";
import Home from "./pages/Home/Home";
import Discussions from "./pages/Discussions/Discussions";
import Post from "./pages/Post/Post";
import Contact from "./pages/Contact/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discussions" element={<Discussions />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
