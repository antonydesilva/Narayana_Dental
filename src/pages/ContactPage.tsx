import React from 'react';
import { PageView } from '../types';

interface ContactPageProps {
  onNavigate: (page: PageView) => void;
  onOpenBooking: () => void;
  onOpenLightbox?: (item: any) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenLightbox
}) => {
  return (
    <div className="w-full bg-[#f8f9ff] min-h-screen">
      <div className="flex flex-col w-full">

        {/* 1. TOP AMBIENT GLOW / HEADER BACKGROUND INTEGRATION */}
        <section className="relative w-full bg-[#eef4ff] overflow-hidden pb-12 sm:pb-16 border-b border-[#dde9fb]/80">
          {/* Subtle Ambient Glows */}
          <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#cde5ff]/50 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-20 -left-20 w-80 h-80 bg-[#d3e3ff]/40 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-8 sm:pt-12 relative z-10">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#43474f] mb-4">
              <button 
                onClick={() => onNavigate('home')} 
                className="hover:text-[#002548] cursor-pointer transition-colors"
              >
                Home
              </button>
              <span>/</span>
              <span className="text-[#002548]">Contact Us</span>
            </div>

            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#d7e4f5] shadow-xs mb-4">
              <span className="w-2 h-2 rounded-full bg-[#24638f]" />
              <span className="text-xs font-bold text-[#002548] tracking-widest uppercase font-display">
                GET IN TOUCH
              </span>
            </div>

            {/* Hero Titles */}
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#002548] tracking-tight mb-3 font-display leading-tight">
                Visit Narayana Dental Clinic
              </h1>
              <p className="text-base sm:text-lg text-[#43474f] leading-relaxed">
                Have a question or want to schedule a dental consultation? Get in touch with our clinic team for personalized care, compassionate support, and swift assistance.
              </p>
            </div>

            {/* Quick Clinic Status Ribbon */}
            <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#101c29] shadow-xs border border-[#dde9fb]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#238B62] animate-pulse" />
                <span className="text-xs font-semibold text-[#238B62]">
                  Clinic Open Today: 10:00 AM – 8:00 PM
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-[#43474f] font-medium">
                <span className="material-symbols-outlined text-[18px] text-[#24638f]">verified_user</span>
                <span>Austin Town &amp; Neelasandra Serving Since 2011</span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-[#43474f] font-medium">
                <span className="material-symbols-outlined text-[18px] text-[#24638f]">call</span>
                <span>Urgent toothache assistance available</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. TWO-COLUMN MAIN CONTENT SECTION */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 w-full py-10 sm:py-12 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: Contact Information */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div>
                <div className="flex items-center gap-1.5 text-[#24638f] mb-1">
                  <span className="material-symbols-outlined text-[20px]">support_agent</span>
                  <span className="text-xs uppercase tracking-wider font-semibold">Immediate Assistance</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#002548] tracking-tight font-display">
                  Contact Information
                </h2>
                <p className="text-xs sm:text-sm text-[#43474f] mt-1 leading-relaxed">
                  Directly reach our clinic reception and duty doctors for enquiries, directions, and emergency dental assistance.
                </p>
              </div>

              {/* Address Card */}
              <div className="p-6 bg-white rounded-2xl border border-[#dde9fb] shadow-sm hover:shadow-md transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#dde9fb] flex items-center justify-center shrink-0 text-[#123b66] group-hover:bg-[#123b66] group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[26px]">location_on</span>
                  </div>
                  <div className="flex flex-col min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-base font-bold text-[#002548]">Clinic Address</h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#eef4ff] text-[#43474f] text-[11px] font-semibold">
                        Bengaluru
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-[#101c29] leading-snug">
                      #1616, BDA Flats, Austin Town Main Road, Neelasandra, Bengaluru – 560047
                    </p>
                    <div className="mt-3 p-3 rounded-xl bg-[#eef4ff] flex items-start gap-2 text-[#43474f] text-xs">
                      <span className="material-symbols-outlined text-[18px] text-[#24638f] mt-0.5 shrink-0">info</span>
                      <span>Landmark: Near Austin Town BDA complex, easily accessible ground floor entrance with parking space.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Numbers Card */}
              <div className="p-6 bg-white rounded-2xl border border-[#dde9fb] shadow-sm hover:shadow-md transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#dde9fb] flex items-center justify-center shrink-0 text-[#123b66] group-hover:bg-[#123b66] group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[26px]">call</span>
                  </div>
                  <div className="flex flex-col min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-base font-bold text-[#002548]">Phone Lines</h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#cde5ff] text-[#001d31] text-[10px] font-bold">
                        Reception &amp; Emergency Assistance
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <a 
                        className="flex flex-col p-3 rounded-xl bg-[#eef4ff] hover:bg-[#e4efff] transition-colors" 
                        href="tel:+916360654061"
                      >
                        <span className="text-[11px] text-[#43474f] font-medium">Primary Clinic Line</span>
                        <span className="text-base text-[#002548] font-bold tracking-tight">+91 6360654061</span>
                      </a>
                      <a 
                        className="flex flex-col p-3 rounded-xl bg-[#eef4ff] hover:bg-[#e4efff] transition-colors" 
                        href="tel:+919739628057"
                      >
                        <span className="text-[11px] text-[#43474f] font-medium">Secondary Support</span>
                        <span className="text-base text-[#002548] font-bold tracking-tight">+91 9739628057</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening Hours Card */}
              <div className="p-6 bg-white rounded-2xl border border-[#dde9fb] shadow-sm hover:shadow-md transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#dde9fb] flex items-center justify-center shrink-0 text-[#123b66] group-hover:bg-[#123b66] group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[26px]">schedule</span>
                  </div>
                  <div className="flex flex-col min-w-0 flex-1">
                    <h3 className="text-base font-bold text-[#002548] mb-2">Opening Hours</h3>
                    <div className="space-y-1.5 text-xs sm:text-sm">
                      <div className="flex justify-between items-center py-1">
                        <span className="text-[#43474f] font-medium">Monday – Saturday</span>
                        <span className="font-bold text-[#002548] px-2.5 py-0.5 rounded-md bg-[#eef4ff]">
                          10:00 AM – 8:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-1">
                        <span className="text-[#43474f] font-medium">Sunday</span>
                        <span className="font-bold text-[#002548] px-2.5 py-0.5 rounded-md bg-[#eef4ff]">
                          10:00 AM – 2:00 PM
                        </span>
                      </div>
                    </div>
                    <p className="mt-3 text-[#43474f] text-xs italic bg-[#eef4ff] p-3 rounded-xl">
                      &ldquo;Walk-ins welcome during working hours; appointment bookings recommended to avoid waiting.&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Action Buttons Row */}
              <div className="pt-1 flex flex-wrap sm:flex-nowrap items-center gap-3">
                <a 
                  className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 h-12 px-4 rounded-xl bg-[#123b66] text-white text-xs sm:text-sm font-semibold shadow-sm hover:bg-[#24638f] hover:shadow-md transition-all active:scale-[0.98]" 
                  href="tel:+916360654061"
                >
                  <span className="material-symbols-outlined text-[20px]">call</span>
                  <span>Call Clinic</span>
                </a>
                <a 
                  className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 h-12 px-4 rounded-xl bg-[#238B62] text-white text-xs sm:text-sm font-semibold shadow-sm hover:bg-[#1b6e4e] hover:shadow-md transition-all active:scale-[0.98]" 
                  href="https://wa.me/916360654061" 
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  <span>WhatsApp Us</span>
                </a>
                <a 
                  className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 h-12 px-4 rounded-xl bg-[#dde9fb] text-[#002548] text-xs sm:text-sm font-semibold shadow-2xs hover:bg-[#d7e4f5] transition-all active:scale-[0.98]" 
                  href="https://maps.google.com/?q=Narayana+Dental+Clinic+Austin+Town+Bengaluru" 
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[20px]">near_me</span>
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: Map Visual & Consultation Action */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              
              {/* Interactive Styled Map Card */}
              <div className="relative bg-white rounded-2xl border border-[#dde9fb] shadow-sm overflow-hidden flex flex-col">
                {/* Top Map Header Bar */}
                <div className="px-5 py-3.5 bg-[#eef4ff] border-b border-[#dde9fb] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#24638f] text-[20px]">map</span>
                    <span className="text-xs sm:text-sm font-bold text-[#002548]">Austin Town &amp; Neelasandra Map View</span>
                  </div>
                  <span className="text-[11px] text-[#43474f] font-mono">12.9610° N, 77.6186° E</span>
                </div>

                {/* Map Container with High-Res Reference Graphic */}
                <div className="relative w-full h-[320px] bg-[#dde9fb] overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center" 
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBXV_ComCzfbpkCbgQCzjdXoVpbfp7HIlJyH1PrMQ5__esi90I7Rs5VxoVemjJmNnNnjbIYXmlxKl-Ltc1hVto4u0TO6qgCQDIWdtu6qVFmyK4U750EHwcmHI89EAf_kToY7xNlzFSdXbkwS9pX7ZslzN4LdsHde8FulVwGMitIDtVeLQy-UmtiXJRo9eI20QdbNb22HkzFJ4x61o77gDNrWgUt9Ww7QMzg58_xBZJjfsfz-9GoDE1E')" }}
                  />
                  {/* Map overlay gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002548]/60 via-transparent to-transparent pointer-events-none" />

                  {/* Custom Pin Point Visual */}
                  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
                    <div className="relative flex items-center justify-center">
                      <span className="absolute w-12 h-12 rounded-full bg-[#24638f]/30 animate-ping" />
                      <div className="w-10 h-10 rounded-full bg-[#002548] text-white flex items-center justify-center shadow-2xl z-10">
                        <span className="material-symbols-outlined text-[22px]">dentistry</span>
                      </div>
                    </div>
                    <div className="mt-1 px-3 py-1 rounded-full bg-[#002548] text-white text-[11px] font-bold shadow-lg whitespace-nowrap">
                      Narayana Dental Clinic
                    </div>
                  </div>

                  {/* Floating In-Map Info Card */}
                  <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:max-w-sm p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-100">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-sm font-bold text-[#002548]">Narayana Dental Clinic</h4>
                        <p className="text-xs text-[#43474f] line-clamp-2 mt-0.5">
                          #1616, BDA Flats, Austin Town Main Road, Neelasandra, Bengaluru – 560047
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-[#eef4ff] flex items-center justify-center shrink-0 text-[#24638f]">
                        <span className="material-symbols-outlined text-[18px]">verified</span>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-[#E68A00] text-xs font-semibold">
                      <span>4.9</span>
                      <div className="flex items-center text-[14px]">
                        {[...Array(5)].map((_, i) => (
                          <span 
                            key={i} 
                            className="material-symbols-outlined text-[15px]" 
                            style={{ fontVariationSettings: '"FILL" 1' }}
                          >
                            star
                          </span>
                        ))}
                      </div>
                      <span className="text-[#43474f] font-normal text-[11px]">(Verified Local Business)</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Action within Map Tile */}
                <div className="p-4 bg-white flex items-center justify-between text-xs">
                  <span className="text-[#43474f]">Easy navigation via Richmond Road or Hosur Road</span>
                  <a 
                    className="inline-flex items-center gap-1.5 text-[#24638f] hover:text-[#002548] font-bold transition-colors" 
                    href="https://maps.google.com/?q=Narayana+Dental+Clinic+Austin+Town+Bengaluru" 
                    rel="noopener noreferrer" 
                    target="_blank"
                  >
                    <span>Open in Google Maps</span>
                    <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  </a>
                </div>
              </div>

              {/* Consultation Request Action Card */}
              <div className="p-6 sm:p-7 bg-white rounded-2xl border border-[#dde9fb] shadow-sm relative overflow-hidden">
                <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-[#d3e3ff]/30 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#cde5ff] flex items-center justify-center text-[#001d31]">
                      <span className="material-symbols-outlined text-[22px]">calendar_month</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#dde9fb] text-[#002548] text-[11px] font-bold">
                      Fast Track
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#002548] tracking-tight font-display">
                      Need a Dental Consultation?
                    </h3>
                    <p className="text-xs sm:text-sm text-[#43474f] mt-1 leading-relaxed">
                      Send us your preferred appointment details online and our reception team will call or message you to confirm slot availability.
                    </p>
                  </div>

                  {/* Booking Highlights */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="flex items-center gap-1.5 text-[#43474f] text-xs font-medium">
                      <span className="material-symbols-outlined text-[18px] text-[#238B62]">check_circle</span>
                      <span>Doctor Consultation</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#43474f] text-xs font-medium">
                      <span className="material-symbols-outlined text-[18px] text-[#238B62]">check_circle</span>
                      <span>Digital Diagnostic Review</span>
                    </div>
                  </div>

                  {/* Book CTA Button */}
                  <div className="pt-2">
                    <button
                      onClick={onOpenBooking}
                      className="w-full inline-flex items-center justify-between px-6 h-14 rounded-xl bg-[#123b66] text-white text-sm sm:text-base font-bold shadow-md hover:bg-[#24638f] hover:shadow-xl transition-all group cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[22px]">event_available</span>
                        <span>Book an Appointment</span>
                      </span>
                      <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                        <span className="material-symbols-outlined text-[18px] text-[#ffdad3]">arrow_forward</span>
                      </span>
                    </button>
                  </div>

                  {/* Reassurance Note */}
                  <div className="flex items-center gap-2 text-xs text-[#43474f] pt-1">
                    <span className="text-[#780b00] font-bold">⚡</span>
                    <span>Typical response within 30–60 minutes during clinic hours.</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. CLINIC ATMOSPHERE VISUAL VIGNETTE (3 CARDS) */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 w-full mb-12 sm:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div 
              onClick={() => onNavigate('gallery')}
              className="relative h-48 sm:h-52 rounded-2xl overflow-hidden shadow-xs group cursor-pointer"
            >
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                alt="Modern clean dental consultation operatory at Narayana Dental Clinic" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5z9qoQbPrVwz3ZR5Mp6pcOvc8UJ-1hNLKeCy6nLPSSOrgOxs_qGlbRU7HkOQK7VNTdP1Yn2X5d9k2FnOM5WG0lOEBNo34SMcu7HEazdNzD_Gu147gGUZicTOZ1M3EGLSP3fbA6kEF6u7SU4wGDjcweSF4g1hOcKJrXTcVsRRIH_f2BehqprhqqLrq907E1IVAMXQ9xnU-qtpbZVsFRjzXxEatfo2yrwPm2WPECGMzLylzAvX4g383"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002548]/85 via-transparent to-transparent flex items-end p-4">
                <span className="text-sm sm:text-base text-white font-bold font-display">
                  Pristine Clinical Operatories
                </span>
              </div>
            </div>

            <div 
              onClick={() => onNavigate('gallery')}
              className="relative h-48 sm:h-52 rounded-2xl overflow-hidden shadow-xs group cursor-pointer"
            >
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                alt="Narayana Dental Clinic welcoming reception lounge in Bengaluru" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ_tBFfgQIUD0_y0agIeBo2YQR-paGBa6Sg2mdwr6XlMfBTKv--nFRs9F0hO4Wpxv5Qk_3IQpXvhojIMhmCnoznHb8943GS6_23uxyPjeZ3FPISOvXTte5yfPn5a7fkq_mJOlBEnddyp7pECGfoGZURVuuprEDNsI0PXIgHUVPnzH3Rz_DCNWhhfPBwPwwVWbP0hAYHyVa-xNKk2ECiP1Av5EN4-Tt8fBf_EZooKqSXuokgy0t3-p8"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002548]/85 via-transparent to-transparent flex items-end p-4">
                <span className="text-sm sm:text-base text-white font-bold font-display">
                  Welcoming Patient Reception
                </span>
              </div>
            </div>

            <div 
              onClick={() => onNavigate('gallery')}
              className="relative h-48 sm:h-52 rounded-2xl overflow-hidden shadow-xs group cursor-pointer"
            >
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                alt="Hospital-grade dental sterilization room at Narayana Dental Clinic" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCohxE6VUXAmVanzjmVCUqr1HFCOvXAZ9k8ynbNxMoOblvsbqN5qIu1fwaeJMA7b__b4OTLCImfrujqyR3vmbo4uRb7QFrlP9tWL8uRlO76JuMV7TX9c1v4UrGciHFrw_C4_2wNmUWzI2oNFpfyahrrA5sjcFIpuCFNJUTc2M3W3pVSGsECnMI-tDXPt7rqwOFb668L7pUd6I0qS5thanaF5jem5kbv7w_a24jQuutGDgkajHtolpwx"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002548]/85 via-transparent to-transparent flex items-end p-4">
                <span className="text-sm sm:text-base text-white font-bold font-display">
                  Hospital-Grade Sterilization
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PARKING & ACCESSIBILITY INFO STRIP */}
        <section className="w-full bg-[#eef4ff] py-12 sm:py-16 mb-12 sm:mb-16 border-y border-[#dde9fb]/80">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="mb-8 text-center max-w-xl mx-auto">
              <span className="text-xs uppercase tracking-wider text-[#24638f] font-bold font-display">
                Clinic Amenities
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#002548] mt-1 font-display">
                Comfort &amp; Accessibility for Every Patient
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="p-6 bg-white rounded-2xl border border-[#dde9fb] shadow-2xs flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#eef4ff] flex items-center justify-center shrink-0 text-[#123b66]">
                  <span className="material-symbols-outlined text-[28px]">local_parking</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#002548] mb-1 font-display">
                    Convenient Parking
                  </h4>
                  <p className="text-xs sm:text-sm text-[#43474f] leading-relaxed">
                    Street and designated ground-floor vehicle parking available right in front of the clinic premises on Austin Town Main Road.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="p-6 bg-white rounded-2xl border border-[#dde9fb] shadow-2xs flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#eef4ff] flex items-center justify-center shrink-0 text-[#123b66]">
                  <span className="material-symbols-outlined text-[28px]">accessible</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#002548] mb-1 font-display">
                    Senior &amp; Wheelchair Access
                  </h4>
                  <p className="text-xs sm:text-sm text-[#43474f] leading-relaxed">
                    Step-free ground-floor access designed with thoughtful care for seniors, expectant mothers, and mobility-assisted patients.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="p-6 bg-white rounded-2xl border border-[#dde9fb] shadow-2xs flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#eef4ff] flex items-center justify-center shrink-0 text-[#123b66]">
                  <span className="material-symbols-outlined text-[28px]">sanitizer</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#002548] mb-1 font-display">
                    Class-B Sterilization
                  </h4>
                  <p className="text-xs sm:text-sm text-[#43474f] leading-relaxed">
                    Strict 4-tier autoclave sanitization matching international biosafety protocols, ensuring an infection-free clinical environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. INTERACTIVE FAQ / ROUTE ASSISTANCE ACCORDION SECTION */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 w-full mb-16">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#dde9fb] shadow-sm">
            <div className="max-w-2xl mb-8">
              <span className="text-xs text-[#24638f] uppercase tracking-wider font-bold font-display">
                Directions &amp; Visiting
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#002548] tracking-tight mt-1 font-display">
                Frequently Asked Questions on Visiting Us
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-5 rounded-2xl bg-[#eef4ff] flex flex-col gap-2 border border-[#dde9fb]/60">
                <h5 className="text-sm sm:text-base font-bold text-[#002548] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#24638f] text-[20px]">directions_bus</span>
                  <span>How do I reach the clinic by public transit?</span>
                </h5>
                <p className="text-xs sm:text-sm text-[#43474f] leading-relaxed pl-7">
                  The clinic is 2 minutes walk from the Austin Town BDA Complex Bus Stop. BMTC buses connecting Shivajinagar, Majestic, and Shanthi Nagar halt regularly.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#eef4ff] flex flex-col gap-2 border border-[#dde9fb]/60">
                <h5 className="text-sm sm:text-base font-bold text-[#002548] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#24638f] text-[20px]">medical_services</span>
                  <span>Do you treat walk-in dental emergencies?</span>
                </h5>
                <p className="text-xs sm:text-sm text-[#43474f] leading-relaxed pl-7">
                  Yes, acute emergencies like toothache, fractured restorations, or facial swellings are prioritized by our duty dental surgeon during clinic hours.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#eef4ff] flex flex-col gap-2 border border-[#dde9fb]/60">
                <h5 className="text-sm sm:text-base font-bold text-[#002548] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#24638f] text-[20px]">payments</span>
                  <span>What payment modes are accepted at the clinic?</span>
                </h5>
                <p className="text-xs sm:text-sm text-[#43474f] leading-relaxed pl-7">
                  We accept UPI (GPay, PhonePe, Paytm), all major credit and debit cards, net banking, and cash for all clinical treatments and consultation fees.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#eef4ff] flex flex-col gap-2 border border-[#dde9fb]/60">
                <h5 className="text-sm sm:text-base font-bold text-[#002548] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#24638f] text-[20px]">badge</span>
                  <span>Can I consult Dr. Prakash and Dr. Madhura directly?</span>
                </h5>
                <p className="text-xs sm:text-sm text-[#43474f] leading-relaxed pl-7">
                  Dr. Prakash and Dr. Madhura are available on scheduled hours. We recommend confirming appointment slots prior to visiting to minimize wait time.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
