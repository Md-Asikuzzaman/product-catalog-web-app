import BackToHome from "@/components/ui/BackToHome";
import Button from "@/components/ui/Button";
import CartActionBtn from "@/components/ui/CartActionBtn";
import { getUser } from "@/lib/auth";
import { getProductById } from "@/lib/getProductById";
import { Metadata } from "next";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import { AiFillStar } from "react-icons/ai";

interface Props {
  params: Promise<{ productId: string }>;
}

// generateMetadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productId } = await params;
  const product = await getProductById(productId);

  if (!product) {
    return notFound();
  }

  return {
    title: `${product.title}`,
    description: `${product.description}`,
    openGraph: {
      title: `${product.title}`,
      description: `Buy ${product.title} at only $${product.price}. 100% original and fresh products.`,
      images: [
        {
          url: `${product.image}`,
          width: 800,
          height: 600,
          alt: `${product.title}`,
        },
      ],
    },
  };
}

export default async function ProductDetails({ params }: Props) {
  // Check if user is logged in
  const user = await getUser();
  if (!user) {
    return redirect("/login");
  }

  const { productId } = await params;
  const product = await getProductById(productId);

  if (!product) {
    return notFound();
  }

  return (
    <section className="bg-gray-100 py-8 px-4 space-y-4">
      <div className="max-w-6xl mx-auto">
        <BackToHome />
      </div>
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          {/* Product Image */}
          <div className="relative w-full md:w-2/5 aspect-[4/5] rounded overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              className="object-cover w-full h-full"
              fill
            />
          </div>

          {/* Product Details */}
          <div className="md:w-3/5">
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-purple-600 text-xl font-semibold mb-4">
              ${product.price}
            </p>
            <p className="mb-6 text-gray-700">{product.description}</p>
            <p className="mb-2">
              <strong>Category:</strong> {product.category}
            </p>
            <p className="flex items-center gap-1">
              <strong>Rating:</strong> {product.rating.rate}
              <AiFillStar className="text-purple-600" />
              <span>({product.rating.count} reviews)</span>
            </p>

            {/* Buttons */}
            <div className="flex gap-4 items-center mt-4 md:mt-8">
              <div className="w-1/2">
                <CartActionBtn {...product} />
              </div>
              <Button className="!w-1/2">Order Now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
