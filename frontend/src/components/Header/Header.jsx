import React from "react";

const Header = () => {
  return (
    <div
      className="header h-[34vw] my-[30px] bg-no-repeat bg-contain fade-in"
      style={{ backgroundImage: `url("/header_img.png")` }}
    >
      <div className="header-content absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] pl-[6vw]">
        <h2 className="text-[60px] text-white font-semibold">
          Order your favourite food here
        </h2>

        <p className="text-white/70 text-[1vw] fade-in-more ">
          Choose from a diverse menu featuring a wide variety of delicious
          dishes, made with fresh ingredients and delivered straight to your
          door.
        </p>
        <button className=" text-[#747474] py-[1vw] px-[2.3vw] bg-white rounded-4xl">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
