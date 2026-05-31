import React from "react";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-transparent text-white">
      {/* Letter Logo */}
      <div className="flex items-center gap-3 cursor-pointer">
        <div className="flex items-center justify-center w-12 h-12 border border-[#E4A861] relative">
          {/* Subtle decorative corners */}
          <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-[#E4A861]"></div>
          <div className="absolute top-0 right-0 w-1 h-1 border-t border-r border-[#E4A861]"></div>
          <div className="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-[#E4A861]"></div>
          <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-[#E4A861]"></div>
          
          <span 
            className="font-serif italic text-2xl text-[#E4A861]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            HB
          </span>
        </div>
        <div className="flex flex-col">
          <span 
            className="font-black uppercase tracking-[0.15em] leading-none text-xl"
            style={{ fontFamily: "'Archivo Black', sans-serif" }}
          >
            HAIRBAR
          </span>
          <span className="text-[9px] tracking-[0.3em] text-[#E4A861] mt-1 uppercase">
            Excellence & Tradition
          </span>
        </div>
      </div>

      {/* Navigation Links */}
      <ul className="hidden lg:flex gap-10 text-xs font-semibold tracking-widest uppercase">
        <li><a href="#" className="text-white hover:text-[#E4A861] transition-colors cursor-pointer">Home</a></li>
        <li><a href="#about" className="text-white hover:text-[#E4A861] transition-colors cursor-pointer focus:text-[#E4A861]">About</a></li>
        <li><a href="#services" className="text-white hover:text-[#E4A861] transition-colors cursor-pointer focus:text-[#E4A861]">Services</a></li>
        <li><a href="#stylists" className="text-white hover:text-[#E4A861] transition-colors cursor-pointer focus:text-[#E4A861]">Stylists</a></li>
        <li><a href="#gallery" className="text-white hover:text-[#E4A861] transition-colors cursor-pointer focus:text-[#E4A861]">Gallery</a></li>
        <li><a href="#contact" className="text-white hover:text-[#E4A861] transition-colors cursor-pointer focus:text-[#E4A861]">Contact</a></li>
      </ul>

      {/* Call to Action Button */}
      <button className="hidden md:block border border-[#E4A861] px-6 py-3 text-[10px] md:text-xs font-semibold tracking-widest uppercase hover:bg-[#E4A861] hover:text-black transition-all duration-300">
        Book Appointment
      </button>

      {/* Mobile Menu Toggle (Hamburger) */}
      <div className="lg:hidden text-[#E4A861] cursor-pointer">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </div>
    </nav>
  );
}
