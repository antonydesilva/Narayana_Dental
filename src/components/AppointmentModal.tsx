import React, { useState } from 'react';
import { CLINIC_INFO, DOCTORS, SERVICES } from '../data/clinicData';
import { 
  X, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Phone, 
  MessageSquare,
  Sparkles,
  AlertCircle
} from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDoctor?: string;
  initialService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialDoctor,
  initialService
}) => {
  const [patientType, setPatientType] = useState<'new' | 'existing'>('new');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(initialService || '');
  const [preferredDoctor, setPreferredDoctor] = useState(initialDoctor || 'any');
  const [preferredDate, setPreferredDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [preferredTimeSlot, setPreferredTimeSlot] = useState('Morning (10:00 AM – 1:00 PM)');
  const [notes, setNotes] = useState('');
  const [sendWhatsApp, setSendWhatsApp] = useState(true);

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name');
      return;
    }
    if (!phone.trim() || phone.trim().length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);

    if (sendWhatsApp) {
      const docName = preferredDoctor === 'dr-prakash' 
        ? 'Dr. Prakash Venkatarama' 
        : preferredDoctor === 'dr-madhura' 
        ? 'Dr. Madhura Prakash' 
        : 'Any Senior Specialist';

      const msg = `*Appointment Request - Narayana Dental Clinic*\n` +
        `Patient: ${fullName} (${patientType.toUpperCase()})\n` +
        `Phone: +91 ${phone}\n` +
        `Service: ${service || 'General Consultation'}\n` +
        `Doctor: ${docName}\n` +
        `Date: ${preferredDate}\n` +
        `Slot: ${preferredTimeSlot}\n` +
        (notes ? `Notes: ${notes}\n` : '') +
        `Sent via Clinic Website.`;

      // Open WhatsApp in new tab safely
      setTimeout(() => {
        window.open(`https://wa.me/${CLINIC_INFO.whatsappDirect}?text=${encodeURIComponent(msg)}`, '_blank');
      }, 700);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setPhone('');
    setEmail('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-8 text-center space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200">
                Enquiry Received • Reference #NDC-{Math.floor(1000 + Math.random() * 9000)}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-display">
                Thank You, {fullName}!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Our front-desk team at Austin Town has received your request. We will contact you at <span className="font-semibold text-slate-900">+91 {phone}</span> within <span className="font-semibold text-sky-700">30–60 minutes</span> to confirm your exact slot.
              </p>
            </div>

            <div className="bg-sky-50/70 border border-sky-100 rounded-xl p-4 text-left text-xs space-y-2">
              <p className="font-bold text-[#0B2545] flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-sky-600" />
                <span>Response Guarantee:</span>
              </p>
              <p className="text-slate-600">
                • Clinic Open Today: 10:00 AM – 8:00 PM<br />
                • Immediate Emergency Assistance: +91 6360654061 / 9739628057<br />
                • Location: #1616 BDA Flats, Austin Town Main Road, Neelasandra
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleReset}
                className="w-full py-2.5 px-4 bg-[#0B2545] text-white rounded-lg text-sm font-semibold hover:bg-[#133E87] transition-colors"
              >
                Close & Return
              </button>
              <a
                href={`tel:${CLINIC_INFO.phone1Formatted}`}
                className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Call Clinic Now</span>
              </a>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            {/* Header info */}
            <div className="space-y-1 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">Fast Reassurance Desk</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 font-display">
                Book a Dental Consultation
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Step 1 of 1 • Patient & Treatment Specifics
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 bg-rose-50 border border-rose-200 rounded-lg flex items-center gap-2 text-xs font-medium text-rose-700">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* New vs Existing Pill Selector */}
              <div className="flex items-center justify-between bg-slate-100 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setPatientType('new')}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    patientType === 'new' 
                      ? 'bg-white text-slate-900 shadow-xs' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  New Patient
                </button>
                <button
                  type="button"
                  onClick={() => setPatientType('existing')}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    patientType === 'existing' 
                      ? 'bg-white text-slate-900 shadow-xs' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Existing Patient
                </button>
              </div>

              {/* Patient Name & Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0B2545] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mobile Number *
                  </label>
                  <div className="flex rounded-lg border border-slate-200 bg-slate-50 focus-within:bg-white focus-within:ring-2 focus-within:ring-[#0B2545] overflow-hidden">
                    <span className="inline-flex items-center px-3 text-xs font-bold text-slate-500 bg-slate-100 border-r border-slate-200">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      placeholder="9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      className="w-full px-3 py-2 text-sm bg-transparent focus:outline-hidden"
                    />
                  </div>
                </div>
              </div>

              {/* Email & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="patient@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0B2545] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Select Service *
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0B2545] transition-all"
                  >
                    <option value="">Choose treatment need...</option>
                    <option value="Single-Sitting Root Canal">Single-Sitting Root Canal</option>
                    <option value="Dental Implants">Advanced Titanium Dental Implants</option>
                    <option value="Clear Aligners & Braces">Clear Aligners & Invisible Braces</option>
                    <option value="Smile Makeovers & Veneers">Smile Makeovers & Veneers</option>
                    <option value="Child Dental Care">Pediatric & Child Dental Care</option>
                    <option value="Routine Checkup & Cleaning">Preventive Checkup & Cleaning</option>
                    <option value="Emergency Toothache Care">Emergency Severe Toothache</option>
                  </select>
                </div>
              </div>

              {/* Preferred Doctor Choice */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Preferred Doctor
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPreferredDoctor('any')}
                    className={`p-2.5 rounded-lg border text-left text-xs transition-all ${
                      preferredDoctor === 'any'
                        ? 'border-[#0B2545] bg-sky-50/70 text-[#0B2545] font-bold ring-1 ring-[#0B2545]'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${preferredDoctor === 'any' ? 'border-[#0B2545] bg-[#0B2545]' : 'border-slate-400'}`}>
                        {preferredDoctor === 'any' && <span className="w-1.5 h-1.5 bg-white rounded-full" />}
                      </span>
                      <span>Any Specialist</span>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-1 pl-5">Fastest allotment</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPreferredDoctor('dr-prakash')}
                    className={`p-2.5 rounded-lg border text-left text-xs transition-all ${
                      preferredDoctor === 'dr-prakash'
                        ? 'border-[#0B2545] bg-sky-50/70 text-[#0B2545] font-bold ring-1 ring-[#0B2545]'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${preferredDoctor === 'dr-prakash' ? 'border-[#0B2545] bg-[#0B2545]' : 'border-slate-400'}`}>
                        {preferredDoctor === 'dr-prakash' && <span className="w-1.5 h-1.5 bg-white rounded-full" />}
                      </span>
                      <span>Dr. Prakash V.</span>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-1 pl-5">Lead Consultant</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPreferredDoctor('dr-madhura')}
                    className={`p-2.5 rounded-lg border text-left text-xs transition-all ${
                      preferredDoctor === 'dr-madhura'
                        ? 'border-[#0B2545] bg-sky-50/70 text-[#0B2545] font-bold ring-1 ring-[#0B2545]'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${preferredDoctor === 'dr-madhura' ? 'border-[#0B2545] bg-[#0B2545]' : 'border-slate-400'}`}>
                        {preferredDoctor === 'dr-madhura' && <span className="w-1.5 h-1.5 bg-white rounded-full" />}
                      </span>
                      <span>Dr. Madhura P.</span>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-1 pl-5">Aesthetic & Pedo</p>
                  </button>
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0B2545]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={preferredTimeSlot}
                    onChange={(e) => setPreferredTimeSlot(e.target.value)}
                    className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0B2545]"
                  >
                    <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM – 5:00 PM)">Afternoon (1:00 PM – 5:00 PM)</option>
                    <option value="Evening (5:00 PM – 8:00 PM)">Evening (5:00 PM – 8:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Brief Notes / Symptoms
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe sensitivity, swelling, mild ache, duration, or cosmetic goals..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0B2545]"
                />
              </div>

              {/* Instant WhatsApp Routing Toggle */}
              <div className="flex items-center justify-between p-3 bg-sky-50/70 border border-sky-100 rounded-xl">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 bg-emerald-100 text-emerald-700 rounded-lg">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">Instant WhatsApp Routing</p>
                    <p className="text-[11px] text-slate-500">Send request directly via WhatsApp message</p>
                  </div>
                </div>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={sendWhatsApp}
                    onChange={(e) => setSendWhatsApp(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-300 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0B2545]"></div>
                </label>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-[#8B1E0F] hover:bg-[#73190C] text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                <span>Send Appointment Request</span>
                <span>▷</span>
              </button>

              <p className="text-[11px] text-slate-400 text-center">
                Strict medical privacy maintained. Zero spam. We only contact you regarding this enquiry.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
