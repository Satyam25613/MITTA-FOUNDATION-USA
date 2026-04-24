"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Heart, ArrowUpRight } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] px-4 md:px-10 py-5 flex justify-between items-center transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.08)]" : "bg-transparent"}`}>
      {/* LOGO */}
      <Link href="/" className="flex flex-col items-start justify-center group">
        <div className="flex items-center group-hover:scale-105 transition-transform">
          <img src="/IMAGES/logo-2.png" alt="Mitta Foundation" className="h-[60px] w-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] contrast-125" />
        </div>
      </Link>

      {/* NAVIGATION CENTERED */}
      <nav className="hidden lg:flex items-center gap-8 text-[17px] font-sans font-medium text-[#1d1d1f]">
        <Link href="/" className={`hover:text-[#0071e3] transition-colors ${pathname === "/" ? "text-[#0071e3]" : ""}`}>Home</Link>
        <Link href="/about" className={`hover:text-[#0071e3] transition-colors ${pathname === "/about" ? "text-[#0071e3]" : ""}`}>About Us</Link>
        <Link href="/programs" className={`hover:text-[#0071e3] transition-colors ${pathname === "/programs" ? "text-[#0071e3]" : ""}`}>Our Programs</Link>
        <Link href="/impact" className={`hover:text-[#0071e3] transition-colors ${pathname === "/impact" ? "text-[#0071e3]" : ""}`}>Impact</Link>
        <Link href="/get-involved" className={`hover:text-[#0071e3] transition-colors ${pathname === "/get-involved" ? "text-[#0071e3]" : ""}`}>Get Involved</Link>
        <Link href="/transparency" className={`hover:text-[#0071e3] transition-colors ${pathname === "/transparency" ? "text-[#0071e3]" : ""}`}>News & Trust</Link>
        <Link href="/contact" className={`hover:text-[#0071e3] transition-colors ${pathname === "/contact" ? "text-[#0071e3]" : ""}`}>Contact</Link>
      </nav>

      {/* DONATE BUTTON & IND PAGE RIGHT */}
      <div className="flex items-center gap-4">
        <Link href="https://mittafoundation.org/" target="_blank" rel="noopener noreferrer" className="hidden lg:flex items-center gap-1.5 bg-[#fcfbf9] border border-[#e5e5ea] text-[#1d1d1f] px-5 py-2.5 rounded-full text-[13px] font-bold tracking-wide hover:bg-[#f5f5f7] transition-all shadow-sm">
          India Operations <ArrowUpRight size={14} className="opacity-70" />
        </Link>
        <Link href="/give" className="bg-[#0071e3] text-white px-6 py-3 rounded-full text-[15px] font-semibold flex items-center gap-2 hover:bg-[#0066cc] hover:scale-105 transition-all shadow-md">
          <Heart size={16} className="fill-white" /> Donate Now
        </Link>
      </div>
    </header>
  );
}
