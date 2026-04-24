"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Send } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="w-full bg-[#fcfbf9] text-[#1D1D1F] font-sans selection:bg-[#0071e3] selection:text-white min-h-screen">
      <Header />

      {/* Main Content Area */}
      <section className="relative w-full pt-[140px] md:pt-[180px] pb-[80px] px-4 md:px-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[100px]">
          
          {/* Left Column - Contact Details */}
          <div className="flex flex-col">
            <div className="inline-block bg-[#0071e3] text-white text-[13px] font-bold px-4 py-1.5 rounded-[4px] mb-6 self-start tracking-wider uppercase">
              Contact
            </div>
            
            <h1 className="font-heading text-[40px] md:text-[52px] font-bold text-[#1D1D1F] leading-[1.1] mb-8 tracking-tight">
              Our Location
            </h1>

            {/* Map Box */}
            <div className="w-full h-[240px] bg-[#E5E5EA] rounded-[16px] overflow-hidden mb-10 border border-[#E5E5EA] shadow-sm">
              <iframe 
                src="https://maps.google.com/maps?q=Gudimalkapur,%20Hyderabad&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[20%]"
              ></iframe>
            </div>

            {/* Contact Info List */}
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="text-[#0071e3] mt-1">
                  <Phone size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-heading text-[20px] font-bold text-[#1D1D1F] mb-1">Phone</h3>
                  <a href="tel:040-23372186" className="font-sans text-[16px] text-[#0071e3] hover:underline">040-23372186</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="text-[#0071e3] mt-1">
                  <Mail size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-heading text-[20px] font-bold text-[#1D1D1F] mb-1">Email ID</h3>
                  <a href="mailto:info@mittafoundation.org" className="font-sans text-[16px] text-[#0071e3] hover:underline">info@mittafoundation.org</a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="text-[#0071e3] mt-1">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-heading text-[20px] font-bold text-[#1D1D1F] mb-1">Address</h3>
                  <p className="font-sans text-[16px] text-[#0071e3]">
                    H.No: 12-2-790/148, Gudimalkapur Ayodhya Nagar
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h4 className="font-heading text-[18px] font-bold text-[#1D1D1F] mb-4">Follow us on</h4>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/mittafoundation368140126/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#3b5998] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm">
                  <Facebook size={20} fill="currentColor" strokeWidth={0} />
                </a>
                <a href="https://www.instagram.com/mittafoundation/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#e1306c] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm">
                  <Instagram size={20} />
                </a>
                <a href="https://www.youtube.com/@MittaFoundation" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#ff0000] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm">
                  <Youtube size={20} fill="currentColor" strokeWidth={0} />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column - Enquiry Form */}
          <div className="flex flex-col h-full lg:pt-[70px]">
            <div className="bg-white rounded-[24px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-[#E5E5EA] h-full flex flex-col">
              <h2 className="font-heading text-[28px] font-bold text-[#1D1D1F] mb-8">Enquiry Form</h2>
              
              <form className="flex-1 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-bold text-[#1D1D1F] uppercase tracking-wider">First Name</label>
                    <input 
                      type="text" 
                      placeholder="Jane"
                      className="w-full px-4 py-3 bg-[#fcfbf9] border border-[#E5E5EA] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0071e3] focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-bold text-[#1D1D1F] uppercase tracking-wider">Last Name</label>
                    <input 
                      type="text" 
                      placeholder="Doe"
                      className="w-full px-4 py-3 bg-[#fcfbf9] border border-[#E5E5EA] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0071e3] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-bold text-[#1D1D1F] uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 bg-[#fcfbf9] border border-[#E5E5EA] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0071e3] focus:border-transparent transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-bold text-[#1D1D1F] uppercase tracking-wider">Phone Number <span className="text-[#86868B] font-normal text-[12px] normal-case">(Optional)</span></label>
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000"
                    className="w-full px-4 py-3 bg-[#fcfbf9] border border-[#E5E5EA] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0071e3] focus:border-transparent transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-[14px] font-bold text-[#1D1D1F] uppercase tracking-wider">Your Message</label>
                  <textarea 
                    placeholder="How can we help you?"
                    className="w-full h-full min-h-[120px] px-4 py-3 bg-[#fcfbf9] border border-[#E5E5EA] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0071e3] focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>

                <button type="submit" className="mt-4 w-full bg-[#1D1D1F] text-white px-6 py-4 rounded-[8px] font-bold text-[16px] hover:bg-[#000000] hover:-translate-y-1 transition-all shadow-[0_10px_20px_rgba(0,0,0,0.1)] flex items-center justify-center gap-2 group">
                  Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* Pure Black Call to Action Block */}
      <section className="w-full px-4 md:px-10 pb-[100px] mt-10">
        <div className="max-w-[1200px] mx-auto bg-[#000000] rounded-[24px] p-[60px] md:p-[80px] text-center shadow-2xl relative overflow-hidden group">
          
          <div className="relative z-10 flex flex-col items-center justify-center gap-8">
            <h2 className="font-heading text-[32px] md:text-[44px] lg:text-[52px] font-bold text-white leading-[1.15] tracking-[-0.02em] max-w-[800px]">
              Together, let us ensure to provide <span className="text-white">child education.</span>
              <br className="hidden md:block"/>
              Do your bit by contributing a small amount today!
            </h2>
            
            <Link href="/give" className="mt-4 bg-[#FF9500] text-[#1D1D1F] px-[40px] h-[64px] inline-flex items-center justify-center rounded-full text-[18px] font-bold hover:bg-[#FF9500]/90 transition-all shadow-none hover:scale-105">
              Sponsor A Child
            </Link>
          </div>
          
        </div>
      </section>

      <Footer />
    </div>
  );
}
