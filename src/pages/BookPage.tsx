import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { PageView } from '../types';

interface BookPageProps {
  onNavigate?: (page: PageView) => void;
}

export const BookPage: React.FC<BookPageProps> = ({ onNavigate }) => {
  const today = new Date().toISOString().split('T')[0];

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [doctor, setDoctor] = useState('Any Specialist');
  const [preferredDate, setPreferredDate] = useState(today);
  const [timeSlot, setTimeSlot] = useState('Morning 10 AM - 1 PM');
  const [symptoms, setSymptoms] = useState('');
  const [sendViaWhatsapp, setSendViaWhatsapp] = useState(true);

  const [toast, setToast] = useState<{
    show: boolean;
    title: string;
    desc: string;
  }>({
    show: false,
    title: '',
    desc: ''
  });

  const showToast = (title: string, desc: string) => {
    setToast({ show: true, title, desc });
    setTimeout(() => {
      setToast({ show: false, title: '', desc: '' });
    }, 5500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim()) {
      showToast('Name Required', 'Please enter your full name to proceed with booking.');
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
      showToast('Invalid Phone Number', 'Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!service) {
      showToast('Select Treatment', 'Please choose the dental service you require.');
      return;
    }

    if (sendViaWhatsapp) {
      let message = `*Appointment Enquiry - Narayana Dental Clinic*\n`;
      message += `*Name:* ${fullName.trim()}\n`;
      message += `*Phone:* +91 ${phone.trim()}\n`;
      if (email.trim()) message += `*Email:* ${email.trim()}\n`;
      message += `*Service:* ${service}\n`;
      message += `*Doctor Preference:* ${doctor}\n`;
      message += `*Preferred Date:* ${preferredDate}\n`;
      message += `*Time Slot:* ${timeSlot}\n`;
      if (symptoms.trim()) message += `*Notes/Symptoms:* ${symptoms.trim()}\n`;
      message += `\nSent via Official Website.`;

      const waUrl = `https://wa.me/${CLINIC_INFO.whatsappDirect}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');
      showToast('Opening WhatsApp...', 'Your appointment request has been structured for the clinic desk.');
    } else {
      showToast(
        'Enquiry Received!',
        `Thank you ${fullName.trim()}. Our front-desk coordinator will call you shortly on +91 ${phone.trim()} to confirm doctor slot availability.`
      );
      // Reset form
      setFullName('');
      setPhone('');
      setEmail('');
      setSymptoms('');
      setPreferredDate(today);
    }
  };

  return (
    <div className="w-full bg-[#f8f9ff] min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col w-full">

          {/* 1. TOP HEADER / FAST REASSURANCE DESK */}
          <section className="relative w-full overflow-hidden py-8 sm:py-12">
            {/* Ambient Glows */}
            <div className="absolute -top-24 -left-20 w-80 h-80 rounded-full bg-[#cde5ff]/30 blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-[#d7e4f5]/60 blur-3xl pointer-events-none" />

            <div className="relative flex flex-col gap-4">
              {/* Breadcrumbs if onNavigate exists */}
              {onNavigate && (
                <div className="flex items-center gap-2 text-xs font-semibold text-[#43474f] mb-1">
                  <button 
                    onClick={() => onNavigate('home')} 
                    className="hover:text-[#002548] cursor-pointer transition-colors"
                  >
                    Home
                  </button>
                  <span>/</span>
                  <span className="text-[#002548]">Book Appointment</span>
                </div>
              )}

              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#dde9fb] text-[#002548]">
                <span className="w-2 h-2 rounded-full bg-[#24638f]" />
                <span className="text-xs uppercase tracking-wider font-semibold font-display">
                  Fast Reassurance Desk
                </span>
              </div>

              {/* Title & Response Window Badge */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                <div className="max-w-2xl">
                  <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#002548] tracking-tight font-display leading-tight">
                    Book a Dental Consultation
                  </h1>
                  <p className="text-base sm:text-lg text-[#43474f] mt-1 leading-relaxed">
                    Send us your preferred appointment details. Our clinic team will contact you to confirm availability.
                  </p>
                </div>

                <div className="flex items-center gap-3 bg-white shadow-xs rounded-xl px-4 py-3 self-start border border-[#dde9fb]">
                  <div className="w-10 h-10 rounded-lg bg-[#eef4ff] flex items-center justify-center text-[#002548]">
                    <span className="material-symbols-outlined text-[22px]">calendar_clock</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#43474f] uppercase tracking-wider">Response Window</p>
                    <p className="text-sm font-bold text-[#002548]">Within 30–60 Minutes</p>
                  </div>
                </div>
              </div>

              {/* Info Note Callout */}
              <div className="bg-[#eef4ff] border border-[#dde9fb] rounded-xl p-4 flex items-start gap-3">
                <span className="material-symbols-outlined text-[20px] text-[#24638f] mt-0.5 shrink-0">info</span>
                <p className="text-xs sm:text-sm text-[#43474f] leading-relaxed">
                  <strong className="text-[#002548] font-semibold">Note:</strong> This is an appointment enquiry. Your request will be reviewed by our clinic front-desk and confirmed via phone call or WhatsApp based on doctor availability.
                </p>
              </div>
            </div>
          </section>

          {/* 2. TWO-COLUMN BOOKING SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-16">
            
            {/* LEFT COLUMN: Form + Trust Features */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-sm rounded-2xl border border-[#dde9fb] p-6 sm:p-8 flex flex-col gap-5"
              >
                {/* Form Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#dde9fb]/60">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#002548] font-display">Consultation Details</h2>
                    <p className="text-xs text-[#43474f]">Step 1 of 1 • Patient &amp; Treatment Specifics</p>
                  </div>
                  <span className="text-xs font-semibold text-[#115782] bg-[#cde5ff]/60 px-3 py-1 rounded-full">
                    New or Existing
                  </span>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#101c29]" htmlFor="fullName">
                      Full Name *
                    </label>
                    <input 
                      className="w-full h-12 px-4 rounded-xl bg-[#f8f9ff] border border-[#dde9fb] text-[#101c29] text-sm focus:bg-white focus:ring-2 focus:ring-[#24638f] outline-none transition-all placeholder:text-[#83a6d7]" 
                      id="fullName" 
                      name="fullName" 
                      placeholder="e.g. Ramesh Kumar" 
                      required 
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#101c29]" htmlFor="mobileNumber">
                      Mobile Number *
                    </label>
                    <div className="flex h-12 rounded-xl bg-[#f8f9ff] border border-[#dde9fb] overflow-hidden focus-within:ring-2 focus-within:ring-[#24638f] focus-within:bg-white transition-all">
                      <span className="inline-flex items-center px-3.5 bg-[#e4efff] text-xs font-bold text-[#002548] select-none border-r border-[#dde9fb]">
                        +91
                      </span>
                      <input 
                        className="w-full h-full px-3.5 bg-transparent text-[#101c29] text-sm outline-none placeholder:text-[#83a6d7]" 
                        id="mobileNumber" 
                        name="mobileNumber" 
                        pattern="[0-9]{10}" 
                        placeholder="9876543210" 
                        required 
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      />
                    </div>
                  </div>
                </div>

                {/* Email & Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#101c29]" htmlFor="email">
                      Email Address (Optional)
                    </label>
                    <input 
                      className="w-full h-12 px-4 rounded-xl bg-[#f8f9ff] border border-[#dde9fb] text-[#101c29] text-sm focus:bg-white focus:ring-2 focus:ring-[#24638f] outline-none transition-all placeholder:text-[#83a6d7]" 
                      id="email" 
                      name="email" 
                      placeholder="patient@example.com" 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#101c29]" htmlFor="service">
                      Select Service *
                    </label>
                    <div className="relative">
                      <select 
                        className="w-full h-12 px-4 pr-10 rounded-xl bg-[#f8f9ff] border border-[#dde9fb] text-[#101c29] text-sm focus:bg-white focus:ring-2 focus:ring-[#24638f] outline-none appearance-none transition-all cursor-pointer" 
                        id="service" 
                        name="service" 
                        required
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                      >
                        <option disabled value="">Choose treatment need</option>
                        <option value="Dental Consultation / Checkup">Dental Consultation / Comprehensive Checkup</option>
                        <option value="Dental Implants">Dental Implants (Permanent Replacement)</option>
                        <option value="Root Canal">Root Canal Treatment (Endodontics)</option>
                        <option value="Orthodontics / Braces">Orthodontics &amp; Invisible Aligners</option>
                        <option value="Cosmetic Dentistry">Cosmetic Dentistry &amp; Veneers</option>
                        <option value="Teeth Cleaning / Whitening">Teeth Cleaning &amp; Deep Whitening</option>
                        <option value="Wisdom Tooth / Extraction">Wisdom Tooth Removal &amp; Extractions</option>
                        <option value="Child Dental Care">Child Dental Care (Pediatric)</option>
                        <option value="Emergency / Other">Emergency Dental Pain / Other Care</option>
                      </select>
                      <span className="material-symbols-outlined pointer-events-none absolute right-3 top-3 text-[#43474f] text-[20px]">
                        expand_more
                      </span>
                    </div>
                  </div>
                </div>

                {/* Preferred Doctor Radio Group */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#101c29]">
                    Preferred Doctor
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { val: 'Any Specialist', label: 'Any Specialist', desc: 'Fastest allotment' },
                      { val: 'Dr. Prakash Venkatarama', label: 'Dr. Prakash V.', desc: 'Lead Consultant' },
                      { val: 'Dr. Madhura Prakash', label: 'Dr. Madhura P.', desc: 'Aesthetic & Pedo' }
                    ].map((docItem) => {
                      const isChecked = doctor === docItem.val;
                      return (
                        <label 
                          key={docItem.val}
                          className={`cursor-pointer flex items-center gap-3 p-3 rounded-xl border transition-all ${
                            isChecked
                              ? 'bg-[#dde9fb] border-[#24638f] text-[#002548] shadow-xs'
                              : 'bg-[#f8f9ff] border-[#dde9fb] hover:bg-[#eef4ff] text-[#43474f]'
                          }`}
                        >
                          <input 
                            type="radio" 
                            name="doctor" 
                            value={docItem.val}
                            checked={isChecked}
                            onChange={() => setDoctor(docItem.val)}
                            className="w-4 h-4 text-[#002548] accent-[#002548]" 
                          />
                          <div className="flex flex-col">
                            <span className="text-xs font-bold leading-tight text-[#101c29]">
                              {docItem.label}
                            </span>
                            <span className="text-[11px] text-[#43474f]">
                              {docItem.desc}
                            </span>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Preferred Date & Time Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#101c29]" htmlFor="preferredDate">
                      Preferred Date *
                    </label>
                    <input 
                      className="w-full h-12 px-4 rounded-xl bg-[#f8f9ff] border border-[#dde9fb] text-[#101c29] text-sm focus:bg-white focus:ring-2 focus:ring-[#24638f] outline-none transition-all cursor-pointer" 
                      id="preferredDate" 
                      name="preferredDate" 
                      min={today}
                      required 
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#101c29]" htmlFor="timeSlot">
                      Preferred Time Slot
                    </label>
                    <div className="relative">
                      <select 
                        className="w-full h-12 px-4 pr-10 rounded-xl bg-[#f8f9ff] border border-[#dde9fb] text-[#101c29] text-sm focus:bg-white focus:ring-2 focus:ring-[#24638f] outline-none appearance-none transition-all cursor-pointer" 
                        id="timeSlot" 
                        name="timeSlot"
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                      >
                        <option value="Morning 10 AM - 1 PM">Morning (10:00 AM – 1:00 PM)</option>
                        <option value="Afternoon 1 PM - 5 PM">Afternoon (1:00 PM – 5:00 PM)</option>
                        <option value="Evening 5 PM - 8 PM">Evening (5:00 PM – 8:00 PM)</option>
                        <option value="No Preference">No Preference (Earliest Available)</option>
                      </select>
                      <span className="material-symbols-outlined pointer-events-none absolute right-3 top-3 text-[#43474f] text-[20px]">
                        schedule
                      </span>
                    </div>
                  </div>
                </div>

                {/* Brief Notes / Symptoms */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#101c29]" htmlFor="symptoms">
                    Brief Notes / Symptoms
                  </label>
                  <textarea 
                    className="w-full p-4 rounded-xl bg-[#f8f9ff] border border-[#dde9fb] text-[#101c29] text-sm focus:bg-white focus:ring-2 focus:ring-[#24638f] outline-none transition-all resize-none placeholder:text-[#83a6d7]" 
                    id="symptoms" 
                    name="symptoms" 
                    placeholder="Describe sensitivity, swelling, mild ache, duration, or cosmetic goals..." 
                    rows={3}
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                  />
                </div>

                {/* Instant WhatsApp Routing Toggle */}
                <div className="p-4 rounded-xl bg-[#eef4ff] border border-[#dde9fb] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#dde9fb] flex items-center justify-center text-[#24638f]">
                      <span className="material-symbols-outlined text-[20px]">chat</span>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-[#002548]">Instant WhatsApp Routing</p>
                      <p className="text-xs text-[#43474f]">Send request directly via WhatsApp message</p>
                    </div>
                  </div>

                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      checked={sendViaWhatsapp}
                      onChange={(e) => setSendViaWhatsapp(e.target.checked)}
                      className="sr-only peer" 
                      id="sendViaWhatsapp" 
                      type="checkbox"
                    />
                    <div className="w-11 h-6 bg-[#d7e4f5] peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:bg-[#24638f] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all" />
                  </label>
                </div>

                {/* Submit Button */}
                <button 
                  className="w-full h-14 rounded-xl bg-[#002548] text-white font-bold text-sm sm:text-base hover:bg-[#123b66] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]" 
                  id="submitBtn" 
                  type="submit"
                >
                  <span>Send Appointment Request</span>
                  <span className="material-symbols-outlined text-[20px]">send</span>
                </button>

                <p className="text-xs text-center text-[#43474f]">
                  Strict medical privacy maintained. Zero spam. We only contact you regarding this enquiry.
                </p>
              </form>

              {/* 3 Trust Features Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-white border border-[#dde9fb] shadow-xs flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#24638f] text-[24px]">sanitizer</span>
                  <div>
                    <p className="text-xs font-bold text-[#002548]">Autoclave Clean</p>
                    <p className="text-[11px] text-[#43474f]">Sterilized for every patient</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#dde9fb] shadow-xs flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#24638f] text-[24px]">payments</span>
                  <div>
                    <p className="text-xs font-bold text-[#002548]">Clear Pricing</p>
                    <p className="text-[11px] text-[#43474f]">No hidden procedure bills</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#dde9fb] shadow-xs flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#24638f] text-[24px]">verified</span>
                  <div>
                    <p className="text-xs font-bold text-[#002548]">13+ Years</p>
                    <p className="text-[11px] text-[#43474f]">Community dental practice</p>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Emergency Care, Hours & Guarantee */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Emergency Card */}
              <div className="bg-white shadow-xs rounded-2xl border border-[#dde9fb] p-6 sm:p-7 flex flex-col gap-4">
                <div className="flex items-center gap-1.5 text-[#ba1a1a] text-xs uppercase tracking-wider font-bold">
                  <span className="material-symbols-outlined text-[16px]">emergency</span>
                  <span>Emergency Assistance</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-[#002548] font-display">
                  Need immediate assistance or emergency care?
                </h2>

                <p className="text-xs sm:text-sm text-[#43474f] leading-relaxed">
                  Severe toothache, broken crowns, or post-extraction issues? Call our duty doctors directly without waiting for online forms.
                </p>

                <div className="flex flex-col gap-3 pt-1">
                  <a 
                    className="group flex items-center justify-between p-3.5 rounded-xl bg-[#eef4ff] hover:bg-[#cde5ff] transition-all" 
                    href="tel:6360654061"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#002548] group-hover:text-[#24638f] shadow-2xs">
                        <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[11px] text-[#43474f]">Clinic Desk / Emergency 1</span>
                        <span className="text-sm sm:text-base text-[#002548] font-bold tracking-tight">+91 63606 54061</span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-[#002548] group-hover:translate-x-1 transition-transform text-[20px]">arrow_forward</span>
                  </a>

                  <a 
                    className="group flex items-center justify-between p-3.5 rounded-xl bg-[#eef4ff] hover:bg-[#cde5ff] transition-all" 
                    href="tel:9739628057"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#002548] group-hover:text-[#24638f] shadow-2xs">
                        <span className="material-symbols-outlined text-[20px]">call</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[11px] text-[#43474f]">Secondary Line / Emergency 2</span>
                        <span className="text-sm sm:text-base text-[#002548] font-bold tracking-tight">+91 97396 28057</span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-[#002548] group-hover:translate-x-1 transition-transform text-[20px]">arrow_forward</span>
                  </a>

                  <a 
                    className="w-full h-12 rounded-xl bg-[#d7e4f5] text-[#002548] text-xs sm:text-sm font-semibold hover:bg-[#24638f] hover:text-white transition-all flex items-center justify-center gap-2 mt-1" 
                    href={`https://wa.me/${CLINIC_INFO.whatsappDirect}?text=Hello%20Narayana%20Dental%20Clinic%2C%20I%20would%20like%20to%20enquire%20about%20an%20appointment.`} 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined text-[20px]">forum</span>
                    <span>Chat on WhatsApp with Reception</span>
                  </a>
                </div>
              </div>

              {/* Working Hours & Map Card */}
              <div className="bg-white shadow-xs rounded-2xl border border-[#dde9fb] p-6 sm:p-7 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#24638f] text-[24px]">schedule</span>
                  <h3 className="text-lg font-bold text-[#002548] font-display">Working Hours</h3>
                </div>

                <div className="space-y-1 bg-[#eef4ff] p-3.5 rounded-xl border border-[#dde9fb]/80 text-xs sm:text-sm">
                  <div className="flex items-center justify-between py-1">
                    <span className="text-[#101c29] font-medium">Monday – Saturday</span>
                    <span className="text-[#002548] font-bold">10:00 AM – 8:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-[#101c29] font-medium">Sunday</span>
                    <span className="text-[#002548] font-bold">10:00 AM – 2:00 PM</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-1">
                  <span className="material-symbols-outlined text-[#24638f] text-[22px] shrink-0 mt-0.5">location_on</span>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#002548]">Austin Town &amp; Neelasandra Location</span>
                    <p className="text-xs text-[#43474f] leading-relaxed mt-0.5">
                      #1616, BDA Flats, Austin Town Main Road, Neelasandra, Bengaluru – 560047
                    </p>
                  </div>
                </div>

                {/* Map Link Graphic */}
                <a
                  href="https://maps.google.com/?q=Narayana+Dental+Clinic+Austin+Town+Bengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-44 rounded-xl bg-cover bg-center shadow-inner overflow-hidden relative group block"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDWFRlARMkmO1SbhoDzyfLQjZXJno5sMwbcfdTXpGuTMvefpsq0IO4D_p1yDPK-1rBIb_DqtgcJCyL9SVX7JC-A271VXrH9fw1VopUUYetgG8C12_X6iLeBRO1KcCDp9gpM6uUnsX8u-fdOENGgyX_2NfVbPJJ0VvhvsbIY-6ERS4eyWzsyacMOPpcs8lGX7UzVWfBa2qrBD4pCsafzPAQGlNJfzlztA8wx_Nx-dvqKNfs3Jpu4uceT')" }}
                >
                  <div className="absolute inset-0 bg-[#002548]/20 backdrop-blur-[1px] group-hover:bg-[#002548]/30 transition-all flex items-center justify-center">
                    <span className="px-4 py-2 rounded-full bg-white/95 text-xs font-bold text-[#002548] shadow-sm flex items-center gap-1.5 group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-[16px] text-[#24638f]">near_me</span>
                      <span>Open in Google Maps</span>
                    </span>
                  </div>
                </a>
              </div>

              {/* Patient First Guarantee Card */}
              <div className="bg-[#002548] text-white rounded-2xl p-6 sm:p-7 flex flex-col gap-2 relative overflow-hidden shadow-sm">
                <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-[#24638f]/30 blur-xl pointer-events-none" />
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#cde5ff] text-[20px]">verified_user</span>
                  <h3 className="text-base font-bold text-white font-display">Patient First Guarantee</h3>
                </div>
                <p className="text-xs text-[#cde5ff] leading-relaxed">
                  Strict autoclaving sterilization, transparent treatment explanations, and compassionate care rooted in patient safety since 2011.
                </p>
              </div>

            </div>
          </div>

          {/* Toast Notification Container */}
          <div 
            className={`fixed bottom-6 right-6 z-50 transform transition-all duration-300 max-w-md w-full px-4 ${
              toast.show ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
            }`}
          >
            <div className="bg-[#002548] text-white p-4 rounded-2xl shadow-2xl flex items-start gap-3 border border-[#24638f]/40">
              <span className="material-symbols-outlined text-[#cde5ff] text-[24px] mt-0.5">task_alt</span>
              <div className="flex-1">
                <h4 className="text-sm font-bold">{toast.title}</h4>
                <p className="text-xs text-[#dde9fb] mt-0.5 leading-relaxed">{toast.desc}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
