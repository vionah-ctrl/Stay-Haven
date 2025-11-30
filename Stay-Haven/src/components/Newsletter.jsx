import React from "react";

const Newsletter = () => {
  return (
    <section className="w-full py-20 bg-gray-50 text-center">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-4">
        Get Exclusive Discounts on Your Next Stay
      </h2>

      {/* Sub Text */}
      <p className="text-gray-700 mb-10 max-w-2xl mx-auto px-4">
        Join our mailing list to receive special offers, travel tips, and updates on our latest properties.
      </p>

      {/* Email + Button */}
      <div className="flex justify-center gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="border border-gray-300 px-4 py-3 w-80 focus:outline-none rounded-none"
        />

        <button className="bg-black text-white px-6 py-3 rounded-none">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
