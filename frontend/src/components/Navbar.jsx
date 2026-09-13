import { useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="navbar relative py-4 md:py-5 flex justify-between items-center px-5 sm:px-8 lg:px-16">
      {/* LOGO */}
      <img
        src={assets.logo}
        alt="Tomato logo"
        className="logo w-[110px] sm:w-[120px] lg:w-[150px]"
      />

      {/* DESKTOP NAVIGATION */}
      <ul className="hidden md:flex list-none gap-5 lg:gap-8 text-[#49557e] text-base lg:text-[18px]">
        <li
          onClick={() => setMenu("home")}
          className={`${
            menu === "home" ? "active" : ""
          } cursor-pointer transition duration-300`}
        >
          Home
        </li>

        <li
          onClick={() => setMenu("menu")}
          className={`${
            menu === "menu" ? "active" : ""
          } cursor-pointer transition duration-300`}
        >
          Menu
        </li>

        <li
          onClick={() => setMenu("mobile-app")}
          className={`${
            menu === "mobile-app" ? "active" : ""
          } cursor-pointer transition duration-300`}
        >
          Mobile-app
        </li>

        <li
          onClick={() => setMenu("contact-us")}
          className={`${
            menu === "contact-us" ? "active" : ""
          } cursor-pointer transition duration-300`}
        >
          Contact Us
        </li>
      </ul>

      {/* RIGHT SIDE */}
      <div className="navbar-right flex items-center gap-4 sm:gap-5 lg:gap-10">
        {/* SEARCH */}
        <img
          src={assets.search_icon}
          alt="Search"
          className="w-[18px] sm:w-[20px] cursor-pointer"
        />

        {/* BASKET */}
        <div className="navbar-search-icon relative cursor-pointer">
          <img
            src={assets.basket_icon}
            alt="Basket"
            className="w-[18px] sm:w-[20px]"
          />

          <div className="absolute w-[9px] h-[9px] bg-red-500 rounded-full top-[-4px] right-[-4px]" />
        </div>

        {/* SIGN IN - HIDDEN ON SMALL MOBILE */}
        <button className="hidden sm:block bg-transparent text-sm lg:text-base text-[#49557e] border border-red-500 py-1.5 px-3 lg:px-4 rounded-full cursor-pointer hover:bg-[#fff4f2] transition duration-300">
          Sign In
        </button>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden text-[#49557e] text-2xl cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {mobileMenu && (
        <ul className="absolute top-full left-0 w-full bg-white shadow-md z-50 flex flex-col items-center gap-5 py-5 text-[#49557e] text-base md:hidden">
          <li
            onClick={() => {
              setMenu("home");
              setMobileMenu(false);
            }}
            className={`${menu === "home" ? "active" : ""} cursor-pointer`}
          >
            Home
          </li>

          <li
            onClick={() => {
              setMenu("menu");
              setMobileMenu(false);
            }}
            className={`${menu === "menu" ? "active" : ""} cursor-pointer`}
          >
            Menu
          </li>

          <li
            onClick={() => {
              setMenu("mobile-app");
              setMobileMenu(false);
            }}
            className={`${
              menu === "mobile-app" ? "active" : ""
            } cursor-pointer`}
          >
            Mobile-app
          </li>

          <li
            onClick={() => {
              setMenu("contact-us");
              setMobileMenu(false);
            }}
            className={`${
              menu === "contact-us" ? "active" : ""
            } cursor-pointer`}
          >
            Contact Us
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
