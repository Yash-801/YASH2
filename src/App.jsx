import React from "react";
import { useState, useEffect } from "react";
import Login from "./Login";
import Home from "./Home";
import LoginImage from "./LoginImage";

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
    <>
      {isLoggedIn ? (
        <Home onLogout={handleLogout} />
      ) : (
        <div className="main">
          <Login setIsLoggedIn={setIsLoggedIn} />
          <LoginImage />
        </div>
      )}
    </>
  );
};

export default App;
