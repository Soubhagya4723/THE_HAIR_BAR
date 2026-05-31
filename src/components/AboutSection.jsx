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
    <section id="about" className="bg-[#080808] text-white py-24 md:py-32 overflow-hidden border-t border-white/5">
      <div className="w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">

        {/* ── 1. Section Header ─────────────────────────────────────── */}
        <div className="mb-24 lg:mb-32">
          <div className="flex items-center gap-4 mb-8">
            <h4 className="text-[#E4A861] text-xs font-bold tracking-[0.3em] uppercase">
              About Us
            </h4>
            <div className="w-12 h-[1px] bg-[#E4A861]"></div>
          </div>

          <h2
            className="text-5xl md:text-7xl lg:text-8xl mb-8 leading-[1.1] text-white font-light"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Our Legacy.<br />
            <span className="italic text-[#E4A861] font-medium">Your Confidence.</span>
          </h2>

          <div className="w-24 h-[1px] bg-[#E4A861]/30 mb-8"></div>

          <p className="text-gray-400 max-w-lg text-sm md:text-base leading-relaxed tracking-wide">
            More than a salon. We are a legacy of craftsmanship, passion, and timeless style. Step into our world and discover what makes our establishment a cut above the rest.
          </p>
        </div>

        <div className="w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 relative z-10 content-trigger">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

            {/* Images Grid (Left) */}
            <div className="lg:col-span-5 relative">
              {/* Main Image */}
              <div className="relative aspect-[4/5] overflow-hidden border border-white/10 group">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800"
                  alt="Salon Interior"
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>

              {/* Since 2023 Badge Overlap */}
              <div className="absolute -bottom-8 -right-8 md:-right-12 border border-[#E4A861]/30 bg-[#0c0c0c] p-6 md:p-10 text-center shadow-2xl z-10 hidden sm:block">
                <span className="block text-[#E4A861] text-3xl md:text-4xl mb-3">✂</span>
                <h3
                  className="text-2xl md:text-3xl font-medium text-white mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Since
                </h3>
                <h4 className="text-[#E4A861] tracking-[0.2em] text-xs font-bold uppercase mt-2">
                  2023
                </h4>
              </div>
            </div>

            {/* Text & Timeline (Right) */}
            <div className="lg:col-span-7 flex flex-col xl:flex-row gap-16 xl:gap-20">
              {/* Text content */}
              <div className="flex-1">
                <h4 className="text-[#E4A861] text-[10px] md:text-xs font-bold tracking-[0.2em] mb-6 uppercase">
                  Our Story
                </h4>
                <h3
                  className="text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Crafting Excellence<br />
                  <span className="italic text-gray-300">Since 2023</span>
                </h3>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                  Founded on the belief that grooming is an art, we started our journey in 2023 with a simple mission: to deliver unmatched quality and an elevated experience for every client.
                </p>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10">
                  Today, we stand as a symbol of trust, luxury, and personalized care, where tradition meets modern techniques. Our master stylists are dedicated to bringing out the best in you.
                </p>

                <button className="border border-[#E4A861]/50 px-8 py-4 text-[10px] md:text-xs tracking-[0.2em] uppercase hover:bg-[#E4A861] hover:text-black transition-all duration-300 text-[#E4A861]">
                  Discover Our Journey
                </button>
              </div>

              {/* Vertical Timeline */}
              <div className="hidden md:flex flex-col relative pl-10 xl:pl-12 w-full xl:w-[280px]">
                {/* Vertical line connecting timeline nodes */}
                <div className="absolute top-2 bottom-6 left-[3px] w-[1px] bg-[#E4A861]/20"></div>

                {/* Node 1: 2023 */}
                <div className="relative mb-14 group">
                  <div className="absolute top-1.5 -left-[10px] xl:-left-[12px] w-[7px] h-[7px] rounded-full bg-[#E4A861] ring-4 ring-[#111] group-hover:scale-150 transition-transform"></div>
                  <h5
                    className="text-[#E4A861] text-2xl md:text-3xl mb-2 leading-none"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    2023
                  </h5>
                  <p className="text-white text-[11px] tracking-wider uppercase font-bold mb-2">The Beginning</p>
                  <p className="text-gray-500 text-xs leading-relaxed">Our first shop opened with a passion for classic cuts.</p>
                </div>

                {/* Node 2: 2024 */}
                <div className="relative mb-14 group">
                  <div className="absolute top-1.5 -left-[10px] xl:-left-[12px] w-[7px] h-[7px] rounded-full bg-[#E4A861] ring-4 ring-[#111] group-hover:scale-150 transition-transform"></div>
                  <h5
                    className="text-[#E4A861] text-2xl md:text-3xl mb-2 leading-none opacity-60"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    2024
                  </h5>
                  <p className="text-white/80 text-[11px] tracking-wider uppercase font-bold mb-2">Growing Together</p>
                  <p className="text-gray-500 text-xs leading-relaxed">Expanded our team and services, earning strong client trust.</p>
                </div>

                {/* Node 3: 2025 */}
                <div className="relative group">
                  <div className="absolute top-1.5 -left-[10px] xl:-left-[12px] w-[7px] h-[7px] rounded-full bg-[#E4A861] ring-4 ring-[#111] group-hover:scale-150 transition-transform"></div>
                  <h5
                    className="text-[#E4A861] text-2xl md:text-3xl mb-2 leading-none opacity-40"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    2025+
                  </h5>
                  <p className="text-white/60 text-[11px] tracking-wider uppercase font-bold mb-2">Luxury Redefined</p>
                  <p className="text-gray-500 text-xs leading-relaxed">Introducing premium wellness services and exclusive products.</p>
                </div>
              </div>
            </div>

          </div>

          {/* ── 3. Founder's Note & Vision ────────────────────────────── */}
          <div className="bg-[#0c0c0c] border border-white/5 p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-16 items-center mb-32 lg:mb-40">

            {/* Founder Image */}
            <div className="lg:w-[30%] w-full relative group">
              <div className="aspect-[3/4] overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=1000"
                  alt="Stylist working"
                  className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-black/40 border border-white/10 p-4">
                <h4
                  className="italic text-2xl text-white mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Alexander
                </h4>
                <p className="text-[9px] tracking-[0.2em] text-[#E4A861] uppercase">Founder & Master Stylist</p>
              </div>
            </div>

            {/* Note Content */}
            <div className="lg:w-[35%] w-full flex flex-col justify-center">
              <h4 className="text-[#E4A861] text-[10px] md:text-xs font-bold tracking-[0.2em] mb-4 uppercase">
                Founder's Note
              </h4>
              <h3
                className="text-3xl md:text-4xl text-white mb-6 leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                A Passion For Craftsmanship<br />
                <span className="italic text-gray-400">A Commitment to You</span>
              </h3>

              <div className="flex gap-4 mb-6">
                <span className="text-[#E4A861] text-6xl font-serif leading-none h-10 block">"</span>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed italic mt-4">
                  Every haircut, every treatment, and every detail we create is a reflection of our passion. Our goal is not just to make you look good — but to make you feel unstoppable when you walk out our doors.
                </p>
              </div>

              <h4
                className="italic text-3xl text-white mt-4 opacity-80"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Alexander
              </h4>
            </div>

            {/* Divider on LG screens */}
            <div className="hidden lg:block w-[1px] h-64 bg-white/5 mx-2"></div>

            {/* Vision/Mission/Promise */}
            <div className="lg:w-[30%] w-full flex flex-col gap-10">
              {/* Item 1 */}
              <div className="flex gap-6 items-start group">
                <div className="text-[#E4A861] text-2xl mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </div>
                <div>
                  <h5 className="text-white text-[11px] font-bold tracking-[0.2em] uppercase mb-2">Vision</h5>
                  <p className="text-gray-500 text-xs leading-relaxed">To be the city's most trusted and sought-after luxury grooming brand.</p>
                </div>
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

          {/* ── 4. Core Values ────────────────────────────────────────── */}
          <div>
            <h4 className="text-[#E4A861] text-[10px] md:text-xs font-bold tracking-[0.2em] mb-12 uppercase text-center">
              Our Core Values
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

              {/* Value 1 */}
              <div className="border border-white/5 bg-[#0c0c0c] p-8 flex flex-col md:flex-row gap-6 hover:border-[#E4A861]/40 transition-colors duration-500 group">
                <div className="text-[#E4A861] mt-1 opacity-80 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                  </svg>
                </div>
                <div>
                  <h5 className="text-white text-sm tracking-wider uppercase font-bold mb-3">Excellence</h5>
                  <p className="text-gray-500 text-xs leading-relaxed">We strive for absolute perfection in every single service.</p>
                </div>
              </div>

              {/* Value 2 */}
              <div className="border border-white/5 bg-[#0c0c0c] p-8 flex flex-col md:flex-row gap-6 hover:border-[#E4A861]/40 transition-colors duration-500 group">
                <div className="text-[#E4A861] mt-1 opacity-80 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                  </svg>
                </div>
                <div>
                  <h5 className="text-white text-sm tracking-wider uppercase font-bold mb-3">Trust</h5>
                  <p className="text-gray-500 text-xs leading-relaxed">Built on honesty, profound transparency & deep respect.</p>
                </div>
              </div>

              {/* Value 3 */}
              <div className="border border-white/5 bg-[#0c0c0c] p-8 flex flex-col md:flex-row gap-6 hover:border-[#E4A861]/40 transition-colors duration-500 group">
                <div className="text-[#E4A861] mt-1 opacity-80 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"></path>
                  </svg>
                </div>
                <div>
                  <h5 className="text-white text-sm tracking-wider uppercase font-bold mb-3">Craftsmanship</h5>
                  <p className="text-gray-500 text-xs leading-relaxed">Seamlessly blending tradition with modern techniques.</p>
                </div>
              </div>

              {/* Value 4 */}
              <div className="border border-white/5 bg-[#0c0c0c] p-8 flex flex-col md:flex-row gap-6 hover:border-[#E4A861]/40 transition-colors duration-500 group">
                <div className="text-[#E4A861] mt-1 opacity-80 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <div>
                  <h5 className="text-white text-sm tracking-wider uppercase font-bold mb-3">Client First</h5>
                  <p className="text-gray-500 text-xs leading-relaxed">Your satisfaction and confidence is our ultimate priority.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
    </section>
  );
}
