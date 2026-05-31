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

    // ── 2. Horizontal Scroll for Services ──
    const cards = gsap.utils.toArray(".svc-horiz-card");
    
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

  }, { scope: sectionRef });

  const services = [
    {
      id: "01",
      title: "Signature Cut",
      desc: "Tailored precision cuts designed to perfectly complement your features and lifestyle. We blend classic techniques with modern trends.",
      img: "https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "02",
      title: "Royal Shave",
      desc: "A timeless hot towel straight razor shave for the ultimate luxurious relaxation. Smooth, precise, and incredibly soothing.",
      img: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "03",
      title: "Beard Sculpt",
      desc: "Detailed grooming, fading, and line-ups to keep your facial hair impeccably sharp. Masterful detailing for a rugged yet clean look.",
      img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "04",
      title: "Color & Tone",
      desc: "Subtle grey blending to striking color transformations, executed with premium products to keep your hair healthy.",
      img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="bg-[#080808] text-white pt-8 pb-24 md:pb-32 overflow-hidden">
      
      {/* ── 1. The Gap Transition & Big Heading ── */}
      <div className="w-full flex justify-center mb-16 md:mb-24 px-4">
        <h2 
          ref={textFillRef}
          className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase text-center leading-none"
          style={{ 
            fontFamily: "'Archivo Black', sans-serif",
            // The text is an outline by default
            WebkitTextStroke: "2px rgba(255, 255, 255, 0.1)",
            color: "transparent",
            // We'll fill it with gold using background-clip
            backgroundImage: "linear-gradient(to right, #E4A861 50%, transparent 50%)",
            backgroundSize: "200% 100%",
            backgroundPositionX: "100%", // Starts empty (transparent side)
            WebkitBackgroundClip: "text",
            backgroundClip: "text"
          }}
        >
          EXPERTISE
        </h2>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 mb-16">
        <div className="flex items-center gap-4 mb-6">
          <h4 className="text-[#E4A861] text-xs font-bold tracking-[0.3em] uppercase">
            Our Services
          </h4>
          <div className="w-12 h-[1px] bg-[#E4A861]"></div>
        </div>
        <p className="text-gray-400 max-w-xl text-sm md:text-base leading-relaxed tracking-wide">
          Experience our premium range of grooming services. Scroll down to journey through our tailored offerings.
        </p>
      </div>

      {/* ── 2. Horizontal Scroll Section ── */}
      <div ref={scrollContainerRef} className="flex h-[70vh] md:h-[80vh] w-full flex-nowrap overflow-hidden">
        {services.map((svc) => (
          // Each card takes up 100vw or a large portion
          <div key={svc.id} className="svc-horiz-card flex-none w-[90vw] md:w-[70vw] lg:w-[60vw] h-full px-4 md:px-8">
            <div className="relative w-full h-full overflow-hidden group">
              
              {/* Image */}
              <img 
                src={svc.img} 
                alt={svc.title} 
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700"></div>

              {/* Text Content */}
              <div className="absolute inset-0 p-8 md:p-12 lg:p-16 flex flex-col justify-between">
                
                {/* Large Number Outline */}
                <h3 
                  className="text-6xl md:text-8xl font-black text-transparent stroke-white"
                  style={{ 
                    fontFamily: "'Archivo Black', sans-serif",
                    WebkitTextStroke: "1px rgba(228, 168, 97, 0.5)",
                  }}
                >
                  {svc.id}
                </h3>
                
                {/* Title and Description */}
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="w-12 h-[2px] bg-[#E4A861] mb-6 group-hover:w-24 transition-all duration-700 ease-out"></div>
                  <h3 
                    className="text-4xl md:text-5xl lg:text-6xl text-white mb-6" 
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {svc.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    {svc.desc}
                  </p>
                </div>

              </div>
            </div>
          </div>
        ))}

        {/* Final "View All" Card */}
        <div className="svc-horiz-card flex-none w-[90vw] md:w-[40vw] h-full px-4 md:px-8 flex items-center justify-center">
          <div className="text-center">
            <h3 
              className="text-4xl md:text-5xl text-white mb-8" 
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Discover More
            </h3>
            <Link to="/services">
              <button className="border border-[#E4A861]/50 px-10 py-5 text-xs md:text-sm tracking-[0.2em] uppercase hover:bg-[#E4A861] hover:text-black transition-all duration-300 text-[#E4A861]">
                View All Services
              </button>
            </Link>
          </div>
        </div>
        
      </div>

    </section>
  );
}
