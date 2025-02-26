import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../Contexts/UserContext";
import ProductDeatailFeatures from "./ProductDeatailFeatures";

function ProductDetails() {
  const { addToCart } = useAuth();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch product by ID from the API
  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/products?_id=` + id
      );
      setProduct(response.data?.[0]);
    } catch (error) {
      console.error("Failed to fetch product info:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async (e) => {
    e.preventDefault();
    addToCart(id);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 my-8 px-4 lg:px-20">
      {/* Image Section */}
      <div className="flex justify-center items-center bg-gray-100 p-6 rounded-lg shadow-md">
        <img
          className="w-60 md:w-80 lg:w-96 object-contain transition-transform duration-300 hover:scale-105"
          src={product?.image?.url}
          alt={product?.title}
          loading="lazy"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{product?.title}</h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">₹{product?.price}</h2>
        <p className="text-sm text-gray-600 leading-relaxed">{product?.description}</p>
        <p className="text-sm text-gray-600 leading-relaxed">{product?.content}</p>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="mt-5 w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-lg text-lg font-semibold shadow-md transition-all duration-300 hover:from-blue-600 hover:to-blue-800 focus:outline-none"
        >
          Add to Cart
        </button>

        {/* Additional Features */}
        <ProductDeatailFeatures />
      </div>
    </div>
  );
}

export default ProductDetails;
