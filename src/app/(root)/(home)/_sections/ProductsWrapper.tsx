"use client";

import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/ProductCard";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";
import { useProductFilter } from "@/store/useProductFilter";
import { useEffect, useState } from "react";

interface Props {
  products: Product[];
}

const ProductsWrapper = ({ products }: Props) => {
  const { searchQuery } = useProductFilter();
  const debouncedSearch = useDebouncedValue(searchQuery, 500);

  const [filtered, setFiltered] = useState<Product[]>(products);

  useEffect(() => {
    const q = debouncedSearch.toLowerCase();
    setFiltered(
      products.filter((product) => product.title.toLowerCase().includes(q))
    );
  }, [debouncedSearch, products]);

  return (
    <Container className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filtered.length > 0 ? (
        filtered.map((product) => <ProductCard key={product.id} {...product} />)
      ) : (
        <p className="col-span-full text-center text-gray-600">
          No products found!
        </p>
      )}
    </Container>
  );
};

export default ProductsWrapper;
