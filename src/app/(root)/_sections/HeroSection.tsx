import Container from "@/components/ui/Container";

const HeroSection = () => {
  return (
    <section className="min-h-[60vh] bg-purple-600 flex items-center">
      <Container>
        <div className="text-center text-white max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Discover Your Perfect Product
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Shop high-quality, stylish products that fit every mood and moment.
            Comfort meets creativity in every thread.
          </p>
          <a
            href="#products"
            className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-full hover:bg-purple-100 transition"
          >
            Shop Now
          </a>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
