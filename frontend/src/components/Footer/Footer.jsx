import React from "react";

import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div
      className="
        footer
        text-[#d9d9d9]
        bg-[#323232]
        flex
        flex-col
        gap-5
        py-[20px]
        px-[6vw]
        md:px-[8vw]
        pt-12
        md:pt-16
        lg:pt-20
        mt-[80px]
        md:mt-[100px] 
      "
      id="contact-us"
    >
      <div
        className="
          footer-content
          w-full
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-[2fr_1fr_1fr]
          gap-10
          md:gap-12
          lg:gap-[80px]
        "
      >
        {/* LEFT */}
        <div
          className="
            footer-content-left
            flex
            flex-col
            items-start
            gap-5
            sm:col-span-2
            lg:col-span-1
          "
        >
          <img
            src={assets.logo}
            alt="Tomato logo"
            className="w-[120px] md:w-[140px]"
          />

          <p className="max-w-full lg:max-w-[90%] text-sm md:text-base leading-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            obcaecati consequatur quos eius harum officiis veniam fuga rem?
            Iste, architecto?
          </p>

          <div className="footer-social-icons flex items-center">
            <img
              src={assets.facebook_icon}
              alt="Facebook"
              className="w-8 md:w-10 mr-3 md:mr-[15px] cursor-pointer"
            />

            <img
              src={assets.twitter_icon}
              alt="Twitter"
              className="w-8 md:w-10 mr-3 md:mr-[15px] cursor-pointer"
            />

            <img
              src={assets.linkedin_icon}
              alt="LinkedIn"
              className="w-8 md:w-10 mr-3 md:mr-[15px] cursor-pointer"
            />
          </div>
        </div>

        {/* CENTER */}
        <div
          className="
            footer-content-center
            flex
            flex-col
            items-start
            gap-5
          "
        >
          <h2 className="text-white font-semibold text-base md:text-lg">
            COMPANY
          </h2>

          <ul className="text-sm md:text-base">
            <li className="mb-[10px] cursor-pointer hover:text-white">Home</li>

            <li className="mb-[10px] cursor-pointer hover:text-white">
              About us
            </li>

            <li className="mb-[10px] cursor-pointer hover:text-white">
              Delivery
            </li>

            <li className="mb-[10px] cursor-pointer hover:text-white">
              Privacy policy
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div
          className="
            footer-content-right
            flex
            flex-col
            items-start
            gap-5
          "
        >
          <h2 className="text-white font-semibold text-base md:text-lg">
            GET IN TOUCH
          </h2>

          <ul className="text-sm md:text-base">
            <li className="mb-[10px]">+1-212-456-7890</li>

            <li className="mb-[10px] break-all">contact@tomato.com</li>
          </ul>
        </div>
      </div>

      <hr className="w-full h-[2px] my-5 bg-gray-500 border-0" />

      <p className="footer-copyright text-xs sm:text-sm md:text-base text-center md:text-left pb-2">
        Copyright {new Date().getFullYear()} &copy; Tomato.com - All Right
        Reserved
      </p>
    </div>
  );
};

export default Footer;
