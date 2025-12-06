import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">

      <nav className="w-full flex items-center justify-between py-3 px-4">

        {/* LEFT — LOGO FIXED TO FAR LEFT */}
        <div className="flex items-center gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 28L32 10l24 18v24a2 2 0 0 1-2 2H38V40H26v14H10a2 2 0 0 1-2-2V28z"
              fill="none"
              stroke="black"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect x="28" y="40" width="8" height="12" rx="1" fill="black" />
          </svg>

          <span className="text-black font-semibold text-[17px]">
            StayHaven
          </span>
        </div>

        {/* RIGHT — GROUPED NAV LINKS + BUTTON */}
        <div className="flex items-center gap-10 pr-10">

          <div className="flex items-center gap-8 text-[14px] text-gray-700">
            <span className="cursor-pointer hover:text-black">Home</span>
            <span className="cursor-pointer hover:text-black">Gallery</span>
            <span className="cursor-pointer hover:text-black">Location</span>
          </div>

          <button className="text-[14px] bg-black text-white px-5 py-2 rounded hover:bg-gray-900">
            Book Now
          </button>

        </div>

      </nav>
    </div>
  );
};

export default Navbar;
