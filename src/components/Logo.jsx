import React from "react";
import logoFull from "../assets/logo_full.png";
import logoHorizontal from "../assets/logo_horizontal.png";
import logoNavbar from "../assets/logo_navbar.png";

export default function Logo({ variant = "full", className = "" }) {
  if (variant === "navbar") {
    return (
      <img 
        src={logoNavbar} 
        alt="The Hair Bar Logo" 
        className={`h-8 sm:h-9 md:h-11 w-auto object-contain block ${className}`}
      />
    );
  }

  if (variant === "horizontal") {
    return (
      <img 
        src={logoHorizontal} 
        alt="The Hair Bar Logo" 
        className={`h-9 sm:h-10 md:h-12 w-auto object-contain block ${className}`}
      />
    );
  }

  // variant === "full"
  return (
    <img 
      src={logoFull} 
      alt="The Hair Bar Logo" 
      className={`w-full max-w-[280px] sm:max-w-[400px] md:max-w-[550px] lg:max-w-[650px] xl:max-w-[700px] h-auto object-contain block ${className}`}
    />
  );
}
