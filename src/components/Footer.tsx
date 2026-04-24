"use client";

import Link from "next/link";
import { ArrowUpRight, Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#000000] text-white/70 py-[64px] px-4 md:px-10 font-sans text-[14px] border-t border-white/10">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="font-heading font-bold text-[24px] text-white tracking-tight mb-4">Mitta Foundation</div>
            <p className="text-white/80 mb-6 max-w-[320px] leading-[1.6]">
              Mitta Foundation builds the infrastructure of opportunity.
            </p>
            <div className="space-y-1">
              <p>Registered name: Mitta Foundation</p>
              <p>Founded: 2006</p>
              <p>Hyderabad, India</p>
            </div>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-[13px]">Legal & Financial</h4>
            <ul className="space-y-4">
              <li>
                <Link href="https://mittafoundation.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center justify-between max-w-[240px]">
                  <span>India Operations (Execution Layer)</span> <ArrowUpRight size={14} className="opacity-70" />
                </Link>
              </li>
              <li><Link href="/transparency" className="hover:text-white transition-colors flex justify-between max-w-[240px]"><span>FCRA No. 368140126</span> <span>→</span></Link></li>
              <li><Link href="/transparency" className="hover:text-white transition-colors flex justify-between max-w-[240px]"><span>80G Certificate</span> <span>Download ↓</span></Link></li>
              <li><Link href="/transparency" className="hover:text-white transition-colors flex justify-between max-w-[240px]"><span>12A Certificate</span> <span>Download ↓</span></Link></li>
              <li><Link href="/transparency" className="hover:text-white transition-colors flex justify-between max-w-[240px]"><span>Annual Report 2024</span> <span>Download ↓</span></Link></li>
              <li className="pt-4"><Link href="/transparency" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/transparency" className="hover:text-white transition-colors">Safeguarding Policy</Link></li>
              <li><Link href="/transparency" className="hover:text-white transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-[13px]">Contact</h4>
            <ul className="space-y-4 mb-8">
              <li>
                <div className="mb-1 text-white/50 text-[12px]">Address</div>
                <div className="leading-[1.6]">
                  H.No: 12-2-790/148, Gudimalkapur Ayodhya Nagar,<br/>
                  Hyderabad-500028<br/>
                  Telangana state, India
                </div>
              </li>
              <li className="pt-2">
                <div className="mb-1 text-white/50 text-[12px]">Email</div>
                <a href="mailto:info@mittafoundation.org" className="hover:text-white transition-colors">info@mittafoundation.org</a>
              </li>
            </ul>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/mittafoundation368140126/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#000000] transition-all group">
                <Facebook size={18} className="transition-transform group-hover:scale-110" />
              </a>
              <a href="https://www.instagram.com/mittafoundation/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#000000] transition-all group">
                <Instagram size={18} className="transition-transform group-hover:scale-110" />
              </a>
              <a href="https://www.youtube.com/@MittaFoundation" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#000000] transition-all group">
                <Youtube size={18} className="transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px]">
          <div>© {new Date().getFullYear()} Mitta Foundation. Registered under the Indian Trusts Act.</div>
          <div className="flex gap-4">
            <span>FCRA Registration 368140126.</span>
            <Link href="/transparency" className="hover:text-white underline decoration-white/30 underline-offset-2">Charity registry verification</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
