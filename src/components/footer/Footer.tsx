import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".footer-card", {
        y: 35,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      })
        .from(
          ".footer-logo",
          {
            y: 15,
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.3",
        )
        .from(
          ".footer-column",
          {
            y: 20,
            opacity: 0,
            duration: 0.4,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.3",
        )
        .from(
          ".footer-link",
          {
            y: 8,
            opacity: 0,
            duration: 0.3,
            stagger: 0.03,
            ease: "power2.out",
          },
          "-=0.3",
        )
        .from(
          ".footer-social",
          {
            scale: 0,
            opacity: 0,
            duration: 0.4,
            stagger: 0.06,
            ease: "back.out(1.5)",
          },
          "-=0.2",
        )
        .from(
          ".footer-bottom",
          {
            y: 10,
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.2",
        );
    },
    { scope: footerRef },
  );

  const [links] = useState([
    { name: "Properties", href: "#properties" },
    { name: "Smart Ownership", href: "#ownership" },
    { name: "Why Dubai", href: "#dubai" },
    { name: "About", href: "#overview" },
    { name: "FAQ", href: "#faqs" },
  ]);

  const contactInfo = [
    {
      id: "phone",
      value: "+91 8072062979",
      href: "tel:+918072062979",
      icon: FaPhone,
    },
    {
      id: "email",
      value: "abubakkarm620@gmail.com",
      href: "mailto:abubakkarm620@gmail.com",
      icon: FaEnvelope,
    },
    {
      id: "address",
      value: "Dubai, UAE",
      href: "#",
      icon: FaLocationDot,
    },
  ];

  const socialLinks = [
    { id: "instagram", icon: FaInstagram, href: "#", label: "Instagram" },
    { id: "linkedin", icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { id: "youtube", icon: FaYoutube, href: "#", label: "YouTube" },
    { id: "twitter", icon: FaXTwitter, href: "#", label: "X" },
  ];

  return (
    <div id="contact" ref={footerRef} className="w-full px-6 py-10 md:px-15">
      <div className="footer-card bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          <div className="footer-logo flex flex-col">
            <Link to="/" className="inline-block">
              <p className="text-3xl md:text-4xl tracking-widest font-light font-serif text-slate-900">
                LUXE
              </p>
              <p className="tracking-[0.3em] text-gray-500 text-[10px] md:text-xs mt-0.5">
                PROPERTIES
              </p>
            </Link>
          </div>

          <div className="footer-column">
            <h3 className="font-semibold text-slate-900 text-base mb-4">
              Quick Links
            </h3>

            <ul className="flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("#") ? (
                    <a
                      href={link.href}
                      className="footer-link inline-block text-sm text-gray-600 hover:text-slate-900 transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="footer-link inline-block text-sm text-gray-600 hover:text-slate-900 transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="font-semibold text-slate-900 text-base mb-4">
              Contact
            </h3>

            <ul className="flex flex-col gap-3.5">
              {contactInfo.map((contact) => {
                const IconComponent = contact.icon;

                return (
                  <li key={contact.id}>
                    <a
                      href={contact.href}
                      className="footer-link flex items-center gap-3 text-sm text-gray-700 hover:text-slate-900 transition-colors"
                    >
                      <IconComponent className="text-sm text-slate-800 shrink-0" />
                      <span>{contact.value}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="font-semibold text-slate-900 text-base mb-4">
              Follow Us
            </h3>

            <div className="flex items-center gap-4 text-xl text-slate-800">
              {socialLinks.map((social) => {
                const IconComponent2 = social.icon;

                return (
                  <a
                    key={social.id}
                    href={social.href}
                    aria-label={social.label}
                    className="footer-social hover:text-slate-600 transition-colors"
                  >
                    <IconComponent2 />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <hr className="my-8 border-t border-gray-200" />

        <div className="footer-bottom flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2025 Luxe Properties. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="footer-link hover:text-slate-900 transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="footer-link hover:text-slate-900 transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
