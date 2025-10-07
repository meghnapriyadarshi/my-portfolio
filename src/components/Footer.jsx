import { ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"

export default function Footer() {
   const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-5">
      <div className="container mx-auto px-[20px] md:px-12">
        <p>
          <span className=" block sm:inline-block text-button md:text-p text-text">© {new Date().getFullYear()} Meghna Priyadarshi.</span> <span className=" block sm:inline-block text-text text-button md:text-p">All rights reserved.</span>
        </p>
      </div>
       <button  onClick={scrollToTop} id="scrollToTop" title="Go to top"  className={`group hover:shadow-black fixed bottom-5 right-5 z-50 bg-primary hover:bg-secondary text-black rounded-full w-12 h-12 p-3 shadow-lg transition-all duration-500 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}><ArrowUp className="text-black w-6 h-6 group-hover:text-white transition" /></button>
    </footer>
   


  )
}
