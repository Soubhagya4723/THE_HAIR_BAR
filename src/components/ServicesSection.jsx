import React from "react";
import { Link } from "react-router-dom";

export default function ServicesSection() {
  return (
    <section className="bg-[#050505] text-white py-24 border-t border-white/5">
      <div className="w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-20">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h4 className="text-[#E4A861] text-xs font-bold tracking-[0.3em] uppercase">
                Our Services
              </h4>
              <div className="w-12 h-[1px] bg-[#E4A861]"></div>
            </div>
            
            <h2 
              className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-white font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              The Art of <br />
              <span className="italic text-[#E4A861] font-medium">Grooming</span>
            </h2>
          </div>
          
          <p className="text-gray-400 max-w-sm text-sm md:text-base leading-relaxed tracking-wide">
            Experience our premium range of haircuts, styling, and grooming services crafted for the modern individual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="border border-white/5 bg-[#0c0c0c] p-8 hover:border-[#E4A861]/40 transition-colors group">
            <h3 className="text-2xl text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Classic Haircuts</h3>
            <p className="text-gray-400 text-sm mb-6">Timeless styles executed with precision.</p>
          </div>
          <div className="border border-white/5 bg-[#0c0c0c] p-8 hover:border-[#E4A861]/40 transition-colors group">
            <h3 className="text-2xl text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Beard Styling</h3>
            <p className="text-gray-400 text-sm mb-6">Sculpting and detailing for a sharp look.</p>
          </div>
          <div className="border border-white/5 bg-[#0c0c0c] p-8 hover:border-[#E4A861]/40 transition-colors group">
            <h3 className="text-2xl text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Luxury Shaves</h3>
            <p className="text-gray-400 text-sm mb-6">Traditional hot towel shaves for ultimate relaxation.</p>
          </div>
        </div>

        <div className="flex justify-center">
          <Link to="/services">
            <button className="border border-[#E4A861]/50 px-10 py-4 text-[10px] md:text-xs tracking-[0.2em] uppercase hover:bg-[#E4A861] hover:text-black transition-all duration-300 text-[#E4A861]">
              View All Services
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
