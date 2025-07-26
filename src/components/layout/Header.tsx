import Link from "next/link";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between gap-5">
      {/* Logo */}
      <div className="text-xl font-bold text-purple-600 uppercase">
        <Link href="/">Logo</Link>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-6">
        <Link href="/" className="text-gray-700 hover:text-purple-600">
          Home
        </Link>
        <Link href="#" className="text-gray-700 hover:text-purple-600">
          About
        </Link>
        <Link href="#" className="text-gray-700 hover:text-purple-600">
          Services
        </Link>
        <Link href="#" className="text-gray-700 hover:text-purple-600">
          Contact
        </Link>
      </nav>

      {/* Search Bar */}
      <div className="relative max-w-[400px] w-full">
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
        />
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>
    </header>
  );
};

export default Header;
