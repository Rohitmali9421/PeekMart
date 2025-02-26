import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../Contexts/UserContext";

function ProductCard({ id, title, imageUrl, price }) {
  const { addToCart } = useAuth();

  const handleAddToCart = async (e) => {
    e.preventDefault();
    addToCart(id);
  };

  return (
    <Link
      to={`/product/${id}`}
      className="group block transform transition duration-300 hover:scale-105"
    >
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-sm shadow-md overflow-hidden mx-auto flex flex-col h-full transition-all duration-300 hover:shadow-lg">
        
        {/* Image Section */}
        <div className="h-80 w-full flex items-center justify-center bg-gray-100">
          <img
            className="h-full w-auto object-cover rounded-t-sm transition-all duration-300 group-hover:scale-105"
            src={imageUrl}
            alt={title}
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 p-5 flex flex-col justify-between">
          <div className="flex-1">
            <h5 className="text-lg font-semibold tracking-tight text-gray-900 line-clamp-2">
              {title}
            </h5>
          </div>

          {/* Price & Button */}
          <div className="flex items-center justify-between mt-4">
            <span className="text-2xl font-bold text-gray-700">&#8377;{price}</span>
            <button
              onClick={handleAddToCart}
              className="text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition-all duration-300 font-medium rounded-lg text-sm px-5 py-2.5 shadow-md focus:ring-2 focus:ring-blue-400"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
