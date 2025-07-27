"use client";

import { useCartStore } from "@/store/useCartStore";
import Link from "next/link";
import { CgShoppingCart } from "react-icons/cg";

const NavbarCartButton = () => {
  const { getTotalItems } = useCartStore();

  return (
    <Link aria-label="cart" href="/cart">
      <button
        aria-label="cart"
        className="relative rounded-full p-2 hover:bg-gray-100 cursor-pointer"
      >
        <CgShoppingCart className="size-6 text-purple-600" />
        {getTotalItems() > 0 && (
          <span
            className={`absolute -top-1 -right-1 flex items-center justify-center text-xs bg-purple-600 text-white px-1.5 py-0.5 rounded-full shadow-lg`}
          >
            {getTotalItems()}
          </span>
        )}
      </button>
    </Link>
  );
};

export default NavbarCartButton;
