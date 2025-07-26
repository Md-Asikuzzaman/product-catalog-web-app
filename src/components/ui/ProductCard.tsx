import { Product } from "@/lib/getProducts";
import Image from "next/image";
import Link from "next/link";

type ProductType = Pick<Product, "id" | "title" | "image" | "price">;

const ProductCard = ({ id, title, image, price }: ProductType) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition p-4 flex flex-col justify-between">
      <div className="relative aspect-[4/5] bg-gray-100 rounded overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 45vw,
                 (max-width: 1024px) 30vw,
                 20vw"
          className="object-cover"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold mt-4 line-clamp-2">{title}</h3>
        <p className="text-purple-600 font-medium">{price}</p>
        <div className="mt-3 space-y-2">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition w-full">
            Add to Cart
          </button>
          <Link
            href={`/${id}`}
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition w-full inline-block text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
