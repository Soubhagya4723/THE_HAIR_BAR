import React, { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const textFillRef = useRef(null);

  useGSAP(() => {
    
    // ── 1. Text Fill Animation (Transition from About) ──
    gsap.to(textFillRef.current, {
      backgroundPositionX: "0%",
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
      }
    });

    // ── 2. Cinematic Horizontal Scroll ──
    const cards = gsap.utils.toArray(".svc-cinematic-card");
    
    gsap.to(cards, {
      xPercent: -100 * (cards.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: scrollContainerRef.current,
        pin: true,
        scrub: 1,
        // The scroll distance depends on the number of cards to feel natural
        end: () => "+=" + scrollContainerRef.current.offsetWidth * (cards.length - 1)
      }
    });

    // ── 3. Internal Parallax for Images and Text ──
    cards.forEach((card, i) => {
      const img = card.querySelector(".svc-img");
      const text = card.querySelector(".svc-text");
      
      // We don't want to parallax the first card on load since it's already in view
      if (i !== 0) {
        gsap.fromTo(img, 
          { xPercent: 20 },
          {
            xPercent: -20,
            ease: "none",
            scrollTrigger: {
              trigger: scrollContainerRef.current,
              start: "top top",
              end: () => "+=" + scrollContainerRef.current.offsetWidth * (cards.length - 1),
              scrub: 1,
            }
          }
        );
      }
    });

  }, { scope: sectionRef });

  const services = [
    {
      id: "01",
      title: "SIGNATURE CUT",
      subtitle: "Tailored precision",
      desc: "Designed to perfectly complement your features and lifestyle. We blend classic barbering techniques with modern trends for a flawless finish.",
      img: "https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: "02",
      title: "ROYAL SHAVE",
      subtitle: "Timeless relaxation",
      desc: "A hot towel straight razor shave for the ultimate luxurious relaxation. Smooth, precise, and incredibly soothing for the skin.",
      img: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: "03",
      title: "BEARD SCULPT",
      subtitle: "Impeccably sharp",
      desc: "Detailed grooming, fading, and line-ups to keep your facial hair impeccably sharp. Masterful detailing for a rugged yet clean look.",
      img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: "04",
      title: "COLOR & TONE",
      subtitle: "Striking transformations",
      desc: "From subtle grey blending to striking color transformations, executed with premium products to keep your hair incredibly healthy.",
      img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="bg-[#050505] text-white pt-12 pb-0 overflow-hidden relative border-t border-white/5">
      
      {/* ── 1. The Gap Transition & Big Heading ── */}
      <div className="w-full flex justify-center mb-10 md:mb-16 px-4 relative z-10 pt-10">
        <h2 
          ref={textFillRef}
          className="text-6xl md:text-8xl lg:text-[10rem] font-black font-archivo uppercase text-center leading-none tracking-tighter"
          style={{ 
            WebkitTextStroke: "1px rgba(255, 255, 255, 0.1)",
            color: "transparent",
            backgroundImage: "linear-gradient(to right, #E4A861 50%, transparent 50%)",
            backgroundSize: "200% 100%",
            backgroundPositionX: "100%",
            WebkitBackgroundClip: "text",
            backgroundClip: "text"
          }}
        >
          EXPERTISE
        </h2>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 mb-20 relative z-10 flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="max-w-xl">
          <div className="flex items-center gap-4 mb-6">
            <h4 className="shiny-gold-text text-xs font-bold tracking-[0.4em] uppercase">
              The Menu
            </h4>
            <div className="w-12 h-[1px] bg-[#E4A861]"></div>
          </div>
          <p className="text-gray-400 text-sm md:text-lg leading-relaxed font-light">
            An immersive journey into the art of grooming. Scroll to explore our defining services.
          </p>
        </div>
      </div>

      {/* ── 2. Full-Screen Cinematic Horizontal Scroll ── */}
      <div ref={scrollContainerRef} className="flex h-[100vh] w-full flex-nowrap overflow-hidden bg-black">
        {services.map((svc) => (
          <div key={svc.id} className="svc-cinematic-card relative flex-none w-[100vw] h-full overflow-hidden group border-r border-white/5">
            
            {/* The Image (Scales and Parallaxes) */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <img 
                src={svc.img} 
                alt={svc.title} 
                className="svc-img w-full h-full object-cover scale-[1.15] opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
              />
              {/* Dark Overlays for text legibility and mood */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-100"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-transparent opacity-90"></div>
            </div>

            {/* The Content */}
            <div className="relative z-10 w-full h-full flex flex-col justify-end p-8 md:p-16 lg:p-24 max-w-[1400px] mx-auto">
              
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 md:gap-24">
                
                {/* Left Side: Title & Info */}
                <div className="svc-text flex-1">
                  <div className="overflow-hidden mb-4">
                    <span className="block shiny-gold-text text-sm md:text-base font-bold tracking-[0.3em] uppercase transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                      {svc.subtitle}
                    </span>
                  </div>
                  
                  <h3 className="text-5xl md:text-7xl lg:text-[6rem] text-white leading-[0.9] tracking-tighter mb-8 font-black font-archivo uppercase">
                    {svc.title}
                  </h3>
                  
                  <div className="w-16 h-[2px] bg-[#E4A861] mb-8 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 delay-200"></div>
                  
                  <p className="text-gray-300 text-sm md:text-lg leading-relaxed max-w-lg font-light opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-300">
                    {svc.desc}
                  </p>
                </div>

                {/* Right Side: Huge Number & Link */}
                <div className="flex flex-col items-start md:items-end justify-between h-full">
                  <div className="text-[6rem] md:text-[10rem] lg:text-[14rem] leading-none text-transparent font-black font-archivo shiny-gold-text opacity-50 group-hover:opacity-100 transition-opacity duration-700">
                    {svc.id}
                  </div>
                  
                  <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-500">
                    <Link to="/services" className="flex items-center gap-4 text-white hover:text-[#E4A861] transition-colors duration-300">
                      <span className="text-xs md:text-sm tracking-[0.2em] uppercase font-bold">Book this service</span>
                      <div className="w-12 h-[1px] bg-current"></div>
                    </Link>
                  </div>
                </div>

              </div>
              
            </div>
          </div>
        ))}

        {/* Final Call To Action Card */}
        <div className="svc-cinematic-card relative flex-none w-[100vw] h-full overflow-hidden bg-[#0a0a0a] flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <h2 className="text-[20rem] font-black font-archivo uppercase text-white whitespace-nowrap">
              THE HAIR BAR
            </h2>
          </div>
          
          <div className="relative z-10 text-center px-4">
            <h4 className="shiny-gold-text text-sm font-bold tracking-[0.4em] uppercase mb-6">
              Experience the best
            </h4>
            <h3 className="text-6xl md:text-8xl lg:text-9xl text-white mb-12 font-black font-archivo uppercase tracking-tighter">
              DISCOVER <br /> MORE
            </h3>
            <Link to="/services">
              <button className="relative overflow-hidden group bg-transparent border-2 border-[#E4A861] text-[#E4A861] px-12 py-5 text-sm tracking-[0.3em] uppercase font-bold transition-all duration-500">
                <span className="relative z-10 group-hover:text-black transition-colors duration-500">View Full Menu</span>
                <div className="absolute inset-0 bg-[#E4A861] transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></div>
              </button>
            </Link>
          </div>
        </div>
        
      </div>

    </section>
  );
}

