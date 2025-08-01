import { getUser } from "@/lib/auth";
import Link from "next/link";
import Button from "../ui/Button";
import NavbarCartButtonWrapper from "./components/NavbarCartWrapper";
import NavbarLogout from "./components/NavbarLogout";
import SearchBar from "./components/SearchBar";

const Header = async () => {
  const user = await getUser();

  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between gap-5 sticky top-0 z-50">
      {/* Logo */}
      <div className="text-xl font-bold text-purple-600">
        <Link href="/">Shop</Link>
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
      <div className="flex items-center gap-4 max-w-[550px] w-full">
        <NavbarCartButtonWrapper />
        <SearchBar />
        <div>
          {user ? (
            <NavbarLogout />
          ) : (
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
