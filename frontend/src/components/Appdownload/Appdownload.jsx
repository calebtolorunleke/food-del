import React from "react";
import { assets } from "../../assets/assets";

const Appdownload = () => {
  return (
    <div
      className="app-download m-auto mt-[100px] text-center flex flex-col items-center justify-center gap-6 font-medium text-[max(3vw,20px)]"
      id="app-download"
    >
      <p className="leading-snug text-[#262626]">
        For Better Experience Download <br /> Tomato App
      </p>

      <div className="app-download-platforms flex justify-center gap-[max(2vw,10px)] mt-2">
        <img
          src={assets.play_store}
          alt="Play Store"
          className="w-[max(12vw,120px)] max-w-[180px] cursor-pointer transition-transform duration-300 hover:scale-105"
        />
        <img
          src={assets.app_store}
          alt="App Store"
          className="w-[max(12vw,120px)] max-w-[180px] cursor-pointer transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Appdownload;
