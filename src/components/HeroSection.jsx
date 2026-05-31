import React from "react";
import Logo from "./Logo";

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="../public/hairbar.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Left Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/45 to-transparent"></div>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="w-full px-6 sm:px-12 md:pl-16 lg:pl-24 pr-6">
          <div className="w-full max-w-5xl flex flex-col items-center md:items-start">
            {/* Unified Logo Component */}
            <Logo variant="full" className="animate-title-reveal" />

          </div>
        </div>
      </div>
    </section>
  );
}