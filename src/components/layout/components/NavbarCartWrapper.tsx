"use client";

import dynamic from "next/dynamic";
import { CgShoppingCart } from "react-icons/cg";

const NavbarCartButton = dynamic(() => import("./NavbarCartButton"), {
  ssr: false,
  loading: () => (
    <button className="relative rounded-full p-2 hover:bg-gray-100 cursor-pointer">
      <CgShoppingCart className="size-6 text-purple-600" />
    </button>
  ),
});

const NavbarCartButtonWrapper = () => {
  return (
    <>
      <NavbarCartButton />
    </>
  );
};

export default NavbarCartButtonWrapper;
