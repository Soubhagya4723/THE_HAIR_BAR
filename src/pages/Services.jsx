import React from "react";

const servicesList = [
  {
    title: "Haircut",
    desc: "Precision cuts tailored to your style and face shape.",
    price: "$45",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"></path>
      </svg>
    )
  },
  {
    title: "Beard Trim",
    desc: "Expert beard shaping and trimming for a sharp look.",
    price: "$30",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    )
  },
  {
    title: "Shaving",
    desc: "Classic hot towel shave for the smoothest experience.",
    price: "$35",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
      </svg>
    )
  },
  {
    title: "Hair Styling",
    desc: "Professional styling for a perfect look that lasts.",
    price: "$40",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    )
  },
  {
    title: "Hair Color",
    desc: "Premium coloring services for a bold transformation.",
    price: "$85",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
      </svg>
    )
  },
  {
    title: "Hair Spa",
    desc: "Nourishing treatments that restore strength and shine.",
    price: "$60",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
      </svg>
    )
  },
  {
    title: "Facial Treatment",
    desc: "Deep cleansing and rejuvenating facials for healthy skin.",
    price: "$50",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    )
  },
  {
    title: "Head Massage",
    desc: "Relaxing scalp massage to reduce stress and boost wellness.",
    price: "$45",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    )
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-[#050505] text-white py-24 border-t border-white/5">
      
      {/* ── Header ──────────────────────────────────────────────────────── */}
      <div className="w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 mb-20 relative">
        <div className="relative z-10 w-full lg:w-1/2">
          <h4 className="text-[#E4A861] text-xs font-bold tracking-[0.3em] uppercase mb-6">
            Our Services
          </h4>
          <h2 
            className="text-5xl md:text-7xl mb-8 leading-[1.1] font-light"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Exceptional Care.<br />
            <span className="italic text-[#E4A861] font-medium">Timeless Style.</span>
          </h2>
          <p className="text-gray-400 max-w-md text-sm md:text-base leading-relaxed mb-10">
            Discover our premium grooming services crafted to elevate your style and confidence.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="border border-[#E4A861] bg-[#E4A861] text-black px-6 py-3 text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold hover:bg-transparent hover:text-[#E4A861] transition-all duration-300">
              Book Appointment
            </button>
            <button className="border border-white/20 px-6 py-3 text-[10px] md:text-xs tracking-[0.2em] uppercase text-white hover:border-[#E4A861] hover:text-[#E4A861] transition-all duration-300 flex items-center gap-2">
              View Packages <span className="text-lg leading-none">→</span>
            </button>
          </div>
        </div>
        
        {/* Decorative Background Image for Header */}
        <div className="hidden lg:block absolute top-0 right-8 lg:right-24 w-1/2 h-full opacity-60">
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1200" 
            alt="Barber Working" 
            className="w-full h-[120%] -mt-10 object-cover grayscale" 
          />
        </div>
      </div>

      {/* ── Services Grid Section ───────────────────────────────────────── */}
      <div className="w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 mb-32">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="w-12 h-[1px] bg-[#E4A861]/40"></div>
          <h4 className="text-gray-300 text-[10px] font-bold tracking-[0.3em] uppercase">
            Our Services
          </h4>
          <div className="w-12 h-[1px] bg-[#E4A861]/40"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10 border border-white/10">
          {servicesList.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-[#0a0a0a] p-8 lg:p-10 relative group overflow-hidden hover:bg-[#111] transition-colors duration-500 cursor-pointer flex flex-col justify-between min-h-[320px]"
            >
              {/* Background hover image (simulated with generic barbershop image) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800" 
                  alt="Service Bg" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-[#E4A861] mb-6 group-hover:border-[#E4A861]/40 group-hover:scale-110 transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-wide">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-6 mt-auto">
                <span className="text-[#E4A861] font-serif text-2xl italic">{service.price}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 group-hover:text-[#E4A861] transition-colors flex items-center gap-2">
                  View Details <span>→</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Signature Packages ────────────────────────────────────────── */}
      <div className="w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 mb-24">
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="w-12 h-[1px] bg-[#E4A861]/40"></div>
          <h4 className="text-gray-300 text-[10px] font-bold tracking-[0.3em] uppercase">
            Signature Packages
          </h4>
          <div className="w-12 h-[1px] bg-[#E4A861]/40"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Silver Package */}
          <div className="bg-[#0a0a0a] border border-white/10 p-10 flex flex-col hover:border-[#E4A861]/40 transition-colors group relative">
            <h5 className="text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase text-center mb-4">Silver</h5>
            <h3 className="text-2xl text-white font-serif text-center mb-2 italic">Essentials Package</h3>
            <p className="text-gray-500 text-xs text-center mb-8">Perfect for regular grooming.</p>
            
            <ul className="text-sm text-gray-400 space-y-4 mb-12 flex-1">
              <li className="flex items-center gap-3"><span className="text-[#E4A861]">✔</span> Haircut</li>
              <li className="flex items-center gap-3"><span className="text-[#E4A861]">✔</span> Beard Trim</li>
              <li className="flex items-center gap-3"><span className="text-[#E4A861]">✔</span> Hot Towel Shave</li>
            </ul>
            
            <div className="text-center mt-auto">
              <span className="text-4xl text-[#E4A861] font-serif italic block mb-6">$79</span>
              <button className="w-full border border-white/20 py-3 text-[10px] tracking-[0.2em] uppercase text-white hover:border-[#E4A861] hover:text-[#E4A861] transition-colors">
                Book Now
              </button>
            </div>
          </div>

          {/* Gold Package (Highlighted) */}
          <div className="bg-[#0f0e0c] border border-[#E4A861] p-10 flex flex-col relative transform lg:-translate-y-4 shadow-2xl shadow-[#E4A861]/5">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E4A861] text-black text-[9px] font-bold tracking-[0.2em] uppercase px-4 py-1">
              Most Popular
            </div>
            <h5 className="text-[#E4A861] text-[10px] font-bold tracking-[0.2em] uppercase text-center mb-4 mt-2">Gold</h5>
            <h3 className="text-2xl text-white font-serif text-center mb-2 italic">Premium Package</h3>
            <p className="text-gray-500 text-xs text-center mb-8">Our most loved package.</p>
            
            <ul className="text-sm text-gray-300 space-y-4 mb-12 flex-1">
              <li className="flex items-center gap-3"><span className="text-[#E4A861]">✔</span> Haircut</li>
              <li className="flex items-center gap-3"><span className="text-[#E4A861]">✔</span> Beard Trim</li>
              <li className="flex items-center gap-3"><span className="text-[#E4A861]">✔</span> Hot Towel Shave</li>
              <li className="flex items-center gap-3"><span className="text-[#E4A861]">✔</span> Hair Spa</li>
              <li className="flex items-center gap-3"><span className="text-[#E4A861]">✔</span> Head Massage</li>
            </ul>
            
            <div className="text-center mt-auto">
              <span className="text-5xl text-[#E4A861] font-serif italic block mb-6">$129</span>
              <button className="w-full border border-[#E4A861] bg-[#E4A861] py-3 text-[10px] tracking-[0.2em] uppercase text-black font-bold hover:bg-transparent hover:text-[#E4A861] transition-all">
                Book Now
              </button>
            </div>
          </div>

          {/* Platinum Package */}
          <div className="bg-[#0a0a0a] border border-white/10 p-10 flex flex-col hover:border-[#E4A861]/40 transition-colors group relative">
            <h5 className="text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase text-center mb-4">Platinum</h5>
            <h3 className="text-2xl text-white font-serif text-center mb-2 italic">Luxury Package</h3>
            <p className="text-gray-500 text-xs text-center mb-8">The ultimate grooming experience.</p>
            
            <ul className="text-sm text-gray-400 space-y-4 mb-12 flex-1">
              <li className="flex items-center gap-3"><span className="text-[#E4A861]">✔</span> Haircut</li>
              <li className="flex items-center gap-3"><span className="text-[#E4A861]">✔</span> Beard Trim</li>
              <li className="flex items-center gap-3"><span className="text-[#E4A861]">✔</span> Hot Towel Shave</li>
              <li className="flex items-center gap-3"><span className="text-[#E4A861]">✔</span> Hair Spa</li>
              <li className="flex items-center gap-3"><span className="text-[#E4A861]">✔</span> Facial Treatment</li>
              <li className="flex items-center gap-3"><span className="text-[#E4A861]">✔</span> Head Massage</li>
            </ul>
            
            <div className="text-center mt-auto">
              <span className="text-4xl text-[#E4A861] font-serif italic block mb-6">$199</span>
              <button className="w-full border border-white/20 py-3 text-[10px] tracking-[0.2em] uppercase text-white hover:border-[#E4A861] hover:text-[#E4A861] transition-colors">
                Book Now
              </button>
            </div>
          </div>

          {/* Promotional Side Banner */}
          <div className="bg-[#111] relative overflow-hidden flex flex-col justify-center border border-white/10 group h-full min-h-[400px]">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&q=80&w=600" 
                alt="Luxury Grooming" 
                className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
            </div>
            <div className="relative z-10 p-10">
              <h5 className="text-[#E4A861] text-[9px] font-bold tracking-[0.2em] uppercase mb-4">
                The Ultimate Experience
              </h5>
              <h3 
                className="text-3xl lg:text-4xl text-white mb-6 leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Indulge in Luxury<br />
                <span className="italic">Grooming</span>
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-10 max-w-xs">
                Our packages are curated to deliver complete care and unmatched relaxation. Because you deserve the very best.
              </p>
              
              <div className="mt-auto">
                <h4 
                  className="italic text-2xl text-[#E4A861]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Alexander
                </h4>
                <p className="text-[8px] tracking-[0.2em] text-white/50 uppercase mt-1">Founder & Master Stylist</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>

    </section>
  );
}
