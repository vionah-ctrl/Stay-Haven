import React from "react";
import tailwindConfig from "../tailwind.config";
import "./index.css";
import Hero from "./components/Hero";
import Features from "./components/Features"; 
import Cards from "./components/Cards";
import Products from "./components/Products";
import Testimonial from "./components/Testimonial";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Hero />

      {/* ⭐ Explore Key Spaces BEFORE Features */}
      <section className="text-center py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
          Explore Key Spaces
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          <span className="px-4 py-2 bg-black text-white rounded-full text-sm">
            Bedroom
          </span>
          <span className="px-4 py-2 bg-gray-200 text-black rounded-full text-sm">
            Kitchenette
          </span>
          <span className="px-4 py-2 bg-gray-200 text-black rounded-full text-sm">
            Bathroom
          </span>
          <span className="px-4 py-2 bg-gray-200 text-black rounded-full text-sm">
            Amenities
          </span>
          <span className="px-4 py-2 bg-gray-200 text-black rounded-full text-sm">
            View
          </span>
        </div>
      </section>

      {/* Features now comes AFTER Explore section */}
      <Features />

      <Cards />
      <Products />
      <Testimonial />
      <Newsletter />
      <Footer />
    </>
  );
};

export default App;
