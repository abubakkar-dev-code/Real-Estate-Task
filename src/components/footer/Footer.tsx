import { useState } from "react";
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

const Footer = () => {
  const [links] = useState([
    { name: "Properties", href: "/properties" },
    { name: "Smart Ownership", href: "/smart" },
    { name: "Why Dubai", href: "/why" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faqs" },
  ]);

  const contactInfo = [
    {
      id: "phone",
      value: "+971 4 123 4567",
      href: "tel:+97141234567",
      icon: FaPhone,
    },
    {
      id: "email",
      value: "hello@luxeproperties.com",
      href: "mailto:hello@luxeproperties.com",
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
    <div className="w-full px-6 py-10 md:px-15">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          <div className="flex flex-col">
            <Link to="/" className="inline-block">
              <p className="text-3xl md:text-4xl tracking-widest font-light font-serif text-slate-900">
                LUXE
              </p>
              <p className="tracking-[0.3em] text-gray-500 text-[10px] md:text-xs mt-0.5">
                PROPERTIES
              </p>
            </Link>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 text-base mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("#") ? (
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-slate-900 transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-gray-600 hover:text-slate-900 transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
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
                      className="flex items-center gap-3 text-sm text-gray-700 hover:text-slate-900 transition-colors"
                    >
                      <IconComponent className="text-sm text-slate-800 shrink-0" />
                      <span>{contact.value}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 text-base mb-4">
              Follow Us
            </h3>
            <div className="flex items-center gap-4 text-xl text-slate-800">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    aria-label={social.label}
                    className="hover:text-slate-600 transition-colors"
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <hr className="my-8 border-t border-gray-200" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2025 Luxe Properties. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="hover:text-slate-900 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-slate-900 transition-colors"
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
