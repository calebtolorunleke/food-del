import { useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar py-5 flex justify-between items-center">
      <img src={assets.logo} alt="" className="logo w-[150px]" />

      <ul className="flex list-none gap-[20px] text-[#49557e] text-[18px]">
        <li
          onClick={() => setMenu("home")}
          className={`${menu === "home" ? "active" : ""} cursor-pointer transition duration-300`}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={`${menu === "menu" ? "active" : ""} cursor-pointer transition duration-300`}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("mobile-app")}
          className={`${menu === "mobile-app" ? "active" : ""} cursor-pointer transition duration-300`}
        >
          Mobile-app
        </li>
        <li
          onClick={() => setMenu("contact-us")}
          className={`${menu === "contact-us" ? "active" : ""} cursor-pointer transition duration-300`}
        >
          Contact Us
        </li>
      </ul>

      <div className="navbar-right flex items-center gap-[40px]">
        <img src={assets.search_icon} alt="search icon" />

        <div className="navbar-search-icon relative">
          <img src={assets.basket_icon} alt="basket icon" />

          <div className="absolute w-[10px] h-[10px] bg-red-500 rounded-full top-[-5px] right-[-5px]"></div>
        </div>
        <button className="bg-transparent  text-[#49557e] border border-red-500 py-1 px-3 rounded-full cursor-pointer hover:bg-[#fff4f2] transition duration-300 ">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
