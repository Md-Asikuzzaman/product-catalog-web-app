import ProductCard from "@/components/ui/ProductCard";
import { Product } from "@/lib/getProducts";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

// Mock `next/image` for test environments
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    return <img {...props} alt={props.alt} />;
  },
}));

describe("ProductCard - Rendering", () => {
  const product: Product = {
    id: 123,
    title: "Test Product",
    description: "This is a test product",
    category: "mens",
    price: 49.99,
    image: "/test-product.jpg",
    rating: {
      rate: 3.5,
      count: 23,
    },
  };

  it("Should render product title, price, and View Details link", () => {
    render(<ProductCard {...product} />);

    // Check product title
    expect(screen.getByText(/test product/i)).toBeInTheDocument();

    // Check price
    expect(screen.getByText("$49.99")).toBeInTheDocument();

    // Check View Details link
    const viewDetailsLink = screen.getByRole("link", {
      name: /view details/i,
    });
    expect(viewDetailsLink).toBeInTheDocument();
    expect(viewDetailsLink).toHaveAttribute("href", `/products/123`);
  });
});
