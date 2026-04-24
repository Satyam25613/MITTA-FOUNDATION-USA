"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Activity, HeartPulse, Home, Briefcase, Building2, Users, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

type Program = {
  id: string;
  icon: any;
  color: string;
  title: string;
  tagline: string;
  desc: string;
  images?: string[];
  projects: { name: string; detail: string; }[];
  cta: string;
};

export default function ProgramsPage() {
  const programs: Program[] = [
    {
      id: "school-enlightenment",
      icon: BookOpen,
      color: "#0071e3",
      title: "School Enlightenment",
      tagline: "Permanent classrooms. Functional sanitation. Athletic infrastructure.",
      desc: "When a school lacks functional toilets, female students drop out. When classrooms have no roofs, learning stops during the monsoon. We intervene directly by constructing permanent classrooms, sanitation blocks, and sports facilities for government schools in Hyderabad.",
      images: ["/IMAGES/PROGRAM_PAGE/inner-14.jpg", "/IMAGES/PROGRAM_PAGE/inner-12.jpg"],
      projects: [
        { name: "Refah-e-am High School, Haribowli", detail: "Permanent classrooms (2003), basketball court to national standards (2010), $25,000 sanitation block with gender-segregated facilities (2021)." },
        { name: "Saraswatha Academy High School", detail: "18 classrooms constructed, modern washrooms (2019), digital tablets during COVID-19 (2020), free breakfast program (2023), sports facility modernization (2024)." },
        { name: "Refah-e-am High School, Gowlipura", detail: "New classrooms after demolition of dilapidated building. Classroom furniture, computers, and restrooms for boys and girls." },
      ],
      cta: "Support learning infrastructure",
    },
    {
      id: "hospital-renovations",
      icon: HeartPulse,
      color: "#FF9500",
      title: "Hospital Renovations",
      tagline: "Upgrading government healthcare facilities. $30,000 documented investment.",
      desc: "A child cannot learn if their family is destabilised by a healthcare crisis. We invest in renovating government hospital infrastructure — re-plastering walls, installing ceramic cladding, replacing electrical systems, upgrading oxygen supply lines, and refurbishing nurse facilities.",
      images: ["/IMAGES/PROGRAM_PAGE/hospital-renovation.jpg"],
      projects: [
        { name: "Government Hospital, Hyderabad", detail: "Complete ward renovation: cement re-plastering, ceramic tile cladding to 7ft height, enamel wall paint, door and window repainting." },
        { name: "Medical Equipment Upgrades", detail: "Replacement of electrical wiring, switches, ceiling fans, worn-out oxygen pipes, flow meters, and vacuum systems." },
        { name: "Staff & Patient Facilities", detail: "Patient cot and ward furniture repairs. Nurse restroom refurbishment. Corridor wall and ceiling repainting." },
      ],
      cta: "Support healthcare infrastructure",
    },
    {
      id: "vocational-training",
      icon: Activity,
      color: "#34c759",
      title: "Vocational Training",
      tagline: "Documented skills pathways. $6,000 invested in program development.",
      desc: "Education must lead to a livelihood. We fund vocational training programmes that equip young adults with documented, employable skills meeting immediate local market demands. The goal: every participant leaves with a skill that translates directly to income.",
      images: ["/IMAGES/PROGRAM_PAGE/abt-3.jpg"],
      projects: [
        { name: "Youth Skills Programme", detail: "$6,000 deployed for vocational training programme development targeting local employment opportunities." },
      ],
      cta: "Support skills development",
    },
    {
      id: "community-development",
      icon: Users,
      color: "#5856D6",
      title: "Community Development",
      tagline: "Scholarships. Medical clinics. Women's livelihood training.",
      desc: "Sustainable change requires civic participation. We invest in scholarships, income generation grants, free medical clinics, and women's livelihood training — each initiative documented and tied to a specific community outcome.",
      images: ["/IMAGES/PROGRAM_PAGE/abt-4.jpg"],
      projects: [
        { name: "Scholarships & Grants", detail: "Income generation grants and educational scholarships provided to students from economically weaker sections." },
        { name: "Free Medical Clinic, Kachiguda", detail: "Establishment and operation of a free out-patient medical clinic at Kachiguda, Hyderabad." },
        { name: "Sewing Centre, Ranga Reddy", detail: "Training centre for poor women and widows, providing employable tailoring skills in Ranga Reddy District." },
      ],
      cta: "Support community programmes",
    },
    {
      id: "skill-development",
      icon: Briefcase,
      color: "#FF2D55",
      title: "Skill Development",
      tagline: "Practical skills for better job opportunities and personal growth.",
      desc: "Hands-on workshops and mentorship programmes that build practical, employable skills. We focus on opening doors to employment by matching skill development to local market requirements.",
      images: ["/IMAGES/PROGRAM_PAGE/inner-11.jpg"],
      projects: [
        { name: "Pre-Vocational Training Unit", detail: "A dedicated platform and curriculum helping individuals develop practical talents and creative skills, bridging the gap between education and employment." },
        { name: "Mitta Skill Academy", detail: "Hands-on workshops and mentorship programmes designed to equip underserved youth with market-ready vocational skills." }
      ],
      cta: "Support skill development",
    },
    {
      id: "old-age-home",
      icon: Home,
      color: "#AF52DE",
      title: "Medical Assistance & Elder Care",
      tagline: "$5,292 invested in elder care and rehabilitation infrastructure.",
      desc: "To meet the increasing demand for support and maintenance of needy seniors, we invest in old age home construction and rehabilitation of handicapped individuals — extending care to the most vulnerable members of our community.",
      images: ["/IMAGES/PROGRAM_PAGE/inner-4.jpg"],
      projects: [
        { name: "Early Intervention Centre", detail: "Delivering early intervention and rehabilitation services for children diagnosed with profound hearing loss." },
        { name: "Cochlear Implant Support", detail: "Providing crucial medical assistance to help children acquire essential listening, speech, and language skills." },
        { name: "Old Age Home Construction", detail: "$5,292 donated towards old age home construction and specialized rehabilitation facilities for handicapped individuals." }
      ],
      cta: "Support elder care",
    },
  ];

  return (
    <div className="w-full bg-[#fcfbf9] text-[#1D1D1F] font-sans selection:bg-[#0071e3] selection:text-white min-h-screen">

      <Header />

      {/* HERO */}
      <section className="relative w-full pt-[160px] pb-[80px] md:pb-[100px] text-center px-4 bg-[#fcfbf9] border-b border-[#E5E5EA]">
        <div className="max-w-[840px] mx-auto">
          <div className="text-[15px] text-[#0071e3] font-bold tracking-[0.1em] uppercase mb-6 font-sans">OUR WORK</div>
          <h1 className="font-heading text-[44px] md:text-[56px] lg:text-[64px] font-bold text-[#1D1D1F] leading-[1.05] tracking-[-0.03em] mb-6">
            Six programmes.<br />One infrastructure mandate.
          </h1>
          <p className="font-sans text-[18px] md:text-[20px] text-[#4A4A4F] leading-[1.6] max-w-[640px] mx-auto">
            Each programme addresses a specific structural barrier — in education, healthcare, or community livelihood. Every project is named, costed, and documented.
          </p>
        </div>
      </section>

      {/* PROGRAMME GRID */}
      <section className="w-full py-[80px] md:py-[120px] bg-white px-4 md:px-10">
        <div className="max-w-[1200px] mx-auto space-y-[60px]">
          {programs.map((p, i) => (
            <div key={p.id} id={p.id} className="bg-[#fcfbf9] rounded-[24px] border border-[#e5e5ea] p-8 md:p-12 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-300">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                {/* Left: Programme Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-[12px] flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${p.color}12` }}>
                      <p.icon size={24} strokeWidth={1.5} style={{ color: p.color }} />
                    </div>
                    <div>
                      <h2 className="font-heading text-[24px] md:text-[28px] font-bold text-[#1D1D1F] leading-tight tracking-tight">{p.title}</h2>
                    </div>
                  </div>
                  <p className="font-sans text-[16px] font-semibold mb-4" style={{ color: p.color }}>{p.tagline}</p>
                  <p className="font-sans text-[16px] text-[#4A4A4F] leading-[1.7] mb-6">{p.desc}</p>

                  {p.images && p.images.length > 0 && (
                    <div className={`grid gap-4 mb-8 ${p.images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                      {p.images.map((img, idx) => (
                        <div key={idx} className={`relative rounded-[16px] overflow-hidden border border-[#e5e5ea] shadow-sm group ${p.images?.length === 1 ? 'aspect-[21/9]' : 'aspect-[4/3]'}`}>
                          <img src={img} alt={`${p.title} Image ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                      ))}
                    </div>
                  )}

                  <Link href="/give" className="text-[16px] font-sans font-bold transition-colors inline-flex items-center group" style={{ color: p.color }}>
                    {p.cta} <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Right: Named Projects */}
                <div className="lg:w-[420px] flex-shrink-0">
                  <div className="text-[13px] font-bold tracking-[0.1em] uppercase text-[#86868B] mb-4 font-sans">DOCUMENTED PROJECTS</div>
                  <div className="space-y-4">
                    {p.projects.map((proj, j) => (
                      <div key={j} className="bg-white rounded-[16px] p-5 border border-[#e5e5ea]">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: p.color }} />
                          <div>
                            <div className="font-sans text-[15px] font-bold text-[#1D1D1F] mb-1">{proj.name}</div>
                            <div className="font-sans text-[14px] text-[#86868B] leading-[1.5]">{proj.detail}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="w-full py-[80px] md:py-[120px] bg-[#fcfbf9] border-t border-[#e5e5ea] px-4 md:px-10">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="text-[15px] text-[#0071e3] font-bold tracking-[0.1em] uppercase mb-4 font-sans">OUR METHODOLOGY</div>
          <h2 className="font-heading text-[36px] md:text-[44px] font-bold text-[#1D1D1F] leading-[1.2] mb-16 tracking-[-0.02em]">
            How a project works.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-[900px] mx-auto">
            <div className="hidden md:block absolute top-[40px] left-[20%] right-[20%] h-[2px] bg-[#e5e5ea] z-0"></div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-white border-2 border-[#1D1D1F] rounded-full flex items-center justify-center font-heading text-[24px] font-bold text-[#1D1D1F] mb-6 shadow-sm">01</div>
              <h3 className="font-heading text-[20px] font-bold text-[#1D1D1F] mb-3">Identify Need</h3>
              <p className="text-[15px] text-[#4A4A4F] max-w-[260px] leading-[1.6]">Survey government schools and public facilities in Hyderabad. Locate specific infrastructural failures.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-[#0071e3] border-2 border-[#0071e3] rounded-full flex items-center justify-center font-heading text-[24px] font-bold text-white mb-6 shadow-lg shadow-[#0071e3]/30 transform scale-110">02</div>
              <h3 className="font-heading text-[20px] font-bold text-[#0071e3] mb-3">Fund & Build</h3>
              <p className="text-[15px] text-[#4A4A4F] max-w-[260px] leading-[1.6]">Direct capital deployment to contractors for construction, renovation, or equipment procurement.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-white border-2 border-[#34c759] rounded-full flex items-center justify-center font-heading text-[24px] font-bold text-[#34c759] mb-6 shadow-sm">03</div>
              <h3 className="font-heading text-[20px] font-bold text-[#1D1D1F] mb-3">Document Outcome</h3>
              <p className="text-[15px] text-[#4A4A4F] max-w-[260px] leading-[1.6]">Record investment amount, completion date, and resulting operational capacity for donor verification.</p>
            </div>
          </div>

          <div className="mt-[80px] flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/impact" className="bg-white border border-[#e5e5ea] text-[#1D1D1F] px-[32px] h-[52px] inline-flex items-center justify-center rounded-[8px] text-[16px] font-bold transition-all hover:bg-[#f5f5f7] shadow-sm">
              View full impact data
            </Link>
            <Link href="/give" className="bg-[#0071e3] text-white px-[32px] h-[52px] inline-flex items-center justify-center rounded-[8px] text-[16px] font-bold transition-all hover:bg-[#0066cc] shadow-md">
              Support our work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
