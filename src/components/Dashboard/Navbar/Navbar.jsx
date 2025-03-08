import React from "react";
import "./Navbar.scss";

function Navbar({ toggleSidebar }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="navbar">
          <div className="menu-btn">
            <button onClick={toggleSidebar}>Menu</button>
          </div>
          <div className="user-photo">
            <img
              className="img-fluid"
              src="https://shaftali.az/public/assets/img/faridhajizadaimg.webp"
              alt="userPhoto"
            />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
