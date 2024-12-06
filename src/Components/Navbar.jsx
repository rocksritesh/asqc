import React from "react";
import { Link, useNavigate } from "react-router-dom"; // useNavigate to handle logout
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token"); // Check if token is present in localStorage

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token stored after logout
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <nav className="main">
      <h1>BPCL</h1>
      <ul className="menu">
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <button onClick={handleLogout} className="logout-button">
                LOG OUT
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">LOG IN</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
