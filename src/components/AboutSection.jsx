import React, { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    // ── 1. Advanced Scroll Marquee Animation ──
    gsap.to(".marquee-inner", {
      xPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom", // Starts as soon as the section enters the bottom of the viewport
        end: "bottom top",
        scrub: 1, // Smooth scrubbing effect
      }
    });

    // ── 2. Background Giant Text Parallax ──
    gsap.to(".bg-giant-text", {
      y: -150,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    // ── 3. Staggered Content Reveal ──
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".content-trigger",
        start: "top 75%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      }
    });

    tl.fromTo(".reveal-up", 
      { y: 60, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power4.out" }
    );

    tl.fromTo(".img-reveal",
      { scale: 0.8, opacity: 0, rotation: 5 },
      { scale: 1, opacity: 1, rotation: 0, duration: 1.2, stagger: 0.2, ease: "power3.out" },
      "-=0.8"
    );

    // ── 4. Infinite Rotating Badge ──
    gsap.to(".rotating-badge", {
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: "none"
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative bg-[#050505] text-white pb-32 lg:pb-48 overflow-hidden">
      
      {/* ── Dynamic Marquee Divider (Bridging Hero and About) ── */}
      <div className="w-full overflow-hidden border-y border-[#E4A861]/20 py-5 bg-[#080808] mb-16 lg:mb-24 flex">
        <div 
          className="marquee-inner whitespace-nowrap flex items-center text-[#E4A861] uppercase font-black text-xl md:text-2xl tracking-[0.2em]" 
          style={{ fontFamily: "'Archivo Black', sans-serif" }}
        >
          {/* Repeating the text block multiple times to ensure it fills the screen during scroll */}
          {[1, 2, 3, 4].map((i) => (
            <span key={i} className="flex items-center">
              LUXURY GROOMING <span className="mx-8 text-white/10">•</span> 
              CLASSIC CRAFTSMANSHIP <span className="mx-8 text-white/10">•</span> 
              MASTER STYLISTS <span className="mx-8 text-white/10">•</span> 
              PREMIUM CARE <span className="mx-8 text-white/10">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Giant Background Text */}
      <div 
        className="bg-giant-text absolute top-32 left-[-5%] text-[150px] md:text-[250px] lg:text-[350px] text-white/[0.02] font-black uppercase whitespace-nowrap pointer-events-none select-none"
        style={{ fontFamily: "'Archivo Black', sans-serif" }}
      >
        EXCELLENCE
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 relative z-10 content-trigger">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* ── Text Content (Left) ── */}
          <div className="lg:col-span-6 flex flex-col justify-center pr-0 lg:pr-12">
            
            <div className="reveal-up flex items-center gap-6 mb-8">
              <span className="text-[#E4A861] text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase">
                About The Hairbar
              </span>
              <div className="w-16 h-[1px] bg-gradient-to-r from-[#E4A861] to-transparent"></div>
            </div>
            
            <h2 className="reveal-up text-5xl md:text-7xl lg:text-[85px] leading-[0.9] mb-8 font-black uppercase tracking-tight"
                style={{ fontFamily: "'Archivo Black', sans-serif" }}>
              Redefining
              <br />
              <span 
                className="text-6xl md:text-8xl lg:text-[95px] text-[#E4A861] italic font-light lowercase tracking-normal"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                luxury.
              </span>
            </h2>
            
            {/* Added Explicit Heading Text as requested */}
            <h3 className="reveal-up text-xl md:text-2xl font-serif italic text-white mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              "A sanctuary for the modern aristocrat."
            </h3>

            <p className="reveal-up text-gray-400 text-sm md:text-base leading-relaxed tracking-wider mb-12 font-light max-w-md">
              A symphony of classic craftsmanship and contemporary flair. We curate an elevated grooming experience designed strictly for those who demand excellence. Step in, unwind, and let us master your style.
            </p>

            <div className="reveal-up">
              <Link to="/about">
                <button className="group relative flex items-center gap-6 pb-4 border-b border-white/20 hover:border-[#E4A861] transition-colors duration-500">
                  <span className="text-xs tracking-[0.3em] uppercase font-bold text-white group-hover:text-[#E4A861] transition-colors duration-500">
                    Discover Our Story
                  </span>
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#E4A861] group-hover:bg-[#E4A861] transition-all duration-500">
                    <svg className="w-3 h-3 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                </button>
              </Link>
            </div>
          </div>

          {/* ── Image Composition (Right) ── */}
          <div className="lg:col-span-6 relative h-[600px] md:h-[700px] w-full flex justify-end mt-12 lg:mt-0">
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#E4A861]/20 rounded-full blur-[100px] pointer-events-none"></div>

            {/* Main Large Image */}
            <div className="img-reveal absolute right-0 top-0 w-[85%] md:w-[75%] h-[85%] overflow-hidden border border-[#E4A861]/20">
              <img 
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=1000" 
                alt="Stylist working" 
                className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:scale-105 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#050505]/80 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Smaller Overlapping Image */}
            <div className="img-reveal absolute left-0 bottom-0 w-[55%] aspect-square overflow-hidden border-[6px] border-[#050505] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600" 
                alt="Salon detail" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-110 transition-all duration-700" 
              />
            </div>

            {/* Rotating SVG Circular Badge */}
            <div className="img-reveal absolute -right-6 top-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 z-20">
              <div className="rotating-badge w-full h-full text-[#E4A861]">
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                  <text className="text-[11px] font-black tracking-[0.2em] uppercase fill-current" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                    <textPath href="#circlePath">
                      • Premium Grooming • Est 2023 • Hairbar
                    </textPath>
                  </text>
                </svg>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#E4A861] text-2xl">
                ✂
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
