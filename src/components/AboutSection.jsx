import React, { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // ── 1. Marquee Animation ──
    gsap.to(".marquee-inner", {
      xPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
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

    // ── 3. Image Parallax ──
    gsap.fromTo(".img-parallax", 
      { y: 50, scale: 1.05 },
      { y: -30, scale: 1, ease: "none", scrollTrigger: {
          trigger: ".img-trigger",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true
      }}
    );

    // ── 4. Content Fade In ──
    gsap.fromTo(".fade-up",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", scrollTrigger: {
          trigger: ".content-trigger",
          start: "top 75%",
      }}
    );

    // ── 5. Rotating Badge ──
    gsap.to(".rotating-badge", {
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: "none"
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="about" className="relative bg-[#080808] text-white overflow-hidden pb-24 md:pb-32">
      
      {/* ── 1. Scrolling Marquee (Bridging the gap) ── */}
      <div className="w-full bg-[#E4A861] text-black py-4 overflow-hidden mb-16 md:mb-24 flex items-center border-y border-[#c38c4d]">
        <div className="marquee-inner flex whitespace-nowrap min-w-full">
          <div className="flex items-center text-sm md:text-base font-black tracking-[0.2em] uppercase" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <span key={i} className="flex items-center">
                LUXURY GROOMING <span className="mx-8 opacity-40">•</span> 
                CLASSIC CRAFTSMANSHIP <span className="mx-8 opacity-40">•</span> 
                MASTER STYLISTS <span className="mx-8 opacity-40">•</span> 
                PREMIUM CARE <span className="mx-8 opacity-40">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── 2. Giant Background Text ── */}
      <div className="absolute top-[20%] left-[-5%] w-[110%] pointer-events-none z-0 opacity-[0.03] overflow-hidden">
        <h1 
          className="bg-giant-text text-[15vw] font-black leading-none whitespace-nowrap text-white"
          style={{ fontFamily: "'Archivo Black', sans-serif" }}
        >
          EXCELLENCE
        </h1>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center mb-16 md:mb-24 text-center content-trigger">
          <h4 className="fade-up text-[#E4A861] text-xs font-bold tracking-[0.3em] uppercase mb-4">
            About Hairbar
          </h4>
          <h2 
            className="fade-up text-4xl md:text-5xl lg:text-6xl text-white font-light"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            The Destination for <span className="italic text-[#E4A861] font-medium">Gentlemen.</span>
          </h2>
          <div className="fade-up w-16 h-[1px] bg-[#E4A861]/40 mt-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center img-trigger content-trigger">
          
          {/* Left Column - Typography & Link */}
          <div className="order-2 lg:order-1 flex flex-col justify-center max-w-xl">
            <h3 
              className="fade-up text-5xl md:text-7xl lg:text-8xl font-black mb-2 text-white leading-[0.9]"
              style={{ fontFamily: "'Archivo Black', sans-serif" }}
            >
              CRAFTING<br />LEGACIES
            </h3>
            
            <p className="fade-up text-gray-400 text-sm md:text-base leading-relaxed mb-10 mt-8">
              We are not just a salon. We are an institution of style, built on the timeless traditions of classic grooming and elevated by modern artistry. Step into a world where every detail is tailored to your confidence.
            </p>

            <div className="fade-up">
              <Link to="/about" className="group inline-flex items-center gap-6">
                <div className="relative overflow-hidden w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#E4A861] transition-colors duration-500">
                  <div className="absolute inset-0 bg-[#E4A861] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                  <svg className="w-5 h-5 text-white group-hover:text-black relative z-10 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
                <span className="text-xs tracking-[0.2em] font-bold uppercase text-white group-hover:text-[#E4A861] transition-colors duration-500">
                  Discover Our Story
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column - Asymmetric Images & Badge */}
          <div className="order-1 lg:order-2 relative h-[500px] md:h-[600px] w-full">
            
            {/* Main Image */}
            <div className="absolute top-0 right-0 w-[80%] h-[85%] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=800" 
                alt="Barber styling" 
                className="img-parallax w-full h-full object-cover grayscale opacity-80"
              />
              <div className="absolute inset-0 border border-white/10 m-4 pointer-events-none"></div>
            </div>

            {/* Overlapping Secondary Image */}
            <div className="absolute bottom-0 left-0 w-[55%] h-[50%] overflow-hidden shadow-2xl border-4 border-[#080808]">
              <img 
                src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=600" 
                alt="Barber tools" 
                className="img-parallax w-full h-full object-cover grayscale brightness-75"
              />
            </div>

            {/* Rotating SVG Badge */}
            <div className="absolute top-1/4 -left-12 w-32 h-32 md:w-40 md:h-40 z-20 hidden md:block">
              <div className="rotating-badge w-full h-full text-[#E4A861]">
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                  <path id="circlePath2" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                  <text className="text-[11px] font-black tracking-[0.2em] uppercase fill-current" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                    <textPath href="#circlePath2">
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
