import React, { useState, useEffect } from "react";

// Mock data for 5 Stylists
const stylistsData = [
  {
    id: 1,
    name: "Alexander Reed",
    title: "Master Stylist",
    shortDesc: "Specializing in classic cuts, beard grooming & precision fades.",
    image: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&q=80&w=800",
    bio: "With over 15 years of experience, Alexander is the visionary behind our salon. His passion for the craft and attention to detail have earned him a loyal following and industry recognition.",
    stats: [
      { icon: "💼", value: "15+", label: "Years Experience" },
      { icon: "🌍", value: "International", label: "Training Certified" },
      { icon: "🏆", value: "Industry", label: "Award Winner" }
    ],
    skills: [
      { name: "Haircut & Styling", value: 98 },
      { name: "Beard Grooming", value: 95 },
      { name: "Fades & Shaves", value: 96 },
      { name: "Client Satisfaction", value: 99 }
    ]
  },
  {
    id: 2,
    name: "Marcus Silva",
    title: "Beard Specialist",
    shortDesc: "Expert in beard sculpting, shaping & premium beard care.",
    image: "https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?auto=format&fit=crop&q=80&w=800",
    bio: "Marcus is renowned for his exceptional beard sculpting techniques. He believes every beard has a personality and tailors his approach to highlight the unique structure of his clients.",
    stats: [
      { icon: "💼", value: "10+", label: "Years Experience" },
      { icon: "⭐", value: "5000+", label: "Happy Clients" },
      { icon: "✂️", value: "Master", label: "Sculpting" }
    ],
    skills: [
      { name: "Beard Sculpting", value: 99 },
      { name: "Hot Towel Shave", value: 94 },
      { name: "Scissor Work", value: 92 },
      { name: "Client Satisfaction", value: 98 }
    ]
  },
  {
    id: 3,
    name: "Lucas Mendes",
    title: "Hair Stylist",
    shortDesc: "Passionate about modern hairstyles & creative styling.",
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=800",
    bio: "Lucas brings a fresh perspective to traditional grooming. His innovative styling and sharp fades keep our clients looking contemporary and effortlessly stylish.",
    stats: [
      { icon: "💼", value: "8+", label: "Years Experience" },
      { icon: "🎓", value: "Advanced", label: "Academy Graduate" },
      { icon: "🔥", value: "Trends", label: "Expert" }
    ],
    skills: [
      { name: "Modern Styling", value: 95 },
      { name: "Textured Cuts", value: 96 },
      { name: "Fades", value: 94 },
      { name: "Client Satisfaction", value: 97 }
    ]
  },
  {
    id: 4,
    name: "Rafael Costa",
    title: "Color Expert",
    shortDesc: "Master of hair coloring, highlights & color correction.",
    image: "https://images.unsplash.com/photo-1520694478166-daaf49b06f5f?auto=format&fit=crop&q=80&w=800",
    bio: "Rafael is a color wizard. From subtle highlights to complete transformations, he ensures hair integrity while delivering stunning, vibrant, and personalized color results.",
    stats: [
      { icon: "💼", value: "12+", label: "Years Experience" },
      { icon: "🎨", value: "Certified", label: "Colorist" },
      { icon: "✨", value: "Creative", label: "Director" }
    ],
    skills: [
      { name: "Color Correction", value: 97 },
      { name: "Balayage", value: 96 },
      { name: "Highlights", value: 95 },
      { name: "Client Satisfaction", value: 99 }
    ]
  },
  {
    id: 5,
    name: "Bruno Carvalho",
    title: "Grooming Expert",
    shortDesc: "Specialist in skincare, scalp treatments & facial grooming.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
    bio: "Bruno focuses on holistic grooming. His scalp treatments and skincare routines elevate the standard haircut into a deeply relaxing, revitalizing, and healthy experience.",
    stats: [
      { icon: "💼", value: "9+", label: "Years Experience" },
      { icon: "🌿", value: "Holistic", label: "Therapist" },
      { icon: "💆", value: "Wellness", label: "Advocate" }
    ],
    skills: [
      { name: "Scalp Treatments", value: 98 },
      { name: "Facial Grooming", value: 94 },
      { name: "Relaxation Massage", value: 96 },
      { name: "Client Satisfaction", value: 98 }
    ]
  }
];

export default function StylistsSection() {
  const [selectedStylist, setSelectedStylist] = useState(null);

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedStylist(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section id="stylists" className="bg-[#050505] text-white py-24 border-t border-white/5 relative">
      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* ── Header ──────────────────────────────────────────────────────── */}
        <div className="mb-16 lg:mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="relative z-10 w-full md:w-2/3 lg:w-1/2">
            <h4 className="text-[#E4A861] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-6">
              Our Stylists
            </h4>
            <h2 
              className="text-4xl md:text-6xl mb-6 leading-[1.1] font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Meet The Masters<br />
              <span className="italic text-[#E4A861] font-medium">Behind Your Style.</span>
            </h2>
            <div className="w-20 h-[1px] bg-[#E4A861]/30 mb-6"></div>
            <p className="text-gray-400 max-w-md text-xs md:text-sm leading-relaxed mb-8">
              Our team of industry stylists is dedicated to providing you with exceptional grooming experiences and outstanding results.
            </p>
            <button className="border border-[#E4A861] px-6 py-3 text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-[#E4A861] hover:bg-[#E4A861] hover:text-black transition-all duration-300 flex items-center gap-2">
              Book Appointment <span>→</span>
            </button>
          </div>
        </div>

        {/* ── Grid Divider ────────────────────────────────────────────────── */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="w-12 h-[1px] bg-[#E4A861]/40"></div>
          <h4 className="text-gray-300 text-[9px] font-bold tracking-[0.3em] uppercase">
            Our Team Of Stylists
          </h4>
          <div className="w-12 h-[1px] bg-[#E4A861]/40"></div>
        </div>

        {/* ── Stylists Grid ───────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {stylistsData.map((stylist) => (
            <div 
              key={stylist.id} 
              className="border border-white/10 bg-[#0a0a0a] group cursor-pointer relative overflow-hidden flex flex-col"
              onClick={() => setSelectedStylist(stylist)}
            >
              {/* Image Container */}
              <div className="w-full h-[350px] overflow-hidden relative border-b border-white/5">
                <img 
                  src={stylist.image} 
                  alt={stylist.name} 
                  className="w-full h-full object-cover object-top grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
              </div>
              
              {/* Content Container */}
              <div className="p-6 flex flex-col flex-1 relative z-10 bg-[#0a0a0a] group-hover:bg-[#111] transition-colors duration-500">
                <h4 
                  className="text-[#E4A861] text-2xl mb-1 italic opacity-80"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {stylist.name.split(' ')[0]}
                </h4>
                <h3 className="text-lg font-bold mb-1 text-white tracking-wide">
                  {stylist.name}
                </h3>
                <p className="text-[#E4A861] text-[9px] uppercase tracking-[0.2em] font-bold mb-4">
                  {stylist.title}
                </p>
                <p className="text-gray-500 text-[11px] leading-relaxed mb-6">
                  {stylist.shortDesc}
                </p>
                
                {/* Social Placeholder */}
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                  <span className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-[10px] text-gray-400 hover:text-[#E4A861] hover:border-[#E4A861] transition-colors">in</span>
                  <span className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-[10px] text-gray-400 hover:text-[#E4A861] hover:border-[#E4A861] transition-colors">f</span>
                  <span className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-[10px] text-gray-400 hover:text-[#E4A861] hover:border-[#E4A861] transition-colors">x</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ── Modal / Popup ───────────────────────────────────────────────── */}
      {selectedStylist && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
          
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            onClick={() => setSelectedStylist(null)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative w-full max-w-5xl bg-[#0a0a0a] border border-white/10 shadow-2xl flex flex-col md:flex-row overflow-hidden max-h-[90vh] overflow-y-auto z-10 animate-badge-fade-up">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedStylist(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:text-[#E4A861] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            {/* Left: Image */}
            <div className="w-full md:w-2/5 h-[300px] md:h-auto relative">
              <img 
                src={selectedStylist.image} 
                alt={selectedStylist.name} 
                className="w-full h-full object-cover grayscale brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] md:bg-gradient-to-r md:from-transparent md:to-[#0a0a0a] opacity-80"></div>
            </div>

            {/* Right: Details */}
            <div className="w-full md:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
              <h4 className="text-gray-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
                Featured Stylist
              </h4>
              <h2 
                className="text-4xl md:text-5xl text-white mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {selectedStylist.name}
              </h2>
              <h3 
                className="text-2xl text-[#E4A861] italic mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {selectedStylist.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-10 border-l-2 border-[#E4A861]/30 pl-4">
                {selectedStylist.bio}
              </p>

              <div className="flex flex-col xl:flex-row gap-12">
                
                {/* Progress Bars */}
                <div className="flex-1 space-y-5">
                  {selectedStylist.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-xs mb-2">
                        <span className="text-gray-300 font-medium tracking-wide">{skill.name}</span>
                        <span className="text-[#E4A861]">{skill.value}%</span>
                      </div>
                      <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#E4A861] rounded-full" 
                          style={{ width: `${skill.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats List */}
                <div className="xl:w-1/3 flex flex-col gap-6 justify-center">
                  {selectedStylist.stats.map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-lg text-[#E4A861] bg-[#111]">
                        {stat.icon}
                      </div>
                      <div>
                        <h5 className="text-white text-sm font-bold">{stat.value}</h5>
                        <p className="text-gray-500 text-[10px] uppercase tracking-wider">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
