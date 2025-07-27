"use client";

import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";
import Link from "next/link";
import { AiFillDelete } from "react-icons/ai";
import { BiMinus, BiPlus } from "react-icons/bi";
import EmptyCartMessage from "./EmptyCartMessage";

const CartDetails = () => {
  const {
    cart,
    getTotalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCartStore();

  return (
    <>
      {cart.length === 0 ? (
        <EmptyCartMessage />
      ) : (
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
          <h2 className="text-2xl font-bold text-purple-600 mb-6">Your Cart</h2>
          <div className="space-y-6">
            {cart.map((product) => (
              <div
                key={product.id}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b border-purple-300 pb-6"
              >
                {/* Image */}
                <div className="w-full sm:w-24 h-24 relative rounded-md border border-purple-600 bg-white overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                {/* Info and Controls */}
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 sm:gap-0">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {product.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        ${product.price} per item
                      </p>
                    </div>

                    {/* Price Total (top right on desktop) */}
                    <p className="text-base font-semibold text-purple-600 sm:text-right">
                      ${product.price * product.quantity}
                    </p>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    {/* Quantity */}
                    <div className="flex items-center border border-purple-300 rounded-full p-1 gap-3 bg-white shadow-sm">
                      <button
                        onClick={() => decreaseQuantity(product.id)}
                        className="bg-rose-500 hover:bg-rose-600 text-white p-1 rounded-full text-sm font-bold"
                      >
                        <BiMinus size={18} />
                      </button>
                      <span className="text-base font-medium text-gray-800">
                        {product.quantity}
                      </span>
                      <button
                        onClick={() => increaseQuantity(product.id)}
                        className="bg-purple-600 hover:bg-purple-700 text-white p-1 rounded-full text-sm font-bold"
                      >
                        <BiPlus size={18} />
                      </button>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="text-rose-500 hover:text-rose-600"
                      title="Remove item"
                    >
                      <AiFillDelete size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-6">
            <div className="text-xl font-bold text-gray-700">
              Total:{" "}
              <span className="text-purple-600">
                ${getTotalPrice().toFixed(2)}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/"
                className="w-full sm:w-auto py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all text-center"
              >
                Continue Shopping
              </Link>
              <Link
                href="/"
                className="w-full sm:w-auto py-3 px-6 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all text-center"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartDetails;
