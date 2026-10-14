import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        delay: 0.2,
      });

      tl.from(".nav-logo", {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          ".nav-link",
          {
            y: -15,
            opacity: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .from(
          ".nav-actions",
          {
            y: -15,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .from(
          ".hamburger",
          {
            scale: 0.8,
            opacity: 0,
            duration: 0.4,
            ease: "back.out(1.5)",
          },
          "-=0.3",
        );
    },
    { scope: navRef },
  );
  return (
    <div ref={navRef} className="w-full bg-white  shadow-sm sticky top-0 z-50">
      <nav className="py-4 px-6 md:px-15 flex w-full justify-between items-center">
        <div>
          <Link to="/" onClick={() => setIsOpen(false)}>
            <p className=" nav-logo text-3xl md:text-4xl tracking-widest font-light font-serif">
              LUXE
            </p>
            <p className="tracking-widest text-gray-500 text-[10px] md:text-xs">
              PROPERTIES
            </p>
          </Link>
        </div>
        <ul className="hidden md:flex items-center md:text-xs lg:text-lg gap-8 lg:gap-10">
          <li>
            <Link
              to="/properties"
              className="nav-link hover:text-blue-600 transition-colors"
            >
              Properties
            </Link>
          </li>
          <li>
            <Link
              to="/smart"
              className="nav-link hover:text-blue-600 transition-colors"
            >
              Smart OwnerShip
            </Link>
          </li>
          <li>
            <Link
              to="/why"
              className="nav-link hover:text-blue-600 transition-colors"
            >
              Why Dubai
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="nav-link hover:text-blue-600 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/faqs"
              className="nav-link hover:text-blue-600 transition-colors"
            >
              Faqs
            </Link>
          </li>
        </ul>
        <div className="hidden md:block nav-actions">
          <button className="px-5 py-3 rounded-2xl bg-black text-white font-semibold hover:bg-blue-600 active:scale-95 transition-all duration-150 cursor-pointer">
            Contact
          </button>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="harmburger md:hidden text-2xl p-2 text-slate-800 hover:text-black cursor-pointer"
        >
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <Link
            to="/properties"
            onClick={() => setIsOpen(false)}
            className="text-base py-1 text-slate-700 hover:text-blue-600 font-medium"
          >
            Properties
          </Link>
          <Link
            to="/smart"
            onClick={() => setIsOpen(false)}
            className="text-base py-1 text-slate-700 hover:text-blue-600 font-medium"
          >
            Smart OwnerShip
          </Link>
          <Link
            to="/why"
            onClick={() => setIsOpen(false)}
            className="text-base py-1 text-slate-700 hover:text-blue-600 font-medium"
          >
            Why Dubai
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="text-base py-1 text-slate-700 hover:text-blue-600 font-medium"
          >
            About
          </Link>
          <Link
            to="/faqs"
            onClick={() => setIsOpen(false)}
            className="text-base py-1 text-slate-700 hover:text-blue-600 font-semibold"
          >
            Faqs
          </Link>
          <button className="w-full mt-2 py-3 rounded-xl bg-black text-white font-semibold hover:bg-blue-600 active:scale-95 transition-all cursor-pointer">
            Contact
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
