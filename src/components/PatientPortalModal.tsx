import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { 
  X, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Download, 
  CheckCircle, 
  Car, 
  FileText,
  HeartHandshake
} from 'lucide-react';

interface PatientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const PatientPortalModal: React.FC<PatientPortalModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking
}) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownloadContact = () => {
    // Generate vCard format
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Narayana Dental Clinic
ORG:Advanced Family Dentistry
TEL;TYPE=WORK,VOICE:${CLINIC_INFO.phone1}
TEL;TYPE=CELL,VOICE:${CLINIC_INFO.phone2}
ADR;TYPE=WORK:;;#1616 BDA Flats, Austin Town Main Road;Neelasandra, Bengaluru;;560047;India
NOTE:Mon-Sat 10AM-8PM, Sun 10AM-2PM. Quality Dentistry Since 2011.
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'NarayanaDentalClinic_AustinTown.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative p-6 sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1 mb-5">
          <span className="px-2.5 py-0.5 bg-sky-50 text-sky-800 text-[11px] font-bold rounded-md border border-sky-100 uppercase tracking-wide">
            Patient Desk & Verification
          </span>
          <h3 className="text-xl font-bold text-slate-900 font-display">
            Patient Care & Clinic Hub
          </h3>
          <p className="text-xs text-slate-500">
            Official contact credentials, emergency lines & patient assistance
          </p>
        </div>

        <div className="space-y-4">
          {/* Emergency / Duty Lines */}
          <div className="p-4 bg-rose-50/70 border border-rose-100 rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-rose-900 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-rose-600" />
                <span>Duty Surgeon Emergency Line</span>
              </span>
              <span className="text-[10px] font-bold uppercase bg-rose-200 text-rose-800 px-2 py-0.5 rounded">
                Active
              </span>
            </div>
            <div className="flex items-center justify-between pt-1">
              <div>
                <p className="text-base font-bold text-slate-900">{CLINIC_INFO.phone1}</p>
                <p className="text-xs text-slate-500">Austin Town Reception & Emergencies</p>
              </div>
              <a
                href={`tel:${CLINIC_INFO.phone1Formatted}`}
                className="px-3 py-1.5 bg-[#8B1E0F] text-white text-xs font-bold rounded-lg shadow-xs hover:bg-[#73190C]"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Quick Clinic Essentials */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <div className="flex items-center gap-1.5 text-slate-700 font-bold">
                <Clock className="w-4 h-4 text-sky-600" />
                <span>Working Hours</span>
              </div>
              <p className="text-slate-600">Mon–Sat: 10AM – 8PM<br />Sunday: 10AM – 2PM</p>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <div className="flex items-center gap-1.5 text-slate-700 font-bold">
                <Car className="w-4 h-4 text-sky-600" />
                <span>Ground Parking</span>
              </div>
              <p className="text-slate-600">Free patient parking right in front of #1616 BDA Flats.</p>
            </div>
          </div>

          {/* Biosafety Reassurance */}
          <div className="p-3.5 bg-sky-50/70 border border-sky-100 rounded-xl flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
            <div className="text-xs space-y-0.5">
              <p className="font-bold text-slate-900">Hospital-Grade Class-B Vacuum Sterilization</p>
              <p className="text-slate-600">
                Every pouch opened chairside in front of the patient. Multi-tier autoclave sanitization matching international guidelines.
              </p>
            </div>
          </div>

          {/* Save contact card button */}
          <button
            onClick={handleDownloadContact}
            className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 border border-slate-200"
          >
            {downloaded ? (
              <>
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Contact Card Saved to Device!</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 text-slate-600" />
                <span>Save Clinic Contact Card to Phone (.vcf)</span>
              </>
            )}
          </button>

          {/* Action Footer */}
          <div className="pt-2 flex items-center justify-between border-t border-slate-100">
            <span className="text-xs text-slate-500">Need to schedule a visit?</span>
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="text-xs font-bold text-sky-700 hover:text-sky-900 hover:underline"
            >
              Open Booking Form →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
