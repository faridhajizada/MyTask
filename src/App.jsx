import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Post from "./pages/Post/Post";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
