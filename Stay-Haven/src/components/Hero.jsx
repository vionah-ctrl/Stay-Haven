import React from "react";
import HeroImage from "../assets/hero/hero.jpg";
import Button from "../components/Button";
import Header from "./Header";

const Hero = () => {
  return (
    <section className="relative text-gray-900 min-h-[100vh] flex flex-col overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Header (REMOVE from layout flow) */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Header />
      </div>

      {/* Hero Text (FULL HEIGHT & CENTERED) */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-24 flex-grow">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6 drop-shadow-lg max-w-4xl">
          Your Minimalist Escape in the City
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
          Discover a serene, thoughtfully designed space in the heart of the metropolis.
          Perfect for work, relaxation, and everything in between.
        </p>

        <button className="bg-white text-black px-6 py-3 rounded-lg font-medium shadow-md hover:bg-gray-200 transition">
          Check Availability
        </button>
      </div>

      {/* Bottom Stats */}
      <div className="relative z-10 bg-white/10 backdrop-blur-md border-t border-white/20 flex flex-wrap justify-center md:justify-evenly items-center py-8 mx-6 rounded-[20px] mb-4 shadow-lg">
        {[
          { num: "1", label: "Bedroom" },
          { num: "5-Star", label: "Rated" },
          { num: "Free", label: "Wi-Fi" },
          { num: "Top", label: "Location" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="text-center text-white mx-6 px-6 border-r border-white/20 last:border-none"
          >
            <h2 className="text-3xl font-bold">{item.num}</h2>
            <p className="text-sm text-gray-200">{item.label}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Hero;
