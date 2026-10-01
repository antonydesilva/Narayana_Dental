import React, { useState } from 'react';
import { PageView } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import { 
  Phone, 
  Clock, 
  Calendar, 
  Menu, 
  X, 
  User, 
  ChevronRight
} from 'lucide-react';

interface HeaderProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  onOpenBooking: (doctorPreference?: string, servicePreference?: string) => void;
  onOpenPatientModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking,
  onOpenPatientModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: PageView }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Doctors', page: 'doctors' },
    { label: 'Services', page: 'services' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'Reviews', page: 'reviews' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 left-0 w-full z-50 shadow-[0_1px_8px_rgba(0,0,0,0.04)] bg-white">
      {/* Top Announcement Bar (Navy #002548) */}
      <div className="bg-[#002548] text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-9 sm:h-10 flex items-center justify-between text-xs sm:text-[13px] font-medium">
          
          {/* Left info badge */}
          <div className="flex items-center gap-1.5 text-[#cde5ff] min-w-0 overflow-hidden">
            <span className="material-symbols-outlined text-[16px] text-[#cde5ff] shrink-0">verified</span>
            <span className="hidden md:inline font-normal text-white truncate whitespace-nowrap">
              Quality Dentistry Since 2011 • Austin Town &amp; Neelasandra, Bengaluru
            </span>
            <span className="md:hidden font-normal text-white truncate whitespace-nowrap">
              Quality Dentistry Since 2011 • Bengaluru
            </span>
          </div>

          {/* Right hours & call link */}
          <div className="flex items-center gap-2 sm:gap-3 text-xs shrink-0 whitespace-nowrap">
            <span className="hidden lg:flex items-center gap-1.5 text-[#cde5ff]">
              <span className="material-symbols-outlined text-[15px]">schedule</span>
              <span className="text-slate-200">Mon–Sat 10:00 AM–8:00 PM | Sun 10:00 AM–2:00 PM</span>
            </span>
            <span className="hidden lg:inline text-slate-500">•</span>
            <a 
              className="flex items-center gap-1 hover:text-[#cde5ff] transition-colors text-white font-medium whitespace-nowrap shrink-0" 
              href="tel:+916360654061"
            >
              <span className="material-symbols-outlined text-[16px] text-[#cde5ff]">call</span>
              <span>Call: +91 6360654061</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white/95 backdrop-blur-xl border-b border-[#dde9fb]">
        <div className="h-16 sm:h-20 max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Brand Logo (Protected with shrink-0) */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center cursor-pointer group select-none shrink-0"
          >
            <img 
              alt="Narayana Dental Clinic" 
              className="h-9 sm:h-11 md:h-12 w-auto object-contain shrink-0 transition-transform duration-200 group-hover:scale-[1.02]" 
              src="/logo.png"
            />
          </div>

          {/* Desktop Nav Links (visible on lg: >= 1024px) */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 shrink-0">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#e4efff] text-[#002548] font-bold'
                      : 'text-[#43474f] hover:bg-[#dde9fb] hover:text-[#101c29]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Call button: only on xl screens so lg screens have spacious room */}
            <a 
              className="hidden xl:inline-flex items-center justify-center px-3.5 h-10 rounded-xl border border-[#c3c6d0] text-xs font-semibold text-[#123b66] hover:bg-[#eef4ff] hover:text-[#24638f] transition-all whitespace-nowrap shrink-0" 
              href="tel:6360654061"
            >
              Call: 6360654061
            </a>

            {/* Book Appointment button: single line on all screen sizes */}
            <button 
              onClick={() => onOpenBooking()}
              className="inline-flex items-center justify-center px-3 sm:px-4 xl:px-5 h-9 sm:h-10 xl:h-11 rounded-xl bg-[#123b66] text-xs sm:text-sm font-semibold text-white hover:bg-[#24638f] hover:shadow-[0_8px_24px_-4px_rgba(18,59,102,0.18)] transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Book</span>
              <span className="hidden sm:inline">&nbsp;Appointment</span>
            </button>

            {/* User Account / Patient Access */}
            <button 
              onClick={onOpenPatientModal}
              title="Patient Access Desk"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#002548] flex items-center justify-center text-white hover:bg-[#123b66] transition-colors cursor-pointer shrink-0"
              aria-label="Patient Portal"
            >
              <span className="material-symbols-outlined text-[16px] sm:text-[18px]">person</span>
            </button>

            {/* Mobile Hamburger Menu Toggle (visible on < lg) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 lg:hidden text-slate-700 hover:text-[#002548] rounded-lg transition-colors cursor-pointer shrink-0"
              aria-label="Open mobile navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <img 
              alt="Narayana Dental Clinic" 
              className="h-8 w-auto object-contain" 
              src="/logo.png"
            />
            <span className="text-[11px] font-semibold text-[#24638f] bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100">
              Austin Town • Est. 2011
            </span>
          </div>
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-left text-sm font-semibold transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#e4efff] text-[#002548]'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="tel:6360654061"
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#eef4ff] text-[#002548] font-bold rounded-xl text-sm"
            >
              <Phone className="w-4 h-4 text-[#24638f]" />
              <span>Call Clinic (6360654061)</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#780b00] text-white font-bold rounded-xl text-sm shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Book an Appointment</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
