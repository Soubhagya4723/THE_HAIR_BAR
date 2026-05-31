import React from "react";
import { Link } from "react-router-dom";

export default function GallerySection() {
  return (
    <section className="bg-[#050505] text-white py-24 md:py-32 border-t border-white/5 relative overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h4 className="text-[#E4A861] text-xs font-bold tracking-[0.3em] uppercase">
                Portfolio
              </h4>
              <div className="w-12 h-[1px] bg-[#E4A861]"></div>
            </div>
            
            <h2 
              className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-white font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Our Featured <br />
              <span className="italic text-[#E4A861] font-medium">Gallery</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          <div className="aspect-square overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=800" alt="Gallery 1" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" />
          </div>
          <div className="aspect-square overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800" alt="Gallery 2" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" />
          </div>
          <div className="aspect-square overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800" alt="Gallery 3" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" />
          </div>
        </div>

        <div className="flex justify-center">
          <Link to="/gallery">
            <button className="border border-[#E4A861]/50 px-10 py-4 text-[10px] md:text-xs tracking-[0.2em] uppercase hover:bg-[#E4A861] hover:text-black transition-all duration-300 text-[#E4A861]">
              View Full Gallery
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
