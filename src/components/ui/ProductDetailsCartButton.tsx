"use client";

import { useCartStore } from "@/store/useCartStore";
import React from "react";
import Button from "./Button";
import { BiMinus, BiPlus } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const ProductDetailsCartButton = ({ ...product }: Product) => {
  const {
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCartStore();

  const inCart = cart.find((p) => p.id === product.id);
  return (
    <div className="w-1/2">
      {/* Add to Cart */}
      {!inCart ? (
        <Button
          onClick={() =>
            addToCart({
              ...product,
              quantity: 1,
            })
          }
          className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
        >
          Add to Cart
        </Button>
      ) : (
        <div className="flex items-center gap-3 justify-center">
          <div className="flex items-center border border-purple-300 rounded-full p-1 gap-3 bg-white shadow-sm">
            <button
              aria-label="decrease quantity"
              onClick={() => decreaseQuantity(product.id)}
              className="bg-rose-600 hover:bg-rose-700 text-white p-1 rounded-full font-bold"
            >
              <BiMinus size={18} />
            </button>
            <span className="text-base text-gray-800">{inCart.quantity}</span>
            <button
              aria-label="increase quantity"
              disabled={inCart.quantity >= 10}
              onClick={() => increaseQuantity(product.id)}
              className="bg-purple-600 hover:bg-purple-700 text-white p-1 rounded-full font-bold"
            >
              <BiPlus size={18} />
            </button>
          </div>

          {/* 🗑️ Delete Button */}
          <button
            onClick={() => removeFromCart(product.id)}
            title="Remove from cart"
            className="bg-red-50 hover:bg-red-100 text-rose-600 hover:text-red-700 rounded-full p-1.5 shadow-sm transition-all duration-200 border border-red-200 hover:shadow-md"
          >
            <AiFillDelete className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsCartButton;
