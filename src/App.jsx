import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./router";
import Navbar from "./components/NavBar";

function App() {
  return (
    <Router>
      <Navbar />
      <AppRouter />
    </Router>
  );
}

export default App;
