import React from "react";
import profilePic from "../assets/testimonials/person.jpg";

const Testimonial = () => {
  return (
    <section className="w-full py-20 bg-white text-center">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-10">
        What People Are Saying About Us
      </h2>

      {/* Profile + Text */}
      <div className="flex flex-col items-center gap-3">
        
        {/* Image on LEFT of name */}
        <div className="flex items-center gap-3">
          <img 
            src={profilePic}
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover"
          />

          <div className="text-left">
            <h3 className="text-xl font-semibold">Jane S</h3>
            <p className="text-gray-600 text-sm">Frequent Traveller</p>
          </div>
        </div>

      </div>

      {/* Testimonial Text */}
      <p className="max-w-3xl mx-auto text-lg italic text-gray-700 leading-relaxed mt-6 px-4">
        “The perfect minimalist retreat in the city. Every detail was impeccable,
        the design was stunning, and the location couldn't be better.
        It truly felt like home. I can’t wait to return!”
      </p>
    </section>
  );
};

export default Testimonial;
