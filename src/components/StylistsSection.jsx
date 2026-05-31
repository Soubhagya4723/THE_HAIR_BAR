import React from "react";
import { Link } from "react-router-dom";

export default function StylistsSection() {
  return (
    <section className="bg-[#080808] text-white py-24 border-t border-white/5 relative overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-[#E4A861]"></div>
            <h4 className="text-[#E4A861] text-xs font-bold tracking-[0.3em] uppercase">
              Master Stylists
            </h4>
            <div className="w-8 h-[1px] bg-[#E4A861]"></div>
          </div>
          
          <h2 
            className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-[1.1] text-white font-light"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            The Hands Behind <br className="hidden sm:block" />
            <span className="italic text-[#E4A861] font-medium">The Craft</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl text-sm md:text-base leading-relaxed tracking-wide">
            Our team of master stylists brings decades of combined experience, award-winning techniques, and a true passion for grooming.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="relative aspect-[3/4] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=600" 
              alt="Stylist" 
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-xl text-white mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Alexander</h3>
              <p className="text-[#E4A861] text-[9px] tracking-[0.2em] uppercase">Master Barber</p>
            </div>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden group hidden sm:block">
            <img 
              src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=600" 
              alt="Stylist" 
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-xl text-white mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Julian</h3>
              <p className="text-[#E4A861] text-[9px] tracking-[0.2em] uppercase">Color Specialist</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Link to="/stylists">
            <button className="border border-[#E4A861]/50 px-10 py-4 text-[10px] md:text-xs tracking-[0.2em] uppercase hover:bg-[#E4A861] hover:text-black transition-all duration-300 text-[#E4A861]">
              Meet The Team
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
