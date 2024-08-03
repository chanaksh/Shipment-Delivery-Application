import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShipmentScreen from "./screens/ShipmentScreen";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" component={HomeScreen} exact />
      <Route path="/login" component={LoginScreen} />
      <Route path="/register" component={RegisterScreen} />
      <Route path="/shipments" component={ShipmentScreen} />
    </Router>
  );
}

export default App;
