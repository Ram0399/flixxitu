import React from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import Nav from "./Nav"; // Import the Nav component

function App() {
  const user = null; // Set user to null

  return (
    <div className="app">
      <Router>
        <Nav /> {/* Add the Nav component */}
        {user === null ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
