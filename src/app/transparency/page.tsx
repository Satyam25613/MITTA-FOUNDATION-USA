"use client";

import Link from "next/link";
import { Download, ShieldCheck, ArrowRight, CheckCircle2, Globe, FileText, Building2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function TransparencyPage() {
  return (
    <div className="w-full bg-[#fcfbf9] text-[#1D1D1F] font-sans selection:bg-[#0071e3] selection:text-white min-h-screen">
      

      <Header />

      {/* HERO / OVERVIEW */}
      <section className="relative w-full pt-[160px] pb-[80px] md:pb-[120px] text-center px-4 bg-[#fcfbf9]">
        <div className="max-w-[840px] mx-auto animate-fade-in-up">
          <div className="text-[13px] text-[#0071e3] font-bold tracking-[0.1em] uppercase mb-6 font-sans">
            TRUST & COMPLIANCE
          </div>
          <h1 className="font-heading text-[44px] md:text-[56px] lg:text-[64px] font-bold text-[#1D1D1F] leading-[1.05] tracking-[-0.03em] mb-6">
            Trust requires proof.
          </h1>
          <p className="font-sans text-[18px] md:text-[20px] text-[#4A4A4F] leading-[1.6] max-w-[640px] mx-auto">
            We are fully documented, audited, and compliant with all Indian statutory requirements for receiving both domestic and international funds. 
          </p>
        </div>
      </section>

      {/* REGISTRATIONS & IDENTIFIERS */}
      <section className="w-full py-[80px] md:py-[100px] bg-white px-4 md:px-10 border-t border-[#e5e5ea]">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="font-heading text-[32px] md:text-[40px] font-bold text-[#1D1D1F] mb-12 tracking-tight text-center">Legal Registrations & Identifiers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#fcfbf9] border border-[#e5e5ea] rounded-[24px] p-8 md:p-10 shadow-sm">
              <div className="w-12 h-12 bg-[#0071e3]/10 rounded-full flex items-center justify-center text-[#0071e3] mb-6">
                <Globe size={24} />
              </div>
              <h3 className="font-heading text-[24px] font-bold text-[#1D1D1F] mb-4">FCRA Status (Foreign Funding)</h3>
              <p className="font-sans text-[16px] text-[#4A4A4F] leading-[1.6] mb-6">
                Mitta Foundation is authorized by the Ministry of Home Affairs to receive foreign contributions, making us a fully compliant partner for US and international donors.
              </p>
              <div className="bg-white border border-[#e5e5ea] p-4 rounded-[12px] flex justify-between items-center">
                <span className="text-[14px] font-bold text-[#86868B] uppercase tracking-[0.05em]">FCRA Registration No.</span>
                <span className="text-[18px] font-bold text-[#1D1D1F]">368140126</span>
              </div>
            </div>

            <div className="bg-[#fcfbf9] border border-[#e5e5ea] rounded-[24px] p-8 md:p-10 shadow-sm">
              <div className="w-12 h-12 bg-[#34c759]/10 rounded-full flex items-center justify-center text-[#34c759] mb-6">
                <Building2 size={24} />
              </div>
              <h3 className="font-heading text-[24px] font-bold text-[#1D1D1F] mb-4">Domestic Compliance</h3>
              <p className="font-sans text-[16px] text-[#4A4A4F] leading-[1.6] mb-6">
                We are fully registered as a charitable trust in India, providing tax exemption benefits for domestic donors.
              </p>
              <div className="space-y-3">
                <div className="bg-white border border-[#e5e5ea] p-4 rounded-[12px] flex justify-between items-center">
                  <span className="text-[14px] font-bold text-[#86868B] uppercase tracking-[0.05em]">12A Registration</span>
                  <span className="text-[16px] font-bold text-[#34c759] flex items-center"><CheckCircle2 size={16} className="mr-1" /> Active</span>
                </div>
                <div className="bg-white border border-[#e5e5ea] p-4 rounded-[12px] flex justify-between items-center">
                  <span className="text-[14px] font-bold text-[#86868B] uppercase tracking-[0.05em]">80G Tax Exemption</span>
                  <span className="text-[16px] font-bold text-[#34c759] flex items-center"><CheckCircle2 size={16} className="mr-1" /> Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALLOCATION METRICS */}
      <section className="w-full py-[100px] md:py-[140px] bg-[#1D1D1F] text-white px-4 md:px-10">
        <div className="max-w-[1000px] mx-auto text-center">
          <div className="w-16 h-16 bg-[#34c759]/20 rounded-full flex items-center justify-center text-[#34c759] mb-8 mx-auto">
            <ShieldCheck size={32} />
          </div>
          <h2 className="font-heading text-[36px] md:text-[48px] font-bold text-white leading-[1.1] mb-6 tracking-tight">
            How we allocate funds.
          </h2>
          <p className="font-sans text-[18px] md:text-[20px] text-white/80 leading-[1.6] max-w-[800px] mx-auto mb-[80px]">
            We run a highly efficient, infrastructure-focused model. Because our founders personally underwrite much of our overhead, an overwhelming majority of your donation goes exactly where you intend it to.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/5 border border-white/10 p-8 rounded-[24px]">
              <div className="text-[56px] font-heading font-bold text-[#34c759] mb-2 leading-none tracking-tighter">92%</div>
              <h3 className="font-sans text-[20px] font-bold text-white mb-2">Direct Programs</h3>
              <p className="text-[15px] text-white/70 leading-[1.6]">Capital deployed directly to infrastructure construction, medical equipment, or vocational training sponsorships.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-[24px]">
              <div className="text-[56px] font-heading font-bold text-white mb-2 leading-none tracking-tighter">5%</div>
              <h3 className="font-sans text-[20px] font-bold text-white mb-2">Operations</h3>
              <p className="text-[15px] text-white/70 leading-[1.6]">Staffing for project monitoring, community liaison, and local coordination in Hyderabad.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-[24px]">
              <div className="text-[56px] font-heading font-bold text-white mb-2 leading-none tracking-tighter">3%</div>
              <h3 className="font-sans text-[20px] font-bold text-white mb-2">Administration</h3>
              <p className="text-[15px] text-white/70 leading-[1.6]">Legal compliance, banking fees, and mandatory auditing requirements to maintain FCRA and 80G status.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE US GIVING PATHWAY */}
      <section id="us-giving" className="w-full py-[100px] md:py-[140px] bg-white px-4 md:px-10 border-b border-[#E5DFD5]">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <div className="text-[13px] text-[#0071e3] font-bold tracking-[0.1em] uppercase mb-4 font-sans">US DONOR COMPLIANCE</div>
              <h2 className="font-heading text-[32px] md:text-[44px] font-bold text-[#1D1D1F] leading-[1.1] mb-6 tracking-tight">The US Giving Bridge</h2>
              <div className="space-y-6 font-sans text-[16px] text-[#4A4A4F] leading-[1.6] mb-8">
                <p>
                  Sending money to India can be legally complex and untransparent. Mitta Foundation removes this friction for the US diaspora.
                </p>
                <p>
                  Because we maintain full FCRA compliance, we can legally and transparently receive foreign funds directly into our government-mandated FCRA bank account at SBI New Delhi. We then transfer these funds to our operational accounts in Hyderabad to deploy toward infrastructure.
                </p>
                <div className="bg-[#fcfbf9] border-l-4 border-[#0071e3] p-5 rounded-r-[12px] border-y border-r border-[#e5e5ea]">
                  <p className="font-bold text-[#1D1D1F] mb-1">Are US donations tax-deductible?</p>
                  <p className="text-[15px]">We are actively finalizing our US 501(c)(3) partnerships to provide automatic tax-deductibility for US donors. In the interim, all transfers are strictly documented for your records.</p>
                </div>
              </div>
              <Link href="/give" className="bg-[#0071e3] text-white px-[28px] h-[52px] inline-flex items-center justify-center rounded-[8px] text-[16px] font-bold transition-all hover:bg-[#0066cc]">
                Make an International Donation
              </Link>
            </div>
            
            <div className="w-full md:w-[400px] bg-[#fcfbf9] border border-[#e5e5ea] rounded-[24px] p-8 shadow-sm">
              <h3 className="font-heading text-[22px] font-bold text-[#1D1D1F] mb-6">Financial Reports</h3>
              <p className="font-sans text-[15px] text-[#86868B] mb-8">We publish our audited financials annually in accordance with Indian trust laws.</p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white border border-[#e5e5ea] rounded-[12px] hover:border-[#0071e3] cursor-pointer transition-colors group">
                  <div className="flex items-center gap-3">
                    <FileText size={20} className="text-[#86868B] group-hover:text-[#0071e3]" />
                    <span className="font-bold text-[#1D1D1F]">Annual Report 2023-24</span>
                  </div>
                  <Download size={18} className="text-[#0071e3]" />
                </div>
                <div className="flex items-center justify-between p-4 bg-white border border-[#e5e5ea] rounded-[12px] hover:border-[#0071e3] cursor-pointer transition-colors group">
                  <div className="flex items-center gap-3">
                    <FileText size={20} className="text-[#86868B] group-hover:text-[#0071e3]" />
                    <span className="font-bold text-[#1D1D1F]">Audited Financials 2023</span>
                  </div>
                  <Download size={18} className="text-[#0071e3]" />
                </div>
                <div className="flex items-center justify-between p-4 bg-white border border-[#e5e5ea] rounded-[12px] hover:border-[#0071e3] cursor-pointer transition-colors group opacity-60">
                  <div className="flex items-center gap-3">
                    <FileText size={20} className="text-[#86868B]" />
                    <span className="font-bold text-[#1D1D1F]">FCRA Returns (Quarterly)</span>
                  </div>
                  <ArrowRight size={18} className="text-[#86868B]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
