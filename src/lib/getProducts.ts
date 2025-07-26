import { cache } from "react";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export const getProducts = cache(async (): Promise<Product[]> => {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 120 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products.");
  }

  return res.json();
});
