import React, { useState } from "react";
import "./App.css";

//components
import Registration from "./components/Registration";
import Login from "./components/Login";

const App = () => {
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleRegistrationComplete = () => {
    setIsRegistered(true);
    setShowLogin(true);
  };

  return (
    <div className="bg-[#675D50] h-screen">
      {isLoggedIn ? (
        <div>
          <p className="justify-center text-white pt-[20%] items-center mb-10 relative flex text-4xl font-mono">Welcome, {userName}!</p>
        </div>
      ) : (
        <div>
          <Registration
            handleRegistrationComplete={handleRegistrationComplete}
          />
          {isRegistered && showLogin && (
            <Login setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} />
          )}
        </div>
      )}
    </div>
  );
};

export default App;
