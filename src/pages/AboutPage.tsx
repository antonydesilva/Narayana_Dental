import React from 'react';
import { PageView } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageView) => void;
  onOpenBooking: (doctorPreference?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="w-full bg-[#f8f9ff]">
      {/* 1. Top Breadcrumb & Page Introduction Header */}
      <section className="w-full bg-[#eef4ff]/70 py-8 sm:py-12 border-b border-[#dde9fb]/60">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col gap-4">
          
          {/* Breadcrumb & Tagline Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
            <nav className="flex items-center gap-1.5 text-[#43474f]">
              <button 
                onClick={() => onNavigate('home')}
                className="hover:text-[#002548] transition-colors cursor-pointer"
              >
                Home
              </button>
              <span className="text-[#c3c6d0]">/</span>
              <span className="text-[#002548] font-semibold">About Us</span>
            </nav>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#cde5ff] text-[#001d31] font-semibold text-xs shadow-xs">
              <span className="material-symbols-outlined text-[16px] text-[#24638f]">verified</span>
              <span>Quality Dentistry Since 2011 • Austin Town &amp; Neelasandra, Bengaluru</span>
            </div>
          </div>

          {/* Main Headline & Subtitle */}
          <div className="max-w-4xl flex flex-col gap-3 mt-1">
            <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#002548] tracking-tight leading-tight font-display">
              Dedicated to Honest, Gentle Dental Care Since 2011
            </h1>
            <p className="text-base sm:text-lg text-[#43474f] leading-relaxed">
              Founded with a commitment to clinical excellence, patient-first ethics, and uncompromised sterilization, Narayana Dental Clinic has been a trusted neighbourhood family dental practice for over 15 years.
            </p>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            <div className="p-4 sm:p-5 rounded-xl bg-white shadow-xs border border-slate-100 flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold text-[#123b66] leading-none font-display">15,000+</span>
              <span className="text-xs sm:text-sm text-[#43474f] mt-1.5 font-medium">Families Treated</span>
            </div>
            <div className="p-4 sm:p-5 rounded-xl bg-white shadow-xs border border-slate-100 flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold text-[#123b66] leading-none font-display">13+ Yrs</span>
              <span className="text-xs sm:text-sm text-[#43474f] mt-1.5 font-medium">Austin Town Service</span>
            </div>
            <div className="p-4 sm:p-5 rounded-xl bg-white shadow-xs border border-slate-100 flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold text-[#123b66] leading-none font-display">100%</span>
              <span className="text-xs sm:text-sm text-[#43474f] mt-1.5 font-medium">Class-B Pouch Sterilized</span>
            </div>
            <div className="p-4 sm:p-5 rounded-xl bg-white shadow-xs border border-slate-100 flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold text-[#123b66] leading-none font-display">4.9 / 5</span>
              <span className="text-xs sm:text-sm text-[#43474f] mt-1.5 font-medium">Verified Community Rating</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Clinic Overview & Authentic Reception Showcase */}
      <section className="w-full py-12 sm:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Reception Image Container */}
            <div className="lg:col-span-7 flex flex-col gap-2">
              <div className="relative overflow-hidden rounded-2xl shadow-lg bg-[#e4efff]">
                <img 
                  alt="Warm, welcoming patient lounge &amp; reception at Narayana Dental Clinic" 
                  className="w-full h-auto object-cover max-h-[500px] transition-transform duration-700 hover:scale-[1.02]" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDphvSeiMdVLl3bdg7Nq0Q3x5XSdxVdNYGHpaYyUi53OVZHEaR0qLME-dDjU69RSkgEYZ1RDpq35_HStaMIGc22l2JzX1fh_IbGWOl0jSCHddJ59LmlAKPAIPS8oHUQ0khWB1hxRuNZdr96DqlLwIBt6OuCFTAFHaIRbXXmt8w28MwkflFa4TENzdsVTFj0wuE9LJHTvwvpoQ1rlYi3oEmvmt6utBH4RULlmIS7H4Rek2JhxSsF_XOz" 
                />
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-md flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#24638f] text-[22px] shrink-0 mt-0.5">location_on</span>
                  <p className="text-xs sm:text-sm text-[#101c29] leading-snug">
                    Warm, welcoming patient lounge &amp; reception at #1616, BDA Flats, Austin Town Main Road, Neelasandra, Bengaluru.
                  </p>
                </div>
              </div>
            </div>

            {/* Narrative Story Text */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="inline-flex items-center gap-1.5 text-[#24638f] text-xs uppercase tracking-wider font-semibold">
                <span className="h-2 w-2 rounded-full bg-[#24638f]"></span>
                <span>Our Heritage &amp; Foundation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#002548] tracking-tight font-display">
                Rooted in the Heart of Austin Town &amp; Neelasandra
              </h2>
              <div className="flex flex-col gap-3 text-sm sm:text-base text-[#43474f] leading-relaxed">
                <p>
                  Established in 2011 by Dr. Prakash Venkatarama and Dr. Madhura Prakash, Narayana Dental Clinic was envisioned as an antidote to impersonal, corporate dental chains. We sought to build a calm, transparent sanctuary where neighbors could receive world-class, multispecialty dental therapies without fear or pressure.
                </p>
                <p>
                  Over the last decade and a half, we have nurtured relationships spanning three generations—from pediatric fluoride check-ups for school children to tooth-saving rotary endodontics and dental implant rehabilitations for grandparents.
                </p>
                <p className="text-[#002548] font-medium">
                  Over 15,000+ happy smiles have been restored under our care with zero compromise on medical ethics or clinical precision.
                </p>
              </div>
              
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a 
                  className="inline-flex items-center gap-2 px-5 h-12 rounded-xl bg-[#123b66] text-white text-xs sm:text-sm font-semibold hover:bg-[#24638f] transition-all shadow-sm" 
                  href="tel:+916360654061"
                >
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  <span>Speak with Reception</span>
                </a>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-5 h-12 rounded-xl bg-[#dde9fb] text-[#002548] text-xs sm:text-sm font-semibold hover:bg-[#d7e4f5] transition-all cursor-pointer"
                >
                  <span>Directions &amp; Map</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Core Clinical Pillars (4 Cards) */}
      <section className="w-full bg-white py-12 sm:py-16 shadow-xs border-y border-[#dde9fb]/60">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col gap-8">
          
          {/* Section Heading */}
          <div className="max-w-2xl flex flex-col gap-1.5">
            <span className="text-xs text-[#24638f] font-semibold uppercase tracking-wider">Practice Ethos</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#002548] tracking-tight font-display">Four Pillars of Our Dental Practice</h2>
            <p className="text-sm sm:text-base text-[#43474f]">
              Clinical protocols designed for maximum safety, biological preservation, and long-term oral health stability.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* Pillar 01 */}
            <div className="p-5 rounded-2xl bg-[#eef4ff] transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between border border-[#dde9fb]/80">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full bg-[#002548]/10 flex items-center justify-center text-[#123b66]">
                    <span className="material-symbols-outlined text-[24px]">verified_user</span>
                  </div>
                  <span className="text-xl text-[#c3c6d0] font-bold font-display">01</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base font-bold text-[#002548]">Ethics First &amp; Transparent Treatment</h3>
                  <p className="text-xs sm:text-sm text-[#43474f] leading-relaxed">
                    We only recommend treatments that are genuinely necessary. Clear fee explanations before every procedure with no hidden costs or unnecessary sales tactics.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-2 flex items-center gap-1.5 text-[#24638f] text-xs font-semibold">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                <span>No over-treatment guarantee</span>
              </div>
            </div>

            {/* Pillar 02 */}
            <div className="p-5 rounded-2xl bg-[#eef4ff] transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between border border-[#dde9fb]/80">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full bg-[#002548]/10 flex items-center justify-center text-[#123b66]">
                    <span className="material-symbols-outlined text-[24px]">sanitizer</span>
                  </div>
                  <span className="text-xl text-[#c3c6d0] font-bold font-display">02</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base font-bold text-[#002548]">European Class-B Autoclave Sterilization</h3>
                  <p className="text-xs sm:text-sm text-[#43474f] leading-relaxed">
                    Strict chemical indicators and sterile pouch packaging opened chairside directly in front of every patient, completely eliminating cross-infection risks.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-2 flex items-center gap-1.5 text-[#24638f] text-xs font-semibold">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                <span>Hospital-grade sterility</span>
              </div>
            </div>

            {/* Pillar 03 */}
            <div className="p-5 rounded-2xl bg-[#eef4ff] transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between border border-[#dde9fb]/80">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full bg-[#002548]/10 flex items-center justify-center text-[#123b66]">
                    <span className="material-symbols-outlined text-[24px]">dentistry</span>
                  </div>
                  <span className="text-xl text-[#c3c6d0] font-bold font-display">03</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base font-bold text-[#002548]">Conservative &amp; Tooth-Preserving</h3>
                  <p className="text-xs sm:text-sm text-[#43474f] leading-relaxed">
                    <em>"Every natural tooth saved is a biological triumph."</em> We apply modern endodontics and bio-compatible restorative techniques designed to preserve original dentition.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-2 flex items-center gap-1.5 text-[#24638f] text-xs font-semibold">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                <span>Minimal tissue removal</span>
              </div>
            </div>

            {/* Pillar 04 */}
            <div className="p-5 rounded-2xl bg-[#eef4ff] transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between border border-[#dde9fb]/80">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full bg-[#002548]/10 flex items-center justify-center text-[#123b66]">
                    <span className="material-symbols-outlined text-[24px]">diversity_1</span>
                  </div>
                  <span className="text-xl text-[#c3c6d0] font-bold font-display">04</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base font-bold text-[#002548]">Personalized Continuity of Care</h3>
                  <p className="text-xs sm:text-sm text-[#43474f] leading-relaxed">
                    Consult directly with the same trusted senior doctors at every visit. Multigenerational care specifically calibrated for kids, active professionals, and senior citizens.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-2 flex items-center gap-1.5 text-[#24638f] text-xs font-semibold">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                <span>Direct doctor access</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Modern Clinic Infrastructure & Technology */}
      <section className="w-full py-12 sm:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Text & Tech Highlights */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="flex flex-col gap-1.5">
                <span className="text-xs text-[#24638f] font-semibold uppercase tracking-wider">Ergonomics &amp; Equipment</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#002548] tracking-tight font-display">
                  State-of-the-Art Ergonomic Dental Suites
                </h2>
                <p className="text-sm sm:text-base text-[#43474f] leading-relaxed">
                  Equipped with imported European pneumatic operatories, high-resolution chairside monitors, and ultra-gentle tools for completely painless, serene procedures.
                </p>
              </div>

              {/* Feature Cards / List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#e4efff] shadow-xs flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-[#002548] font-bold">
                    <span className="material-symbols-outlined text-[20px] text-[#24638f]">radiology</span>
                    <span className="text-base font-display">Digital RVG</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#43474f]">
                    90% less radiation exposure with instant high-resolution chairside diagnostic views.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#e4efff] shadow-xs flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-[#002548] font-bold">
                    <span className="material-symbols-outlined text-[20px] text-[#24638f]">precision_manufacturing</span>
                    <span className="text-base font-display">Rotary Endodontics</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#43474f]">
                    Apex locators ensure single-sitting, precise, and virtually painless root canal treatments.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#e4efff] shadow-xs flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-[#002548] font-bold">
                    <span className="material-symbols-outlined text-[20px] text-[#24638f]">memory</span>
                    <span className="text-base font-display">Guided Implants</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#43474f]">
                    Computer-guided planning for safe, minimally invasive titanium implant placement.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#e4efff] shadow-xs flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-[#002548] font-bold">
                    <span className="material-symbols-outlined text-[20px] text-[#24638f]">healing</span>
                    <span className="text-base font-display">Soft-Tissue Lasers</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#43474f]">
                    Virtually bloodless cosmetic gum contouring and accelerated periodontal tissue healing.
                  </p>
                </div>
              </div>
            </div>

            {/* Operatory Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg bg-[#dde9fb]">
                <img 
                  alt="State-of-the-Art Ergonomic Dental Suites at Narayana Dental Clinic" 
                  className="w-full h-auto object-cover max-h-[520px] transition-transform duration-700 hover:scale-[1.02]" 
                  src="https://lh3.googleusercontent.com/aida/AEtjO1Vq47gHikBSO0bv1ffaxru1gNB42Bo00khvySNoElaF4eqc6IkqNVwsP1LQQYSL5gE8NBKN8wRljq-DaTeRhUuJaSdWFHw5nN_LZH6FI2rHCOamB_JydMh5h-6bg0yfdqCTTIWo0qo30IZBlm9kYTyA2LK6IS-Q9zOa_NKzSehigND2cnjY6CFKLn8Kh9eOkfYjsjozPnkHzl0w0ONdQtGhjt2BJKuW71813vPW1EGnryuyuUX2AMKVjA" 
                />
                <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-sm text-xs text-[#002548] font-semibold flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#24638f] animate-pulse"></span>
                  <span>Sterile Operatory 01</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Leadership & Senior Doctors Preview */}
      <section className="w-full bg-[#eef4ff] py-12 sm:py-16 border-y border-[#dde9fb]/60">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col gap-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-xl flex flex-col gap-1.5">
              <span className="text-xs text-[#24638f] font-semibold uppercase tracking-wider">Clinical Leadership</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#002548] tracking-tight font-display">Led by Experienced Dental Specialists</h2>
              <p className="text-sm sm:text-base text-[#43474f]">
                Meet the primary practitioners personally guiding every treatment, consultation, and follow-up.
              </p>
            </div>
            <div>
              <button 
                onClick={() => onNavigate('doctors')}
                className="inline-flex items-center gap-2 px-5 h-12 rounded-xl bg-white text-[#002548] text-xs sm:text-sm font-semibold shadow-xs hover:bg-[#dde9fb] transition-all cursor-pointer"
              >
                <span>View Detailed Doctor Profiles</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Doctor Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Dr. Prakash Venkatarama Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white shadow-xs border border-slate-100 flex flex-col sm:flex-row gap-5 items-center sm:items-start transition-all hover:shadow-md">
              <div className="w-36 h-48 sm:w-44 sm:h-56 shrink-0 rounded-xl overflow-hidden bg-[#dde9fb] shadow-sm">
                <img 
                  alt="Dr. Prakash Venkatarama, Senior Dental Surgeon &amp; Implantologist" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKIEjb008grYxVlv8VRvKVqJejit9ltG9MhTkkyn1P899y5SUkftbpxT-O-Firk4wp7PfAy50faBYjY98Zwflx8BzekXY9TXmtaEcO-M4ChDtl4zrfbGw8-EP49rMGWc12jR03xHCQUvkWS-TNYWN5xkOJyJwnOATjydM7hceBDoxHUS6SS1zpH6DMej0kugC_6GdQ_aU9sz2OdX1Mg8O5Xhi9srH0GwqndrrMj1zuSpnaGfZQh78ZfHOppYgHrZe7tw" 
                />
              </div>
              <div className="flex flex-col gap-1 text-center sm:text-left flex-1">
                <div className="inline-flex items-center self-center sm:self-start px-2.5 py-0.5 rounded-full bg-[#cde5ff] text-[#001d31] text-xs font-semibold">
                  Founder &amp; Senior Dental Surgeon
                </div>
                <h3 className="text-lg font-bold text-[#002548] mt-1">Dr. Prakash Venkatarama</h3>
                <p className="text-xs font-semibold text-[#24638f]">BDS, MDS • 15+ Years Experience</p>
                <p className="text-xs sm:text-sm text-[#43474f] mt-1 leading-relaxed">
                  Specialist in complex restorative dentistry, single-visit rotary endodontics, and precision implantology. Known for his reassuring chairside manner and gentle approach.
                </p>
                <div className="mt-3 pt-1 flex flex-wrap gap-1.5 justify-center sm:justify-start">
                  <span className="px-2 py-0.5 rounded-md bg-[#e4efff] text-[#002548] text-xs font-medium">Implantology</span>
                  <span className="px-2 py-0.5 rounded-md bg-[#e4efff] text-[#002548] text-xs font-medium">Root Canals</span>
                  <span className="px-2 py-0.5 rounded-md bg-[#e4efff] text-[#002548] text-xs font-medium">Full Mouth Rehab</span>
                </div>
              </div>
            </div>

            {/* Dr. Madhura Prakash Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white shadow-xs border border-slate-100 flex flex-col sm:flex-row gap-5 items-center sm:items-start transition-all hover:shadow-md">
              <div className="w-36 h-48 sm:w-44 sm:h-56 shrink-0 rounded-xl overflow-hidden bg-[#dde9fb] shadow-sm">
                <img 
                  alt="Dr. Madhura Prakash, Orthodontist &amp; Cosmetic Dental Surgeon" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300" 
                  src="/images/dr-madhura-prakash.jpg" 
                />
              </div>
              <div className="flex flex-col gap-1 text-center sm:text-left flex-1">
                <div className="inline-flex items-center self-center sm:self-start px-2.5 py-0.5 rounded-full bg-[#cde5ff] text-[#001d31] text-xs font-semibold">
                  Co-Founder &amp; Orthodontic Specialist
                </div>
                <h3 className="text-lg font-bold text-[#002548] mt-1">Dr. Madhura Prakash</h3>
                <p className="text-xs font-semibold text-[#24638f]">BDS, MDS (Orthodontics) • 13+ Years Experience</p>
                <p className="text-xs sm:text-sm text-[#43474f] mt-1 leading-relaxed">
                  Expert in clear aligners, self-ligating braces, interceptive pediatric orthodontics, and smile design. Passionate about empowering patients through balanced facial aesthetics.
                </p>
                <div className="mt-3 pt-1 flex flex-wrap gap-1.5 justify-center sm:justify-start">
                  <span className="px-2 py-0.5 rounded-md bg-[#e4efff] text-[#002548] text-xs font-medium">Invisalign &amp; Aligners</span>
                  <span className="px-2 py-0.5 rounded-md bg-[#e4efff] text-[#002548] text-xs font-medium">Cosmetic Veneers</span>
                  <span className="px-2 py-0.5 rounded-md bg-[#e4efff] text-[#002548] text-xs font-medium">Kids Dental Care</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Clinic Timeline & Milestones */}
      <section className="w-full py-12 sm:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col gap-8">
          
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-1.5">
            <span className="text-xs text-[#24638f] font-semibold uppercase tracking-wider">Evolution of Care</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#002548] tracking-tight font-display">Our Journey &amp; Milestones</h2>
            <p className="text-sm sm:text-base text-[#43474f]">
              Fifteen years of continuous advancement, elevating local dental standards in Austin Town and Neelasandra.
            </p>
          </div>

          {/* Timeline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            
            {/* 2011 */}
            <div className="p-5 rounded-2xl bg-[#e4efff] shadow-xs flex flex-col justify-between border border-[#dde9fb]">
              <div className="flex flex-col gap-1.5">
                <span className="text-2xl font-bold text-[#24638f] font-display">2011</span>
                <h4 className="text-base font-bold text-[#002548]">Clinic Inception</h4>
                <p className="text-xs sm:text-sm text-[#43474f] mt-1 leading-relaxed">
                  Founded on Austin Town Main Road with a single dental operatory and an unwavering promise of patient-first honesty.
                </p>
              </div>
              <div className="mt-4 pt-2 text-[#002548] text-xs font-semibold border-t border-[#dde9fb]/80">
                Austin Town Launch
              </div>
            </div>

            {/* 2015 */}
            <div className="p-5 rounded-2xl bg-[#e4efff] shadow-xs flex flex-col justify-between border border-[#dde9fb]">
              <div className="flex flex-col gap-1.5">
                <span className="text-2xl font-bold text-[#24638f] font-display">2015</span>
                <h4 className="text-base font-bold text-[#002548]">Tech Upgrades</h4>
                <p className="text-xs sm:text-sm text-[#43474f] mt-1 leading-relaxed">
                  Transitioned to fully digital RVG imaging and motorized rotary endodontics for pain-free single-visit treatments.
                </p>
              </div>
              <div className="mt-4 pt-2 text-[#002548] text-xs font-semibold border-t border-[#dde9fb]/80">
                Digital Diagnostics
              </div>
            </div>

            {/* 2019 */}
            <div className="p-5 rounded-2xl bg-[#e4efff] shadow-xs flex flex-col justify-between border border-[#dde9fb]">
              <div className="flex flex-col gap-1.5">
                <span className="text-2xl font-bold text-[#24638f] font-display">2019</span>
                <h4 className="text-base font-bold text-[#002548]">Class-B Protocol</h4>
                <p className="text-xs sm:text-sm text-[#43474f] mt-1 leading-relaxed">
                  Institutionalized European vacuum Class-B autoclave sterilization, ensuring zero cross-contamination.
                </p>
              </div>
              <div className="mt-4 pt-2 text-[#002548] text-xs font-semibold border-t border-[#dde9fb]/80">
                Zero-Infection Safety
              </div>
            </div>

            {/* 2023 */}
            <div className="p-5 rounded-2xl bg-[#e4efff] shadow-xs flex flex-col justify-between border border-[#dde9fb]">
              <div className="flex flex-col gap-1.5">
                <span className="text-2xl font-bold text-[#24638f] font-display">2023</span>
                <h4 className="text-base font-bold text-[#002548]">Cosmetic &amp; Aligner Wing</h4>
                <p className="text-xs sm:text-sm text-[#43474f] mt-1 leading-relaxed">
                  Launched our dedicated clear aligner wing and digital smile simulation suite for aesthetic transformations.
                </p>
              </div>
              <div className="mt-4 pt-2 text-[#002548] text-xs font-semibold border-t border-[#dde9fb]/80">
                Clear Aligners Suite
              </div>
            </div>

            {/* Present */}
            <div className="p-5 rounded-2xl bg-[#123b66] text-white shadow-md flex flex-col justify-between border border-[#123b66]">
              <div className="flex flex-col gap-1.5">
                <span className="text-2xl font-bold text-[#cde5ff] font-display">Present</span>
                <h4 className="text-base font-bold text-white">15,000+ Smiles</h4>
                <p className="text-xs sm:text-sm text-[#83a6d7] mt-1 leading-relaxed">
                  Proudly serving multiple generations of families across Neelasandra, Austin Town, Richmond Town, and Central Bengaluru.
                </p>
              </div>
              <div className="mt-4 pt-2 text-[#cde5ff] text-xs font-semibold flex items-center gap-1 border-t border-[#83a6d7]/30">
                <span className="material-symbols-outlined text-[16px]">stars</span>
                <span>Trusted Legacy</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Bottom CTA Banner */}
      <section className="w-full bg-[#123b66] py-12 sm:py-16 text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl flex flex-col gap-3 text-center lg:text-left">
              <div className="inline-flex items-center self-center lg:self-start gap-1.5 px-3 py-1 rounded-full bg-[#24638f] text-white text-xs font-semibold">
                <span className="material-symbols-outlined text-[16px]">medical_services</span>
                <span>Consult With Senior Dental Specialists</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display">
                Experience Honest, Gentle Dentistry
              </h2>
              <p className="text-sm sm:text-base text-[#83a6d7] leading-relaxed">
                Call our clinic desk directly at <a className="text-white underline font-semibold" href="tel:+916360654061">+91 6360654061</a> or send an appointment enquiry online. We respect your schedule with minimal waiting times.
              </p>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <button 
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 h-12 rounded-xl bg-[#780b00] text-white text-xs sm:text-sm font-semibold hover:opacity-95 transition-all shadow-md cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                <span>Book Consultation</span>
              </button>
              <a 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 h-12 rounded-xl bg-[#24638f] text-white text-xs sm:text-sm font-semibold hover:bg-[#24638f]/90 transition-all shadow-md" 
                href="https://wa.me/916360654061" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
