import React from "react";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div>
      <h1>Welcome to Shipment Delivery Application</h1>
      <Link to="/login">Login</Link> or <Link to="/register">Register</Link>
    </div>
  );
};

export default HomeScreen;
