import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

function Sidebar({ isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
