import React, { useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-transparent text-white">
      {/* Brand Logo */}
      <a href="#" className="cursor-pointer">
        <Logo variant="horizontal" />
      </a>

      {/* Navigation Links */}
      <ul className="hidden lg:flex gap-10 text-xs font-semibold tracking-widest uppercase">
        <li><Link to="/" className="text-white hover:text-[#E4A861] transition-colors cursor-pointer">Home</Link></li>
        <li><Link to="/about" className="text-white hover:text-[#E4A861] transition-colors cursor-pointer focus:text-[#E4A861]">About</Link></li>
        <li><Link to="/services" className="text-white hover:text-[#E4A861] transition-colors cursor-pointer focus:text-[#E4A861]">Services</Link></li>
        <li><Link to="/stylists" className="text-white hover:text-[#E4A861] transition-colors cursor-pointer focus:text-[#E4A861]">Stylists</Link></li>
        <li><Link to="/gallery" className="text-white hover:text-[#E4A861] transition-colors cursor-pointer focus:text-[#E4A861]">Gallery</Link></li>
        <li><Link to="/contact" className="text-white hover:text-[#E4A861] transition-colors cursor-pointer focus:text-[#E4A861]">Contact</Link></li>
      </ul>

      {/* Call to Action Button */}
      <button className="hidden md:block border border-[#E4A861] text-[#E4A861] px-6 py-3 text-[10px] md:text-xs font-semibold tracking-widest uppercase hover:bg-[#E4A861] hover:text-black transition-all duration-300">
        Book Appointment
      </button>

      {/* Mobile Menu Toggle (Hamburger) */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="lg:hidden text-[#E4A861] cursor-pointer focus:outline-none"
        aria-label="Open Menu"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      {/* Sliding Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden flex justify-end transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Backdrop overlay */}
        <div
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Drawer container */}
        <div
          className={`relative w-4/5 max-w-sm h-full bg-[#050505] border-l border-[#E4A861]/15 px-8 py-10 flex flex-col justify-between transition-transform duration-500 ease-out z-10 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Close Button & Logo */}
          <div>
            <div className="flex items-center justify-between mb-12">
              <Logo variant="horizontal" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#E4A861] hover:text-white transition-colors focus:outline-none"
                aria-label="Close Menu"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            {/* Nav Links Stacked */}
            <ul className="flex flex-col gap-6 text-sm font-semibold tracking-widest uppercase">
              {["Home", "About", "Services", "Stylists", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={link === "Home" ? "#" : `#${link.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-white hover:text-[#E4A861] transition-colors py-2 border-b border-white/5"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Action button */}
          <div className="mt-auto">
            <button className="w-full border border-[#E4A861] text-[#E4A861] py-4 text-xs font-semibold tracking-widest uppercase hover:bg-[#E4A861] hover:text-black transition-all duration-300">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
