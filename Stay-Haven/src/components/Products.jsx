import React from "react";

import bathroom from "../assets/products/bathroom.jpg";
import bedroom from "../assets/products/bedroom.jpg";
import cityview from "../assets/products/cityview.jpg";
import kitchen from "../assets/products/kitchen.jpg";
import livingroom from "../assets/products/livingroom.jpg";
import workspace from "../assets/products/workspace.jpg";

const products = [
  { id: 1, name: "Tranquil Bedroom", img: bedroom },
  { id: 2, name: "Sleek Kitchenette", img: kitchen },
  { id: 3, name: "Modern Bathroom", img: bathroom },
  { id: 4, name: "Dedicated Workspace", img: workspace },
  { id: 5, name: "Cozy Living Space", img: livingroom },
  { id: 6, name: "Stunning City View", img: cityview },
];

const Products = () => {
  return (
    <section className="bg-white text-gray-800 py-24 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Apartment Gallery
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A glimpse into your future stay.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src={product.img}
              alt={product.name}
              className="h-56 w-full object-cover"
            />

            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
