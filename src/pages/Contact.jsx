import React from "react";

export default function Contact() {
  return (
    <footer id="contact" className="bg-[#050505] text-white pt-24 border-t border-white/5 relative overflow-hidden">
      
      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20 mb-24">
        <div className="flex flex-col xl:flex-row gap-16 lg:gap-24">
          
          {/* ── Contact Form (Left) ────────────────────────────────────────── */}
          <div className="flex-1">
            <h4 className="text-[#E4A861] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Get In Touch
            </h4>
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-[1.1] font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              We'd Love To <span className="italic text-[#E4A861] font-medium">Hear From You.</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 max-w-lg">
              Whether you have a question about our services, need help booking an appointment, or just want to drop a line, our team is ready to assist you.
            </p>

            <form className="space-y-6 max-w-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Your Name *" 
                  className="w-full bg-[#0a0a0a] border border-white/10 text-white px-6 py-4 text-xs tracking-wide focus:outline-none focus:border-[#E4A861] transition-colors"
                  required 
                />
                <input 
                  type="email" 
                  placeholder="Your Email *" 
                  className="w-full bg-[#0a0a0a] border border-white/10 text-white px-6 py-4 text-xs tracking-wide focus:outline-none focus:border-[#E4A861] transition-colors"
                  required 
                />
              </div>
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full bg-[#0a0a0a] border border-white/10 text-white px-6 py-4 text-xs tracking-wide focus:outline-none focus:border-[#E4A861] transition-colors"
              />
              <textarea 
                placeholder="Your Message *" 
                rows="5"
                className="w-full bg-[#0a0a0a] border border-white/10 text-white px-6 py-4 text-xs tracking-wide focus:outline-none focus:border-[#E4A861] transition-colors resize-none"
                required
              ></textarea>
              <button 
                type="submit" 
                className="border border-[#E4A861] bg-[#E4A861] text-black px-10 py-4 text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-transparent hover:text-[#E4A861] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* ── Contact Info & Image (Right) ────────────────────────────────── */}
          <div className="xl:w-[40%] flex flex-col justify-between relative">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 relative z-10">
              {/* Box 1 */}
              <div className="bg-[#0a0a0a] border border-white/5 p-8 flex flex-col gap-4">
                <div className="text-[#E4A861]">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <h5 className="text-white text-xs font-bold tracking-widest uppercase mb-2">Location</h5>
                  <p className="text-gray-500 text-sm leading-relaxed">129 Winston St,<br />New York, NY 10025<br />United States</p>
                </div>
              </div>
              
              {/* Box 2 */}
              <div className="bg-[#0a0a0a] border border-white/5 p-8 flex flex-col gap-4">
                <div className="text-[#E4A861]">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <h5 className="text-white text-xs font-bold tracking-widest uppercase mb-2">Working Hours</h5>
                  <p className="text-gray-500 text-sm leading-relaxed">Mon - Sat: 9AM - 8PM<br />Sun: 10AM - 6PM</p>
                </div>
              </div>
            </div>

            {/* Background Decorative Image */}
            <div className="relative w-full h-[300px] xl:h-[350px] overflow-hidden border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?auto=format&fit=crop&q=80&w=1200" 
                alt="Barbershop Details" 
                className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 group-hover:brightness-75 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 flex gap-6">
                <div className="flex flex-col">
                  <span className="text-white text-sm font-bold">Call Us</span>
                  <a href="tel:+12125550194" className="text-[#E4A861] text-lg font-serif italic">+1 (212) 555-0194</a>
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-sm font-bold">Email Us</span>
                  <a href="mailto:hello@hairbar.com" className="text-[#E4A861] text-lg font-serif italic">hello@hairbar.com</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Divider ──────────────────────────────────────────────────────── */}
      <div className="w-full h-[1px] bg-white/5 mb-20"></div>

      {/* ── Main Footer Area (Matches Screenshot EXACTLY) ──────────────── */}
      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
          
          {/* Logo & About */}
          <div className="lg:col-span-2 pr-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 border border-[#E4A861]">
                <span className="font-serif italic text-xl text-[#E4A861]">HB</span>
              </div>
              <div className="flex flex-col">
                <span className="font-black uppercase tracking-[0.15em] leading-none text-lg">HAIRBAR</span>
                <span className="text-[7px] tracking-[0.3em] text-[#E4A861] mt-1 uppercase">Excellence & Tradition</span>
              </div>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed mb-6">
              Elevating your style with precision, passion, and a legacy of excellence. Experience premium grooming at its finest.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {['Ig', 'Fb', 'Yt', 'X'].map((social, idx) => (
                <a key={idx} href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[10px] text-gray-400 hover:text-black hover:bg-[#E4A861] hover:border-[#E4A861] transition-all">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-[#E4A861] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Quick Links</h5>
            <ul className="flex flex-col gap-3">
              {['Home', 'About Us', 'Services', 'Stylists', 'Gallery', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 text-xs hover:text-[#E4A861] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h5 className="text-[#E4A861] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Our Services</h5>
            <ul className="flex flex-col gap-3">
              {['Haircut', 'Beard Trim', 'Shaving', 'Hair Color', 'Hair Spa', 'Packages'].map(service => (
                <li key={service}>
                  <a href="#services" className="text-gray-400 text-xs hover:text-[#E4A861] transition-colors">
                    {service}
                  </a>
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
                <span>129 Winston St, New York,<br/>NY 10025, USA</span>
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
                <span>Mon - Sat: 9AM - 8PM<br/>Sun: 10AM - 6PM</span>
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
                className="w-full bg-[#111] border border-white/10 text-white px-4 py-3 text-xs focus:outline-none focus:border-[#E4A861] transition-colors"
                required
              />
              <button 
                type="submit"
                className="bg-[#E4A861] text-black px-4 flex items-center justify-center hover:bg-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* ── Footer Bottom Copyright ────────────────────────────────────── */}
      <div className="w-full bg-[#020202] py-6 border-t border-white/5">
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
