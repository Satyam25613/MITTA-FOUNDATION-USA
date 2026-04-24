"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin, Send, Building2, User, Users, Globe } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

type IntentType = "volunteer" | "corporate" | "press" | "institutional" | "general" | null;

export default function GetInvolvedPage() {
  const [intent, setIntent] = useState<IntentType>("general");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleIntentSelect = (selectedIntent: IntentType) => {
    setIntent(selectedIntent);
    setIsSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="w-full bg-[#fcfbf9] text-[#1D1D1F] font-sans selection:bg-[#0071e3] selection:text-white min-h-screen">
      

      <Header />

      {/* HERO / INTENT SELECTOR */}
      <section className="relative w-full pt-[160px] pb-[80px] px-4 md:px-10 bg-[#fcfbf9] border-b border-[#e5e5ea]">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16">
          
          {/* LEFT: Copy & Intent Buttons */}
          <div className="flex-1 lg:max-w-[500px]">
            <div className="text-[13px] text-[#0071e3] font-bold tracking-[0.1em] uppercase mb-6 font-sans">
              PARTNER WITH US
            </div>
            <h1 className="font-heading text-[44px] md:text-[56px] font-bold text-[#1D1D1F] leading-[1.05] tracking-[-0.03em] mb-6">
              Let's build together.
            </h1>
            <p className="font-sans text-[18px] text-[#4A4A4F] leading-[1.6] mb-10">
              Whether you are a US corporate entity looking for verified CSR deployment, an institutional partner, or an individual wanting to volunteer, we route your inquiry directly to the right decision-maker.
            </p>

            <div className="space-y-3">
              <p className="font-bold text-[14px] text-[#86868B] uppercase tracking-[0.05em] mb-4">Select your intent to proceed:</p>
              
              <button 
                onClick={() => handleIntentSelect("general")}
                className={`w-full text-left p-4 rounded-[12px] border ${intent === 'general' ? 'border-[#0071e3] bg-[#0071e3]/5 shadow-sm' : 'border-[#e5e5ea] bg-white hover:border-[#1D1D1F]'} transition-all flex items-center justify-between group`}
              >
                <div className="flex items-center gap-3">
                  <Mail size={20} className={intent === 'general' ? 'text-[#0071e3]' : 'text-[#86868B]'} />
                  <span className={`font-bold ${intent === 'general' ? 'text-[#0071e3]' : 'text-[#1D1D1F]'}`}>General Inquiry</span>
                </div>
                <ArrowRight size={16} className={`transition-transform ${intent === 'general' ? 'text-[#0071e3] translate-x-1' : 'text-transparent group-hover:text-[#1D1D1F]'}`} />
              </button>

              <button 
                onClick={() => handleIntentSelect("corporate")}
                className={`w-full text-left p-4 rounded-[12px] border ${intent === 'corporate' ? 'border-[#0071e3] bg-[#0071e3]/5 shadow-sm' : 'border-[#e5e5ea] bg-white hover:border-[#1D1D1F]'} transition-all flex items-center justify-between group`}
              >
                <div className="flex items-center gap-3">
                  <Building2 size={20} className={intent === 'corporate' ? 'text-[#0071e3]' : 'text-[#86868B]'} />
                  <span className={`font-bold ${intent === 'corporate' ? 'text-[#0071e3]' : 'text-[#1D1D1F]'}`}>Corporate Partnership / CSR</span>
                </div>
                <ArrowRight size={16} className={`transition-transform ${intent === 'corporate' ? 'text-[#0071e3] translate-x-1' : 'text-transparent group-hover:text-[#1D1D1F]'}`} />
              </button>

              <button 
                onClick={() => handleIntentSelect("institutional")}
                className={`w-full text-left p-4 rounded-[12px] border ${intent === 'institutional' ? 'border-[#0071e3] bg-[#0071e3]/5 shadow-sm' : 'border-[#e5e5ea] bg-white hover:border-[#1D1D1F]'} transition-all flex items-center justify-between group`}
              >
                <div className="flex items-center gap-3">
                  <Globe size={20} className={intent === 'institutional' ? 'text-[#0071e3]' : 'text-[#86868B]'} />
                  <span className={`font-bold ${intent === 'institutional' ? 'text-[#0071e3]' : 'text-[#1D1D1F]'}`}>Institutional / Foundation</span>
                </div>
                <ArrowRight size={16} className={`transition-transform ${intent === 'institutional' ? 'text-[#0071e3] translate-x-1' : 'text-transparent group-hover:text-[#1D1D1F]'}`} />
              </button>

              <button 
                onClick={() => handleIntentSelect("volunteer")}
                className={`w-full text-left p-4 rounded-[12px] border ${intent === 'volunteer' ? 'border-[#0071e3] bg-[#0071e3]/5 shadow-sm' : 'border-[#e5e5ea] bg-white hover:border-[#1D1D1F]'} transition-all flex items-center justify-between group`}
              >
                <div className="flex items-center gap-3">
                  <Users size={20} className={intent === 'volunteer' ? 'text-[#0071e3]' : 'text-[#86868B]'} />
                  <span className={`font-bold ${intent === 'volunteer' ? 'text-[#0071e3]' : 'text-[#1D1D1F]'}`}>Volunteer / Medical Mission</span>
                </div>
                <ArrowRight size={16} className={`transition-transform ${intent === 'volunteer' ? 'text-[#0071e3] translate-x-1' : 'text-transparent group-hover:text-[#1D1D1F]'}`} />
              </button>
            </div>
          </div>

          {/* RIGHT: Dynamic Form Area */}
          <div className="flex-1 bg-white rounded-[24px] border border-[#e5e5ea] shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-8 md:p-12">
            {!intent ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-[#86868B] py-20">
                <User size={48} className="mb-4 opacity-20" />
                <p className="text-[18px]">Select an intent on the left to securely route your inquiry.</p>
              </div>
            ) : isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-16 h-16 bg-[#34c759]/10 rounded-full flex items-center justify-center text-[#34c759] mb-6">
                  <Send size={28} />
                </div>
                <h3 className="font-heading text-[28px] font-bold text-[#1D1D1F] mb-4">Request Sent</h3>
                <p className="text-[16px] text-[#4A4A4F]">Your inquiry has been routed to the appropriate director. We will respond within 48 hours.</p>
                <button onClick={() => setIntent(null)} className="mt-8 text-[#0071e3] font-bold hover:underline">Send another message</button>
              </div>
            ) : (
              <div className="animate-fade-in-up">
                <div className="mb-8 border-b border-[#e5e5ea] pb-6">
                  <h3 className="font-heading text-[24px] font-bold text-[#1D1D1F] mb-2">
                    {intent === 'corporate' && "Corporate CSR Inquiry"}
                    {intent === 'institutional' && "Institutional Partnership"}
                    {intent === 'volunteer' && "Volunteer Application"}
                    {intent === 'general' && "General Contact"}
                  </h3>
                  <p className="text-[14px] text-[#86868B]">
                    {intent === 'corporate' && "Connect with our infrastructure deployment team to align with your corporate CSR mandates."}
                    {intent === 'institutional' && "Discuss large-scale infrastructure funding or grant applications."}
                    {intent === 'volunteer' && "Join our medical missions or assist with operational capacity in Hyderabad."}
                    {intent === 'general' && "Have a question? Send us a direct message."}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[13px] font-bold text-[#86868B] uppercase tracking-[0.05em] mb-2">First Name</label>
                      <input required type="text" className="w-full bg-[#fcfbf9] border border-[#e5e5ea] rounded-[8px] px-4 py-3 text-[15px] focus:outline-none focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3] transition-all" />
                    </div>
                    <div>
                      <label className="block text-[13px] font-bold text-[#86868B] uppercase tracking-[0.05em] mb-2">Last Name</label>
                      <input required type="text" className="w-full bg-[#fcfbf9] border border-[#e5e5ea] rounded-[8px] px-4 py-3 text-[15px] focus:outline-none focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3] transition-all" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-[13px] font-bold text-[#86868B] uppercase tracking-[0.05em] mb-2">Email Address</label>
                    <input required type="email" className="w-full bg-[#fcfbf9] border border-[#e5e5ea] rounded-[8px] px-4 py-3 text-[15px] focus:outline-none focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3] transition-all" />
                  </div>

                  {(intent === 'corporate' || intent === 'institutional') && (
                    <div>
                      <label className="block text-[13px] font-bold text-[#86868B] uppercase tracking-[0.05em] mb-2">Organization Name</label>
                      <input required type="text" className="w-full bg-[#fcfbf9] border border-[#e5e5ea] rounded-[8px] px-4 py-3 text-[15px] focus:outline-none focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3] transition-all" />
                    </div>
                  )}

                  <div>
                    <label className="block text-[13px] font-bold text-[#86868B] uppercase tracking-[0.05em] mb-2">Message</label>
                    <textarea required rows={4} className="w-full bg-[#fcfbf9] border border-[#e5e5ea] rounded-[8px] px-4 py-3 text-[15px] focus:outline-none focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3] transition-all resize-none"></textarea>
                  </div>

                  <button type="submit" className="w-full bg-[#0071e3] text-white h-[52px] rounded-[8px] font-bold text-[16px] hover:bg-[#0066cc] transition-colors mt-4">
                    Send Request
                  </button>
                </form>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* DIRECT CONTACT INFO */}
      <section className="w-full py-[80px] md:py-[100px] bg-white px-4 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-[840px] mx-auto">
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#fcfbf9] border border-[#e5e5ea] rounded-full flex items-center justify-center text-[#1D1D1F] mb-4">
                <MapPin size={20} />
              </div>
              <h3 className="font-bold text-[16px] text-[#1D1D1F] mb-2">Global Headquarters</h3>
              <p className="text-[14px] text-[#86868B] leading-[1.6]">H.No: 12-2-790/148, Gudimalkapur<br/>Ayodhya Nagar, Hyderabad-500028</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#fcfbf9] border border-[#e5e5ea] rounded-full flex items-center justify-center text-[#1D1D1F] mb-4">
                <Mail size={20} />
              </div>
              <h3 className="font-bold text-[16px] text-[#1D1D1F] mb-2">Direct Email</h3>
              <p className="text-[14px] text-[#0071e3] font-bold hover:underline cursor-pointer">partnerships@mittafoundation.org</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#fcfbf9] border border-[#e5e5ea] rounded-full flex items-center justify-center text-[#1D1D1F] mb-4">
                <Globe size={20} />
              </div>
              <h3 className="font-bold text-[16px] text-[#1D1D1F] mb-2">US Operations</h3>
              <p className="text-[14px] text-[#86868B] leading-[1.6]">US 501(c)(3) processing available.<br/>Select 'Corporate' in intent selector.</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
