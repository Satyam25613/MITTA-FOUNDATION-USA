"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, BookOpen, Heart, Activity, Users, Briefcase, Building2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function ImpactPage() {
  const timeline = [
    { year: "2024", title: "Saraswatha Academy Modernization", location: "Hyderabad", amount: "Documented Grant", desc: "Repainted buildings and modernized the sports facility at Saraswatha Academy High School." },
    { year: "2023", title: "Free Breakfast Program", location: "Hyderabad", amount: "Documented Grant", desc: "Established a free daily breakfast program at Saraswatha Academy to improve student nutrition and attendance." },
    { year: "2021", title: "Refah-e-am Sanitation Block", location: "Haribowli, Hyderabad", amount: "$25,000 Grant", desc: "Built a modern toilet block with separate facilities for boys and girls, addressing absenteeism caused by deteriorating infrastructure." },
    { year: "2020", title: "COVID-19 Digital Learning", location: "Hyderabad", amount: "Documented Grant", desc: "Distributed tablets for online learning during the pandemic to ensure educational continuity at Saraswatha Academy." },
    { year: "2019", title: "Saraswatha Modern Washrooms", location: "Hyderabad", amount: "Documented Grant", desc: "Constructed modern washroom facilities at Saraswatha Academy High School." },
    { year: "2018", title: "Government Hospital Renovation", location: "Hyderabad", amount: "$30,000 Grant", desc: "Complete renovation of a government hospital including re-plastering, ceramic wall cladding, electrical replacement, and oxygen system upgrades." },
    { year: "2010", title: "Refah-e-am Basketball Court", location: "Haribowli, Hyderabad", amount: "Documented Grant", desc: "Built a basketball court to Indian national standards, providing athletic infrastructure for government school students." },
    { year: "2006", title: "Foundation Established", location: "Hyderabad, India", amount: "", desc: "Mitta Foundation officially registered. Commenced operations with a focus on education and healthcare infrastructure." },
    { year: "2003", title: "Refah-e-am Permanent Classrooms", location: "Haribowli, Hyderabad", amount: "Documented Grant", desc: "Replaced temporary tin sheds with permanent classrooms and infrastructure at Refah-e-am High School." },
    { year: "2001", title: "Saraswatha Academy Support Begins", location: "Hyderabad", amount: "Documented Grant", desc: "Began long-term support for Saraswatha Academy High School, eventually building 18 permanent classrooms." },
  ];

  const pillars = [
    {
      icon: BookOpen, color: "#0071e3", label: "EDUCATION INFRASTRUCTURE",
      title: "Building schools that last generations",
      outcomes: [
        "3 schools supported with permanent classrooms, furniture & computers",
        "Modern sanitation blocks reducing female student absenteeism",
        "Basketball court built to Indian national standards",
        "18 classrooms constructed at Saraswatha Academy",
      ],
    },
    {
      icon: Heart, color: "#FF9500", label: "HEALTHCARE INFRASTRUCTURE",
      title: "Upgrading hospitals that serve the underserved",
      outcomes: [
        "$30,000 invested in government hospital renovation",
        "Ceramic wall cladding, electrical rewiring, oxygen system upgrades",
        "Nurse restroom refurbishment and corridor repainting",
        "Free out-patient medical clinic at Kachiguda, Hyderabad",
      ],
    },
    {
      icon: Users, color: "#34c759", label: "COMMUNITY & LIVELIHOOD",
      title: "Creating pathways to economic independence",
      outcomes: [
        "$6,000 invested in vocational training programs",
        "Sewing centre for training poor women and widows in Ranga Reddy Dist",
        "Scholarships and income generation grants for needy students",
        "$5,292 for old age home construction and rehabilitation",
      ],
    },
  ];

  return (
    <div className="w-full bg-[#fcfbf9] text-[#1D1D1F] font-sans selection:bg-[#0071e3] selection:text-white min-h-screen">
      <Header />

      {/* 1. HERO */}
      <section className="w-full bg-[#fcfbf9] pt-[160px] pb-[80px] md:pb-[120px] px-4 md:px-10 border-b border-[#E5E5EA]">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="text-[15px] text-[#0071e3] font-bold tracking-[0.1em] uppercase mb-10 font-sans">VERIFIED OUTCOMES</div>
          <h1 className="font-heading text-[44px] md:text-[56px] lg:text-[64px] font-bold text-[#1D1D1F] leading-[1.05] tracking-[-0.03em] mb-6">
            Documented proof of impact.
          </h1>
          <p className="font-sans text-[18px] md:text-[20px] text-[#4A4A4F] leading-[1.6] max-w-[640px] mx-auto mb-16">
            Every project is named. Every dollar is accounted for. We build infrastructure you can visit, verify, and see working.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-[#e5e5ea] p-8 md:p-10">
            {[
              { num: "20+", label: "Years", sub: "Continuous operation since 2006.", color: "#1D1D1F" },
              { num: "$100K+", label: "Invested", sub: "Documented project investment in USD.", color: "#1D1D1F" },
              { num: "25+", label: "Projects", sub: "Named schools, hospitals, and community programs.", color: "#1D1D1F" },
              { num: "100%", label: "Documented", sub: "Every dollar accounted for in financial records.", color: "#34c759" },
            ].map((s, i) => (
              <div key={i} className={`flex flex-col items-center ${i < 3 ? "border-b md:border-b-0 md:border-r border-[#e5e5ea]" : ""} pb-6 md:pb-0 px-2 md:px-4`}>
                <div className="font-heading text-[48px] xl:text-[64px] font-bold leading-none mb-2 tracking-tighter" style={{ color: s.color }}>{s.num}</div>
                <div className="font-sans text-[14px] mb-2 uppercase tracking-[0.05em] font-bold" style={{ color: s.color === "#34c759" ? s.color : "#0071e3" }}>{s.label}</div>
                <div className="font-sans text-[13px] text-[#86868B] max-w-[200px]">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. PROGRAM IMPACT BREAKDOWN */}
      <section className="w-full bg-white py-[100px] md:py-[120px] px-4 md:px-10 border-b border-[#E5E5EA]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <div className="text-[15px] text-[#0071e3] font-bold tracking-[0.1em] uppercase mb-4 font-sans">WHERE YOUR SUPPORT GOES</div>
            <h2 className="font-heading text-[36px] md:text-[48px] font-bold text-[#1D1D1F] leading-[1.1] tracking-[-0.02em]">
              Three pillars of lasting change.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <div key={i} className="bg-[#fcfbf9] rounded-[24px] p-8 md:p-10 border border-[#e5e5ea] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col">
                <div className="w-14 h-14 rounded-[14px] flex items-center justify-center mb-6" style={{ backgroundColor: `${p.color}15` }}>
                  <p.icon size={28} strokeWidth={1.5} style={{ color: p.color }} />
                </div>
                <div className="text-[13px] font-bold tracking-[0.1em] uppercase mb-3 font-sans" style={{ color: p.color }}>{p.label}</div>
                <h3 className="font-heading text-[22px] font-bold text-[#1D1D1F] leading-[1.2] mb-6 tracking-tight">{p.title}</h3>
                <ul className="space-y-4 flex-grow">
                  {p.outcomes.map((o, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: p.color }} />
                      <span className="font-sans text-[15px] text-[#4A4A4F] leading-[1.5]">{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TIMELINE */}
      <section className="w-full bg-[#fcfbf9] py-[100px] md:py-[140px] px-4 md:px-10 border-b border-[#E5E5EA]">
        <div className="max-w-[840px] mx-auto">
          <div className="text-[15px] text-[#0071e3] font-bold tracking-[0.1em] uppercase mb-4 font-sans">OVER TWO DECADES</div>
          <h2 className="font-heading text-[36px] md:text-[44px] font-bold text-[#1D1D1F] leading-[1.2] mb-16 tracking-tight">
            Project Timeline
          </h2>

          <div className="relative border-l-[3px] border-[#e5e5ea] pl-8 md:pl-16 space-y-[60px]">
            {timeline.map((t, i) => (
              <div key={i} className="relative">
                <div className={`absolute -left-[45px] md:-left-[77px] top-1 w-6 h-6 rounded-full bg-[#fcfbf9] border-[6px] shadow-md ${i === timeline.length - 1 ? "border-[#1D1D1F]" : "border-[#0071e3]"}`}></div>
                <div className="text-[22px] font-bold text-[#1D1D1F] mb-3 font-heading">{t.year}</div>
                {t.amount ? (
                  <div className="bg-white p-6 md:p-8 rounded-[20px] border border-[#E5E5EA] shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3 flex-col md:flex-row gap-3">
                      <h3 className="text-[18px] font-bold text-[#1D1D1F] leading-tight">{t.title}</h3>
                      <span className="inline-flex items-center text-[13px] font-bold text-[#34c759] bg-[#34c759]/10 px-4 py-1.5 rounded-full whitespace-nowrap">{t.amount}</span>
                    </div>
                    <div className="text-[13px] font-bold uppercase tracking-[0.05em] text-[#86868B] mb-3">{t.location}</div>
                    <p className="text-[15px] text-[#4A4A4F] leading-[1.6]">{t.desc}</p>
                  </div>
                ) : (
                  <div className="pl-4">
                    <div className="text-[16px] text-[#1d1d1f] font-medium italic border-l-4 border-[#e5e5ea] pl-6 py-2">{t.desc}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 5. METHODOLOGY */}
      <section id="methodology" className="w-full bg-[#1D1D1F] text-white py-[100px] px-4 md:px-10">
        <div className="max-w-[840px] mx-auto bg-white/5 border border-white/10 p-10 md:p-14 rounded-[24px]">
          <h2 className="font-heading text-[28px] md:text-[32px] font-bold mb-6">Methodology Note: How we count impact.</h2>
          <p className="font-sans text-[17px] text-white/80 leading-[1.6] mb-8">We do not claim arbitrary multiplier effects or inflated beneficiary numbers. We count hard infrastructure.</p>
          <ul className="space-y-6 font-sans text-[16px] text-white/90 leading-[1.6]">
            {[
              { t: "Project Completed:", d: "Counted only when construction or installation is finalized and the facility is handed over to the community or school administration." },
              { t: "Dollars Invested:", d: "Represents direct capital transferred for materials, labor, and execution. This excludes our internal administrative costs." },
              { t: "Beneficiary Estimation:", d: "We report the enrolled student population of a school or the registered capacity of a facility at the time of project completion." },
            ].map((m, i) => (
              <li key={i} className="flex gap-4 items-start">
                <CheckCircle2 className="text-[#34c759] w-6 h-6 flex-shrink-0" />
                <div><strong className="text-white block mb-1">{m.t}</strong>{m.d}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="w-full bg-[#000000] py-[80px] px-4 text-center">
        <div className="max-w-[720px] mx-auto text-white">
          <p className="font-sans text-[24px] md:text-[32px] font-bold leading-[1.3] mb-8 tracking-tight">
            Every contribution builds something<br />permanent, measurable, and <span className="text-[#34c759]">life-changing.</span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/give" className="bg-[#0071e3] text-white px-[32px] h-[52px] inline-flex items-center justify-center rounded-[8px] text-[16px] font-bold transition-all hover:bg-[#0066cc]">
              Support Our Work
            </Link>
            <Link href="/transparency" className="bg-transparent border-2 border-white/30 text-white px-[32px] h-[52px] inline-flex items-center justify-center rounded-[8px] text-[16px] font-bold hover:bg-white/10 transition-all">
              View Financial Records <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
