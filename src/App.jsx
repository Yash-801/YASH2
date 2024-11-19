import React from "react";
import { useState, useEffect } from "react";
import Login from "./Login";
import Home from "./Home";
import LoginImage from "./LoginImage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JobList from "./components/jobData";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    setIsLoggedIn(false);
  };
  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <Route path="/" element={<Home onLogout={handleLogout} />} />
        ) : (
          <Route
            path="/"
            element={
              <div className="main">
                <Login setIsLoggedIn={setIsLoggedIn} />
                <LoginImage />
              </div>
            }
          />
        )}
        <Route path="/jobs" element={<JobList />} />
      </Routes>
    </Router>
  );
};

export default App;
