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

      ScrollTrigger.create({
        trigger: "#hero-section",
        start: "top top",
        end: "+=1000",
        onLeave: () => {
          gsap.to(".nav-link", {
            opacity: 0,
            y: -15,
            stagger: 0.05,
            duration: 0.3,
            pointerEvents: "none",
          });
        },
        onEnterBack: () => {
          gsap.to(".nav-link", {
            opacity: 1,
            y: 0,
            stagger: 0.05,
            duration: 0.3,
            pointerEvents: "auto",
          });
        },
      });
    },
    { scope: navRef },
  );

  return (
    <div
      ref={navRef}
      className="w-full bg-transparent text-white  shadow-sm fixed top-0 inset-x-0 left-0 z-50"
    >
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
              to="#/properties"
              onClick={() => {
                document
                  .getElementById("properties")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="nav-link hover:text-black transition-colors cursor-pointer"
            >
              Properties
            </Link>
          </li>
          <li>
            <Link
              to="#/smart"
              className="nav-link hover:text-black transition-colors"
              onClick={() => {
                document
                  .getElementById("ownership")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Smart OwnerShip
            </Link>
          </li>
          <li>
            <Link
              to="#/dubai"
              className="nav-link hover:text-black transition-colors"
              onClick={() => {
                document
                  .getElementById("dubai")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Why Dubai
            </Link>
          </li>
          <li>
            <Link
              to="#/about"
              className="nav-link hover:text-black transition-colors"
              onClick={() => {
                document
                  .getElementById("overview")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="#/faqs"
              className="nav-link hover:text-black transition-colors"
              onClick={() => {
                document
                  .getElementById("faqs")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Faqs
            </Link>
          </li>
        </ul>
        <div className="hidden md:block nav-actions">
          <button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-5 py-3 rounded-2xl bg-black text-white font-bold  active:scale-95 transition-all duration-150 cursor-pointer"
          >
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
        <div className="md:hidden bg-white text-gray-800 border-t border-gray-100 px-6 py-5 flex flex-col gap-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <Link
            to="#/properties"
            onClick={() => {
              setIsOpen(false);
              document
                .getElementById("properties")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="nav-link text-gray-800 hover:text-black transition-colors cursor-pointer"
          >
            Properties
          </Link>

          <Link
            to="#/smart"
            onClick={() => {
              setIsOpen(false);
              document
                .getElementById("ownership")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="nav-link text-gray-800 hover:text-black transition-colors cursor-pointer"
          >
            Smart OwnerShip
          </Link>

          <Link
            to="#/dubai"
            onClick={() => {
              setIsOpen(false);
              document
                .getElementById("dubai")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="nav-link text-gray-800 hover:text-black transition-colors cursor-pointer"
          >
            Why Dubai
          </Link>

          <Link
            to="#/about"
            onClick={() => {
              setIsOpen(false);
              document
                .getElementById("overview")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="nav-link text-gray-800 hover:text-black transition-colors cursor-pointer"
          >
            About
          </Link>

          <Link
            to="#/faqs"
            onClick={() => {
              setIsOpen(false);
              document
                .getElementById("faqs")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="nav-link text-gray-800 hover:text-black transition-colors cursor-pointer"
          >
            Faqs
          </Link>

          <button
            onClick={() => {
              setIsOpen(false);
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full mt-2 py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 active:scale-95 transition-all cursor-pointer"
          >
            Contact
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
