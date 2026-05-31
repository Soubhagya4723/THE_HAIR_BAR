import React, { useState } from "react";

const galleryImages = [
  {
    id: 1,
    category: "HAIRCUTS",
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=800",
    alt: "Haircut Profile",
    span: "col-span-1 row-span-2",
  },
  {
    id: 2,
    category: "SHAVES",
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=800",
    alt: "Straight Razor Shave",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    category: "OUR SPACE",
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200",
    alt: "Salon Interior",
    span: "col-span-2 row-span-2 md:col-span-2",
  },
  {
    id: 4,
    category: "BEARD STYLING",
    src: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=800",
    alt: "Beard Trim Profile",
    span: "col-span-1 row-span-2",
  },
  {
    id: 5,
    category: "OUR SPACE",
    src: "https://images.unsplash.com/photo-1512496015851-a1cbf275512a?auto=format&fit=crop&q=80&w=800",
    alt: "Grooming Tools",
    span: "col-span-1 row-span-1",
  },
  {
    id: 6,
    category: "HAIR COLOR",
    src: "https://images.unsplash.com/photo-1520694478166-daaf49b06f5f?auto=format&fit=crop&q=80&w=800",
    alt: "Hair Styling",
    span: "col-span-1 row-span-1",
  },
  {
    id: 7,
    category: "HAIRCUTS",
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800",
    alt: "Fading",
    span: "col-span-1 row-span-1",
  },
  {
    id: 8,
    category: "OUR SPACE",
    src: "https://images.unsplash.com/photo-1635273051936-7c15243169fc?auto=format&fit=crop&q=80&w=1200",
    alt: "Barber Chair",
    span: "col-span-2 row-span-1",
  },
  {
    id: 9,
    category: "BEARD STYLING",
    src: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&q=80&w=800",
    alt: "Finished Look",
    span: "col-span-1 row-span-2",
  },
  {
    id: 10,
    category: "HAIRCUTS",
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800",
    alt: "Master Cut",
    span: "col-span-1 row-span-1",
  }
];

const filters = ["ALL GALLERY", "HAIRCUTS", "BEARD STYLING", "SHAVES", "HAIR COLOR", "OUR SPACE", "EVENTS"];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("ALL GALLERY");

  const filteredImages = activeFilter === "ALL GALLERY" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <section id="gallery" className="bg-[#050505] text-white pt-24 border-t border-white/5 relative">
      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* ── Top Header Banner ──────────────────────────────────────────────── */}
        <div className="relative border border-white/10 bg-[#0a0a0a] p-10 md:p-16 mb-12 flex flex-col md:flex-row justify-between items-center overflow-hidden">
          {/* Background overlay image */}
          <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-30">
            <img 
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200" 
              alt="Salon Background" 
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
          </div>

          {/* Left Content */}
          <div className="relative z-10 w-full md:w-1/2 mb-8 md:mb-0">
            <h4 className="text-[#E4A861] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Our Gallery
            </h4>
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight text-white font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Crafting Moments.<br />
              <span className="italic text-[#E4A861] font-medium">Creating Confidence.</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-sm">
              Explore our work, our space, and the experience we create for every client.
            </p>
            <button className="border border-[#E4A861] px-6 py-3 text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-[#E4A861] hover:bg-[#E4A861] hover:text-black transition-all duration-300">
              See Our Services <span className="ml-2">→</span>
            </button>
          </div>

          {/* Right Floating Badge */}
          <div className="relative z-10 border border-white/20 bg-black/60 backdrop-blur-md p-8 flex flex-col items-center justify-center text-center">
            <svg className="w-8 h-8 text-[#E4A861] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <h5 className="text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Capturing<br/>Excellence</h5>
            <p className="text-gray-500 text-[10px] italic">Every detail.<br/>Every cut.<br/>Every time.</p>
          </div>
        </div>

        {/* ── Filter Navigation ──────────────────────────────────────────────── */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-y border-white/10 py-6 mb-8">
          <ul className="flex flex-wrap items-center gap-6 md:gap-10">
            {filters.map((filter) => (
              <li 
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase cursor-pointer transition-colors duration-300 flex items-center gap-2 ${activeFilter === filter ? "text-[#E4A861]" : "text-gray-400 hover:text-white"}`}
              >
                {filter === "HAIRCUTS" && <span className="text-lg">✂</span>}
                {filter === "BEARD STYLING" && <span className="text-lg">🧔</span>}
                {filter === "SHAVES" && <span className="text-lg">🪒</span>}
                {filter}
                {activeFilter === filter && <div className="absolute bottom-0 w-full h-[1px] bg-[#E4A861]"></div>}
              </li>
            ))}
          </ul>
          <button className="flex items-center gap-2 text-[10px] text-white tracking-[0.2em] uppercase hover:text-[#E4A861] transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
            </svg>
            Filter
          </button>
        </div>

        {/* ── Bento Grid Gallery ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 auto-rows-[250px] gap-2 md:gap-4 mb-24 transition-all duration-500">
          {filteredImages.map((img) => (
            <div 
              key={img.id} 
              className={`relative overflow-hidden group bg-[#0a0a0a] cursor-pointer ${activeFilter === "ALL GALLERY" ? img.span : "col-span-1 row-span-1"}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="border border-[#E4A861] p-3 rounded-full bg-black/50 text-[#E4A861] transform scale-50 group-hover:scale-100 transition-transform duration-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom Banner & Stats ─────────────────────────────────────────── */}
        <div className="border border-white/10 bg-[#0a0a0a] p-8 md:p-12 mb-24 flex flex-col lg:flex-row justify-between items-center gap-12">
          
          <div className="text-center lg:text-left">
            <h4 className="text-[#E4A861] text-[9px] font-bold tracking-[0.2em] uppercase mb-4 flex items-center justify-center lg:justify-start gap-2">
              <span className="text-lg">👑</span> Ready For Your Best Look?
            </h4>
            <h3 
              className="text-3xl md:text-4xl text-white mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Book Your Appointment Today
            </h3>
            <button className="border border-[#E4A861] px-8 py-3 text-[10px] tracking-[0.2em] uppercase text-[#E4A861] hover:bg-[#E4A861] hover:text-black transition-all duration-300">
              Book Appointment <span className="ml-2">→</span>
            </button>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-end gap-10 md:gap-16">
            <div className="flex flex-col items-center text-center">
              <div className="text-[#E4A861] mb-2"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
              <h4 className="text-white text-2xl font-serif">5000+</h4>
              <p className="text-gray-500 text-[9px] tracking-widest uppercase">Happy Clients</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="text-[#E4A861] mb-2"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></div>
              <h4 className="text-white text-2xl font-serif">20+</h4>
              <p className="text-gray-500 text-[9px] tracking-widest uppercase">Expert Stylists</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="text-[#E4A861] mb-2"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
              <h4 className="text-white text-2xl font-serif">15+</h4>
              <p className="text-gray-500 text-[9px] tracking-widest uppercase">Years Experience</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="text-[#E4A861] mb-2"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></div>
              <h4 className="text-white text-2xl font-serif">1000+</h4>
              <p className="text-gray-500 text-[9px] tracking-widest uppercase">Transformations</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="text-[#E4A861] mb-2"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></div>
              <h4 className="text-white text-2xl font-serif">5★</h4>
              <p className="text-gray-500 text-[9px] tracking-widest uppercase">Client Rating</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
