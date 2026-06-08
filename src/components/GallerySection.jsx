import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const galleryItems = [
  {
    id: "01",
    title: "Classic Pompadour",
    category: "HAIRCUT",
    stylist: "Alexander",
    desc: "A timeless masterpiece featuring sharp tapered sides and a high-volume top, sculpted to perfection using traditional pomade.",
    img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=800",
    tip: "Best styled with a round brush, blow dryer, and oil-based pomade for high shine."
  },
  {
    id: "02",
    title: "Modern Textured Crop",
    category: "TEXTURIZING",
    stylist: "Elias",
    desc: "A highly textured cut with a blunt fringe and high skin fade. Designed for movement and effortless styling.",
    img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800",
    tip: "Apply texture powder or matte clay to dry hair to define individual strands."
  },
  {
    id: "03",
    title: "Executive Slick Back",
    category: "STYLING",
    stylist: "Alexander",
    desc: "A sophisticated contour cut that emphasizes structure. Features a clean side part and low taper fade.",
    img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800",
    tip: "Use a styling comb and styling cream for a neat, touchable hold."
  },
  {
    id: "04",
    title: "Royal Beard Sculpt",
    category: "BEARD ARTISTRY",
    stylist: "Marcus",
    desc: "Detailed beard sculpting featuring razor-sharp cheek lines, a natural faded transition, and deep conditioning treatment.",
    img: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=800",
    tip: "Apply two drops of premium beard oil daily to keep skin hydrated and beard soft."
  },
  {
    id: "05",
    title: "Low Fade & Taper",
    category: "FADE DESIGNS",
    stylist: "Julian",
    desc: "A seamless transition from skin to hair starting at the lower temple, creating a modern clean-cut silhouette.",
    img: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&q=80&w=800",
    tip: "Wash and condition regularly to maintain skin health around the fade lines."
  },
  {
    id: "06",
    title: "Vibrant Platinum Crop",
    category: "HAIR COLOR",
    stylist: "Julian",
    desc: "A bold platinum blonde color melt combined with a textured taper. Hand-painted tones for high contrast.",
    img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=800",
    tip: "Use purple shampoo once a week to keep the platinum bright and free of brassy tones."
  },
  {
    id: "07",
    title: "Natural Curls Shape",
    category: "TEXTURE SHAPING",
    stylist: "Elias",
    desc: "A custom cut designed to define natural curl patterns, giving shape, volume, and lightweight control.",
    img: "https://images.unsplash.com/photo-1520698144208-8e6bfaf73541?auto=format&fit=crop&q=80&w=800",
    tip: "Apply curl defining cream on damp hair and diffuse on low heat."
  },
  {
    id: "08",
    title: "Sovereign Hot Shave",
    category: "SHAVING",
    stylist: "Marcus",
    desc: "A traditional straight razor shave accompanied by therapeutic essential oils and a multi-step hot towel treatment.",
    img: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&q=80&w=800",
    tip: "Follow with a cold water rinse and alcohol-free aftershave balm to soothe skin."
  }
];

export default function GallerySection() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const followerRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [cursorText, setCursorText] = useState("DRAG");
  const dragStart = useRef(0);
  const scrollStart = useRef(0);
  const isMoved = useRef(false);

  // Recalculate 3D coverflow transforms based on horizontal scroll position
  const update3DTransforms = () => {
    const track = trackRef.current;
    if (!track) return;

    const trackCenter = track.offsetWidth / 2;
    const cards = track.querySelectorAll(".gallery-card");
    const isMobile = window.innerWidth < 768;

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const trackRect = track.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2 - trackRect.left;
      
      const distance = cardCenter - trackCenter;
      const maxDistance = track.offsetWidth * 0.65;
      
      // Normalized distance (-1 to 1)
      const progress = Math.min(Math.max(distance / maxDistance, -1), 1);
      const absProgress = Math.abs(progress);

      const scale = isMobile ? (1 - absProgress * 0.08) : (1 - absProgress * 0.18);
      const rotateY = isMobile ? 0 : (progress * -22);
      const opacity = isMobile ? (1 - absProgress * 0.35) : (1 - absProgress * 0.65);
      const blur = isMobile ? 0 : (absProgress * 4);
      const translateZ = isMobile ? 0 : (absProgress * -120);

      gsap.set(card, {
        scale: scale,
        rotateY: rotateY,
        opacity: opacity,
        z: translateZ,
        filter: `blur(${blur}px) grayscale(${isMobile ? 0 : absProgress * 80}%)`,
        transformPerspective: 1000,
        overwrite: "auto"
      });
    });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      track.addEventListener("scroll", update3DTransforms);
      // Run update after initial layout render
      setTimeout(update3DTransforms, 150);
    }
    window.addEventListener("resize", update3DTransforms);
    return () => {
      if (track) track.removeEventListener("scroll", update3DTransforms);
      window.removeEventListener("resize", update3DTransforms);
    };
  }, []);

  useGSAP(() => {
    // 1. Top laser gold border transition (expands outwards from center)
    gsap.fromTo(".gallery-gold-divider",
      { width: "0%" },
      {
        width: "100%",
        duration: 1.8,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 95%",
        }
      }
    );

    // 2. Heading title letters/lines stagger 3D reveal
    gsap.fromTo(".gallery-fade-up",
      { y: 60, opacity: 0, rotateX: -30 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".gallery-heading-trigger",
          start: "top 85%",
        }
      }
    );

    // 3. Reveal horizontal carousel wrapper on scroll
    gsap.fromTo(".gallery-carousel-wrapper",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".gallery-carousel-wrapper",
          start: "top 85%",
        },
        onComplete: update3DTransforms
      }
    );
  }, { scope: sectionRef });

  // Mouse drag functionality for carousel
  const handleMouseDown = (e) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    setCursorText("SWIPE");
    dragStart.current = e.pageX - trackRef.current.offsetLeft;
    scrollStart.current = trackRef.current.scrollLeft;
    isMoved.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - dragStart.current) * 1.5; // multiplier speeds up drag
    if (Math.abs(walk) > 5) {
      isMoved.current = true;
    }
    trackRef.current.scrollLeft = scrollStart.current - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setCursorText("DRAG");
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setCursorText("DRAG");
  };

  const handleCardClick = (item) => {
    if (!isMoved.current) {
      setSelectedItem(item);
    }
  };

  // Custom Cursor follow handler
  const handleMouseMoveContainer = (e) => {
    if (!followerRef.current) return;
    gsap.to(followerRef.current, {
      x: e.clientX,
      y: e.clientY,
      opacity: 1,
      scale: 1,
      duration: 0.2,
      ease: "power2.out"
    });
  };

  const handleMouseEnterContainer = () => {
    if (followerRef.current) {
      gsap.to(followerRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.2
      });
    }
  };

  const handleMouseLeaveContainer = () => {
    if (followerRef.current) {
      gsap.to(followerRef.current, {
        opacity: 0,
        scale: 0.1,
        duration: 0.2
      });
    }
  };

  // Click Navigation Helpers
  const handlePrev = () => {
    if (trackRef.current) {
      const cardWidth = trackRef.current.querySelector(".gallery-card")?.offsetWidth || 300;
      trackRef.current.scrollBy({ left: -cardWidth - 24, behavior: "smooth" }); // 24 is gap
    }
  };

  const handleNext = () => {
    if (trackRef.current) {
      const cardWidth = trackRef.current.querySelector(".gallery-card")?.offsetWidth || 300;
      trackRef.current.scrollBy({ left: cardWidth + 24, behavior: "smooth" }); // 24 is gap
    }
  };

  return (
    <section 
      ref={sectionRef} 
      onMouseMove={handleMouseMoveContainer}
      onMouseEnter={handleMouseEnterContainer}
      onMouseLeave={handleMouseLeaveContainer}
      className="relative bg-[#050505] w-full pt-8 pb-0 overflow-hidden select-none group/gallery"
    >
      {/* ── TOP BORDER SHINE TRANSITION (TIGHT SPACING) ── */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E4A861]/40 to-transparent flex justify-center items-center">
        <div className="gallery-gold-divider absolute w-0 h-[1.5px] bg-[#E4A861] shadow-[0_0_12px_#E4A861]"></div>
      </div>

      {/* Background ambient glow */}
      <div className="absolute top-[30%] right-[-10%] w-[60%] h-[60%] bg-[#E4A861] opacity-[0.015] blur-[150px] pointer-events-none rounded-full z-0"></div>

      {/* ── CUSTOM CURSOR FOLLOWER RING ── */}
      <div 
        ref={followerRef}
        className="fixed top-0 left-0 w-16 h-16 rounded-full border border-[#E4A861] pointer-events-none z-50 flex items-center justify-center mix-blend-difference hidden lg:flex opacity-0 -translate-x-1/2 -translate-y-1/2 scale-100"
        style={{ transform: 'translate3d(-50%, -50%, 0)' }}
      >
        <span className="text-[9px] tracking-[0.15em] font-archivo font-bold text-[#E4A861] uppercase select-none">
          {cursorText}
        </span>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        
        {/* ── HEADING ── */}
        <div className="text-center mb-8 px-4 max-w-4xl gallery-heading-trigger">
          <div className="flex items-center justify-center gap-4 mb-4 overflow-hidden">
            <div className="w-12 h-[1px] bg-[#E4A861]/40"></div>
            <h4 className="gallery-fade-up shiny-gold-text text-xs font-bold tracking-[0.4em] uppercase">
              The Masterpieces
            </h4>
            <div className="w-12 h-[1px] bg-[#E4A861]/40"></div>
          </div>
          
          <div className="overflow-hidden mb-8">
            <h2 className="gallery-fade-up text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.95] text-white font-black font-archivo uppercase tracking-tighter">
              Signature <br />
              <span className="shiny-gold-text">Gallery</span>
            </h2>
          </div>

          <p className="gallery-fade-up text-gray-400 text-xs md:text-sm leading-relaxed font-light max-w-lg mx-auto">
            Drag, swipe, or click to explore our premium collection of cuts, shapes, and beard artistry. Crafted by masters.
          </p>
        </div>

        {/* ── CAROUSEL WRAPPER ── */}
        <div className="gallery-carousel-wrapper w-full relative overflow-visible py-4 mb-8">
          
          {/* Navigation Controls */}
          <button 
            onClick={handlePrev}
            onMouseEnter={() => {
              setCursorText("");
              if (followerRef.current) gsap.to(followerRef.current, { opacity: 0, scale: 0.1 });
            }}
            onMouseLeave={() => {
              setCursorText("DRAG");
              if (followerRef.current) gsap.to(followerRef.current, { opacity: 1, scale: 1 });
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 rounded-full border border-[#E4A861]/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-[#E4A861]/70 hover:border-[#E4A861] hover:text-white transition-all duration-500 group/btn active:scale-95 cursor-pointer"
          >
            <svg className="w-4 h-4 transform group-hover/btn:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          <button 
            onClick={handleNext}
            onMouseEnter={() => {
              setCursorText("");
              if (followerRef.current) gsap.to(followerRef.current, { opacity: 0, scale: 0.1 });
            }}
            onMouseLeave={() => {
              setCursorText("DRAG");
              if (followerRef.current) gsap.to(followerRef.current, { opacity: 1, scale: 1 });
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 rounded-full border border-[#E4A861]/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-[#E4A861]/70 hover:border-[#E4A861] hover:text-white transition-all duration-500 group/btn active:scale-95 cursor-pointer"
          >
            <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          {/* Interactive Drag Track */}
          <div 
            ref={trackRef}
            className="gallery-carousel-track flex gap-6 md:gap-10 overflow-x-scroll scrollbar-none snap-x snap-mandatory py-10 px-[20vw] md:px-[35vw] cursor-none active:cursor-none select-none w-full scroll-smooth"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
          >
            {galleryItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleCardClick(item)}
                onMouseEnter={() => setCursorText("VIEW")}
                onMouseLeave={() => setCursorText("DRAG")}
                className="gallery-card flex-none w-[270px] md:w-[350px] aspect-[3/4] relative overflow-hidden group snap-center bg-zinc-950 border border-white/10 select-none shadow-[0_15px_40px_rgba(0,0,0,0.8)]"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Background Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                />
                
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Gold outline border on hover */}
                <div className="absolute inset-0 border border-[#E4A861]/0 group-hover:border-[#E4A861]/30 m-3 transition-colors duration-500 pointer-events-none"></div>

                {/* Floating Info */}
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end translate-y-3 group-hover:translate-y-0 transition-transform duration-500 pointer-events-none">
                  <span className="shiny-gold-text text-[10px] tracking-[0.2em] font-bold uppercase mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-xl md:text-2xl font-archivo text-white uppercase leading-none">
                    {item.title}
                  </h4>
                  <div className="w-8 h-[1px] bg-[#E4A861] mt-3 mb-1 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></div>
                  <p className="text-gray-400 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed">
                    Stylist: {item.stylist}
                  </p>
                </div>
                
                {/* Index tag */}
                <div className="absolute top-6 right-6 text-[10px] text-white/30 font-archivo group-hover:text-[#E4A861]/70 transition-colors duration-500">
                  {item.id}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ── BOTTOM CTA ── */}
        <div 
          className="w-full py-12 flex justify-center bg-transparent relative z-10"
          onMouseEnter={() => {
            setCursorText("");
            if (followerRef.current) gsap.to(followerRef.current, { opacity: 0, scale: 0.1 });
          }}
          onMouseLeave={() => {
            setCursorText("DRAG");
            if (followerRef.current) gsap.to(followerRef.current, { opacity: 1, scale: 1 });
          }}
        >
          <Link to="/gallery">
            <button className="relative overflow-hidden group bg-transparent border border-[#E4A861]/40 px-12 py-5 text-[10px] tracking-[0.3em] uppercase font-bold transition-all duration-500 cursor-pointer">
              <span className="relative z-10 text-[#E4A861] group-hover:text-black transition-colors duration-500">Explore Full Portfolio</span>
              <div className="absolute inset-0 bg-[#E4A861] transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></div>
            </button>
          </Link>
        </div>

      </div>

      {/* ── CINEMATIC LIGHTBOX MODAL ── */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-xl transition-all duration-300">
          
          {/* Close Click Overlay */}
          <div 
            className="absolute inset-0 bg-transparent cursor-pointer" 
            onClick={() => setSelectedItem(null)}
          ></div>

          {/* Close Button */}
          <button 
            onClick={() => setSelectedItem(null)}
            onMouseEnter={() => {
              setCursorText("");
              if (followerRef.current) gsap.to(followerRef.current, { opacity: 0, scale: 0.1 });
            }}
            onMouseLeave={() => {
              setCursorText("DRAG");
            }}
            className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/10 bg-black/40 text-white flex items-center justify-center hover:border-[#E4A861] hover:text-[#E4A861] transition-all duration-300 z-10 active:scale-95 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          {/* Modal Container */}
          <div 
            className="relative bg-[#080808] border border-white/10 w-full max-w-5xl aspect-auto md:aspect-[16/9] flex flex-col md:flex-row z-10 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
            onMouseEnter={() => {
              setCursorText("");
              if (followerRef.current) gsap.to(followerRef.current, { opacity: 0, scale: 0.1 });
            }}
            onMouseLeave={() => {
              setCursorText("DRAG");
            }}
          >
            {/* Ambient Background Glow inside Modal */}
            <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#E4A861] opacity-[0.03] blur-[100px] pointer-events-none rounded-full"></div>
            
            {/* Left Image Side */}
            <div className="w-full md:w-[55%] h-[280px] md:h-full relative overflow-hidden bg-black flex-shrink-0">
              <img 
                src={selectedItem.img} 
                alt={selectedItem.title} 
                className="w-full h-full object-cover animate-video-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#080808] hidden md:block"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent md:hidden"></div>
              
              <div className="absolute top-6 left-6 px-3 py-1 bg-black/60 backdrop-blur-sm border border-[#E4A861]/30 text-[9px] tracking-[0.2em] font-archivo font-bold text-[#E4A861] uppercase">
                {selectedItem.category}
              </div>
            </div>

            {/* Right Information Side */}
            <div className="w-full md:w-[45%] h-full p-8 md:p-12 lg:p-14 flex flex-col justify-between overflow-y-auto bg-transparent relative z-10">
              <div>
                <span className="text-[10px] tracking-[0.3em] font-bold text-gray-500 uppercase block mb-1">
                  HAIRBAR MASTERPIECE
                </span>
                
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-archivo text-white uppercase leading-none mb-3">
                  {selectedItem.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-6 text-xs text-gray-400">
                  <span>Stylist:</span>
                  <span className="text-[#E4A861] font-bold uppercase tracking-wider">{selectedItem.stylist}</span>
                </div>

                <div className="w-16 h-[1px] bg-[#E4A861]/40 mb-8"></div>

                <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light mb-8">
                  {selectedItem.desc}
                </p>

                {/* Stylist Tip */}
                <div className="p-4 bg-zinc-950 border-l-2 border-[#E4A861] rounded-none">
                  <span className="block text-[9px] font-bold text-[#E4A861] tracking-wider uppercase mb-1">
                    Signature Styling Tip
                  </span>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">
                    {selectedItem.tip}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to="/booking" className="flex-1" onClick={() => setSelectedItem(null)}>
                  <button className="w-full relative overflow-hidden group bg-[#E4A861] hover:bg-white text-black font-archivo font-bold py-4 text-[10px] tracking-[0.2em] uppercase transition-colors duration-500 cursor-pointer">
                    Book this style
                  </button>
                </Link>
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="px-6 py-4 border border-white/10 hover:border-white text-white hover:text-[#E4A861] text-[10px] tracking-[0.2em] uppercase transition-colors duration-500 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
