// Navbar.js
import React, { useState, useEffect } from "react";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "../App.css";
import { IconContext } from "react-icons";

function Navbar({ cartItems }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isSidebarOpen && !event.target.closest(".navbar")) {
        setSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isSidebarOpen]);

  return (
    <IconContext.Provider value={{ color: "undifined" }}>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaBars onClick={toggleSidebar} />
        </Link>
        <h1 className="numesite">Juu Blog</h1>

        <div className="cart-icon">
          <Link to="/cart" className="cart-link">
            <FaShoppingCart className="cart-icon" />
            <span className="cart-items">{cartItems}</span>
          </Link>
        </div>
      </div>

      <nav className={isSidebarOpen ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiOutlineClose onClick={toggleSidebar} />
            </Link>
          </li>
          {SidebarData.map((item, index) => (
            <li key={index} className={item.cName}>
              <Link to={item.path} onClick={toggleSidebar}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </IconContext.Provider>
  );
}

export default Navbar;
