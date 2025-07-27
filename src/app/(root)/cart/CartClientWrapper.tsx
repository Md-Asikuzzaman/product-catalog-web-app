"use client";

import Container from "@/components/ui/Container";
import dynamic from "next/dynamic";

const CartDetails = dynamic(() => import("./_components/CartDetails"), {
  ssr: false,
  loading: () => <div>Loading Cart Details...</div>,
});

const CartClientWrapper = () => {
  return (
    <Container className="max-w-6xl my-6">
      <CartDetails />
    </Container>
  );
};

export default CartClientWrapper;
