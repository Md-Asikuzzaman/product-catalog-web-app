import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-6xl font-extrabold text-rose-500 mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-2">Product Not Found</h2>
      <p className="text-gray-700 mb-6 text-center max-w-md">
        Sorry, the product you are looking for was not found or may have been
        removed.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
      >
        Go back to product list
      </Link>
    </div>
  );
}
