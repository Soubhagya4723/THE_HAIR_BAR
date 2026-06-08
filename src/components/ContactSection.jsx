import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function ContactSection() {
  return (
    <footer className="bg-[#050505] text-white pt-24 border-t border-white/5 relative overflow-hidden">

      {/* ── Contact CTA Banner ────────────────────────────────────────── */}
      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20 mb-24 text-center">
        <h4 className="shiny-gold-text text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-4">
          Get In Touch
        </h4>
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-[1.1] font-light font-cormorant">
          We'd Love To <span className="italic shiny-gold-text font-medium">Hear From You.</span>
        </h2>
        <Link to="/contact">
          <button
            className="mt-6 border border-[#E4A861] bg-[#E4A861] text-black px-10 py-4 text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-transparent hover:text-[#E4A861] transition-all duration-300"
          >
            Contact Us
          </button>
        </Link>
      </div>

      {/* ── Divider ──────────────────────────────────────────────────────── */}
      <div className="w-full h-[1px] bg-[#E4A861]/15 mb-20"></div>

      {/* ── Main Footer Area ──────────────── */}
      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">

          {/* Logo & About */}
          <div className="lg:col-span-2 pr-4">
            <div className="mb-6">
              <Logo variant="horizontal" />
            </div>
            <p className="text-gray-500 text-xs leading-relaxed mb-6">
              Elevating your style with precision, passion, and a legacy of excellence. Experience premium grooming at its finest.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {['Ig', 'Fb', 'Yt', 'X'].map((social, idx) => (
                <a key={idx} href="#" className="w-8 h-8 rounded-full border border-[#E4A861]/25 flex items-center justify-center text-[10px] text-gray-400 hover:text-black hover:bg-[#E4A861] hover:border-[#E4A861] transition-all">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-[#E4A861] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Quick Links</h5>
            <ul className="flex flex-col gap-3">
              <li><Link to="/" className="text-gray-400 text-xs hover:text-[#E4A861] transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 text-xs hover:text-[#E4A861] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 text-xs hover:text-[#E4A861] transition-colors">Services</Link></li>
              <li><Link to="/stylists" className="text-gray-400 text-xs hover:text-[#E4A861] transition-colors">Stylists</Link></li>
              <li><Link to="/gallery" className="text-gray-400 text-xs hover:text-[#E4A861] transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-400 text-xs hover:text-[#E4A861] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h5 className="text-[#E4A861] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Our Services</h5>
            <ul className="flex flex-col gap-3">
              {['Haircut', 'Beard Trim', 'Shaving', 'Hair Color', 'Hair Spa', 'Packages'].map(service => (
                <li key={service}>
                  <Link to="/services" className="text-gray-400 text-xs hover:text-[#E4A861] transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info (Compact) */}
          <div className="lg:col-span-1">
            <h5 className="text-[#E4A861] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Contact Info</h5>
            <ul className="flex flex-col gap-4 text-xs text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-[#E4A861] mt-0.5">📍</span>
                <span>129 Winston St, New York,<br />NY 10025, USA</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#E4A861]">📞</span>
                <span>+1 (212) 555-0194</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#E4A861]">✉️</span>
                <span>hello@hairbar.com</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#E4A861] mt-0.5">⏱️</span>
                <span>Mon - Sat: 9AM - 8PM<br />Sun: 10AM - 6PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h5 className="text-[#E4A861] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Newsletter</h5>
            <p className="text-gray-500 text-xs leading-relaxed mb-4">
              Subscribe to get updates, exclusive offers, and grooming tips.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-[#050505] border border-[#E4A861]/20 text-white px-4 py-3 text-xs focus:outline-none focus:border-[#E4A861] transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-[#E4A861] text-black px-4 flex items-center justify-center hover:bg-[#FAF6F0] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* ── Footer Bottom Copyright ────────────────────────────────────── */}
      <div className="w-full bg-[#020202] py-6 border-t border-[#E4A861]/10">
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-[10px] tracking-wider uppercase">
            © 2026 Hairbar. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-gray-600 text-[10px] tracking-wider uppercase">
            <a href="#" className="hover:text-[#E4A861] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#E4A861] transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
