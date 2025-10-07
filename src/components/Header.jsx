import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
   const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

   // Measure header height after render
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.getBoundingClientRect().height);
    }
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-secondary shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12 py-4">
        {/* Logo */}
        <div className="logo text-primary font-bold">
         <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center gap-1 text-[55px] leading-none cursor-pointer"
          >
            M<span className="text-white">P</span>
          </ScrollLink>
        </div>

        {/* Desktop Navbar */}
         <nav className="hidden md:flex gap-8">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
             offset={-headerHeight}
            className="text-[18px] hover:text-primary transition-colors cursor-pointer"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
             offset={-headerHeight}
            className="text-[18px] hover:text-primary transition-colors cursor-pointer"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="skills"
            smooth={true}
            duration={500}
            offset={-headerHeight}
            className="text-[18px] hover:text-primary transition-colors cursor-pointer"
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-headerHeight}
            className="text-[18px] hover:text-primary transition-colors cursor-pointer"
          >
            Contact
          </ScrollLink>
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
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-headerHeight}
            onClick={() => setIsOpen(false)}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-headerHeight}
            onClick={() => setIsOpen(false)}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="skills"
            smooth={true}
            duration={500}
            offset={-headerHeight}
            onClick={() => setIsOpen(false)}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-headerHeight}
            onClick={() => setIsOpen(false)}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Contact
          </ScrollLink>
        </nav>
      
      </div>
    </header>
  );
}
