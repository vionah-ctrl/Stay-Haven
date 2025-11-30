import React from "react";

const Navbar = () => {
  return (
    <div className="pt-4"> {/* Small space at the top */}

      <nav className="w-full flex items-center justify-between px-6 py-3">

        {/* Left space (placeholder since logo removed) */}
        <div></div>

        {/* Middle: Simple text links */}
        <div className="flex items-center gap-8 text-sm text-white">
          <span className="cursor-pointer hover:opacity-70">Home</span>
          <span className="cursor-pointer hover:opacity-70">Gallery</span>
          <span className="cursor-pointer hover:opacity-70">Location</span>
        </div>

        {/* Right: Book Now button */}
        <button className="text-xs bg-white text-black px-4 py-1.5 rounded">
          Book Now
        </button>

      </nav>
      
    </div>
  );
};

export default Navbar;
