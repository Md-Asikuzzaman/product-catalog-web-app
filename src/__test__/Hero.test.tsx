import HeroSection from "@/app/(root)/(home)/_sections/HeroSection";
import { render, screen } from "@testing-library/react";

describe("Hero Section - Rendering", () => {
  it("Should render heading text", () => {
    render(<HeroSection />);

    const text = screen.getByText(/Discover Your Perfect Product/i);
    expect(text).toBeInTheDocument();
  });
});
