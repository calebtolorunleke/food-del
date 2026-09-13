import React, { useState } from "react";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            src={assets.cross_icon}
            onClick={() => setShowLogin(false)}
            alt="cross icon"
          />
        </div>
        <div className="login-popup-inputs">
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your name" required />
          <input type="password" placeholder="Your name" required />
        </div>
        <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
      </form>
    </div>
  );
};

export default LoginPopup;
