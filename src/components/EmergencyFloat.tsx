import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Phone, MessageSquare, AlertCircle, X } from 'lucide-react';

export const EmergencyFloat: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-30">
      {expanded ? (
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 w-72 mb-2 animate-in zoom-in-95 duration-150">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-bold text-rose-700 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              <span>Dental Helpline</span>
            </span>
            <button
              onClick={() => setExpanded(false)}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-2.5 space-y-2">
            <a
              href={`tel:${CLINIC_INFO.phone1Formatted}`}
              className="w-full py-2 px-3 bg-[#8B1E0F] hover:bg-[#73190C] text-white rounded-lg text-xs font-bold flex items-center justify-between transition-colors shadow-xs"
            >
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                <span>Call Clinic Desk</span>
              </span>
              <span className="text-[10px] opacity-90">{CLINIC_INFO.phone1Display}</span>
            </a>

            <a
              href={`tel:${CLINIC_INFO.phone2Formatted}`}
              className="w-full py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-semibold flex items-center justify-between transition-colors"
            >
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-sky-600" />
                <span>Secondary Line</span>
              </span>
              <span className="text-[10px] text-slate-500">{CLINIC_INFO.phone2Display}</span>
            </a>

            <a
              href={`https://wa.me/${CLINIC_INFO.whatsappDirect}?text=Hello%20Narayana%20Dental%20Clinic,%20I%20have%20an%20urgent%20dental%20query.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 rounded-lg text-xs font-bold flex items-center justify-between transition-colors"
            >
              <span className="flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp Desk</span>
              </span>
              <span className="text-[10px] text-emerald-700 font-normal">Active</span>
            </a>
          </div>

          <p className="text-[10px] text-slate-400 text-center">
            Austin Town • Mon-Sat 10AM-8PM | Sun 10AM-2PM
          </p>
        </div>
      ) : null}

      <div className="flex items-center gap-2">
        <a
          href={`https://wa.me/${CLINIC_INFO.whatsappDirect}?text=Hello%20Narayana%20Dental%20Clinic,%20I%20would%20like%20to%20enquire%20about%20a%20dental%20appointment.`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center cursor-pointer group"
          title="Chat on WhatsApp with Reception"
        >
          <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </a>

        <button
          onClick={() => setExpanded(!expanded)}
          className="px-3.5 py-3 bg-[#0B2545] hover:bg-[#133E87] text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 cursor-pointer font-bold text-xs"
        >
          <Phone className="w-4 h-4 text-sky-400 animate-pulse" />
          <span className="hidden sm:inline">Emergency / Call</span>
        </button>
      </div>
    </div>
  );
};
