import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    window.location.href = "/";
  };

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        {userInfo ? (
          <>
            <Link to="/shipments">My Shipments</Link>
            <button onClick={logoutHandler}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
