import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import MenuSection from "./MenuSection";

function Navbar() {
  const navLinks = [
    { label: "About", path: "/About" },
    { label: "Projects", path: "/#projects" },
    { label: "Skills", path: "/#skills" },
    { label: "Experience", path: "/#experience" },
    { label: "Contact", path: "/#contact" }
  ];

  return (
    <nav className="fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-[92%] md:max-w-max">
      {/* Floating Pill Container */}
      <div className="bg-black backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/50 rounded-full px-5 md:px-6 py-2.5 md:py-3 flex items-center justify-between md:justify-center gap-4 md:gap-8 transition-all duration-300">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 group">
          <span className="text-xl md:text-2xl font-serif font-bold text-white tracking-wide">Pratik</span>
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/90 group-hover:scale-125 transition-transform"></span>
        </Link>

        {/* Divider Desktop */}
        <div className="hidden md:block w-px h-6 bg-slate-200"></div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link, index) => (
            <Link 
              key={index} 
              to={link.path}
              className="text-[14px] lg:text-[15px] font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Divider Desktop */}
        <div className="hidden md:block w-px h-6 bg-slate-200"></div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link to="/contact">
            <button className="flex items-center gap-2 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white px-6 py-2.5 rounded-full text-[14px] font-semibold shadow-md hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300">
              Hire Me <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>

        {/* Mobile Menu (Hamburger) */}
        <div className="md:hidden flex items-center">
          <MenuSection />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
