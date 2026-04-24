"use client";

import { useState } from "react";
import Link from "next/link";
import { Lock, Heart, ArrowLeft, ShieldCheck, CheckCircle2, ChevronRight } from "lucide-react";

type DonationType = "once" | "monthly" | "sponsor";

export default function GivePage() {
  const [type, setType] = useState<DonationType>("monthly");
  const [amount, setAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState<string>("");

  const handleAmountSelect = (val: number) => {
    setAmount(val);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(null);
    setCustomAmount(e.target.value);
  };

  return (
    <div className="w-full bg-[#fcfbf9] text-[#1D1D1F] font-sans selection:bg-[#0071e3] selection:text-white min-h-screen flex flex-col">

      {/* MINIMAL HEADER (Isolated Flow) */}
      <header className="w-full py-6 px-4 md:px-10 flex justify-between items-center border-b border-[#e5e5ea] bg-white">
        <Link href="/" className="flex items-center text-[#86868B] hover:text-[#1D1D1F] transition-colors font-medium text-[14px]">
          <ArrowLeft size={16} className="mr-2" /> Return to site
        </Link>
        <div className="flex items-center">
          <img src="/IMAGES/logo-2.png" alt="Mitta Foundation" className="h-[40px] w-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] contrast-125" />
        </div>
        <div className="flex items-center text-[#34c759] font-medium text-[13px] gap-1">
          <Lock size={14} /> Secure Checkout
        </div>
      </header>

      {/* MAIN CHECKOUT AREA */}
      <main className="flex-1 w-full max-w-[1000px] mx-auto p-4 md:p-10 flex flex-col lg:flex-row gap-10">

        {/* LEFT: Payment Form */}
        <div className="flex-1">
          <div className="mb-8">
            <h1 className="font-heading text-[32px] md:text-[40px] font-bold text-[#1D1D1F] leading-[1.1] mb-2 tracking-tight">Invest in infrastructure.</h1>
            <p className="font-sans text-[16px] text-[#86868B]">100% of your donation is deployed directly to documented projects.</p>
          </div>

          <div className="bg-white rounded-[24px] border border-[#e5e5ea] shadow-sm p-6 md:p-8 mb-6">

            {/* Type Selector */}
            <div className="flex bg-[#fcfbf9] rounded-[12px] p-1 border border-[#e5e5ea] mb-8">
              <button
                onClick={() => setType("once")}
                className={`flex-1 py-2 rounded-[8px] text-[14px] font-bold transition-all ${type === "once" ? "bg-white text-[#1D1D1F] shadow-sm" : "text-[#86868B] hover:text-[#1D1D1F]"}`}
              >
                Give Once
              </button>
              <button
                onClick={() => setType("monthly")}
                className={`flex-1 py-2 rounded-[8px] text-[14px] font-bold transition-all ${type === "monthly" ? "bg-[#0071e3] text-white shadow-sm" : "text-[#86868B] hover:text-[#1D1D1F]"}`}
              >
                Monthly
              </button>
            </div>

            {/* Amount Grid */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[25, 50, 100, 250, 500].map((val) => (
                <button
                  key={val}
                  onClick={() => handleAmountSelect(val)}
                  className={`py-4 rounded-[12px] text-[20px] font-heading font-bold border transition-all ${amount === val ? "border-[#0071e3] bg-[#0071e3]/5 text-[#0071e3]" : "border-[#e5e5ea] bg-white text-[#1D1D1F] hover:border-[#86868B]"}`}
                >
                  ${val}
                </button>
              ))}
              <div className={`relative border rounded-[12px] overflow-hidden transition-all ${customAmount !== "" ? "border-[#0071e3] bg-[#0071e3]/5" : "border-[#e5e5ea] bg-white focus-within:border-[#0071e3]"}`}>
                <span className={`absolute left-4 top-1/2 -translate-y-1/2 font-heading font-bold text-[20px] ${customAmount !== "" ? "text-[#0071e3]" : "text-[#86868B]"}`}>$</span>
                <input
                  type="number"
                  placeholder="Custom"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className="w-full h-full py-4 pl-8 pr-4 bg-transparent font-heading font-bold text-[20px] text-[#1D1D1F] focus:outline-none placeholder:text-[16px] placeholder:font-sans placeholder:font-normal"
                />
              </div>
            </div>

            {/* Description of impact */}
            <div className="bg-[#fcfbf9] border border-[#e5e5ea] rounded-[12px] p-4 flex items-start gap-3 mb-8">
              <CheckCircle2 size={20} className="text-[#34c759] flex-shrink-0 mt-0.5" />
              <p className="text-[14px] text-[#4A4A4F] leading-[1.5]">
                {type === "monthly" ? "Your monthly investment provides sustainable, predictable funding for our continuous school and hospital renovation projects." : "Your investment directly funds our current infrastructure projects in Hyderabad."}
              </p>
            </div>

            <button className="w-full bg-[#0071e3] text-white h-[56px] rounded-[12px] font-bold text-[18px] hover:bg-[#0066cc] transition-colors flex justify-center items-center gap-2 shadow-md">
              <Heart size={20} className="fill-white" />
              Donate {amount ? `$${amount}` : customAmount ? `$${customAmount}` : ""} {type === "monthly" ? "Monthly" : ""}
            </button>
            <p className="text-center text-[12px] text-[#86868B] mt-4 flex items-center justify-center gap-1">
              <Lock size={12} /> Payments are secure and encrypted.
            </p>
          </div>
        </div>

        {/* RIGHT: Trust Signals */}
        <div className="lg:w-[360px] flex flex-col gap-6">
          <div className="bg-white rounded-[24px] border border-[#e5e5ea] shadow-sm p-6">
            <h3 className="font-heading text-[18px] font-bold text-[#1D1D1F] mb-4 flex items-center gap-2">
              <ShieldCheck size={20} className="text-[#0071e3]" /> The US Trust Bridge
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <CheckCircle2 size={16} className="text-[#34c759] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[14px] text-[#1D1D1F]">100% FCRA Compliant</strong>
                  <p className="text-[13px] text-[#86868B]">Legally authorized to receive foreign funds (Reg No: 368140126).</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 size={16} className="text-[#34c759] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[14px] text-[#1D1D1F]">Direct Impact</strong>
                  <p className="text-[13px] text-[#86868B]">92% of your donation is deployed directly to project infrastructure, with no administrative bloat.</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 size={16} className="text-[#34c759] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[14px] text-[#1D1D1F]">Audited Financials</strong>
                  <p className="text-[13px] text-[#86868B]">Every dollar is tracked and audited annually under Indian trust laws.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-[#fcfbf9] rounded-[24px] border border-[#e5e5ea] shadow-sm p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-white shadow-sm">
              <img src="/IMAGES/dr-mitta-swatantrakala.png" alt="Dr. Mitta Swatantrakala" className="w-full h-full object-cover" />
            </div>
            <p className="text-[14px] text-[#4A4A4F] italic mb-4">"We lived the problem we are solving, and we fund the solutions we build. Your trust is our highest mandate."</p>
            <p className="text-[12px] text-[#86868B] font-bold uppercase tracking-[0.05em]">- Dr. Mitta Swatantrakala</p>
          </div>
        </div>
      </main>

    </div>
  );
}
