import React from "react";
import Home from "./pages/Home/Home";
import Discussions from "./pages/Discussions/Discussions";
import Contact from "./pages/Contact/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostPage from "./pages/Post/Post";
import { useParams } from "react-router-dom";

function App() {
  const PostPageWrapper = (props) => {
    const params = useParams();
    // etc... other react-router-dom v6 hooks

    return (
      <PostPage
        {...props}
        params={params}
        // etc...
      />
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discussions" element={<Discussions />} />
        <Route path="/discussions/:id" element={<PostPageWrapper />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
