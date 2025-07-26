import { getProducts } from "@/lib/getProducts";
import ProductsWrapper from "./ProductsWrapper";

const ProductsSection = async () => {
  const products = await getProducts();

  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Our Featured Products
      </h2>

      <ProductsWrapper products={products} />
    </section>
  );
};

export default ProductsSection;
