import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Container from "../ui/Container";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <Container className="grid md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold">Shop</h2>
          <p className="text-sm mt-2 text-gray-400">Product Catalog Web App.</p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-300">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 mt-2 text-xl text-gray-300">
            <Link href="#" aria-label="facebook">
              <FaFacebookF className="hover:text-white" />
            </Link>
            <Link href="#" aria-label="twitter">
              <FaTwitter className="hover:text-white" />
            </Link>
            <Link href="#" aria-label="instagram">
              <FaInstagram className="hover:text-white" />
            </Link>
          </div>
        </div>
      </Container>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 mt-8">
        &copy; {new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
