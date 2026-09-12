import React from "react";
import { assets } from "../../assets/assets";

const Appdownload = () => {
  return (
    <div className="app-download ">
      <p>
        For better Expereince Download <br /> Tomato App
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default Appdownload;
