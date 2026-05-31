import React, { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // 1. Heading Fade Up
    gsap.fromTo(".svc-head", 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", scrollTrigger: {
          trigger: ".svc-trigger",
          start: "top 80%",
      }}
    );

    // 2. Cards Staggered Reveal
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".svc-cards-trigger",
        start: "top 75%",
      }
    });

    // Reveal the card container (mask)
    tl.fromTo(".svc-card-mask",
      { clipPath: "inset(100% 0 0 0)" },
      { clipPath: "inset(0% 0 0 0)", duration: 1.2, stagger: 0.2, ease: "power4.inOut" }
    );

    // Scale down the image inside while revealing
    tl.fromTo(".svc-card-img",
      { scale: 1.5 },
      { scale: 1, duration: 1.2, stagger: 0.2, ease: "power4.inOut" },
      "<" // start at the same time as the masks
    );

    // 3. Background subtle parallax
    gsap.to(".svc-bg-text", {
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

  }, { scope: sectionRef });

  const services = [
    {
      id: "01",
      title: "Signature Cut",
      desc: "Tailored precision cuts designed to perfectly complement your features and lifestyle.",
      img: "https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "02",
      title: "Royal Shave",
      desc: "A timeless hot towel straight razor shave for the ultimate luxurious relaxation.",
      img: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "03",
      title: "Beard Sculpt",
      desc: "Detailed grooming, fading, and line-ups to keep your facial hair impeccably sharp.",
      img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="relative bg-[#080808] text-white py-24 md:py-32 overflow-hidden border-t border-white/5">
      
      {/* Background Giant Text */}
      <div className="absolute top-[10%] left-0 w-full pointer-events-none z-0 opacity-[0.03] overflow-hidden flex justify-center">
        <h1 
          className="svc-bg-text text-[18vw] font-black leading-none whitespace-nowrap text-white"
          style={{ fontFamily: "'Archivo Black', sans-serif" }}
        >
          MASTERY
        </h1>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-20 svc-trigger">
          <div>
            <div className="flex items-center gap-4 mb-6 svc-head">
              <h4 className="text-[#E4A861] text-xs font-bold tracking-[0.3em] uppercase">
                Our Services
              </h4>
              <div className="w-12 h-[1px] bg-[#E4A861]"></div>
            </div>
            
            <h2 
              className="svc-head text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-white font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              The Art of <br />
              <span className="italic text-[#E4A861] font-medium">Grooming.</span>
            </h2>
          </div>
          
          <div className="svc-head">
            <p className="text-gray-400 max-w-sm text-sm md:text-base leading-relaxed tracking-wide mb-8">
              Experience our premium range of haircuts, styling, and grooming services crafted exclusively for the modern gentleman.
            </p>
            <Link to="/services" className="group inline-flex items-center gap-4">
              <span className="text-[10px] md:text-xs tracking-[0.2em] font-bold uppercase text-[#E4A861] group-hover:text-white transition-colors duration-500">
                View All Services
              </span>
              <div className="w-8 h-[1px] bg-[#E4A861] group-hover:w-16 group-hover:bg-white transition-all duration-500"></div>
            </Link>
          </div>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 svc-cards-trigger">
          {services.map((svc) => (
            <div key={svc.id} className="group relative overflow-hidden h-[450px] md:h-[500px] svc-card-mask border border-white/5">
              
              {/* Card Image */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={svc.img} 
                  alt={svc.title} 
                  className="svc-card-img w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700"></div>
              </div>

              {/* Card Content */}
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
                <div className="flex justify-end overflow-hidden">
                  <h3 
                    className="text-4xl md:text-5xl font-black text-white/20 group-hover:text-[#E4A861]/40 transition-colors duration-500 translate-y-[-20%] group-hover:translate-y-0"
                    style={{ fontFamily: "'Archivo Black', sans-serif" }}
                  >
                    {svc.id}
                  </h3>
                </div>
                
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-0 h-[2px] bg-[#E4A861] mb-6 group-hover:w-12 transition-all duration-700 ease-out"></div>
                  <h3 
                    className="text-3xl md:text-4xl text-white mb-4" 
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {svc.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    {svc.desc}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
