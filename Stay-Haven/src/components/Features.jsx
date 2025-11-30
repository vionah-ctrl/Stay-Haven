import React from "react";
import FeaturesImage from "../assets/features.jpg";

const Features = () => {
  return (
    <section className="bg-white text-gray-900 py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-12">
        
        {/* IMAGE */}
        <div className="md:w-1/2">
          <img
            src={FeaturesImage}
            alt="Stay Haven Interior"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>

        {/* TEXT */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            We Curate Your Perfect Stay
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            At <span className="font-semibold text-black">Stay Haven</span>, we connect
            travelers to luxurious, comfortable and affordable spaces designed
            to feel like home.
          </p>

          {/* FEATURES LIST */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold">✓</span>
              <p className="text-gray-700">Beautiful, fully furnished interiors</p>
            </div>

            <div className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold">✓</span>
              <p className="text-gray-700">Prime locations for convenience and safety</p>
            </div>

            <div className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold">✓</span>
              <p className="text-gray-700">Designed for comfort and relaxation</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
