import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS, GalleryCardItem } from '../data/galleryData';

interface GalleryPageProps {
  onOpenBooking: () => void;
  onOpenLightbox?: (item: any) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenBooking }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null || lightboxIndex === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 50) {
      setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
    } else if (diff < -50) {
      setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
    }
    setTouchStartX(null);
  };

  const galleryItems = GALLERY_ITEMS;

  const filteredItems = galleryItems.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category.split(' ').includes(activeFilter);
  });

  const activeItem = lightboxIndex !== null && filteredItems[lightboxIndex] ? filteredItems[lightboxIndex] : null;

  // Keyboard controls for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
      }
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <div className="w-full bg-[#f8f9ff]">
      <div className="flex flex-col w-full">

        {/* 1. Top Visual Accent / Breadcrumb Header Area */}
        <section className="w-full bg-[#eef4ff] py-8 sm:py-12 border-b border-[#dde9fb]/80">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-[#cde5ff]/60 text-[#115782] text-xs uppercase tracking-wider font-semibold">
                <span className="material-symbols-outlined text-[14px] text-[#24638f]">photo_camera</span>
                <span>Our Clinic</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#002548] tracking-tight font-display">
                Inside Narayana Dental Clinic
              </h1>
              <p className="text-base sm:text-lg text-[#43474f] mt-1 leading-relaxed">
                Take a closer look at our clinic, dental care environment and professional journey across Austin Town &amp; Neelasandra.
              </p>
            </div>

            {/* Trust Indicator Capsule */}
            <div className="bg-white p-4 rounded-2xl shadow-xs border border-slate-100 flex items-center gap-4 shrink-0 self-start md:self-auto">
              <div className="w-12 h-12 rounded-xl bg-[#123b66] flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-[24px]">verified_user</span>
              </div>
              <div>
                <div className="text-base font-bold text-[#002548] font-display">Class-B Sterilization</div>
                <div className="text-xs text-[#43474f]">Uncompromising clinical safety</div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Interactive Controls & Notice Section */}
        <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 pt-8 pb-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2" role="tablist">
              {[
                { key: 'all', label: 'All' },
                { key: 'our-clinic', label: 'Our Clinic' },
                { key: 'dental-treatments', label: 'Dental Treatments' },
                { key: 'orthodontics', label: 'Orthodontics' },
                { key: 'patient-care', label: 'Patient Care' },
                { key: 'before-after', label: 'Before & After' }
              ].map((tab) => {
                const isActive = activeFilter === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => {
                      setActiveFilter(tab.key);
                      setLightboxIndex(null);
                    }}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#123b66] text-white shadow-xs'
                        : 'bg-[#e4efff] text-[#002548] hover:bg-[#dde9fb]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Ethics & Transparency Note Pill */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#eef4ff] text-[#43474f] text-xs border border-[#dde9fb]/60 self-start lg:self-auto">
              <span className="material-symbols-outlined text-[16px] text-[#24638f] shrink-0">info</span>
              <span>Only displaying care photographs where full patient consent exists.</span>
            </div>

          </div>
        </section>

        {/* 3. Masonry / Responsive Card Grid */}
        <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col border border-slate-100"
              >
                <div className={`relative w-full overflow-hidden bg-[#e4efff] ${
                  item.category.includes('before-after') ? 'aspect-[16/10]' : 'aspect-[4/3]'
                }`}>
                  <img 
                    alt={item.alt}
                    loading="lazy"
                    className={`w-full h-full transition-transform duration-500 ease-out group-hover:scale-105 ${
                      item.objectFit === 'contain' || item.category.includes('before-after') ? 'object-contain' : 'object-cover'
                    }`} 
                    src={item.img} 
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002548]/90 via-[#002548]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 pointer-events-none">
                    <span className="inline-flex items-center gap-1 text-xs text-[#cde5ff] bg-[#123b66]/80 backdrop-blur-md px-2.5 py-1 rounded-full self-start mb-2 font-medium">
                      <span className="material-symbols-outlined text-[14px]">{item.badgeIcon}</span>
                      <span>{item.badgeText}</span>
                    </span>
                    <p className="text-xs text-white line-clamp-2 leading-relaxed">
                      {item.longDesc}
                    </p>
                  </div>

                  {/* Top-left category tag */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#002548] text-xs font-semibold shadow-xs">
                    {item.tag}
                  </span>
                </div>

                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-base font-bold text-[#002548] group-hover:text-[#24638f] transition-colors font-display">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#43474f] mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-100">
                    <span className="text-xs text-[#737780] font-medium">{item.spaceTag}</span>
                    <span className="material-symbols-outlined text-[#24638f] text-[20px] group-hover:translate-x-1 transition-transform">
                      fullscreen
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Clinic Experience Highlights (3 Cards) */}
        <section className="w-full bg-[#eef4ff] py-10 sm:py-14 my-8 border-y border-[#dde9fb]/80">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs flex flex-col gap-2">
              <div className="w-10 h-10 rounded-xl bg-[#cde5ff] flex items-center justify-center text-[#115782]">
                <span className="material-symbols-outlined text-[20px]">sanitizer</span>
              </div>
              <h4 className="text-base font-bold text-[#002548] font-display mt-1">Pristine Hygiene Standard</h4>
              <p className="text-xs sm:text-sm text-[#43474f] leading-relaxed">
                Autoclaved pouched instruments opened live in front of you. Constant surface decontamination after every appointment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs flex flex-col gap-2">
              <div className="w-10 h-10 rounded-xl bg-[#cde5ff] flex items-center justify-center text-[#115782]">
                <span className="material-symbols-outlined text-[20px]">nest_eco_leaf</span>
              </div>
              <h4 className="text-base font-bold text-[#002548] font-display mt-1">Low-Anxiety Environment</h4>
              <p className="text-xs sm:text-sm text-[#43474f] leading-relaxed">
                Soft daylight windows, warm teak finishes, and unhurried doctor consultations designed to ease sensitive patients and young children.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs flex flex-col gap-2">
              <div className="w-10 h-10 rounded-xl bg-[#cde5ff] flex items-center justify-center text-[#115782]">
                <span className="material-symbols-outlined text-[20px]">pin_drop</span>
              </div>
              <h4 className="text-base font-bold text-[#002548] font-display mt-1">Austin Town Landmark</h4>
              <p className="text-xs sm:text-sm text-[#43474f] leading-relaxed">
                Easily accessible right on Austin Town Main Road near Neelasandra, serving central Bengaluru families for over 13 continuous years.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Final CTA Section: Deep Blue #123B66 Full-Width Container */}
        <section className="w-full bg-[#123b66] text-white py-12 sm:py-16 relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#24638f]/20 blur-3xl pointer-events-none"></div>
          <div className="absolute left-10 top-0 w-72 h-72 rounded-full bg-[#002548]/40 blur-2xl pointer-events-none"></div>
          
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#cde5ff]/20 text-[#cde5ff] text-xs font-semibold mb-4 backdrop-blur-sm">
              <span className="material-symbols-outlined text-[16px]">calendar_month</span>
              <span>Welcoming New Patients Across Bengaluru</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white max-w-3xl tracking-tight font-display">
              Ready to Visit Us?
            </h2>

            <p className="text-sm sm:text-base text-[#83a6d7] max-w-2xl mt-2 mb-8 leading-relaxed">
              Experience gentle, patient-first dentistry in our welcoming Austin Town clinic. Schedule your comprehensive oral checkup today.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button 
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 h-12 rounded-xl bg-[#780b00] hover:bg-[#780b00]/90 text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-xl transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">event_available</span>
                <span>Book an Appointment</span>
              </button>

              <a 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 h-12 rounded-xl bg-transparent border border-white/40 hover:border-white text-white font-semibold text-xs sm:text-sm hover:bg-white/10 transition-all" 
                href="https://wa.me/916360654061" 
                rel="noopener noreferrer" 
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px] text-green-300">chat</span>
                <span>WhatsApp Us (+91 6360654061)</span>
              </a>
            </div>

            {/* Quick Clinic Timing Reminder */}
            <div className="mt-10 pt-6 border-t border-white/15 flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-xs text-[#83a6d7]">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#cde5ff]">schedule</span>
                <span>Mon–Sat: 10:00 AM – 8:00 PM</span>
              </span>
              <span className="hidden sm:inline opacity-40">•</span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#cde5ff]">calendar_today</span>
                <span>Sun: 10:00 AM – 2:00 PM</span>
              </span>
              <span className="hidden sm:inline opacity-40">•</span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#cde5ff]">phone_in_talk</span>
                <span>Emergency Hotline: 9739628057</span>
              </span>
            </div>
          </div>
        </section>

        {/* 6. Interactive Lightbox Modal Viewer */}
        {activeItem && (
          <div 
            onClick={() => setLightboxIndex(null)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="fixed inset-0 z-50 bg-[#101c29]/90 backdrop-blur-xl transition-opacity duration-300 flex items-center justify-center p-4"
          >
            {/* Top Action Bar */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-3 z-20">
              <span className="text-white text-xs font-semibold px-3 py-1 rounded-full bg-white/20 backdrop-blur-md">
                {(lightboxIndex! + 1)} / {filteredItems.length}
              </span>
              <button 
                onClick={() => setLightboxIndex(null)}
                aria-label="Close image lightbox"
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[24px]">close</span>
              </button>
            </div>

            {/* Navigation Prev Button */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
              }}
              aria-label="Previous image"
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all z-20 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[28px]">chevron_left</span>
            </button>

            {/* Modal Content Box */}
            <div 
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full flex flex-col items-center max-h-[90vh]"
            >
              <div className="relative w-full max-h-[70vh] flex items-center justify-center overflow-hidden rounded-2xl bg-[#002548]">
                <img 
                  alt={activeItem.alt} 
                  className="max-h-[70vh] w-auto max-w-full object-contain" 
                  src={activeItem.img} 
                />
              </div>

              <div className="w-full bg-white p-4 sm:p-5 mt-3 rounded-2xl shadow-xl flex flex-col gap-1 text-left">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#cde5ff] text-[#002548] text-xs font-semibold">
                    {activeItem.tag}
                  </span>
                  <span className="text-xs text-[#737780] font-medium">{activeItem.spaceTag}</span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#002548] font-display">{activeItem.title}</h4>
                <p className="text-xs sm:text-sm text-[#43474f] leading-relaxed">{activeItem.longDesc}</p>
              </div>
            </div>

            {/* Navigation Next Button */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
              }}
              aria-label="Next image"
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all z-20 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[28px]">chevron_right</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
