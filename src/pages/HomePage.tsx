import React, { useState } from 'react';
import { CLINIC_INFO, DOCTORS, SERVICES, REVIEWS } from '../data/clinicData';
import { GALLERY_ITEMS, getFilteredHomeImages } from '../data/galleryData';
import { PageView } from '../types';

interface HomePageProps {
  onNavigate: (page: PageView) => void;
  onOpenBooking: (doctorPreference?: string, servicePreference?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBooking
}) => {
  const [activeGalleryFilter, setActiveGalleryFilter] = useState<'all' | 'clinic' | 'treatments' | 'ortho' | 'patient-care'>('all');

  const filteredGallery = getFilteredHomeImages(activeGalleryFilter, GALLERY_ITEMS);

  // 14 Specialized Disciplines / Services as per reference
  const serviceCards = [
    {
      icon: 'tools_installation_kit',
      title: 'Dental Implants',
      description: 'Permanent titanium roots and precision prosthetic crowns restoring functional bite and aesthetics.',
      serviceId: 'dental-implants'
    },
    {
      icon: 'healing',
      title: 'Root Canal Treatment',
      description: 'Gentle endodontic therapy eliminating deep pulp infections to preserve and save your natural tooth.',
      serviceId: 'single-sitting-rct'
    },
    {
      icon: 'grid_goldenratio',
      title: 'Dental Braces',
      description: 'Custom metal and ceramic brackets meticulously repositioning crooked or overcrowded teeth.',
      serviceId: 'clear-aligners'
    },
    {
      icon: 'visibility',
      title: 'Orthodontics & Aligners',
      description: 'Clear orthodontic trays engineered to align smiles discreetly without metal wires or irritation.',
      serviceId: 'clear-aligners'
    },
    {
      icon: 'auto_awesome',
      title: 'Cosmetic Dentistry',
      description: 'Composite bonding, smile makeovers, and custom veneers for a harmonious dental profile.',
      serviceId: 'cosmetic-makeovers'
    },
    {
      icon: 'wb_sunny',
      title: 'Teeth Whitening',
      description: 'Safe, non-invasive clinic-grade bleaching lifting stubborn stains and brightening natural enamel.',
      serviceId: 'cosmetic-makeovers'
    },
    {
      icon: 'shield',
      title: 'Crowns & Bridges',
      description: 'Zirconia and ceramic restorations providing lasting strength and seamless dental anatomy.',
      serviceId: 'dental-implants'
    },
    {
      icon: 'elderly',
      title: 'Dentures',
      description: 'Complete and flexible partial prosthetic dentures customized for natural speech and chewing comfort.',
      serviceId: 'dental-implants'
    },
    {
      icon: 'compress',
      title: 'Tooth Extraction',
      description: 'Atraumatic tooth removal techniques ensuring minimal tissue disruption and rapid healing.',
      serviceId: 'single-sitting-rct'
    },
    {
      icon: 'medication',
      title: 'Wisdom Tooth Care',
      description: 'Surgical extraction and pain relief protocols for impacted third molars causing jaw crowding.',
      serviceId: 'single-sitting-rct'
    },
    {
      icon: 'architecture',
      title: 'Dental Fillings',
      description: 'Tooth-colored resin restorations reinforcing teeth damaged by cavities or early decay.',
      serviceId: 'single-sitting-rct'
    },
    {
      icon: 'child_care',
      title: 'Child Dental Care',
      description: 'Gentle pedodontic care, fluoride treatments, and pit/fissure sealants designed for pediatric comfort.',
      serviceId: 'pediatric-dentistry'
    },
    {
      icon: 'radiology',
      title: 'Digital X-Ray & Imaging',
      description: 'Low-radiation sensor imaging for instant diagnostic precision and transparent patient education.',
      serviceId: 'single-sitting-rct'
    },
    {
      icon: 'flare',
      title: 'Laser Dentistry',
      description: 'Minimally invasive soft-tissue contouring, gum pocket sterilization, and rapid painless recovery.',
      serviceId: 'cosmetic-makeovers'
    }
  ];

  return (
    <div className="w-full bg-[#f8f9ff]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col w-full">

          {/* 1. HERO SECTION */}
          <section className="relative py-8 sm:py-12 lg:py-16 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Hero Left Content */}
              <div className="lg:col-span-6 flex flex-col gap-5">
                <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#cde5ff]/60 text-[#115782]">
                  <span className="w-2 h-2 rounded-full bg-[#24638f] animate-pulse"></span>
                  <span className="text-xs uppercase tracking-wider font-semibold">
                    Quality Dentistry Since 2011 • Neelasandra, Bengaluru
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#002548] tracking-tight leading-[1.1] font-display">
                  Modern Dental Care <br className="hidden sm:inline" />
                  With a Personal Approach
                </h1>

                <p className="text-base sm:text-lg text-[#43474f] max-w-xl leading-relaxed">
                  Comprehensive dental care including dental implants, root canal treatment, orthodontics, cosmetic dentistry, and general dental care in Neelasandra, Bengaluru.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button 
                    onClick={() => onOpenBooking()}
                    className="inline-flex items-center justify-center px-6 h-12 rounded-xl bg-[#780b00] text-white font-semibold text-sm shadow-sm hover:opacity-95 active:scale-[0.98] transition-all cursor-pointer"
                  >
                    Book an Appointment
                  </button>

                  <a 
                    href="tel:6360654061"
                    className="inline-flex items-center justify-center px-5 h-12 rounded-xl bg-[#002548] text-white font-semibold text-sm shadow-sm hover:bg-[#123b66] transition-all"
                  >
                    Call Now
                  </a>

                  <a 
                    href="https://wa.me/916360654061" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 h-12 rounded-xl bg-[#dde9fb] text-[#002548] font-semibold text-sm hover:bg-[#d7e4f5] transition-colors"
                  >
                    <span className="material-symbols-outlined text-[20px] text-[#24638f]">chat</span>
                    <span>WhatsApp Us</span>
                  </a>
                </div>

                {/* Trust Badges Under Hero CTA */}
                <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[#43474f] text-xs sm:text-sm font-medium">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[#24638f] text-[18px]">check_circle</span>
                    <span>Experienced Dental Care</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[#24638f] text-[18px]">check_circle</span>
                    <span>Comprehensive Treatments</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[#24638f] text-[18px]">check_circle</span>
                    <span>Quality Dentistry Since 2011</span>
                  </div>
                </div>
              </div>

              {/* Hero Right Operatory Showcase */}
              <div className="lg:col-span-6 relative">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-[#e4efff]">
                  <img 
                    className="w-full h-full object-cover" 
                    alt="Doctor providing dental treatment at Narayana Dental Clinic in Austin Town Bengaluru"
                    src="/images/clinic/01_clinic_patient_care_enhanced.webp" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002548]/60 via-transparent to-transparent"></div>
                  
                  {/* Floating Clinic Badge */}
                  <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-md flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#e4efff] flex items-center justify-center text-[#002548]">
                      <span className="material-symbols-outlined text-[22px]">apartment</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#002548] leading-tight">BDA Flats, Austin Town Main Rd</p>
                      <p className="text-xs text-[#43474f]">Neelasandra, Bengaluru • Established 2011</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. TRUST INDICATORS STRIP */}
          <section className="w-full bg-[#eef4ff] rounded-2xl py-6 px-4 my-4 sm:my-6 shadow-xs border border-[#dde9fb]/80">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center text-center">
              <div className="flex flex-col items-center gap-1">
                <span className="material-symbols-outlined text-[#24638f] text-[24px]">workspace_premium</span>
                <span className="text-base font-semibold text-[#002548]">Established 2011</span>
                <span className="text-xs text-[#43474f]">13+ Years Service</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="material-symbols-outlined text-[#24638f] text-[24px]">medical_services</span>
                <span className="text-base font-semibold text-[#002548]">Specialist Doctors</span>
                <span className="text-xs text-[#43474f]">MDS &amp; Fellowship Credentialed</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="material-symbols-outlined text-[#24638f] text-[24px]">dentistry</span>
                <span className="text-base font-semibold text-[#002548]">Complete Care</span>
                <span className="text-xs text-[#43474f]">Implants to Braces</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="material-symbols-outlined text-[#24638f] text-[24px]">volunteer_activism</span>
                <span className="text-base font-semibold text-[#002548]">Personalized</span>
                <span className="text-xs text-[#43474f]">Transparent Consultations</span>
              </div>
              <div className="col-span-2 md:col-span-1 flex flex-col items-center gap-1">
                <span className="material-symbols-outlined text-[#24638f] text-[24px]">sanitizer</span>
                <span className="text-base font-semibold text-[#002548]">Sterile Operatory</span>
                <span className="text-xs text-[#43474f]">Class-B Autoclave Protocol</span>
              </div>
            </div>
          </section>

          {/* 3. SERVICES SECTION */}
          <section className="py-10 sm:py-14 flex flex-col gap-8">
            <div className="flex flex-col gap-1.5 max-w-2xl">
              <span className="text-xs text-[#24638f] uppercase tracking-widest font-semibold">Specialized Disciplines</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#002548] font-display">Comprehensive Dental Care Under One Roof</h2>
              <p className="text-sm sm:text-base text-[#43474f] leading-relaxed">
                From preventive hygiene and tooth restorations to advanced rehabilitative surgeries, we deliver personalized dental solutions for both children and adults.
              </p>
            </div>

            {/* 14 Service Cards Bento Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {serviceCards.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white p-5 rounded-2xl shadow-xs hover:shadow-md border border-slate-100 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#e4efff] flex items-center justify-center text-[#002548] group-hover:bg-[#002548] group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-[24px]">{service.icon}</span>
                    </div>
                    <h3 className="text-base font-bold text-[#002548] mt-4">{service.title}</h3>
                    <p className="text-xs sm:text-sm text-[#43474f] mt-1.5 leading-relaxed">{service.description}</p>
                  </div>
                  <button 
                    onClick={() => {
                      onNavigate('services');
                    }}
                    className="mt-4 text-xs font-semibold text-[#24638f] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform self-start cursor-pointer hover:underline"
                  >
                    <span>Learn More</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* 4. FEATURED TREATMENTS (NARRATIVE BLOCKS) */}
          <section className="py-10 sm:py-16 flex flex-col gap-12 sm:gap-16">
            <div className="text-center max-w-2xl mx-auto flex flex-col gap-1.5">
              <span className="text-xs text-[#24638f] uppercase tracking-widest font-semibold">Specialized Excellence</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#002548] font-display">In-Depth Clinical Focus</h2>
              <p className="text-sm sm:text-base text-[#43474f]">Explore how our specialized treatment protocols restore function, oral health, and genuine confidence.</p>
            </div>

            {/* Block 1: Dental Implants */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 flex flex-col gap-4">
                <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-[#e4efff] text-[#002548] text-xs font-semibold">
                  <span className="material-symbols-outlined text-[16px] text-[#24638f]">verified</span>
                  <span>Advanced Prosthetics</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#002548] font-display">Advanced Dental Implants for a Healthier Smile</h3>
                <p className="text-sm sm:text-base text-[#43474f] leading-relaxed">
                  Dental implants provide a stable, long-lasting replacement for missing teeth without altering adjacent natural tooth structures. Engineered from biocompatible medical-grade titanium, they fuse securely with your jawbone to prevent bone resorption and preserve facial symmetry.
                </p>
                <ul className="flex flex-col gap-2 text-xs sm:text-sm text-[#43474f]">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#24638f] text-[18px]">check</span>
                    <span>Computer-guided surgical placement for optimal bone integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#24638f] text-[18px]">check</span>
                    <span>Custom ceramic crown closely matched to adjacent enamel shades</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#24638f] text-[18px]">check</span>
                    <span>Permanent chewing stability without removable adhesives</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <button 
                    onClick={() => onNavigate('services')}
                    className="inline-flex items-center justify-center px-5 h-12 rounded-xl bg-[#002548] text-white font-semibold text-sm hover:bg-[#123b66] transition-all cursor-pointer"
                  >
                    Explore Dental Implants
                  </button>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-[#e4efff]">
                  <img 
                    className="w-full h-full object-cover object-center" 
                    alt="Dental treatment procedure and surgical implant care at Narayana Dental Clinic" 
                    src="/images/clinic/03_dental_treatment_enhanced.webp" 
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Block 2: Root Canal Treatment (Reversed) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 lg:order-2 flex flex-col gap-4">
                <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-[#e4efff] text-[#002548] text-xs font-semibold">
                  <span className="material-symbols-outlined text-[16px] text-[#24638f]">healing</span>
                  <span>Tooth Preservation</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#002548] font-display">Gentle Precision Root Canal Treatment</h3>
                <p className="text-sm sm:text-base text-[#43474f] leading-relaxed">
                  Root canal therapy cleans diseased or infected nerve tissue deep within the tooth canals, instantly relieving acute toothache while protecting the outer structure. Utilizing modern rotary instrumentation and apex locators, we perform comfortable procedures designed to save your natural tooth for decades.
                </p>
                <ul className="flex flex-col gap-2 text-xs sm:text-sm text-[#43474f]">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#24638f] text-[18px]">check</span>
                    <span>Modern localized anesthesia for comfortable, anxiety-free care</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#24638f] text-[18px]">check</span>
                    <span>Rotary nickel-titanium instrumentation for thorough canal sealing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#24638f] text-[18px]">check</span>
                    <span>Strengthened with durable aesthetic crowns to prevent fractures</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <button 
                    onClick={() => onNavigate('services')}
                    className="inline-flex items-center justify-center px-5 h-12 rounded-xl bg-[#002548] text-white font-semibold text-sm hover:bg-[#123b66] transition-all cursor-pointer"
                  >
                    Learn About Root Canal Care
                  </button>
                </div>
              </div>
              <div className="lg:col-span-6 lg:order-1">
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-[#e4efff]">
                  <img 
                    className="w-full h-full object-cover object-center" 
                    alt="Doctor providing personalized dental care and consultation at Narayana Dental Clinic" 
                    src="/images/clinic/06_dental_treatment_enhanced.webp" 
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Block 3: Orthodontics & Braces */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 flex flex-col gap-4">
                <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-[#e4efff] text-[#002548] text-xs font-semibold">
                  <span className="material-symbols-outlined text-[16px] text-[#24638f]">straighten</span>
                  <span>Alignment &amp; Esthetics</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#002548] font-display">Orthodontics &amp; Braces for All Ages</h3>
                <p className="text-sm sm:text-base text-[#43474f] leading-relaxed">
                  Whether correcting complex bites or gently straightening minor overlaps, our orthodontic solutions blend European clinical methodologies with patient convenience. We provide both ceramic/metal bracket systems and clear aligners adapted for teens and working professionals.
                </p>
                <ul className="flex flex-col gap-2 text-xs sm:text-sm text-[#43474f]">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#24638f] text-[18px]">check</span>
                    <span>Transparent clear aligner protocols tailored for discreet everyday wear</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#24638f] text-[18px]">check</span>
                    <span>Low-friction ceramic brackets providing subtle aesthetics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#24638f] text-[18px]">check</span>
                    <span>Detailed cephalometric analysis guiding healthy jaw relationships</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <button 
                    onClick={() => onNavigate('services')}
                    className="inline-flex items-center justify-center px-5 h-12 rounded-xl bg-[#002548] text-white font-semibold text-sm hover:bg-[#123b66] transition-all cursor-pointer"
                  >
                    Explore Orthodontic Options
                  </button>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-[#e4efff]">
                  <img 
                    className="w-full h-full object-contain" 
                    alt="Real orthodontic braces before and after alignment result at Narayana Dental Clinic" 
                    src="/images/cases/case-02-orthodontic-alignment.jpg" 
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 5. DOCTORS PREVIEW */}
          <section className="py-10 sm:py-16 flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="flex flex-col gap-1.5 max-w-xl">
                <span className="text-xs text-[#24638f] uppercase tracking-widest font-semibold">Clinical Leadership</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#002548] font-display">Meet Our Dental Specialists</h2>
                <p className="text-sm sm:text-base text-[#43474f]">Experienced professionals delivering personalized, evidence-based dental care with a gentle touch.</p>
              </div>
              <button 
                onClick={() => onNavigate('doctors')}
                className="self-start md:self-auto inline-flex items-center gap-2 px-5 h-12 rounded-xl bg-[#dde9fb] text-[#002548] font-semibold text-sm hover:bg-[#d7e4f5] transition-colors cursor-pointer"
              >
                <span>View Full Clinical Team</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Doctor 1: Dr. Prakash Venkatarama */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-xs border border-slate-100 flex flex-col sm:flex-row gap-5 items-center sm:items-start group hover:shadow-md transition-shadow">
                <div className="w-36 sm:w-44 shrink-0 aspect-[3/4] rounded-xl overflow-hidden shadow-sm bg-[#e4efff]">
                  <img 
                    alt="Dr. Prakash Venkatarama" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO4t14a3OuFV_N67T5lbA6pi18UlgJvI1dtYntd7xWBzAQOsl7XQIPVvz8d_5R_4g6Sukj_zJhtQXZui-DIqoHBTyyvRqS_Zq8kLcoqdlfBN2d3osmdIypcoi_WRrHLWAEafNReTOGlSTpKu-r5LHwElsd-gTio1T2XZfdJC1Inz_lHXFyLsayj3uAW7FAKvcEdg5nKruZq_BkSooqrC255IyL6gHF4YD9Di2V7dzGELv_nF3OT48XrDqYorqxAnKH3A" 
                  />
                </div>
                <div className="flex flex-col gap-1 text-center sm:text-left flex-1 h-full">
                  <div className="inline-flex items-center gap-1 self-center sm:self-start px-2.5 py-0.5 rounded-full bg-[#e4efff] text-[#002548] text-xs font-semibold">
                    13+ Years Clinical Practice
                  </div>
                  <h3 className="text-lg font-bold text-[#002548] mt-1">Dr. Prakash Venkatarama</h3>
                  <p className="text-xs font-semibold text-[#24638f]">Dental Surgeon &amp; General Practitioner</p>
                  <p className="text-xs sm:text-sm text-[#43474f] mt-1 leading-relaxed">
                    Root Canal Specialist &amp; Implantologist. Renowned for meticulous restorative work, painless root canal treatments, and extensive expertise in single and full-arch implant rehabilitations.
                  </p>
                  <div className="pt-3 mt-auto">
                    <button 
                      onClick={() => onNavigate('doctors')}
                      className="text-xs font-semibold text-[#002548] inline-flex items-center gap-1 group-hover:text-[#24638f] transition-colors cursor-pointer"
                    >
                      <span>View Profile &amp; Credentials</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Doctor 2: Dr. Madhura Prakash */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-xs border border-slate-100 flex flex-col sm:flex-row gap-5 items-center sm:items-start group hover:shadow-md transition-shadow">
                <div className="w-36 sm:w-44 shrink-0 aspect-[3/4] rounded-xl overflow-hidden shadow-sm bg-[#e4efff]">
                  <img 
                    alt="Dr. Madhura Prakash" 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" 
                    src="/images/dr-madhura-prakash.jpg" 
                  />
                </div>
                <div className="flex flex-col gap-1 text-center sm:text-left flex-1 h-full">
                  <div className="inline-flex items-center gap-1 self-center sm:self-start px-2.5 py-0.5 rounded-full bg-[#e4efff] text-[#002548] text-xs font-semibold">
                    International Fellowship
                  </div>
                  <h3 className="text-lg font-bold text-[#002548] mt-1">Dr. Madhura Prakash</h3>
                  <p className="text-xs font-semibold text-[#24638f]">BDS, D.Ortho (Spain), FICNOG (Italy)</p>
                  <p className="text-xs sm:text-sm text-[#43474f] mt-1 leading-relaxed">
                    Orthodontist &amp; Cosmetic Dental Surgeon. Specializing in advanced clear aligners, orthodontic bite corrections, pediatric preventative care, and aesthetic smile transformations.
                  </p>
                  <div className="pt-3 mt-auto">
                    <button 
                      onClick={() => onNavigate('doctors')}
                      className="text-xs font-semibold text-[#002548] inline-flex items-center gap-1 group-hover:text-[#24638f] transition-colors cursor-pointer"
                    >
                      <span>View Profile &amp; Credentials</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6. WHY PATIENTS CHOOSE US */}
          <section className="py-10 sm:py-16">
            <div className="bg-[#eef4ff] rounded-3xl p-6 md:p-10 border border-[#dde9fb]/90 shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Authentic Clinic Showcase */}
                <div className="lg:col-span-5 relative">
                  <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-md bg-[#e4efff]">
                    <img 
                      className="w-full h-full object-cover" 
                      alt="Bright, serene dental operatory with natural wooden cabinetry, large sunny picture window showing Austin Town, ergonomic patient dental chair, and autoclave sterilization equipment in Bengaluru clinic." 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfnWPspzWjbXDzycD9JAgoXRn-ImxhlIYvRlJ3Jiia-nszltRh05oPGfqmaqlhxTPQy8jBc25f51B0fyzcMlKOjlIpfaYmf8vgfmzXkVUx7A9Qo49sw72745ambNqLmZ-7Xbogn5eyva0btYrjDR7fh3dlZUv5vOkaW6t--f45dlbbSHznHn8iAshFFecC9TBsjZLcVzq7NDaYYuBQQ-Icodo1MSfS-H_RLlwI1evZAArecXULre8x" 
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-[#002548] text-white p-4 rounded-2xl shadow-lg hidden sm:flex flex-col max-w-[200px]">
                    <span className="text-3xl font-bold leading-none">13+</span>
                    <span className="text-xs opacity-90 mt-1">Years serving Neelasandra &amp; Austin Town</span>
                  </div>
                </div>

                {/* 4 Distinct Pillars */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs text-[#24638f] uppercase tracking-widest font-semibold">The Narayana Standard</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#002548] font-display">Why Families Choose Our Clinic</h2>
                    <p className="text-sm sm:text-base text-[#43474f] leading-relaxed">
                      We treat every individual with clarity, respect, and clinical mastery—ensuring visits are comfortable and free from overtreatment.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                    <div className="flex flex-col gap-1.5">
                      <div className="w-10 h-10 rounded-lg bg-[#d7e4f5] flex items-center justify-center text-[#002548]">
                        <span className="material-symbols-outlined text-[20px]">verified_user</span>
                      </div>
                      <h3 className="text-base font-semibold text-[#002548]">Experienced Dental Care</h3>
                      <p className="text-xs sm:text-sm text-[#43474f] leading-relaxed">Decades of combined clinical experience across general dentistry, oral surgery, and orthodontics.</p>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <div className="w-10 h-10 rounded-lg bg-[#d7e4f5] flex items-center justify-center text-[#002548]">
                        <span className="material-symbols-outlined text-[20px]">layers</span>
                      </div>
                      <h3 className="text-base font-semibold text-[#002548]">Comprehensive Services</h3>
                      <p className="text-xs sm:text-sm text-[#43474f] leading-relaxed">Diagnostic radiographs, root canals, implants, and braces delivered seamlessly in a single location.</p>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <div className="w-10 h-10 rounded-lg bg-[#d7e4f5] flex items-center justify-center text-[#002548]">
                        <span className="material-symbols-outlined text-[20px]">person_check</span>
                      </div>
                      <h3 className="text-base font-semibold text-[#002548]">Personalized Approach</h3>
                      <p className="text-xs sm:text-sm text-[#43474f] leading-relaxed">Honest counsel with full clinical clarity. We only recommend procedures that genuinely benefit your oral health.</p>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <div className="w-10 h-10 rounded-lg bg-[#d7e4f5] flex items-center justify-center text-[#002548]">
                        <span className="material-symbols-outlined text-[20px]">history_edu</span>
                      </div>
                      <h3 className="text-base font-semibold text-[#002548]">Community Trust Since 2011</h3>
                      <p className="text-xs sm:text-sm text-[#43474f] leading-relaxed">More than a decade of serving multiple generations of families in Austin Town and surrounding Bengaluru.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 7. DENTAL PATIENT JOURNEY */}
          <section className="py-10 sm:py-16 flex flex-col gap-8">
            <div className="text-center max-w-xl mx-auto flex flex-col gap-1.5">
              <span className="text-xs text-[#24638f] uppercase tracking-widest font-semibold">Care Process</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#002548] font-display">Your Dental Patient Journey</h2>
              <p className="text-sm sm:text-base text-[#43474f]">From first check-up to confident smiles, our four-step journey ensures comfort and predictability.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Step 1 */}
              <div className="bg-white p-5 rounded-2xl shadow-xs border border-slate-100 flex flex-col justify-between group hover:shadow-md transition-shadow">
                <div>
                  <span className="text-4xl font-bold text-[#d7e4f5] group-hover:text-[#24638f] transition-colors font-display">01</span>
                  <h3 className="text-base font-bold text-[#002548] mt-2">Consultation</h3>
                  <p className="text-xs sm:text-sm text-[#43474f] mt-1 leading-relaxed">
                    A warm, attentive conversation discussing your concerns, medical background, and immediate comfort needs.
                  </p>
                </div>
                <div className="mt-4 pt-2 flex items-center text-[#24638f] text-xs font-semibold">
                  <span>Step 1 of 4</span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-5 rounded-2xl shadow-xs border border-slate-100 flex flex-col justify-between group hover:shadow-md transition-shadow">
                <div>
                  <span className="text-4xl font-bold text-[#d7e4f5] group-hover:text-[#24638f] transition-colors font-display">02</span>
                  <h3 className="text-base font-bold text-[#002548] mt-2">Diagnosis</h3>
                  <p className="text-xs sm:text-sm text-[#43474f] mt-1 leading-relaxed">
                    Precise intraoral examination complemented by high-clarity low-radiation digital radiography.
                  </p>
                </div>
                <div className="mt-4 pt-2 flex items-center text-[#24638f] text-xs font-semibold">
                  <span>Step 2 of 4</span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-5 rounded-2xl shadow-xs border border-slate-100 flex flex-col justify-between group hover:shadow-md transition-shadow">
                <div>
                  <span className="text-4xl font-bold text-[#d7e4f5] group-hover:text-[#24638f] transition-colors font-display">03</span>
                  <h3 className="text-base font-bold text-[#002548] mt-2">Personalized Plan</h3>
                  <p className="text-xs sm:text-sm text-[#43474f] mt-1 leading-relaxed">
                    Transparent options detailing treatment steps, time commitments, and clear costs with no surprises.
                  </p>
                </div>
                <div className="mt-4 pt-2 flex items-center text-[#24638f] text-xs font-semibold">
                  <span>Step 3 of 4</span>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white p-5 rounded-2xl shadow-xs border border-slate-100 flex flex-col justify-between group hover:shadow-md transition-shadow">
                <div>
                  <span className="text-4xl font-bold text-[#d7e4f5] group-hover:text-[#24638f] transition-colors font-display">04</span>
                  <h3 className="text-base font-bold text-[#002548] mt-2">Treatment &amp; Care</h3>
                  <p className="text-xs sm:text-sm text-[#43474f] mt-1 leading-relaxed">
                    Gentle clinical execution followed by structured post-operative guidelines and scheduled check-ins.
                  </p>
                </div>
                <div className="mt-4 pt-2 flex items-center text-[#24638f] text-xs font-semibold">
                  <span>Step 4 of 4</span>
                </div>
              </div>
            </div>
          </section>

          {/* 8. GALLERY & CLINIC PREVIEW */}
          <section className="py-10 sm:py-16 flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="flex flex-col gap-1.5 max-w-xl">
                <span className="text-xs text-[#24638f] uppercase tracking-widest font-semibold">Visual Tour</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#002548] font-display">Inside Narayana Dental Clinic</h2>
                <p className="text-sm sm:text-base text-[#43474f]">Step inside our pristine facility designed for comfort, clinical precision, and calm reassurance.</p>
              </div>

              {/* Filter Chips */}
              <div className="flex flex-wrap items-center gap-2">
                {(['all', 'clinic', 'treatments', 'ortho', 'patient-care'] as const).map((filter) => {
                  const labels: Record<string, string> = {
                    all: 'All',
                    clinic: 'Clinic',
                    treatments: 'Treatments',
                    ortho: 'Orthodontics',
                    'patient-care': 'Patient Care'
                  };
                  const isActive = activeGalleryFilter === filter;
                  return (
                    <button
                      key={filter}
                      onClick={() => setActiveGalleryFilter(filter)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-[#002548] text-white shadow-xs'
                          : 'bg-[#e4efff] text-[#002548] hover:bg-[#dde9fb]'
                      }`}
                    >
                      {labels[filter]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Showcase Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredGallery.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => onNavigate('gallery')}
                  className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xs bg-[#e4efff] cursor-pointer group"
                >
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    alt={item.alt}
                    src={item.img} 
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* 9. GENUINE GOOGLE REVIEWS */}
          <section className="py-10 sm:py-16 flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex flex-col gap-1.5 max-w-xl">
                <span className="text-xs text-[#24638f] uppercase tracking-widest font-semibold">Patient Testimonials</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#002548] font-display">Patient Voices &amp; Experiences</h2>
                <p className="text-sm sm:text-base text-[#43474f]">Real stories from individuals and families who rely on our care in Bengaluru.</p>
              </div>

              {/* Rating Badge */}
              <div className="bg-white px-5 py-3 rounded-2xl shadow-xs border border-slate-100 flex items-center gap-4 self-start">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-[#002548] leading-none">4.9</span>
                  <div className="flex text-[#780b00] mt-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                    ))}
                  </div>
                </div>
                <div className="border-l border-[#dde9fb] pl-4">
                  <p className="text-sm font-bold text-[#002548]">Google Reviews</p>
                  <p className="text-xs text-[#43474f]">Verified Clinic Feedback</p>
                </div>
              </div>
            </div>

            {/* Review Cards Mosaic */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {REVIEWS.slice(0, 5).map((rev) => (
                <div key={rev.id} className="bg-white p-5 rounded-2xl shadow-xs border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <div className="flex text-[#780b00] mb-2">
                      {[...Array(rev.rating)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-[#101c29] italic leading-relaxed">
                      {rev.quote}
                    </p>
                  </div>
                  <div className="mt-4 pt-2 border-t border-[#eef4ff] flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#cde5ff] text-[#115782] flex items-center justify-center font-bold text-xs">
                      {rev.avatarInitials}
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-[#002548]">{rev.author}</p>
                      <p className="text-[11px] text-[#43474f]">{rev.treatment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 10. LOCATION & CONTACT INFO */}
          <section className="py-10 sm:py-16">
            <div className="bg-[#eef4ff] rounded-3xl p-6 md:p-10 border border-[#dde9fb]/90 shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Clinic Details */}
                <div className="lg:col-span-6 flex flex-col gap-6">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs text-[#24638f] uppercase tracking-widest font-semibold">Visit Our Clinic</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#002548] font-display">Conveniently Located in Neelasandra</h2>
                    <p className="text-sm sm:text-base text-[#43474f] leading-relaxed">
                      Situated on Austin Town Main Road, easily accessible with dedicated patient parking and walk-in consultation availability.
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#d7e4f5] flex items-center justify-center text-[#002548] shrink-0">
                        <span className="material-symbols-outlined text-[20px]">location_on</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#002548]">Address</p>
                        <p className="text-xs sm:text-sm text-[#43474f]">{CLINIC_INFO.address}</p>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#d7e4f5] flex items-center justify-center text-[#002548] shrink-0">
                        <span className="material-symbols-outlined text-[20px]">schedule</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#002548]">Consultation Hours</p>
                        <p className="text-xs sm:text-sm text-[#43474f]">Monday – Saturday: 10:00 AM – 8:00 PM</p>
                        <p className="text-xs sm:text-sm text-[#43474f]">Sunday: 10:00 AM – 2:00 PM</p>
                      </div>
                    </div>

                    {/* Phones */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#d7e4f5] flex items-center justify-center text-[#002548] shrink-0">
                        <span className="material-symbols-outlined text-[20px]">call</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#002548]">Contact Numbers</p>
                        <p className="text-xs sm:text-sm text-[#43474f]">
                          <a className="text-[#002548] hover:text-[#24638f] font-medium" href="tel:6360654061">6360654061</a>
                          {' '}/ {' '}
                          <a className="text-[#002548] hover:text-[#24638f] font-medium" href="tel:9739628057">9739628057</a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a 
                      className="inline-flex items-center gap-2 px-5 h-12 rounded-xl bg-[#002548] text-white font-semibold text-sm hover:bg-[#123b66] transition-all"
                      href="https://maps.google.com/?q=Narayana+Dental+Clinic+Austin+Town+Bengaluru" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="material-symbols-outlined text-[18px]">directions</span>
                      <span>Get Directions</span>
                    </a>

                    <a 
                      className="inline-flex items-center gap-2 px-5 h-12 rounded-xl bg-[#dde9fb] text-[#002548] font-semibold text-sm hover:bg-[#d7e4f5] transition-colors"
                      href="tel:6360654061"
                    >
                      <span className="material-symbols-outlined text-[18px]">call</span>
                      <span>Call Clinic</span>
                    </a>
                  </div>
                </div>

                {/* Map Container */}
                <div className="lg:col-span-6">
                  <div 
                    className="w-full h-80 lg:h-96 rounded-2xl bg-[#e4efff] shadow-md bg-cover bg-center overflow-hidden flex flex-col justify-end p-4 relative"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDWFRlARMkmO1SbhoDzyfLQjZXJno5sMwbcfdTXpGuTMvefpsq0IO4D_p1yDPK-1rBIb_DqtgcJCyL9SVX7JC-A271VXrH9fw1VopUUYetgG8C12_X6iLeBRO1KcCDp9gpM6uUnsX8u-fdOENGgyX_2NfVbPJJ0VvhvsbIY-6ERS4eyWzsyacMOPpcs8lGX7UzVWfBa2qrBD4pCsafzPAQGlNJfzlztA8wx_Nx-dvqKNfs3Jpu4uceT")' }}
                  >
                    <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
                    <div className="bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-sm max-w-sm relative z-10">
                      <p className="text-sm font-semibold text-[#002548] flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[#24638f] text-[18px]">near_me</span>
                        <span>Austin Town Main Road, Neelasandra</span>
                      </p>
                      <p className="text-xs text-[#43474f] mt-1">Easy ground-floor access with parking slots right by BDA flats complex.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 11. FULL-WIDTH CALL TO ACTION */}
          <section className="my-8 sm:my-12">
            <div className="w-full bg-[#123b66] text-white rounded-3xl p-6 sm:p-10 lg:p-14 relative overflow-hidden shadow-xl">
              <div className="max-w-2xl flex flex-col gap-4 relative z-10">
                <span className="text-xs text-[#cde5ff] uppercase tracking-widest font-semibold">Prioritize Your Oral Health</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight font-display">
                  Ready to Take Care of Your Smile?
                </h2>
                <p className="text-sm sm:text-base text-[#83a6d7] leading-relaxed">
                  Send us your preferred appointment details and our clinic team will contact you to confirm availability. Experience honest, compassionate dental care right here in Neelasandra.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button 
                    onClick={() => onOpenBooking()}
                    className="inline-flex items-center justify-center px-6 h-12 rounded-xl bg-[#780b00] text-white font-semibold text-sm shadow-sm hover:opacity-95 active:scale-[0.98] transition-all cursor-pointer"
                  >
                    Book an Appointment
                  </button>
                  <a 
                    className="inline-flex items-center gap-2 px-5 h-12 rounded-xl bg-white text-[#002548] font-semibold text-sm hover:bg-[#eef4ff] transition-colors" 
                    href="https://wa.me/916360654061" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined text-[20px] text-[#24638f]">chat</span>
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </div>

              {/* Decorative subtle overlay circles */}
              <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#24638f]/20 blur-3xl pointer-events-none"></div>
              <div className="absolute right-40 -top-20 w-60 h-60 rounded-full bg-[#d3e3ff]/10 blur-2xl pointer-events-none"></div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
