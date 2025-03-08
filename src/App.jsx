import React, { useState, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Post = lazy(() => import("./pages/Post/Post"));
import Navbar from "./components/Dashboard/Navbar/Navbar";
import Sidebar from "./components/Dashboard/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./App.css";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="app">
        <Navbar toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
        <div className="dashboard-container">
          <Sidebar isOpen={isSidebarOpen} />
          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/posts" element={<Post />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
