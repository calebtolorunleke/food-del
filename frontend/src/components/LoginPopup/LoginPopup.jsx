import React, { useState } from "react";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="login-popup absolute z-10 w-full h-full bg-[#00000090] grid">
      <form className="login-popup-container place-self-center flex flex-col gap-[25px] w-[max(23vw,330px)] bg-white text-[#808080] py-[25px] px-[30px] rounded-2xl font-normal text-[14px] animate-fadeIn">
        <div className="login-popup-title flex justify-between items-center text-black font-semibold text-lg ">
          <h2>{currState}</h2>
          <img
            src={assets.cross_icon}
            onClick={() => setShowLogin(false)}
            alt="cross icon"
            className="cursor-pointer w-[16px]"
          />
        </div>
        <div className="login-popup-inputs flex flex-col gap-[20px]">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              placeholder="Your name"
              required
              className="outline-none border border-[#c9c9c9] focus:border-[tomato] p-2 rounded-md transition-colors"
            />
          )}
          <input
            type="email"
            placeholder="Your email"
            required
            className="outline-none border border-[#c9c9c9] focus:border-[tomato] p-2 rounded-md transition-colors"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="outline-none border border-[#c9c9c9] focus:border-[tomato] p-2 rounded-md transition-colors"
          />
        </div>
        <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span
              onClick={() => setCurrState("Sign up")}
              className="cursor-pointer"
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setCurrState("Login")}
              className="cursor-pointer"
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
