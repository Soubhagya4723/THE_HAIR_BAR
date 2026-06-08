import React, { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function StylistsSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    
    // 0. Premium Scrolling Marquee Animation (Infinite Loop)
    gsap.to(".marquee-content", {
      xPercent: -50,
      ease: "none",
      duration: 15, // Speed of the marquee
      repeat: -1,   // Infinite loop
    });

    // 1. Fancy Heading Entrance Animation
    gsap.from(".stylist-heading-word", {
      y: 120,
      opacity: 0,
      rotateX: -45,
      duration: 1.2,
      stagger: 0.1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      }
    });

    // 2. Fancy Divider Animation
    gsap.from(".stylist-divider", {
      scaleX: 0,
      opacity: 0,
      duration: 1.5,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      }
    });

    // 3. Crazy Accordion Cards Entrance Animation (Clip-path mask reveal)
    gsap.fromTo(".stylist-card-wrapper", 
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        y: 50,
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        y: 0,
        duration: 1.5,
        stagger: 0.15,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        }
      }
    );

  }, { scope: sectionRef });

  const stylists = [
    {
      id: "01",
      name: "ALEXANDER",
      role: "MASTER BARBER",
      img: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&q=80&w=1000",
      desc: "With over 15 years of experience, Alexander brings unparalleled precision to classic barbering and modern fades."
    },
    {
      id: "02",
      name: "JULIAN",
      role: "COLOR SPECIALIST",
      img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=1000",
      desc: "Julian is a master of color theory, creating striking transformations that elevate your style and confidence."
    },
    {
      id: "03",
      name: "MARCUS",
      role: "BEARD ARCHITECT",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1000",
      desc: "Marcus sculpts facial hair into works of art, defining structure and emphasizing your strongest features."
    },
    {
      id: "04",
      name: "ELIAS",
      role: "TEXTURE EXPERT",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000",
      desc: "Specializing in natural texture, Elias ensures your hair moves perfectly and effortlessly every single day."
    }
  ];

  return (
    <section ref={sectionRef} className="bg-[#050505] text-white pb-12 md:pb-16 relative overflow-hidden">

      {/* ── PREMIUM SCROLLING MARQUEE DIVIDER ── */}
      <div className="marquee-container w-full overflow-hidden bg-[#050505] py-12 md:py-16 border-y border-white/5 relative z-20">
        <div className="marquee-content flex whitespace-nowrap w-max hover:pause">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-5xl md:text-8xl font-black font-archivo uppercase tracking-tighter mx-8 text-white">THE ARTISANS</span>
              <span className="shiny-gold-text text-4xl md:text-6xl mx-4">✦</span>
              <span className="text-5xl md:text-8xl font-black font-archivo uppercase tracking-tighter mx-8 text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>MASTER STYLISTS</span>
              <span className="shiny-gold-text text-4xl md:text-6xl mx-4">✦</span>
              <span className="shiny-gold-text text-5xl md:text-8xl font-black font-archivo uppercase tracking-tighter mx-8">VISIONARIES</span>
              <span className="shiny-gold-text text-4xl md:text-6xl mx-4">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#E4A861] opacity-[0.02] blur-[150px] pointer-events-none rounded-full"></div>

      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-16 relative z-10 pt-20">
        
        {/* ── FANCY HEADING ── */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-28">
          <div className="flex items-center gap-4 mb-8 overflow-hidden">
            <div className="stylist-divider w-12 h-[1px] bg-[#E4A861] origin-right"></div>
            <h4 className="shiny-gold-text text-xs md:text-sm font-bold tracking-[0.4em] uppercase">
              The Artisans
            </h4>
            <div className="stylist-divider w-12 h-[1px] bg-[#E4A861] origin-left"></div>
          </div>
          
          <div className="flex flex-col items-center gap-2 md:gap-4 overflow-hidden px-4 perspective-[1000px]">
            {/* Top row (Sans Serif) */}
            <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-8">
              <span className="stylist-heading-word block text-5xl md:text-7xl lg:text-8xl font-black font-archivo uppercase tracking-tighter text-white">
                MEET
              </span>
              <span className="stylist-heading-word shiny-gold-text block text-5xl md:text-7xl lg:text-8xl font-black font-archivo uppercase tracking-tighter">
                THE
              </span>
            </div>
            {/* Bottom row (Serif Italic) */}
            <div className="flex flex-wrap justify-center gap-x-3 md:gap-x-6 mt-2">
              <span className="stylist-heading-word block text-6xl md:text-8xl lg:text-9xl italic font-cormorant font-medium text-white">
                Masters
              </span>
              <span className="stylist-heading-word shiny-gold-text block text-6xl md:text-8xl lg:text-9xl italic font-cormorant font-medium">
                Of
              </span>
              <span className="stylist-heading-word block text-6xl md:text-8xl lg:text-9xl italic font-cormorant font-medium text-white">
                Style
              </span>
            </div>
          </div>
        </div>

        {/* ── CRAZY ACCORDION ANIMATION ── */}
        <div className="flex flex-col md:flex-row w-full h-[80vh] md:h-[70vh] gap-4 mb-20">
          {stylists.map((stylist, index) => (
            <div 
              key={stylist.id} 
              className="stylist-card-wrapper relative flex-1 group md:hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden cursor-pointer border border-white/10 md:hover:border-[#E4A861]/50"
            >
              {/* Background Image */}
              <img 
                src={stylist.img} 
                alt={stylist.name} 
                className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-out"
                style={{ objectPosition: "center top" }}
              />
              
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-100 group-hover:opacity-70 transition-opacity duration-700"></div>
              
              {/* Default Vertical Name (Hidden on hover on Desktop, always visible on Mobile but horizontal) */}
              <div className="absolute inset-0 flex items-end justify-center pb-8 md:pb-0 md:items-center md:group-hover:opacity-0 transition-opacity duration-500">
                <h3 className="text-white text-2xl md:text-4xl font-black uppercase tracking-[0.2em] md:rotate-[-90deg] whitespace-nowrap" style={{ fontFamily: "'Archivo Black', sans-serif", WebkitTextStroke: "1px rgba(255,255,255,0.2)", color: "transparent" }}>
                  {stylist.name}
                </h3>
              </div>

              {/* Hover Content (Revealed on hover) */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 flex flex-col justify-end opacity-100 md:opacity-0 transform md:translate-y-8 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-700 delay-100 pointer-events-none">
                
                {/* Number Outline */}
                <span className="text-5xl font-black text-transparent mb-2 hidden md:block" style={{ fontFamily: "'Archivo Black', sans-serif", WebkitTextStroke: "1px rgba(228, 168, 97, 0.5)" }}>
                  {stylist.id}
                </span>
                
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase mb-2 hidden md:block" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {stylist.name}
                </h3>
                
                <div className="flex items-center gap-4 mb-4 hidden md:flex">
                  <div className="w-8 h-[1px] bg-[#E4A861]"></div>
                  <p className="text-[#E4A861] tracking-[0.3em] text-xs font-bold uppercase">{stylist.role}</p>
                </div>
                
                <p className="text-gray-300 text-sm lg:text-base hidden md:block max-w-md font-light leading-relaxed">
                  {stylist.desc}
                </p>

              </div>
            </div>
          ))}
        </div>

        {/* ── CTA BUTTON ── */}
        <div className="flex justify-center">
          <Link to="/stylists">
            <button className="relative overflow-hidden group border border-[#E4A861]/40 px-12 py-5 text-xs tracking-[0.3em] uppercase font-bold text-[#E4A861] transition-all duration-500">
              <span className="relative z-10 group-hover:text-[#050505] transition-colors duration-500">View All Artisans</span>
              <div className="absolute inset-0 bg-[#E4A861] transform scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></div>
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
