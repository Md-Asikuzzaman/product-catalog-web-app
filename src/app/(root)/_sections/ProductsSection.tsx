import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/ProductCard";
import { getProducts } from "@/lib/getProducts";

const ProductsSection = async () => {
  const products = await getProducts();

  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Our Featured Products
      </h2>

      <Container className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Container>
    </section>
  );
};

export default ProductsSection;
