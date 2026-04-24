"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Heart, Users, BookOpen, Activity, Globe, ShieldCheck, ArrowRight, ArrowUpRight, CheckCircle2, Zap } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/IMAGES/refah-e-am-school.jpg",
    "/IMAGES/home-4.jpg",
    "/IMAGES/home-about-4.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#fcfbf9] text-[#1D1D1F] font-sans selection:bg-[#0071e3] selection:text-white min-h-screen">


      <Header />

      {/* 2. HERO SECTION (Fitted for Laptop Screens) */}
      <section className="relative w-full min-h-screen pt-[120px] pb-[80px] lg:pb-[100px] px-4 md:px-10 bg-[#fcfbf9] flex flex-col justify-center">

        {/* HUGE WORLD MAP BACKGROUND */}
        <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none flex items-center justify-center overflow-hidden">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
            alt="World Map Background"
            className="w-[140%] max-w-none md:w-[100%] md:max-w-[1400px] object-contain object-center filter grayscale"
          />
        </div>

        <div className="max-w-[1200px] mx-auto w-full flex flex-col lg:flex-row items-center relative z-40 gap-10">

          {/* LEFT TEXT CONTENT */}
          <div className="flex-1 w-full animate-fade-in-up">

            <div className="text-[15px] text-[#1d1d1f] font-bold tracking-[0.1em] uppercase mb-4 font-sans flex items-center">
              TOGETHER, WE CAN
            </div>

            <h1 className="text-[#1d1d1f] font-heading text-[44px] md:text-[56px] xl:text-[64px] leading-[1.05] tracking-[-0.03em] font-bold mb-5">
              Create a Better<br />
              World for Every<br />
              <span className="text-[#0071e3] relative inline-block">
                Child
                <span className="absolute -bottom-2 left-0 w-full h-[4px] bg-[#0071e3] rounded-full"></span>
              </span>
            </h1>

            <p className="text-[#4A4A4F] font-sans text-[17px] md:text-[19px] leading-[1.6] mb-6 max-w-[540px]">
              Mitta Foundation builds the physical and economic infrastructure that makes learning, health, and independence possible in India. We remove the systemic barriers preventing children from succeeding.
            </p>

            <div className="font-sans text-[15px] font-medium text-[#1d1d1f] mb-8 bg-[#f5f5f7] border-l-4 border-[#34c759] pl-4 py-3 pr-4 rounded-r-[8px] inline-block max-w-[540px]">
              As US professionals, we've built a transparent, tax-efficient pathway for diaspora donors to fund documented infrastructure.
            </div>

            <div className="flex flex-col sm:flex-row gap-4 font-sans">
              <Link href="/give" className="bg-[#0071e3] text-white px-[32px] h-[52px] inline-flex items-center justify-center rounded-[8px] text-[16px] font-semibold transition-all hover:bg-[#0066cc] shadow-[0_8px_20px_rgba(0,113,227,0.3)] hover:-translate-y-0.5 group">
                <Heart size={18} className="mr-2 fill-white group-hover:scale-110 transition-transform" /> Make an Impact
              </Link>
              <Link href="/programs" className="bg-white border-[1.5px] border-[#e5e5ea] text-[#1d1d1f] px-[32px] h-[52px] inline-flex items-center justify-center rounded-[8px] text-[16px] font-semibold transition-all hover:border-[#1d1d1f] hover:bg-[#fcfbf9] group shadow-sm">
                Explore Our Work <ArrowRight size={18} className="ml-2 text-[#86868b] group-hover:text-[#1d1d1f] group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </div>

          {/* RIGHT FLOATING IMAGES (Indian Context) */}
          <div className="hidden lg:flex flex-1 relative h-[500px] xl:h-[600px] items-center justify-center pointer-events-none w-full">
            {/* Main big face (Right) */}
            <div className="absolute top-[10%] right-[0%] w-[280px] h-[280px] xl:w-[320px] xl:h-[320px] shadow-2xl rounded-full overflow-hidden border-[8px] border-white z-20 bg-white flex items-center justify-center bg-[#fcfbf9]">
              <img src="/IMAGES/hero-feature-1.png" alt="Mitta Foundation Impact" className="w-full h-full object-cover" />
            </div>

            {/* Child (Bottom Left of the cluster) */}
            <div className="absolute bottom-[5%] left-[10%] xl:left-[20%] w-[180px] h-[180px] xl:w-[220px] xl:h-[220px] shadow-2xl rounded-full overflow-hidden border-[6px] border-white z-30 bg-white">
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=80" alt="Classroom" className="w-full h-full object-cover" />
            </div>

            {/* Child (Top Left of the cluster) */}
            <div className="absolute top-[5%] left-[20%] w-[140px] h-[140px] xl:w-[160px] xl:h-[160px] shadow-xl rounded-full overflow-hidden border-[6px] border-white z-10 bg-white">
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80" alt="Children learning" className="w-full h-full object-cover" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-[25%] left-[10%] w-3 h-3 bg-[#0071e3] rounded-full shadow-[0_0_10px_rgba(0,113,227,0.5)]"></div>
            <div className="absolute top-[15%] right-[20%] w-4 h-4 bg-[#FF9500] rounded-full shadow-[0_0_10px_rgba(255,149,0,0.5)]"></div>
            <div className="absolute bottom-[30%] left-[5%] w-3 h-3 bg-[#0071e3] rounded-full"></div>
            <div className="absolute bottom-[20%] right-[30%] w-4 h-4 bg-[#34c759] rounded-full shadow-[0_0_10px_rgba(52,199,89,0.5)]"></div>
          </div>

        </div>
      </section>

      {/* 3. TRUST STRIP (Below the fold - visible on scroll) */}
      <section className="w-full relative z-50 px-4 md:px-10 py-[60px]">
        <div className="max-w-[1000px] mx-auto bg-white rounded-[24px] shadow-sm border border-[#e5e5ea] py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0 md:divide-x divide-[#e5e5ea]/80">

            <div className="flex flex-col justify-center items-center text-center px-4">
              <div className="w-12 h-12 bg-[#ff3b30]/10 rounded-full flex items-center justify-center mb-4 text-[#ff3b30]">
                <Users size={24} strokeWidth={2} />
              </div>
              <div className="font-heading text-[26px] md:text-[30px] font-bold text-[#1d1d1f] leading-none mb-2 tracking-tight">25,000+</div>
              <div className="text-[10px] md:text-[11px] font-bold text-[#86868B] uppercase tracking-[0.08em]">CHILDREN EMPOWERED</div>
            </div>

            <div className="flex flex-col justify-center items-center text-center px-4">
              <div className="w-12 h-12 bg-[#FF9500]/10 rounded-full flex items-center justify-center mb-4 text-[#FF9500]">
                <BookOpen size={24} strokeWidth={2} />
              </div>
              <div className="font-heading text-[26px] md:text-[30px] font-bold text-[#1d1d1f] leading-none mb-2 tracking-tight">120+</div>
              <div className="text-[10px] md:text-[11px] font-bold text-[#86868B] uppercase tracking-[0.08em]">EDUCATION CENTERS</div>
            </div>

            <div className="flex flex-col justify-center items-center text-center px-4">
              <div className="w-12 h-12 bg-[#34c759]/10 rounded-full flex items-center justify-center mb-4 text-[#34c759]">
                <Zap size={24} strokeWidth={2} />
              </div>
              <div className="font-heading text-[26px] md:text-[30px] font-bold text-[#1d1d1f] leading-none mb-2 tracking-tight">15,000+</div>
              <div className="text-[10px] md:text-[11px] font-bold text-[#86868B] uppercase tracking-[0.08em]">HEALTHCARE BENEFICIARIES</div>
            </div>

            <div className="flex flex-col justify-center items-center text-center px-4">
              <div className="w-12 h-12 bg-[#0071e3]/10 rounded-full flex items-center justify-center mb-4 text-[#0071e3]">
                <ShieldCheck size={24} strokeWidth={2} />
              </div>
              <div className="font-heading text-[26px] md:text-[30px] font-bold text-[#1d1d1f] leading-none mb-2 tracking-tight">100%</div>
              <div className="text-[10px] md:text-[11px] font-bold text-[#86868B] uppercase tracking-[0.08em]">FCRA DOCUMENTED</div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. THE ARGUMENT (Why Infrastructure) */}
      <section className="w-full bg-white py-[100px] px-4 md:px-10 border-b border-[#E5E5EA]">
        <div className="max-w-[840px] mx-auto text-center">
          <div className="text-[13px] text-[#0071e3] font-bold tracking-[0.1em] uppercase mb-4 font-sans">THE MITTA DIFFERENCE</div>

          <h2 className="font-heading text-[36px] md:text-[44px] font-bold text-[#1D1D1F] leading-[1.1] mb-8 tracking-[-0.02em]">
            We do not run temporary programs. We remove physical barriers.
          </h2>

          <p className="font-sans text-[18px] md:text-[20px] text-[#4A4A4F] leading-[1.6] max-w-[720px] mx-auto mb-10">
            A child doesn't fail because they lack ability. They fail because the system around them was never built. A broken school, a missing vocational pathway, a deteriorated hospital ward—these are structural failures. Mitta intervenes directly by building permanent classrooms, sanitation blocks, and medical facilities. We build the conditions that make programs possible.
          </p>

          <Link href="/programs" className="inline-flex text-[#0071e3] font-semibold text-[18px] hover:text-[#005BB5] items-center transition-colors group">
            Understand our infrastructure model <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* 5. WHAT WE BUILD (Pillars) */}
      <section className="w-full bg-[#fcfbf9] py-[100px] md:py-[120px] px-4 md:px-10">
        <div className="max-w-[1200px] mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white rounded-[20px] p-8 flex flex-col border border-[#e5e5ea] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#0071e3]/10 rounded-[12px] flex items-center justify-center mb-6 text-[#0071e3]">
                <BookOpen size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-[22px] font-bold text-[#1D1D1F] leading-[1.2] mb-3 tracking-tight">
                Learning Infrastructure
              </h3>
              <p className="font-sans text-[15px] text-[#86868B] leading-[1.6] mb-8">
                Building permanent classrooms, sanitation blocks, and sports facilities. Because a school with broken toilets loses female students before learning even begins.
              </p>
              <div className="mt-auto pt-6 border-t border-[#E5E5EA]">
                <Link href="/programs#learning" className="text-[16px] font-sans font-semibold text-[#0071e3] hover:text-[#005BB5] flex items-center group">
                  See school projects <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-[20px] p-8 flex flex-col border border-[#e5e5ea] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#34c759]/10 rounded-[12px] flex items-center justify-center mb-6 text-[#34c759]">
                <Activity size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-[22px] font-bold text-[#1D1D1F] leading-[1.2] mb-3 tracking-tight">
                Skills & Independence
              </h3>
              <p className="font-sans text-[15px] text-[#86868B] leading-[1.6] mb-8">
                Equipping young adults with documented, employable vocational skills that meet immediate local market demands, ensuring education translates to a livelihood.
              </p>
              <div className="mt-auto pt-6 border-t border-[#E5E5EA]">
                <Link href="/programs#skills" className="text-[16px] font-sans font-semibold text-[#34c759] hover:text-[#28a745] flex items-center group">
                  View skill initiatives <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-[20px] p-8 flex flex-col border border-[#e5e5ea] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#FF9500]/10 rounded-[12px] flex items-center justify-center mb-6 text-[#FF9500]">
                <Heart size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-[22px] font-bold text-[#1D1D1F] leading-[1.2] mb-3 tracking-tight">
                Community Enablers
              </h3>
              <p className="font-sans text-[15px] text-[#86868B] leading-[1.6] mb-8">
                Investing in hospital renovations and essential medical equipment to stabilize the health of the communities where these children live.
              </p>
              <div className="mt-auto pt-6 border-t border-[#E5E5EA]">
                <Link href="/programs#community" className="text-[16px] font-sans font-semibold text-[#FF9500] hover:text-[#e08900] flex items-center group">
                  Explore health impact <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROVEN IMPACT */}
      <section className="w-full bg-[#1D1D1F] py-[80px] md:py-[120px] px-4 md:px-10 text-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          <div className="flex-1 lg:pr-10 z-10 w-full">
            <div className="text-[14px] text-[#34c759] font-bold tracking-[0.1em] uppercase mb-6 font-sans">
              PROVEN IMPACT
            </div>
            <h2 className="font-heading text-[32px] md:text-[42px] xl:text-[46px] font-bold leading-[1.05] mb-8 tracking-[-0.02em]">
              <span className="text-white whitespace-nowrap">Refah-e-am High School:</span>
              <br className="hidden md:block" />
              <span className="text-[#E5E5EA]"> 18 Years of Continuous Investment.</span>
            </h2>
            <div className="font-sans text-[18px] md:text-[20px] text-white/95 leading-[1.6] space-y-6 mb-10 max-w-[700px]">
              <p>We don't just write checks; we stay. Refah-e-am High School in Haribowli is the very school our founder attended in his youth. Serving working-class families, it operated under temporary tin sheds until our intervention.</p>
              <p>Over nearly two decades, we've systematically removed barriers—from building the first permanent classrooms in 2003, to a basketball court in 2010, to a modern $25,000 sanitation block in 2021 that drastically reduced female student absenteeism.</p>
            </div>

            <Link href="/impact" className="bg-white text-[#1D1D1F] px-[32px] h-[56px] inline-flex items-center justify-center rounded-[12px] text-[18px] font-bold transition-all hover:bg-[#f5f5f7] hover:scale-105 shadow-[0_8px_30px_rgba(255,255,255,0.1)]">
              Read the full Case Study
            </Link>
          </div>

          <div className="flex-1 relative w-full aspect-square md:aspect-[4/3] max-w-[650px] xl:max-w-[750px]">
            <div className="absolute inset-0 bg-[#0071E3] rounded-[32px] transform rotate-3 opacity-20 transition-transform hover:rotate-6 duration-700"></div>
            <div className="absolute inset-0 bg-[#34C759] rounded-[32px] transform -rotate-2 opacity-20 transition-transform hover:-rotate-4 duration-700"></div>
            <div className="relative w-full h-full rounded-[32px] overflow-hidden border border-white/10 shadow-2xl bg-[#1D1D1F]">
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide}
                  alt="Refah-e-am High School"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                />
              ))}
            </div>

            {/* Overlay Metric */}
            <div className="absolute -bottom-8 -left-8 md:-bottom-10 md:-left-10 bg-white text-[#1D1D1F] p-6 md:p-8 rounded-[24px] shadow-2xl border border-[#E5E5EA] max-w-[260px] md:max-w-[300px]">
              <div className="text-[28px] md:text-[32px] font-bold tracking-tight mb-2">$25,000</div>
              <div className="text-[14px] md:text-[15px] text-[#86868B] leading-tight font-medium">Sanitation infrastructure grant (2021)</div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. FOUNDER MODULE (Origin) */}
      <section className="w-full bg-[#fcfbf9] py-[80px] md:py-[100px] px-4 md:px-10 border-b border-[#E5E5EA]">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between">
          
          <div className="flex-1 z-10 w-full lg:max-w-[550px]">
            <div className="text-[14px] text-[#0071e3] font-bold tracking-[0.1em] uppercase mb-6 font-sans">
              OUR ORIGIN
            </div>
            <h2 className="font-heading text-[40px] md:text-[52px] xl:text-[56px] font-bold text-[#1D1D1F] leading-[1.05] mb-8 tracking-[-0.02em]">
              From Lived Experience
              <br className="hidden lg:block" /> to Lasting Impact.
            </h2>
            <div className="font-sans text-[18px] md:text-[20px] text-[#4A4A4F] leading-[1.6] space-y-6 mb-10">
              <p>
                Founded in 2006 by Dr. Mitta Srinivas Rao and Dr. Mitta Swatantrakala, the foundation was born from lived experience. Both founders rose from severe poverty, eventually settling in the USA. But success was not the destination. Service was.
              </p>
              <p>
                They returned to Hyderabad with a singular, unambiguous mandate: to build the critical infrastructure missing from their own childhoods. As professionals in the US, the founders provide a direct trust bridge for diaspora donors seeking accountable giving in India. They lived the problem they are solving, and they fund the solutions they build.
              </p>
            </div>
            <Link href="/about" className="inline-flex text-[#0071e3] font-semibold text-[18px] hover:text-[#005BB5] items-center transition-colors group">
              Meet our leadership board <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="w-full max-w-[500px] xl:max-w-[550px] aspect-square flex-shrink-0">
            <div className="relative w-full h-full rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-white group border border-[#e5e5ea]">
              <div className="absolute inset-0 bg-black/5 z-10 transition-opacity group-hover:opacity-0" />
              <img
                src="/IMAGES/founders-both.png"
                alt="Founders"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 8. TRANSPARENCY TEASER */}
      <section className="w-full bg-[#fcfbf9] py-[80px] px-4 md:px-10 border-b border-[#E5E5EA]">
        <div className="max-w-[1200px] mx-auto bg-white border border-[#e5e5ea] rounded-[24px] p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-center justify-between">
          <div>
            <h2 className="font-heading text-[28px] font-bold text-[#1D1D1F] mb-3">100% Auditable. 100% Transparent.</h2>
            <p className="font-sans text-[16px] text-[#4A4A4F] leading-[1.6] max-w-[600px]">
              We document every project and account for every dollar. We maintain active FCRA (368140126), 80G, and 12A certifications, allocating 92% of all funds directly to program implementation.
            </p>
          </div>
          <Link href="/transparency" className="bg-transparent border-2 border-[#1D1D1F] text-[#1D1D1F] px-[24px] h-[48px] inline-flex items-center justify-center rounded-[8px] text-[15px] font-bold transition-all hover:bg-[#1D1D1F] hover:text-white whitespace-nowrap">
            View Financials & Legal Identity
          </Link>
        </div>
      </section>

      {/* 9. WAYS TO GIVE */}
      <section className="w-full bg-white py-[100px] md:py-[120px] px-4 md:px-10">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="font-heading text-[36px] md:text-[44px] font-bold text-[#1D1D1F] leading-[1.1] mb-12 tracking-[-0.02em]">
            Invest in a child's future.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="bg-[#fcfbf9] p-8 rounded-[20px] flex flex-col border border-[#e5e5ea] hover:shadow-lg transition-all duration-300">
              <h3 className="font-heading text-[20px] font-bold text-[#1D1D1F] mb-3">Give Once</h3>
              <p className="font-sans text-[14px] text-[#86868B] mb-8 flex-grow">Fund a specific, documented infrastructure project.</p>
              <Link href="/give?type=once" className="bg-[#1D1D1F] text-white px-[20px] h-[44px] flex items-center justify-center rounded-[8px] text-[16px] font-bold transition-colors hover:bg-[#000000] w-full">
                Donate Now
              </Link>
            </div>

            <div className="bg-[#0071E3] p-8 rounded-[20px] flex flex-col shadow-lg transform md:-translate-y-2 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#34c759] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap">Highly Recommended</div>
              <h3 className="font-heading text-[20px] font-bold text-white mb-3">Give Monthly</h3>
              <p className="font-sans text-[14px] text-white/90 mb-8 flex-grow">Sustain our ongoing work. Highly recommended for US donors.</p>
              <Link href="/give?type=monthly" className="bg-white text-[#0071E3] px-[20px] h-[44px] flex items-center justify-center rounded-[8px] text-[16px] font-bold transition-colors hover:bg-[#f5f5f7] w-full">
                Become a Sustainer
              </Link>
            </div>

            <div className="bg-[#fcfbf9] p-8 rounded-[20px] flex flex-col border border-[#e5e5ea] hover:shadow-lg transition-all duration-300">
              <h3 className="font-heading text-[20px] font-bold text-[#1D1D1F] mb-3">Sponsor</h3>
              <p className="font-sans text-[14px] text-[#86868B] mb-8 flex-grow">Fund a named project from end to end (e.g., a classroom).</p>
              <Link href="/get-involved" className="bg-[#1D1D1F] text-white px-[20px] h-[44px] flex items-center justify-center rounded-[8px] text-[16px] font-bold transition-colors hover:bg-[#000000] w-full">
                Contact Us
              </Link>
            </div>

            <div className="bg-[#fcfbf9] p-8 rounded-[20px] flex flex-col border border-[#e5e5ea] hover:shadow-lg transition-all duration-300">
              <h3 className="font-heading text-[20px] font-bold text-[#1D1D1F] mb-3">Corporate</h3>
              <p className="font-sans text-[14px] text-[#86868B] mb-8 flex-grow">CSR-aligned infrastructure investments with full reporting.</p>
              <Link href="/get-involved" className="bg-white border-2 border-[#E5E5EA] text-[#1D1D1F] px-[20px] h-[44px] flex items-center justify-center rounded-[8px] text-[16px] font-bold transition-colors hover:border-[#1D1D1F] w-full">
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="w-full bg-[#1D1D1F] py-[80px] px-4 text-center">
        <div className="max-w-[720px] mx-auto text-white">
          <p className="font-sans text-[24px] md:text-[32px] font-bold leading-[1.3] mb-8 tracking-tight">
            Empower the next generation through lasting infrastructure.<br />
            Your partnership creates measurable pathways to<br />
            <span className="text-[#34c759]">education and economic independence.</span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/give" className="bg-[#0071e3] text-white px-[32px] h-[52px] inline-flex items-center justify-center rounded-[8px] text-[16px] font-bold transition-all hover:bg-[#0066cc]">
              Support Our Mission
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
