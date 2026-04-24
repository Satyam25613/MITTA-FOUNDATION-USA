"use client";

import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="w-full bg-[#fcfbf9] text-[#1D1D1F] font-sans selection:bg-[#0071e3] selection:text-white min-h-screen">
      <Header />

      {/* 1. HERO / FOUNDATION ORIGIN */}
      <section className="relative w-full pt-[140px] md:pt-[180px] pb-[80px] px-4 md:px-10 bg-[#fcfbf9]">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-[80px] items-center lg:items-center">

          <div className="flex-1 max-w-[640px]">
            <div className="text-[13px] text-[#0071e3] font-bold tracking-[0.1em] uppercase mb-6 font-sans">
              OUR ORIGIN
            </div>
            <h1 className="font-heading text-[44px] md:text-[56px] xl:text-[64px] font-bold text-[#1D1D1F] leading-[1.05] mb-8 tracking-[-0.03em]">
              From Lived Experience <br /> to Lasting Impact.
            </h1>

            <div className="space-y-6 font-sans text-[17px] md:text-[19px] text-[#4A4A4F] leading-[1.6]">
              <p>
                The story of the Mitta Foundation is not corporate. It is deeply personal. It began with two doctors who escaped poverty and made a promise to return.
              </p>
              <p>
                Founded in 2006 by Dr. Mitta Srinivas Rao and Dr. Mitta Swatantrakala, the foundation was born from lived experience. Both founders rose from severe poverty in Hyderabad, built medical careers, and eventually settled in the United States. But success was not the destination. Service was.
              </p>
              <p>
                They returned to Hyderabad with a singular, unambiguous mandate: to build the critical infrastructure missing from their own childhoods, ensuring the next generation has the foundation to learn, heal, and grow.
              </p>
            </div>
          </div>

          <div className="flex-1 w-full max-w-[500px]">
            <div className="aspect-[4/5] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] rounded-[24px] overflow-hidden border border-[#e5e5ea] relative group">
              <div className="absolute inset-0 bg-black/5 z-10 transition-opacity group-hover:opacity-0" />
              {/* Note: User should replace this src with their provided 'foundation image' */}
              <img
                src="/IMAGES/inner-13-2.jpg"
                alt="Mitta Foundation Origin"
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 2. LEADERSHIP & GOVERNANCE (Moved Up) */}
      <section className="w-full py-[100px] md:py-[140px] bg-white px-4 md:px-10 border-t border-[#E5E5EA]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-[80px]">
            <div className="text-[13px] text-[#34c759] font-bold tracking-[0.1em] uppercase mb-4 font-sans">
              THE TEAM
            </div>
            <h2 className="font-heading text-[36px] md:text-[48px] font-bold text-[#1D1D1F] tracking-[-0.02em] mb-4">Leadership & Governance</h2>
            <p className="font-sans text-[18px] text-[#86868B] max-w-[600px] mx-auto leading-[1.6]">Anonymous organizations do not receive large gifts. We operate with a named, accountable board structure driven by our founders.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[800px] mx-auto mb-10">
            {/* Board Member 1 */}
            <div className="flex flex-col items-center text-center bg-[#fcfbf9] p-8 rounded-[24px] shadow-sm border border-[#e5e5ea] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-[180px] h-[180px] overflow-hidden mb-6 rounded-full border-[6px] border-white shadow-md">
                <img src="/IMAGES/dr-mitta-srinivas-rao.png" alt="Dr. Mitta Srinivas Rao" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-heading text-[22px] font-bold text-[#1D1D1F] mb-1">Dr. Mitta Srinivas Rao</h3>
              <p className="font-sans text-[12px] text-[#0071e3] font-bold mb-4 uppercase tracking-[0.05em]">Founder & Chairman</p>
              <p className="font-sans text-[15px] text-[#4A4A4F] leading-[1.6]">Oversight of global strategy and medical infrastructure initiatives.</p>
            </div>

            {/* Board Member 2 */}
            <div className="flex flex-col items-center text-center bg-[#fcfbf9] p-8 rounded-[24px] shadow-sm border border-[#e5e5ea] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-[180px] h-[180px] overflow-hidden mb-6 rounded-full border-[6px] border-white shadow-md">
                <img src="/IMAGES/dr-mitta-swatantrakala.png" alt="Dr. Mitta Swatantrakala" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-heading text-[22px] font-bold text-[#1D1D1F] mb-1">Dr. Mitta Swatantrakala</h3>
              <p className="font-sans text-[12px] text-[#0071e3] font-bold mb-4 uppercase tracking-[0.05em]">Founder & Director</p>
              <p className="font-sans text-[15px] text-[#4A4A4F] leading-[1.6]">Director of inclusive education and child welfare programs.</p>
            </div>
          </div>

          <div className="max-w-[800px] mx-auto bg-[#fcfbf9] border border-[#e5e5ea] border-l-4 border-l-[#34c759] p-6 rounded-r-[12px] rounded-l-[4px] text-center shadow-sm">
            <p className="font-medium text-[#1d1d1f] text-[16px] md:text-[18px] leading-[1.6]">
              As professionals in the US, the founders provide a direct trust bridge for diaspora donors seeking accountable giving in India. They lived the problem they are solving, and they fund the solutions they build.
            </p>
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION CARDS */}
      <section className="w-full pt-[100px] md:pt-[120px] pb-[60px] bg-[#fcfbf9] px-4 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

            {/* Vision Card */}
            <div className="bg-[#0A0A0A] rounded-[24px] md:rounded-[32px] p-8 md:p-12 flex flex-col justify-between shadow-xl">
              <h2 className="text-[14px] text-white font-bold tracking-[0.2em] uppercase mb-16 font-sans">
                Our Vision
              </h2>
              <p className="font-heading text-[24px] md:text-[28px] leading-[1.4] text-white font-medium tracking-[-0.01em]">
                We act as catalysts in creating <span className="text-white font-bold transition-colors duration-700 hover:text-[#34c759]">sustainable change</span> in the lives of underprivileged children by providing <span className="text-white font-bold transition-colors duration-700 hover:text-[#0071e3]">quality education, healthcare,</span> and <span className="text-white font-bold transition-colors duration-700 hover:text-[#FF9500]">sustainable livelihoods</span> through a life-cycle development approach.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-[#0A0A0A] rounded-[24px] md:rounded-[32px] p-8 md:p-12 flex flex-col justify-between shadow-xl">
              <h2 className="text-[14px] text-white font-bold tracking-[0.2em] uppercase mb-16 font-sans">
                Our Mission
              </h2>
              <p className="font-heading text-[24px] md:text-[28px] leading-[1.4] text-white font-medium tracking-[-0.01em]">
                We empower underprivileged children with <span className="text-white font-bold transition-colors duration-700 hover:text-[#0071e3]">education and innovative healthcare</span>, helping them become <span className="text-white font-bold transition-colors duration-700 hover:text-[#34c759]">independent, self-reliant</span>, and contributing citizens of the country.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3.5 QUOTE SECTION */}
      <section className="w-full py-[80px] md:py-[100px] bg-[#000000] px-4 md:px-10 text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h3 className="font-heading text-[40px] md:text-[56px] font-bold leading-[1.05] tracking-[-0.03em] text-white">
            Every child deserves the chance to <br className="hidden md:block" /> <span className="text-[#34c759]">dream</span>, <span className="text-[#0071e3]">grow</span>, and <span className="text-[#FF9500]">succeed.</span>
          </h3>
        </div>
      </section>

      {/* 4. WHY WE BUILD INFRASTRUCTURE */}
      <section className="w-full py-[100px] md:py-[140px] bg-[#fcfbf9] px-4 md:px-10 border-t border-[#E5E5EA]">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="font-heading text-[36px] md:text-[48px] font-bold text-[#1D1D1F] leading-[1.1] mb-8 tracking-[-0.02em]">
            Why we build infrastructure.
          </h2>
          <p className="font-sans text-[18px] md:text-[20px] text-[#4A4A4F] leading-[1.6] max-w-[800px] mx-auto mb-[80px]">
            The founders saw firsthand what blocked them in their youth. They didn't lack ability; they lacked the system. A broken school, a missing vocational pathway, a deteriorated hospital ward—these are structural failures. Mitta removes those barriers visibly and permanently. We build the conditions that make programs possible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            <div className="bg-white p-8 rounded-[20px] border border-[#e5e5ea] shadow-sm">
              <div className="text-[40px] font-heading font-bold text-[#0071e3] mb-4 leading-none tracking-tighter">01.</div>
              <h3 className="font-sans text-[20px] font-bold text-[#1D1D1F] mb-3 tracking-tight">Identify the Need</h3>
              <p className="text-[15px] text-[#4A4A4F] leading-[1.6]">We locate the specific physical or systemic barrier preventing education, health, or economic independence.</p>
            </div>
            <div className="bg-white p-8 rounded-[20px] border border-[#e5e5ea] shadow-sm">
              <div className="text-[40px] font-heading font-bold text-[#34c759] mb-4 leading-none tracking-tighter">02.</div>
              <h3 className="font-sans text-[20px] font-bold text-[#1D1D1F] mb-3 tracking-tight">Targeted Investment</h3>
              <p className="text-[15px] text-[#4A4A4F] leading-[1.6]">We directly fund the construction, renovation, or programmatic infrastructure required to eliminate the barrier.</p>
            </div>
            <div className="bg-white p-8 rounded-[20px] border border-[#e5e5ea] shadow-sm">
              <div className="text-[40px] font-heading font-bold text-[#FF9500] mb-4 leading-none tracking-tighter">03.</div>
              <h3 className="font-sans text-[20px] font-bold text-[#1D1D1F] mb-3 tracking-tight">Document Outcome</h3>
              <p className="text-[15px] text-[#4A4A4F] leading-[1.6]">Every dollar spent and every outcome achieved is rigorously documented and made available for donor verification.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LEGAL IDENTITY */}
      <section className="w-full py-[100px] md:py-[140px] bg-white px-4 md:px-10 border-t border-[#E5E5EA]">
        <div className="max-w-[840px] mx-auto text-center border border-[#E5DFD5] p-10 md:p-14 rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.04)] bg-[#fcfbf9]">
          <h2 className="font-heading text-[28px] font-bold text-[#1d1d1f] mb-10 tracking-tight">Legal Identity</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-[600px] mx-auto">
            <div className="space-y-6">
              <div>
                <span className="block text-[12px] text-[#86868B] uppercase font-bold tracking-[0.05em] mb-1">Registered Name</span>
                <span className="block text-[16px] text-[#1d1d1f] font-semibold">Mitta Foundation</span>
              </div>
              <div>
                <span className="block text-[12px] text-[#86868B] uppercase font-bold tracking-[0.05em] mb-1">Year of Registration</span>
                <span className="block text-[16px] text-[#1d1d1f] font-semibold">2006</span>
              </div>
              <div>
                <span className="block text-[12px] text-[#86868B] uppercase font-bold tracking-[0.05em] mb-1">Registered Address</span>
                <span className="block text-[15px] text-[#1d1d1f] font-medium leading-[1.5]">H.No: 12-2-790/148, Gudimalkapur Ayodhya Nagar, Hyderabad-500028</span>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <span className="block text-[12px] text-[#86868B] uppercase font-bold tracking-[0.05em] mb-1">FCRA Number</span>
                <span className="inline-block text-[15px] text-[#1d1d1f] font-bold bg-white border border-[#e5e5ea] px-3 py-1 rounded-[6px]">368140126</span>
              </div>
              <div>
                <span className="block text-[12px] text-[#86868B] uppercase font-bold tracking-[0.05em] mb-1">Tax Exemption</span>
                <span className="inline-block text-[15px] text-[#34c759] font-bold bg-[#34c759]/10 px-3 py-1 rounded-[6px]">80G & 12A Certified</span>
              </div>
            </div>
          </div>

          <div className="mt-[60px] pt-8 border-t border-[#E5DFD5] flex flex-wrap justify-center gap-6">
            <Link href="/programs" className="text-[15px] font-sans font-bold text-[#0071e3] hover:text-[#005BB5] transition-colors inline-flex items-center group">
              See our work in practice <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/transparency" className="text-[15px] font-sans font-bold text-[#0071e3] hover:text-[#005BB5] transition-colors inline-flex items-center group md:border-l border-[#E5DFD5] md:pl-6">
              View governance documents <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
