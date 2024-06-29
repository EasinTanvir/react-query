import React from "react";
import HomePage from "./components/HomePage";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PostDetails from "./components/PostDetails";
import Post from "./components/Post";

const App = () => {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/post">Post</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post" element={<Post />} />
        <Route path="/post/:id" element={<PostDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
