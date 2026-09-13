import React from "react";

const Header = () => {
  return (
    <div
      className="
        header
        relative
        h-[55vw]
        sm:h-[45vw]
        lg:h-[34vw]
        my-5
        sm:my-[30px]
        bg-no-repeat
        bg-cover
        bg-center
        fade-in
      "
      style={{ backgroundImage: `url("/header_img.png")` }}
    >
      <div
        className="
          header-content
          absolute
          flex
          flex-col
          items-start
          gap-3
          sm:gap-4
          lg:gap-[1.5vw]
          max-w-[85%]
          sm:max-w-[70%]
          lg:max-w-[50%]
          bottom-[8%]
          sm:bottom-[10%]
          left-0
          pl-[5vw]
          sm:pl-[6vw]
        "
      >
        {/* HEADING */}
        <h2
          className="
            text-[28px]
            sm:text-[40px]
            md:text-[48px]
            lg:text-[60px]
            text-white
            font-semibold
            leading-tight
          "
        >
          Order your favourite food here
        </h2>

        {/* DESCRIPTION */}
        <p
          className="
            text-white/70
            text-sm
            sm:text-base
            lg:text-[1vw]
            leading-5
            sm:leading-6
            max-w-[95%]
            fade-in-more
          "
        >
          Choose from a diverse menu featuring a wide variety of delicious
          dishes, made with fresh ingredients and delivered straight to your
          door.
        </p>

        {/* BUTTON */}
        <button
          className="
            text-[#747474]
            py-2
            px-5
            sm:py-3
            sm:px-6
            lg:py-[1vw]
            lg:px-[2.3vw]
            bg-white
            rounded-full
            cursor-pointer
            transition-all
            duration-300
            ease-in-out
            hover:bg-[#fcfcfc]
            hover:text-[#262626]
            hover:scale-105
            shadow-sm
            text-sm
            sm:text-base
          "
        >
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
