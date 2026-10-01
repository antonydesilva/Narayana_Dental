import React from 'react';
import { PageView } from '../types';
import { CLINIC_INFO } from '../data/clinicData';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="w-full bg-white border-t border-[#dde9fb] mt-16 sm:mt-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        
        {/* Column 1: Brand & Intro */}
        <div className="flex flex-col gap-4">
          <div 
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center cursor-pointer group select-none"
          >
            <img 
              alt="Narayana Dental Clinic" 
              className="h-11 sm:h-13 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]" 
              src="/logo.png"
            />
          </div>
          <p className="text-xs font-semibold text-[#24638f] tracking-wider uppercase">
            Quality Dentistry Since 2011
          </p>
          <p className="text-xs sm:text-sm text-[#43474f] leading-relaxed">
            Providing compassionate, state-of-the-art dental care with uncompromising hygiene and clinical expertise. Rooted in patient reassurance and multigenerational community trust across Bengaluru.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-base font-bold text-[#002548] font-display">Quick Links</h4>
          <ul className="flex flex-col gap-2 text-xs sm:text-sm text-[#43474f]">
            <li>
              <button 
                onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="hover:text-[#002548] transition-colors cursor-pointer text-left"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="hover:text-[#002548] transition-colors cursor-pointer text-left"
              >
                About Us
              </button>
            </li>
            <li>
              <button 
                onClick={() => { onNavigate('doctors'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="hover:text-[#002548] transition-colors cursor-pointer text-left"
              >
                Our Doctors
              </button>
            </li>
            <li>
              <button 
                onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="hover:text-[#002548] transition-colors cursor-pointer text-left"
              >
                Services
              </button>
            </li>
            <li>
              <button 
                onClick={() => { onNavigate('gallery'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="hover:text-[#002548] transition-colors cursor-pointer text-left"
              >
                Clinic Gallery
              </button>
            </li>
            <li>
              <button 
                onClick={() => { onNavigate('reviews'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="hover:text-[#002548] transition-colors cursor-pointer text-left"
              >
                Patient Reviews
              </button>
            </li>
            <li>
              <button 
                onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="hover:text-[#002548] transition-colors cursor-pointer text-left"
              >
                Contact &amp; Location
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Specialized Treatments */}
        <div className="flex flex-col gap-4">
          <h4 className="text-base font-bold text-[#002548] font-display">Specialized Treatments</h4>
          <ul className="flex flex-col gap-2 text-xs sm:text-sm text-[#43474f]">
            <li>
              <button 
                onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="hover:text-[#002548] transition-colors cursor-pointer text-left"
              >
                Dental Implants
              </button>
            </li>
            <li>
              <button 
                onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="hover:text-[#002548] transition-colors cursor-pointer text-left"
              >
                Root Canal Treatment
              </button>
            </li>
            <li>
              <button 
                onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="hover:text-[#002548] transition-colors cursor-pointer text-left"
              >
                Braces &amp; Orthodontics
              </button>
            </li>
            <li>
              <button 
                onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="hover:text-[#002548] transition-colors cursor-pointer text-left"
              >
                Cosmetic Dentistry
              </button>
            </li>
            <li>
              <button 
                onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="hover:text-[#002548] transition-colors cursor-pointer text-left"
              >
                Child Dental Care
              </button>
            </li>
            <li>
              <button 
                onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="hover:text-[#002548] transition-colors cursor-pointer text-left"
              >
                Digital X-Ray &amp; Diagnostics
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Clinic Info */}
        <div className="flex flex-col gap-4">
          <h4 className="text-base font-bold text-[#002548] font-display">Clinic Info</h4>
          <div className="flex flex-col gap-3 text-xs sm:text-sm text-[#43474f]">
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-[18px] text-[#24638f] mt-0.5 shrink-0">location_on</span>
              <span>#1616, BDA Flats, Austin Town Main Road, Neelasandra, Bengaluru – 560047</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-[#24638f] shrink-0">call</span>
              <span>Phones: 6360654061 / 9739628057</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-[#24638f] shrink-0">chat</span>
              <a 
                className="text-[#24638f] font-semibold hover:underline" 
                href="https://wa.me/916360654061" 
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Consultation
              </a>
            </div>
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-[18px] text-[#24638f] mt-0.5 shrink-0">schedule</span>
              <div>
                <p>Mon-Sat: 10AM - 8PM</p>
                <p>Sun: 10AM - 2PM</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-[#eef4ff] border-t border-[#dde9fb] py-4">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-[#43474f]">
          <p>© 2026 Narayana Dental Clinic. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-[#002548] transition-colors cursor-pointer">Privacy Policy</span>
            <span>|</span>
            <span className="hover:text-[#002548] transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
