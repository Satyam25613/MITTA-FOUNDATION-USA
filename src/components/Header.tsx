"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/programs", label: "Programs" },
    { href: "/impact", label: "Impact" },
    { href: "/get-involved", label: "Get Involved" },
    { href: "/transparency", label: "Trust" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 px-4 md:px-10 py-5 flex justify-between items-center bg-transparent">
      {/* LOGO */}
      <Link href="/" className="flex items-center group flex-shrink-0">
        <img src="/IMAGES/logo-2.png" alt="Mitta Foundation" className="h-[50px] w-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] contrast-125 group-hover:scale-105 transition-transform" />
      </Link>

      {/* NAVIGATION CENTERED */}
      <nav className="hidden xl:flex items-center gap-6 text-[15px] font-sans font-medium text-[#1d1d1f]">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`hover:text-[#0071e3] transition-colors whitespace-nowrap ${pathname === link.href ? "text-[#0071e3]" : ""}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* RIGHT ACTIONS */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <Link href="https://mittafoundation.org/" target="_blank" rel="noopener noreferrer" className="hidden xl:flex items-center gap-1.5 bg-[#fcfbf9] border border-[#e5e5ea] text-[#1d1d1f] px-4 py-2 rounded-full text-[12px] font-bold tracking-wide hover:bg-[#f5f5f7] transition-all shadow-sm whitespace-nowrap">
          India Operations <ArrowUpRight size={12} className="opacity-70" />
        </Link>
        <Link href="/give" className="bg-[#0071e3] text-white px-5 py-2.5 rounded-full text-[14px] font-semibold flex items-center gap-2 hover:bg-[#0066cc] hover:scale-105 transition-all shadow-md whitespace-nowrap">
          <Heart size={14} className="fill-white" /> Donate Now
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden w-10 h-10 flex items-center justify-center rounded-full border border-[#e5e5ea] bg-white/80 backdrop-blur-sm"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-[#e5e5ea] shadow-lg xl:hidden animate-fade-in">
          <nav className="flex flex-col py-6 px-6 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`py-3 px-4 rounded-[12px] text-[16px] font-medium transition-colors ${pathname === link.href ? "text-[#0071e3] bg-[#0071e3]/5" : "text-[#1d1d1f] hover:bg-[#f5f5f7]"}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://mittafoundation.org/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="py-3 px-4 rounded-[12px] text-[16px] font-medium text-[#1d1d1f] hover:bg-[#f5f5f7] flex items-center gap-2"
            >
              India Operations <ArrowUpRight size={14} className="opacity-70" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
