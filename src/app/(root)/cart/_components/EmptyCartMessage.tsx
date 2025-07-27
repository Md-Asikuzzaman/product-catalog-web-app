"use client";

import Button from "@/components/ui/Button";
import Link from "next/link";
import { CgShoppingCart } from "react-icons/cg";

const EmptyCartMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4 bg-white rounded-xl shadow-sm border border-dashed border-purple-300 lg:min-h-[60vh]">
      <CgShoppingCart className="w-16 h-16 text-purple-600 mb-4" />
      <h3 className="text-xl font-semibold text-gray-700 mb-2">
        Your cart is empty
      </h3>
      <p className="text-sm text-gray-500 mb-6">
        Looks like you haven&apos;t added anything to your cart yet.
      </p>
      <Link href="/">
        <Button>Go to Shop</Button>
      </Link>
    </div>
  );
};

export default EmptyCartMessage;
