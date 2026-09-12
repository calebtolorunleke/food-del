import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer text-[#d9d9d9] bg-[#323232] flex flex-col  gap-5  py-[20px] px-[8vw] pt-20 ">
      <div className="footer-content w-full grid grid-cols-[2fr_1fr_1fr] gap-[80px]">
        <div className="footer-content-left flex flex-col items-start gap-[20px]">
          <img src={assets.logo} alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            obcaecati consequatur quos eius harum officiis veniam fuga rem?
            Iste, architecto?
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center flex flex-col items-start gap-[20px]">
          <h2 className="text-white">COMPANY</h2>
          <ul>
            <li className="mb-[10px]">Home</li>
            <li className="mb-[10px]">About us</li>
            <li className="mb-[10px]">Delivery</li>
            <li className="mb-[10px]">Privacy policy</li>
          </ul>
        </div>

        <div className="footer-content-right flex flex-col items-start gap-[20px]">
          <h2 className="text-white">GET IN Touch</h2>
          <ul>
            <li className="mb-[10px]">+1-212-456-7890</li>
            <li className="mb-[10px]">contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright {new Date().getFullYear()} &copy; Tomato.com - All Right
        Reserved
      </p>
    </div>
  );
};

export default Footer;
