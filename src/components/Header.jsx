import { useState } from "react";
import { Menu, X } from "lucide-react";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-secondary shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12 py-4">
        {/* Logo */}
        <div className="logo text-primary font-bold">
          <a href="#home" className="flex items-center gap-1 text-[55px] leading-none">
            M<span className="text-white">P</span>
          </a>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex gap-8">
          <a href="#home" className="text-[18px] hover:text-primary transition-colors">
            Home
          </a>
          <a href="#about" className="text-[18px] hover:text-primary transition-colors">
            About
          </a>
          <a href="#skills" className="text-[18px] hover:text-primary transition-colors">
            Services
          </a>
          <a href="#contact" className="text-[18px] hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary focus:outline-none"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={35} />
        </button>
      </div>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Right-Side Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-secondary z-50 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button inside Menu */}
        <div className="flex justify-end px-6 py-6">
          <button
            className="text-primary hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <X size={35} />
          </button>
        </div>

        {/* Menu Links */}
        <nav className="flex flex-col items-start gap-3 mt-6 px-8 text-lg">
          <a
            href="#home"
            className="hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a
            href="#contact"
            className="hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
