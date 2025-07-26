import { cache } from "react";

export const getProductById = cache(
  async (productId: string): Promise<Product | null> => {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`, {
      next: { revalidate: 120 },
    });

    if (res.status === 404) {
      return null;
    }

    if (!res.ok) {
      throw new Error("Failed to fetch product.");
    }

    const text = await res.text();

    if (!text) {
      return null;
    }

    try {
      return JSON.parse(text) as Product;
    } catch (error) {
      console.error("JSON parse error:", error);
      return null;
    }
  }
);
