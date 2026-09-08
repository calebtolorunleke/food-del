import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="navbar py-5 flex justify-between items-center">
      <img src={assets.logo} alt="" className="logo w-[150px]" />
      <ul className="flex list-none gap-[20px] text-[#49557e] text-[18px]">
        <li className="">Home</li>
        <li>Menu</li>
        <li>Mobile-app</li>
        <li>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
