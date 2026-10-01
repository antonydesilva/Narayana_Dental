import React from 'react';

interface DoctorsPageProps {
  onOpenBooking: (doctorPreference?: string) => void;
}

export const DoctorsPage: React.FC<DoctorsPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="w-full bg-[#f8f9ff]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col w-full">

          {/* 1. Page Editorial Introduction */}
          <section className="py-8 sm:py-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#dde9fb]/60">
            <div className="max-w-2xl flex flex-col gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#cde5ff] text-[#115782] w-fit text-xs uppercase tracking-wider font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#24638f]"></span>
                <span>Clinical Leadership &amp; Specialized Care</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#002548] tracking-tight font-display">
                Meet Our Dental Specialists
              </h1>
              <p className="text-base sm:text-lg text-[#43474f] max-w-xl leading-relaxed">
                Experienced dental surgeons and specialists dedicated to personalized, ethical dental care in Bengaluru since 2011.
              </p>
            </div>

            {/* Credential highlights indicator pill */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#eef4ff] shadow-xs border border-[#dde9fb]/80 self-start md:self-auto shrink-0">
              <div className="flex -space-x-3 items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-xs bg-[#dde9fb] border-2 border-white">
                  <img 
                    alt="Dr. Prakash Venkatarama portrait" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCArsLfvcrfiGWMdpLeatvloXcDolyc9PNGINPHTgWqLDUq82i4yoZ8oEPa5kqcwbL8M-oMnSZa0tEMJ-IC8Zg-EWOatgZm2T6F4LyNyac0sU_VdHp5iTmR_ZmRhHl3YfF6ZGky8pDN518RzDLO9WomGCXFjh8lJ4CmjgtVuQ5cz1W-5LAdR50pJzWQ6H8QbW1xtwxBX4Z_5bIpZcPpTE-aCcRg6FY02_HBTYXm143xpzDH90C2SSW2MJOb4KgMoFrqag" 
                  />
                </div>
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-xs bg-[#dde9fb] border-2 border-white">
                  <img 
                    alt="Dr. Madhura Prakash portrait" 
                    className="w-full h-full object-cover object-top" 
                    src="/images/dr-madhura-prakash.jpg" 
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-[#002548] font-bold text-lg leading-tight font-display">
                  <span>15,000+</span>
                  <span className="material-symbols-outlined text-[18px] text-[#24638f]">verified</span>
                </div>
                <span className="text-xs text-[#43474f] font-medium">Smiles Treated in Austin Town</span>
              </div>
            </div>
          </section>

          {/* 2. Doctor 1: Dr. Prakash Venkatarama */}
          <section className="py-8 sm:py-12">
            <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xs border border-slate-100 hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                
                {/* Doctor Visual & Quick Meta (5 cols) */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#dde9fb] shadow-sm">
                    <img 
                      alt="Dr. Prakash Venkatarama smiling warmly in clinical coat at Narayana Dental Clinic" 
                      className="w-full h-full object-cover object-top" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcSEcPOWC1gLNyO6vJUe3bomodgR9itsY_ZHlNF0yW7Tzd6bYVd8oLOV1juZQsRv4RtCSOp5Wu5ID5-Q9afhq1MNXmutKmq-59QfEKB8XIaUC3kh7rM2Z6iNV8qtUS7PiCRq_mUU0dykmlIM53ZjBec_zBYariQ51I46Hz5ILAEfmwMLj-0xJkGgjvvdEH6tzL-vQ5SLpU88iT9s-Z6uUx9lwRcf1_eaSfcirQ3GSl1xGw5D1PuyGMIx0skfAbnubxkA" 
                    />
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-xs flex items-center justify-between">
                      <div>
                        <p className="text-[11px] text-[#43474f] uppercase tracking-wider font-semibold">Clinical Practice</p>
                        <p className="text-base font-bold text-[#002548]">Since 2011</p>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-[#cde5ff] text-[#115782] text-xs font-semibold">
                        Austin Town &amp; Neelasandra
                      </span>
                    </div>
                  </div>

                  {/* Schedule Badge */}
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-[#eef4ff] text-[#101c29] border border-[#dde9fb]/80">
                    <span className="material-symbols-outlined text-[#24638f] text-[22px]">calendar_clock</span>
                    <div className="flex flex-col text-left">
                      <span className="text-sm font-semibold text-[#002548]">In-Clinic Consultations</span>
                      <span className="text-xs text-[#43474f]">Mon – Sat: 10:00 AM – 8:00 PM</span>
                    </div>
                  </div>
                </div>

                {/* Doctor Details & Clinical Focus (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full gap-5">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <span className="text-xs text-[#24638f] font-semibold uppercase tracking-wider">
                        Senior Dental Surgeon &amp; Clinical Director
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-[#24638f] px-3 py-1 bg-[#cde5ff]/60 rounded-full font-semibold">
                        <span className="w-2 h-2 rounded-full bg-[#24638f]"></span>
                        <span>14+ Years Clinical Leadership</span>
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-[#002548] font-display">
                      Dr. Prakash Venkatarama
                    </h2>
                    <p className="text-sm sm:text-base text-[#24638f] font-medium mt-1">
                      BDS • Dental Surgeon, Endodontist &amp; Oral Implantologist
                    </p>

                    <div className="my-4 p-4 rounded-2xl bg-[#eef4ff] flex flex-col gap-1 border border-[#dde9fb]/80">
                      <span className="text-[11px] text-[#43474f] uppercase tracking-wider font-semibold">Treatment Philosophy</span>
                      <p className="text-sm text-[#101c29] italic leading-relaxed">
                        “Every tooth saved is a biological triumph. We believe in gentle, zero-pressure care where treatment steps are thoroughly understood before we ever touch an instrument.”
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-[#43474f] leading-relaxed mb-4">
                      Founding doctor of Narayana Dental Clinic in 2011, Dr. Prakash has pioneered evidence-backed, conservative restorative dentistry in the Austin Town neighborhood. Known for his calm bedside manner and precise mastery over painless local anesthesia, he transforms standard dental apprehension into reassuring patient experiences.
                    </p>

                    {/* Clinical Specializations Pill Grid */}
                    <div className="flex flex-col gap-2 mb-4">
                      <h3 className="text-xs text-[#002548] uppercase tracking-wider font-bold">Core Clinical Focus</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#eef4ff] border border-[#dde9fb]/60">
                          <span className="material-symbols-outlined text-[#24638f] text-[20px] shrink-0 mt-0.5">dentistry</span>
                          <div>
                            <strong className="text-xs sm:text-sm text-[#002548] block font-semibold">Single-Sitting Root Canals</strong>
                            <span className="text-xs text-[#43474f]">Rotary endodontics with apex locator precision</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#eef4ff] border border-[#dde9fb]/60">
                          <span className="material-symbols-outlined text-[#24638f] text-[20px] shrink-0 mt-0.5">medical_services</span>
                          <div>
                            <strong className="text-xs sm:text-sm text-[#002548] block font-semibold">Advanced Dental Implants</strong>
                            <span className="text-xs text-[#43474f]">Bio-compatible titanium tooth replacements</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#eef4ff] border border-[#dde9fb]/60">
                          <span className="material-symbols-outlined text-[#24638f] text-[20px] shrink-0 mt-0.5">shield</span>
                          <div>
                            <strong className="text-xs sm:text-sm text-[#002548] block font-semibold">Painless Anesthesia</strong>
                            <span className="text-xs text-[#43474f]">Topical numbing &amp; gentle syringe techniques</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#eef4ff] border border-[#dde9fb]/60">
                          <span className="material-symbols-outlined text-[#24638f] text-[20px] shrink-0 mt-0.5">precision_manufacturing</span>
                          <div>
                            <strong className="text-xs sm:text-sm text-[#002548] block font-semibold">Full Mouth Reconstruction</strong>
                            <span className="text-xs text-[#43474f]">Zirconia crowns, bridges &amp; occlusal balance</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                    <button 
                      onClick={() => onOpenBooking('dr-prakash')}
                      className="inline-flex items-center justify-center gap-2 px-6 h-12 rounded-xl bg-[#780b00] hover:bg-[#780b00]/90 text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">event</span>
                      <span>Book Consultation with Dr. Prakash</span>
                    </button>
                    <a 
                      className="inline-flex items-center justify-center gap-2 px-5 h-12 rounded-xl bg-[#dde9fb] hover:bg-[#d7e4f5] text-[#002548] text-xs sm:text-sm font-semibold transition-colors" 
                      href="tel:+916360654061"
                    >
                      <span className="material-symbols-outlined text-[18px]">phone</span>
                      <span>Call Clinic Desk</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* 3. Doctor 2: Dr. Madhura Prakash */}
          <section className="py-8 sm:py-12">
            <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xs border border-slate-100 hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                
                {/* Doctor Visual & Quick Meta (5 cols, on desktop right order-2) */}
                <div className="lg:col-span-5 flex flex-col gap-4 order-1 lg:order-2">
                  <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#dde9fb] shadow-sm">
                    <img 
                      alt="Dr. Madhura Prakash smiling in white clinical coat" 
                      className="w-full h-full object-cover object-top" 
                      src="/images/dr-madhura-prakash.jpg" 
                    />
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-xs flex items-center justify-between">
                      <div>
                        <p className="text-[11px] text-[#43474f] uppercase tracking-wider font-semibold">Orthodontic Fellowship</p>
                        <p className="text-base font-bold text-[#002548]">Spain &amp; Italy Trained</p>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-[#cde5ff] text-[#115782] text-xs font-semibold">
                        Smile Architect
                      </span>
                    </div>
                  </div>

                  {/* Schedule Badge */}
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-[#eef4ff] text-[#101c29] border border-[#dde9fb]/80">
                    <span className="material-symbols-outlined text-[#24638f] text-[22px]">auto_fix_high</span>
                    <div className="flex flex-col text-left">
                      <span className="text-sm font-semibold text-[#002548]">Smile Consultation Slots</span>
                      <span className="text-xs text-[#43474f]">Orthodontic &amp; Cosmetic Appointments</span>
                    </div>
                  </div>
                </div>

                {/* Doctor Details & Clinical Focus (7 cols, on desktop left order-1) */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full gap-5 order-2 lg:order-1">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <span className="text-xs text-[#24638f] font-semibold uppercase tracking-wider">
                        Consultant Orthodontist &amp; Cosmetic Dental Surgeon
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-[#24638f] px-3 py-1 bg-[#cde5ff]/60 rounded-full font-semibold">
                        <span className="w-2 h-2 rounded-full bg-[#24638f]"></span>
                        <span>International Board Fellow</span>
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-[#002548] font-display">
                      Dr. Madhura Prakash
                    </h2>
                    <div className="flex flex-wrap items-center gap-2 text-[#24638f] text-sm sm:text-base font-medium mt-1">
                      <span>BDS</span>
                      <span>•</span>
                      <span>D.Ortho (Spain)</span>
                      <span>•</span>
                      <span>FICNOG (Italy)</span>
                    </div>

                    <div className="my-4 p-4 rounded-2xl bg-[#eef4ff] flex flex-col gap-1 border border-[#dde9fb]/80">
                      <span className="text-[11px] text-[#43474f] uppercase tracking-wider font-semibold">Aesthetic &amp; Functional Approach</span>
                      <p className="text-sm text-[#101c29] italic leading-relaxed">
                        “A confident smile influences every aspect of human life. We merge modern European aligner ergonomics with minimally invasive aesthetic dentistry for life-changing facial balance.”
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-[#43474f] leading-relaxed mb-4">
                      Dr. Madhura brings specialized international orthodontic insight to Narayana Dental Clinic. With rigorous advanced clinical training from Spain and Italy, she excels in both subtle aligner therapies for working adults and early interceptive orthopedic guidance for growing children. Her warm, patient demeanor ensures that both kids and anxious adults feel immediately understood.
                    </p>

                    {/* Clinical Specializations Pill Grid */}
                    <div className="flex flex-col gap-2 mb-4">
                      <h3 className="text-xs text-[#002548] uppercase tracking-wider font-bold">Specialized Disciplines</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#eef4ff] border border-[#dde9fb]/60">
                          <span className="material-symbols-outlined text-[#24638f] text-[20px] shrink-0 mt-0.5">visibility</span>
                          <div>
                            <strong className="text-xs sm:text-sm text-[#002548] block font-semibold">Clear Aligner Therapy</strong>
                            <span className="text-xs text-[#43474f]">Nearly invisible, digital smile straightening</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#eef4ff] border border-[#dde9fb]/60">
                          <span className="material-symbols-outlined text-[#24638f] text-[20px] shrink-0 mt-0.5">grid_view</span>
                          <div>
                            <strong className="text-xs sm:text-sm text-[#002548] block font-semibold">Self-Ligating &amp; Ceramic Braces</strong>
                            <span className="text-xs text-[#43474f]">Low-friction, rapid alignment mechanics</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#eef4ff] border border-[#dde9fb]/60">
                          <span className="material-symbols-outlined text-[#24638f] text-[20px] shrink-0 mt-0.5">face</span>
                          <div>
                            <strong className="text-xs sm:text-sm text-[#002548] block font-semibold">Smile Makeovers &amp; Veneers</strong>
                            <span className="text-xs text-[#43474f]">Porcelain laminate veneers &amp; gum contouring</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#eef4ff] border border-[#dde9fb]/60">
                          <span className="material-symbols-outlined text-[#24638f] text-[20px] shrink-0 mt-0.5">child_care</span>
                          <div>
                            <strong className="text-xs sm:text-sm text-[#002548] block font-semibold">Pediatric Interceptive Ortho</strong>
                            <span className="text-xs text-[#43474f]">Habit breaking &amp; jaw expansion therapy</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                    <button 
                      onClick={() => onOpenBooking('dr-madhura')}
                      className="inline-flex items-center justify-center gap-2 px-6 h-12 rounded-xl bg-[#780b00] hover:bg-[#780b00]/90 text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">event</span>
                      <span>Book Consultation with Dr. Madhura</span>
                    </button>
                    <a 
                      className="inline-flex items-center justify-center gap-2 px-5 h-12 rounded-xl bg-[#dde9fb] hover:bg-[#d7e4f5] text-[#002548] text-xs sm:text-sm font-semibold transition-colors" 
                      href="https://wa.me/916360654061" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="material-symbols-outlined text-[18px]">chat</span>
                      <span>WhatsApp Smile Evaluation</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* 4. Practice Standards: Clinical Evidence Bar */}
          <section className="py-8 sm:py-12">
            <div className="bg-[#002548] text-white rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-xl">
              {/* Ambient background element */}
              <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#24638f]/20 blur-3xl pointer-events-none"></div>

              <div className="flex flex-col gap-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div className="max-w-xl">
                    <span className="text-xs text-[#cde5ff] uppercase tracking-wider font-semibold">The Narayana Standard</span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1 font-display">
                      Guiding Principles Behind Every Procedure
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#83a6d7] max-w-sm leading-relaxed">
                    Our doctors adhere strictly to clinical safety protocols, patient autonomy, and long-term durability.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Pillar 1 */}
                  <div className="p-4 rounded-2xl bg-[#123b66] text-white flex flex-col gap-1 border border-[#123b66]">
                    <div className="w-10 h-10 rounded-xl bg-[#24638f] flex items-center justify-center text-white mb-1">
                      <span className="material-symbols-outlined text-[20px]">balance</span>
                    </div>
                    <h4 className="text-base font-bold text-white">Ethics First</h4>
                    <p className="text-xs sm:text-sm text-[#d7e4f5] leading-relaxed">
                      No unnecessary treatments or inflated diagnostics. You receive the exact medical intervention your oral health requires.
                    </p>
                  </div>

                  {/* Pillar 2 */}
                  <div className="p-4 rounded-2xl bg-[#123b66] text-white flex flex-col gap-1 border border-[#123b66]">
                    <div className="w-10 h-10 rounded-xl bg-[#24638f] flex items-center justify-center text-white mb-1">
                      <span className="material-symbols-outlined text-[20px]">science</span>
                    </div>
                    <h4 className="text-base font-bold text-white">Evidence-Based</h4>
                    <p className="text-xs sm:text-sm text-[#d7e4f5] leading-relaxed">
                      Every procedure draws from validated dental science, CE-certified materials, and digital diagnostic radiography.
                    </p>
                  </div>

                  {/* Pillar 3 */}
                  <div className="p-4 rounded-2xl bg-[#123b66] text-white flex flex-col gap-1 border border-[#123b66]">
                    <div className="w-10 h-10 rounded-xl bg-[#24638f] flex items-center justify-center text-white mb-1">
                      <span className="material-symbols-outlined text-[20px]">receipt_long</span>
                    </div>
                    <h4 className="text-base font-bold text-white">Transparent Plans</h4>
                    <p className="text-xs sm:text-sm text-[#d7e4f5] leading-relaxed">
                      Detailed step-by-step treatment roadmaps and clear upfront cost breakdowns before commencing any procedure.
                    </p>
                  </div>

                  {/* Pillar 4 */}
                  <div className="p-4 rounded-2xl bg-[#123b66] text-white flex flex-col gap-1 border border-[#123b66]">
                    <div className="w-10 h-10 rounded-xl bg-[#24638f] flex items-center justify-center text-white mb-1">
                      <span className="material-symbols-outlined text-[20px]">home_health</span>
                    </div>
                    <h4 className="text-base font-bold text-white">Local Continuity</h4>
                    <p className="text-xs sm:text-sm text-[#d7e4f5] leading-relaxed">
                      Serving the same Neelasandra &amp; Austin Town families since 2011 with multigenerational dental records.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Direct Booking Banner */}
          <section className="py-8 sm:py-12 mb-8">
            <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xs border border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="max-w-xl flex flex-col gap-1.5">
                <span className="text-xs text-[#24638f] uppercase tracking-wider font-semibold">Direct Booking</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#002548] tracking-tight font-display">
                  Ready to Consult with Our Doctors?
                </h3>
                <p className="text-sm sm:text-base text-[#43474f] leading-relaxed">
                  Book your diagnostic checkup today. Walk-ins are prioritized during clinical hours, and emergencies are attended without delay.
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-2">
                  <div className="flex items-center gap-1.5 text-[#43474f] text-xs sm:text-sm">
                    <span className="material-symbols-outlined text-[#24638f] text-[18px]">pin_drop</span>
                    <span>Austin Town Main Rd</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#43474f] text-xs sm:text-sm">
                    <span className="material-symbols-outlined text-[#24638f] text-[18px]">verified</span>
                    <span>Hygienic Autoclave Class B</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3 items-stretch shrink-0">
                <button 
                  onClick={() => onOpenBooking()}
                  className="inline-flex items-center justify-center gap-2 px-6 h-14 rounded-xl bg-[#780b00] hover:bg-[#780b00]/90 text-white font-semibold text-sm sm:text-base shadow-md transition-all text-center cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[22px]">calendar_month</span>
                  <span>Book Appointment Online</span>
                </button>
                <a 
                  className="inline-flex items-center justify-center gap-2 px-6 h-14 rounded-xl bg-[#eef4ff] hover:bg-[#dde9fb] text-[#002548] font-semibold text-sm sm:text-base transition-all text-center border border-[#dde9fb]" 
                  href="tel:6360654061"
                >
                  <span className="material-symbols-outlined text-[22px] text-[#24638f]">call</span>
                  <span>6360654061</span>
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
