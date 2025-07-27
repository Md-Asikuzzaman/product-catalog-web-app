"use client";

import { Product } from "@/lib/getProducts";
import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";
import Link from "next/link";
import { AiFillDelete } from "react-icons/ai";
import { BiMinus, BiPlus } from "react-icons/bi";
import Button from "./Button";

const ProductCard = ({ ...product }: Product) => {
  const { id, title, price, image } = product;

  const {
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCartStore();

  const inCart = cart.find((p) => p.id === product.id);

  console.log({ cart });
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition p-4 flex flex-col justify-between">
      <div className="relative aspect-[4/5] bg-gray-100 rounded overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 45vw,
                 (max-width: 1024px) 30vw,
                 20vw"
          className="object-cover"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold mt-4 line-clamp-2">{title}</h3>
        <p className="text-purple-600 font-medium">${price}</p>
        <div className="mt-3 space-y-2">
          {/* Add to Cart */}
          {!inCart ? (
            <Button
              onClick={() =>
                addToCart({
                  ...product,
                  quantity: 1,
                })
              }
              className="w-full py-2 px-4 text-sm font-medium bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              Add to Cart
            </Button>
          ) : (
            <div className="flex items-center gap-3 justify-center">
              <div className="flex items-center border border-purple-300 rounded-full p-1 gap-3 bg-white shadow-sm">
                <button
                  aria-label="decrease quantity"
                  onClick={() => decreaseQuantity(product.id)}
                  className="bg-rose-600 hover:bg-rose-700 text-white p-1 rounded-full text-sm font-bold"
                >
                  <BiMinus size={18} />
                </button>
                <span className="text-base font-medium text-gray-800">
                  {inCart.quantity}
                </span>
                <button
                  aria-label="increase quantity"
                  disabled={inCart.quantity >= 10}
                  onClick={() => increaseQuantity(product.id)}
                  className="bg-purple-600 hover:bg-purple-700 text-white p-1 rounded-full text-sm font-bold"
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
          <Link
            href={`/products/${id}`}
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition w-full inline-block text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
