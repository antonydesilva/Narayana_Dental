import React from 'react';
import { ShieldCheck, Award, Heart, CheckCircle2, Sparkles, MapPin } from 'lucide-react';

interface VisualProps {
  type: 
    | 'doctor-prakash' 
    | 'doctor-madhura' 
    | 'reception' 
    | 'operatory' 
    | 'sterilization' 
    | 'aligners' 
    | 'restorative' 
    | 'smile' 
    | 'map';
  className?: string;
  badgeText?: string;
  subText?: string;
  onClick?: () => void;
}

export const VisualIllustration: React.FC<VisualProps> = ({
  type,
  className = '',
  badgeText,
  subText,
  onClick
}) => {
  if (type === 'doctor-prakash') {
    return (
      <div 
        onClick={onClick}
        className={`relative overflow-hidden rounded-2xl bg-gradient-to-b from-sky-50 via-slate-100 to-slate-200 border border-slate-200/80 shadow-sm flex flex-col justify-end group ${className}`}
      >
        {/* Soft background clinic elements */}
        <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-white/95 backdrop-blur-md rounded-full shadow-xs border border-sky-100 text-xs font-semibold text-sky-800">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
          <span>Lead Surgeon • 15+ Yrs</span>
        </div>

        {/* Doctor Prakash Character Portrait Graphic */}
        <div className="relative w-full h-full min-h-[300px] flex items-end justify-center pt-8">
          <svg className="w-full h-auto max-h-[340px] drop-shadow-md" viewBox="0 0 400 480" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="prakashCoat" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#EEF4F8" />
              </linearGradient>
              <linearGradient id="prakashSkin" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#E2A77A" />
                <stop offset="100%" stopColor="#C98858" />
              </linearGradient>
              <linearGradient id="prakashShirt" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0B2545" />
                <stop offset="100%" stopColor="#134B70" />
              </linearGradient>
            </defs>

            {/* Clinic Operatory Blurred Depth Elements */}
            <circle cx="80" cy="140" r="45" fill="#BAE6FD" opacity="0.4" />
            <rect x="290" y="80" width="80" height="90" rx="8" fill="#E2E8F0" opacity="0.6" />
            <path d="M305 110h50M305 125h35" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />

            {/* Doctor Prakash Body / Coat */}
            <path d="M60 480C60 380 120 330 200 330C280 330 340 380 340 480H60Z" fill="url(#prakashCoat)" stroke="#CBD5E1" strokeWidth="1.5" />
            {/* Dark Inner Collar Shirt */}
            <path d="M150 330L200 400L250 330H150Z" fill="url(#prakashShirt)" />
            {/* White Lapels */}
            <path d="M140 330L190 440L145 480H90L135 340Z" fill="#FFFFFF" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.06))" />
            <path d="M260 330L210 440L255 480H310L265 340Z" fill="#F8FAFC" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.06))" />

            {/* Stethoscope around neck */}
            <path d="M145 320C140 380 150 420 180 435C200 445 220 435 230 420" stroke="#475569" strokeWidth="5" strokeLinecap="round" fill="none" />
            <circle cx="180" cy="438" r="8" fill="#0284C7" stroke="#0F172A" strokeWidth="2" />

            {/* Clinic Name Badge on Left Breast */}
            <rect x="110" y="380" width="62" height="24" rx="3" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.5" />
            <text x="115" y="392" fill="#0B2545" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">Dr. Prakash V.</text>
            <text x="115" y="400" fill="#0284C7" fontSize="5.5" fontFamily="sans-serif">Endodontist</text>

            {/* Neck */}
            <rect x="175" y="270" width="50" height="65" rx="10" fill="url(#prakashSkin)" />

            {/* Face Shape */}
            <path d="M150 190C150 140 250 140 250 190C250 245 235 290 200 290C165 290 150 245 150 190Z" fill="url(#prakashSkin)" />

            {/* Ears */}
            <ellipse cx="147" cy="205" rx="8" ry="14" fill="#D99B6E" />
            <ellipse cx="253" cy="205" rx="8" ry="14" fill="#D99B6E" />

            {/* Hair - Dignified, slightly salt & pepper short cropped haircut */}
            <path d="M148 180C145 140 160 110 200 110C240 110 255 140 252 180C245 150 230 130 200 130C170 130 155 150 148 180Z" fill="#334155" />
            <path d="M160 120C175 112 210 112 240 125C225 118 190 116 160 120Z" fill="#94A3B8" />

            {/* Eyes & Eyebrows */}
            <path d="M165 170Q178 165 188 170" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
            <path d="M212 170Q222 165 235 170" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
            <circle cx="177" cy="182" r="4.5" fill="#1E293B" />
            <circle cx="178.5" cy="180.5" r="1.5" fill="#FFFFFF" />
            <circle cx="223" cy="182" r="4.5" fill="#1E293B" />
            <circle cx="224.5" cy="180.5" r="1.5" fill="#FFFFFF" />

            {/* Spectacles - Modern Titanium Frame */}
            <rect x="162" y="172" width="30" height="20" rx="6" stroke="#0F172A" strokeWidth="2.5" fill="none" opacity="0.8" />
            <rect x="208" y="172" width="30" height="20" rx="6" stroke="#0F172A" strokeWidth="2.5" fill="none" opacity="0.8" />
            <line x1="192" y1="180" x2="208" y2="180" stroke="#0F172A" strokeWidth="2.5" />

            {/* Nose */}
            <path d="M200 180V215H206" stroke="#B87343" strokeWidth="2.5" strokeLinecap="round" />

            {/* Reassuring Gentle Smile */}
            <path d="M180 238Q200 254 220 238" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M184 238Q200 248 216 238" fill="#FFFFFF" />
            {/* Natural mustache trim */}
            <path d="M178 230C190 235 210 235 222 230" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Bottom Tag bar */}
        <div className="p-4 bg-white/90 backdrop-blur-md border-t border-slate-200/80 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Clinical Practice</p>
            <p className="text-sm font-bold text-slate-900">Since 2011</p>
          </div>
          <span className="px-3 py-1 bg-sky-50 text-sky-700 text-xs font-semibold rounded-full border border-sky-100">
            Austin Town & Neelasandra
          </span>
        </div>
      </div>
    );
  }

  if (type === 'doctor-madhura') {
    return (
      <div 
        onClick={onClick}
        className={`relative overflow-hidden rounded-2xl bg-gradient-to-b from-sky-50 via-slate-100 to-indigo-50 border border-slate-200/80 shadow-sm flex flex-col justify-end group ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-white/95 backdrop-blur-md rounded-full shadow-xs border border-indigo-100 text-xs font-semibold text-indigo-900">
          <Award className="w-3.5 h-3.5 text-indigo-600" />
          <span>Orthodontic Fellow • Spain & Italy</span>
        </div>

        {/* Doctor Madhura Character Portrait Graphic */}
        <div className="relative w-full h-full min-h-[300px] flex items-end justify-center pt-8">
          <svg className="w-full h-auto max-h-[340px] drop-shadow-md" viewBox="0 0 400 480" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="madhuraCoat" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#F1F5F9" />
              </linearGradient>
              <linearGradient id="madhuraSkin" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F2BA90" />
                <stop offset="100%" stopColor="#DE9B6D" />
              </linearGradient>
              <linearGradient id="madhuraTop" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0B2545" />
                <stop offset="100%" stopColor="#1E3A8A" />
              </linearGradient>
            </defs>

            {/* Modern Aesthetic Clinic Screen in background */}
            <rect x="50" y="80" width="90" height="75" rx="8" fill="#E0E7FF" opacity="0.7" />
            <path d="M65 110Q95 85 125 110" stroke="#4F46E5" strokeWidth="3" fill="none" />
            <circle cx="95" cy="120" r="3" fill="#6366F1" />

            {/* Doctor Madhura Body / Coat */}
            <path d="M70 480C70 385 130 335 200 335C270 335 330 385 330 480H70Z" fill="url(#madhuraCoat)" stroke="#CBD5E1" strokeWidth="1.5" />
            {/* Inner Dark Navy V-neck Top */}
            <path d="M155 335L200 415L245 335H155Z" fill="url(#madhuraTop)" />
            {/* Crisp Clinic Coat Lapels */}
            <path d="M145 335L195 440L150 480H95L140 345Z" fill="#FFFFFF" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.06))" />
            <path d="M255 335L205 440L250 480H305L260 345Z" fill="#F8FAFC" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.06))" />

            {/* Doctor Name Badge */}
            <rect x="225" y="380" width="65" height="24" rx="3" fill="#FFFFFF" stroke="#4F46E5" strokeWidth="1.5" />
            <text x="230" y="392" fill="#0B2545" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">Dr. Madhura P.</text>
            <text x="230" y="400" fill="#4F46E5" fontSize="5.5" fontFamily="sans-serif">Orthodontist</text>

            {/* Delicate gold necklace */}
            <path d="M180 345Q200 370 220 345" stroke="#EAB308" strokeWidth="1.5" fill="none" />
            <circle cx="200" cy="365" r="2.5" fill="#EAB308" />

            {/* Neck */}
            <rect x="180" y="270" width="40" height="65" rx="8" fill="url(#madhuraSkin)" />

            {/* Long glossy dark hair behind shoulders */}
            <path d="M135 180C125 240 120 320 145 370H255C280 320 275 240 265 180C260 120 140 120 135 180Z" fill="#1E1B18" />

            {/* Oval Face Contour */}
            <path d="M155 195C155 145 245 145 245 195C245 248 230 285 200 285C170 285 155 248 155 195Z" fill="url(#madhuraSkin)" />

            {/* Ears & Pearl studs */}
            <ellipse cx="152" cy="210" rx="6" ry="12" fill="#DE9B6D" />
            <circle cx="151" cy="214" r="3" fill="#F8FAFC" stroke="#E2E8F0" />
            <ellipse cx="248" cy="210" rx="6" ry="12" fill="#DE9B6D" />
            <circle cx="249" cy="214" r="3" fill="#F8FAFC" stroke="#E2E8F0" />

            {/* Elegant Hair framing forehead */}
            <path d="M150 180C155 140 175 125 200 125C225 125 245 140 250 180C240 148 220 135 200 138C175 135 160 148 150 180Z" fill="#1E1B18" />
            {/* Side strands */}
            <path d="M148 180C148 230 156 265 160 275" stroke="#1E1B18" strokeWidth="6" strokeLinecap="round" />
            <path d="M252 180C252 230 244 265 240 275" stroke="#1E1B18" strokeWidth="6" strokeLinecap="round" />

            {/* Eyebrows & Eyes */}
            <path d="M168 175Q180 170 190 175" stroke="#262626" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M210 175Q220 170 232 175" stroke="#262626" strokeWidth="2.5" strokeLinecap="round" />
            <ellipse cx="180" cy="186" rx="5" ry="4" fill="#2E1C0C" />
            <circle cx="181.5" cy="184.5" r="1.5" fill="#FFFFFF" />
            <ellipse cx="220" cy="186" rx="5" ry="4" fill="#2E1C0C" />
            <circle cx="221.5" cy="184.5" r="1.5" fill="#FFFFFF" />

            {/* Delicate Nose */}
            <path d="M200 184V218H205" stroke="#C98858" strokeWidth="2" strokeLinecap="round" />

            {/* Warm, Radiant Smile */}
            <path d="M178 238Q200 256 222 238" stroke="#991B1B" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M181 238Q200 251 219 238" fill="#FFFFFF" stroke="#F1F5F9" strokeWidth="1" />
          </svg>
        </div>

        {/* Bottom Tag bar */}
        <div className="p-4 bg-white/90 backdrop-blur-md border-t border-slate-200/80 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Orthodontic Fellowship</p>
            <p className="text-sm font-bold text-slate-900">Spain & Italy Trained</p>
          </div>
          <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full border border-indigo-100">
            Smile Architect
          </span>
        </div>
      </div>
    );
  }

  if (type === 'reception') {
    return (
      <div 
        onClick={onClick}
        className={`relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-200 shadow-sm flex flex-col justify-end group cursor-pointer ${className}`}
      >
        {/* Reception Architectural Render */}
        <div className="relative w-full h-full min-h-[220px] bg-gradient-to-tr from-[#1E293B] via-[#334155] to-[#475569] flex items-center justify-center p-6">
          <svg className="w-full h-full" viewBox="0 0 600 350" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Modern Clinic Reception Lounge */}
            <rect width="600" height="350" fill="#F8FAFC" />
            {/* Polished warm wooden accent wall */}
            <rect x="0" y="0" width="600" height="240" fill="#F1F5F9" />
            <path d="M0 240H600V350H0Z" fill="#E2E8F0" />
            <line x1="0" y1="240" x2="600" y2="240" stroke="#CBD5E1" strokeWidth="3" />

            {/* Back Teak Feature Wall with Clinic Sign */}
            <rect x="180" y="30" width="240" height="130" rx="8" fill="#D97706" opacity="0.15" />
            <rect x="190" y="40" width="220" height="110" rx="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
            {/* Narayana Dental Clinic Logo on Wall */}
            <rect x="210" y="65" width="36" height="36" rx="8" fill="#0B2545" />
            <path d="M228 72C223 72 220 75 220 80C220 88 228 94 228 94C228 94 236 88 236 80C236 75 233 72 228 72Z" fill="#FFFFFF" />
            <text x="255" y="78" fill="#0B2545" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Narayana Dental</text>
            <text x="255" y="92" fill="#0284C7" fontSize="8" fontWeight="600" letterSpacing="1" fontFamily="sans-serif">ADVANCED FAMILY CLINIC</text>

            {/* Reception Desk - Teak Wood Finish with LED underglow */}
            <path d="M140 160L460 160L480 270L120 270Z" fill="#B45309" opacity="0.9" />
            <path d="M140 160L460 160L470 175L130 175Z" fill="#FDE68A" />
            <rect x="150" y="185" width="300" height="75" rx="4" fill="#92400E" />
            <line x1="160" y1="260" x2="440" y2="260" stroke="#FEF08A" strokeWidth="4" strokeLinecap="round" />

            {/* Reception Desk Computer & Telephone */}
            <rect x="270" y="135" width="60" height="35" rx="4" fill="#1E293B" />
            <line x1="300" y1="170" x2="300" y2="180" stroke="#64748B" strokeWidth="5" />
            <rect x="350" y="148" width="30" height="20" rx="3" fill="#334155" />

            {/* Indoor Waiting Lounge Planters & Chairs */}
            <circle cx="70" cy="220" r="30" fill="#059669" opacity="0.85" />
            <rect x="58" y="240" width="24" height="35" rx="4" fill="#78350F" />
            <circle cx="530" cy="220" r="30" fill="#059669" opacity="0.85" />
            <rect x="518" y="240" width="24" height="35" rx="4" fill="#78350F" />

            {/* Waiting Sofa Chairs */}
            <rect x="20" y="270" width="110" height="50" rx="8" fill="#1E3A8A" opacity="0.85" />
            <rect x="470" y="270" width="110" height="50" rx="8" fill="#1E3A8A" opacity="0.85" />
          </svg>
        </div>

        {/* Caption */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex flex-col justify-end p-4">
          <div className="flex items-center justify-between text-white">
            <div>
              <p className="text-sm font-bold">{badgeText || "Warm, Welcoming Patient Lounge & Reception"}</p>
              <p className="text-xs text-slate-300">{subText || "#1616 BDA Flats, Austin Town Main Road, Bengaluru"}</p>
            </div>
            <span className="p-1.5 bg-white/20 backdrop-blur-md rounded-lg text-white">
              <Sparkles className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'operatory') {
    return (
      <div 
        onClick={onClick}
        className={`relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-200 shadow-sm flex flex-col justify-end group cursor-pointer ${className}`}
      >
        <div className="relative w-full h-full min-h-[220px] bg-gradient-to-tr from-sky-900 via-slate-800 to-sky-700 flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 600 350" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="350" fill="#F0F9FF" />
            {/* Daylight window with lush garden trees */}
            <rect x="340" y="20" width="220" height="180" rx="10" fill="#E0F2FE" stroke="#BAE6FD" strokeWidth="4" />
            <path d="M360 160C380 90 420 80 440 120C460 70 510 80 530 150" fill="#10B981" opacity="0.6" />
            <path d="M400 180C420 120 460 110 490 180" fill="#059669" opacity="0.7" />

            {/* High-Tech Ergonomic Dental Chair */}
            {/* Chair Base */}
            <rect x="180" y="270" width="160" height="35" rx="10" fill="#64748B" />
            <rect x="230" y="200" width="60" height="80" fill="#94A3B8" />
            {/* Ergonomic Patient Contour Seat (Medical Blue) */}
            <path d="M120 220C120 220 180 200 240 210C300 220 330 190 350 170L380 180C350 220 310 245 240 240C180 235 130 250 120 220Z" fill="#0284C7" />
            {/* Backrest & Headrest */}
            <path d="M120 220L80 140C70 120 90 100 110 110L150 190Z" fill="#0369A1" />
            <rect x="75" y="90" width="40" height="25" rx="10" fill="#075985" />

            {/* Articulated Surgical LED Overhead Light */}
            <path d="M180 30L210 100L250 80" stroke="#64748B" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <ellipse cx="255" cy="85" rx="35" ry="18" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="4" />
            <ellipse cx="255" cy="85" rx="20" ry="10" fill="#FEF08A" opacity="0.9" filter="blur(2px)" />

            {/* Digital RVG Screen with Intraoral X-Ray preview */}
            <rect x="260" y="30" width="75" height="50" rx="4" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
            <path d="M280 65Q295 40 310 65" stroke="#FFFFFF" strokeWidth="2" fill="none" />
            <path d="M285 65Q295 50 305 65" stroke="#38BDF8" strokeWidth="1.5" fill="none" />
            <line x1="297" y1="80" x2="297" y2="105" stroke="#64748B" strokeWidth="4" />
          </svg>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex flex-col justify-end p-4">
          <div className="flex items-center justify-between text-white">
            <div>
              <p className="text-sm font-bold">{badgeText || "Operatory Suite 01 • Ergonomic Dental Care"}</p>
              <p className="text-xs text-slate-300">{subText || "Digital RVG imaging & calm daylight garden view"}</p>
            </div>
            <span className="p-1.5 bg-sky-500/30 backdrop-blur-md rounded-lg text-white">
              <CheckCircle2 className="w-4 h-4 text-sky-400" />
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'sterilization') {
    return (
      <div 
        onClick={onClick}
        className={`relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-200 shadow-sm flex flex-col justify-end group cursor-pointer ${className}`}
      >
        <div className="relative w-full h-full min-h-[220px] bg-gradient-to-tr from-slate-900 via-cyan-950 to-slate-800 flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 600 350" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="350" fill="#F8FAFC" />
            {/* Stainless Steel Clinical Countertop */}
            <rect x="0" y="160" width="600" height="190" fill="#E2E8F0" />
            <line x1="0" y1="160" x2="600" y2="160" stroke="#94A3B8" strokeWidth="3" />

            {/* European Class-B Vacuum Autoclave Unit */}
            <rect x="60" y="40" width="220" height="150" rx="12" fill="#FFFFFF" stroke="#0EA5E9" strokeWidth="3" filter="drop-shadow(0 6px 12px rgba(0,0,0,0.08))" />
            {/* Circular Stainless Chamber Door with Digital Display */}
            <circle cx="170" cy="115" r="48" fill="#F1F5F9" stroke="#64748B" strokeWidth="6" />
            <circle cx="170" cy="115" r="36" fill="#0F172A" />
            <text x="155" y="112" fill="#38BDF8" fontSize="11" fontWeight="bold" fontFamily="monospace">134°C</text>
            <text x="150" y="126" fill="#10B981" fontSize="9" fontWeight="bold" fontFamily="sans-serif">STERILE</text>

            {/* Autoclave Digital Control Panel */}
            <rect x="220" y="60" width="45" height="30" rx="4" fill="#0F172A" />
            <circle cx="230" cy="75" r="3" fill="#10B981" />
            <circle cx="242" cy="75" r="3" fill="#38BDF8" />
            <circle cx="254" cy="75" r="3" fill="#F59E0B" />

            {/* Sealed Sterile Pouches Rack */}
            <rect x="330" y="70" width="220" height="120" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
            <path d="M350 95H530M350 120H530M350 145H530" stroke="#0284C7" strokeWidth="4" strokeLinecap="round" strokeDasharray="6 6" />
            {/* Color-changing Chemical Indicator Strips (Turn Brown/Black after successful sterilization) */}
            <rect x="360" y="90" width="25" height="10" rx="2" fill="#334155" />
            <rect x="360" y="115" width="25" height="10" rx="2" fill="#334155" />
            <rect x="360" y="140" width="25" height="10" rx="2" fill="#334155" />

            {/* Stainless Steel Surgical Trays */}
            <rect x="100" y="220" width="180" height="70" rx="6" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="2" />
            <path d="M120 240H260M120 265H260" stroke="#64748B" strokeWidth="3" strokeLinecap="round" />
            <rect x="320" y="220" width="200" height="70" rx="6" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="2" />
            <circle cx="360" cy="255" r="14" fill="#94A3B8" />
            <circle cx="410" cy="255" r="14" fill="#94A3B8" />
            <circle cx="460" cy="255" r="14" fill="#94A3B8" />
          </svg>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex flex-col justify-end p-4">
          <div className="flex items-center justify-between text-white">
            <div>
              <p className="text-sm font-bold">{badgeText || "Hospital-Grade Class-B Sterilization"}</p>
              <p className="text-xs text-slate-300">{subText || "Vacuum autoclave & sealed sterile pouches"}</p>
            </div>
            <span className="p-1.5 bg-emerald-500/30 backdrop-blur-md rounded-lg text-emerald-300">
              <ShieldCheck className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'aligners') {
    return (
      <div 
        onClick={onClick}
        className={`relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-200 shadow-sm flex flex-col justify-end group cursor-pointer ${className}`}
      >
        <div className="relative w-full h-full min-h-[220px] bg-gradient-to-tr from-indigo-950 via-slate-900 to-sky-950 flex items-center justify-center p-6">
          <svg className="w-full h-full" viewBox="0 0 600 350" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="350" fill="#0F172A" />
            {/* Glowing 3D Dental Smile Simulation Grid */}
            <circle cx="300" cy="160" r="120" stroke="#38BDF8" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
            <circle cx="300" cy="160" r="80" stroke="#818CF8" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />

            {/* Symmetrical Upper Dental Arch Outline */}
            <path d="M190 220C190 120 410 120 410 220" stroke="#0284C7" strokeWidth="4" strokeLinecap="round" fill="none" />
            {/* Teeth Nodes in Alignment */}
            <circle cx="210" cy="190" r="10" fill="#F8FAFC" stroke="#38BDF8" strokeWidth="2" />
            <circle cx="240" cy="160" r="12" fill="#F8FAFC" stroke="#38BDF8" strokeWidth="2" />
            <circle cx="275" cy="140" r="14" fill="#F8FAFC" stroke="#38BDF8" strokeWidth="2" />
            <circle cx="325" cy="140" r="14" fill="#F8FAFC" stroke="#38BDF8" strokeWidth="2" />
            <circle cx="360" cy="160" r="12" fill="#F8FAFC" stroke="#38BDF8" strokeWidth="2" />
            <circle cx="390" cy="190" r="10" fill="#F8FAFC" stroke="#38BDF8" strokeWidth="2" />

            {/* Transparent Clear Aligner Layer Outline */}
            <path d="M185 225C185 110 415 110 415 225" stroke="#A5F3FC" strokeWidth="10" opacity="0.75" strokeLinecap="round" fill="none" filter="blur(1px)" />

            {/* Simulation Coordinate Tags */}
            <rect x="50" y="40" width="130" height="40" rx="6" fill="#1E293B" stroke="#334155" />
            <text x="65" y="58" fill="#38BDF8" fontSize="10" fontWeight="bold" fontFamily="monospace">STAGE 14 OF 22</text>
            <text x="65" y="71" fill="#94A3B8" fontSize="8" fontFamily="sans-serif">Subtle In-Plane Torque</text>

            <rect x="420" y="40" width="130" height="40" rx="6" fill="#1E293B" stroke="#334155" />
            <text x="435" y="58" fill="#10B981" fontSize="10" fontWeight="bold" fontFamily="monospace">PREDICTED OCCLUSION</text>
            <text x="435" y="71" fill="#94A3B8" fontSize="8" fontFamily="sans-serif">Class I Canine Guided</text>
          </svg>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex flex-col justify-end p-4">
          <div className="flex items-center justify-between text-white">
            <div>
              <p className="text-sm font-bold">{badgeText || "3D Digital Clear Aligners"}</p>
              <p className="text-xs text-slate-300">{subText || "Virtually invisible orthodontic therapy"}</p>
            </div>
            <span className="p-1.5 bg-indigo-500/30 backdrop-blur-md rounded-lg text-indigo-300">
              <Sparkles className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'restorative') {
    return (
      <div 
        onClick={onClick}
        className={`relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-200 shadow-sm flex flex-col justify-end group cursor-pointer ${className}`}
      >
        <div className="relative w-full h-full min-h-[220px] bg-gradient-to-tr from-slate-800 via-slate-900 to-sky-900 flex items-center justify-center p-6">
          <svg className="w-full h-full" viewBox="0 0 600 350" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="350" fill="#0B132B" />
            {/* Mirror Stainless Clinical Tray */}
            <rect x="80" y="80" width="440" height="200" rx="16" fill="#1C2541" stroke="#3A506B" strokeWidth="3" />
            
            {/* Monolithic Zirconia Crowns with Natural Anatomy */}
            <ellipse cx="200" cy="180" rx="35" ry="38" fill="#FFFFFF" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.5))" />
            <path d="M180 170Q200 155 220 170Q200 195 180 170Z" fill="#F1F5F9" />

            <ellipse cx="300" cy="175" rx="40" ry="42" fill="#F8FAFC" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.5))" />
            <path d="M275 165Q300 148 325 165Q300 200 275 165Z" fill="#E2E8F0" />

            <ellipse cx="400" cy="180" rx="35" ry="38" fill="#FFFFFF" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.5))" />
            <path d="M380 170Q400 155 420 170Q400 195 380 170Z" fill="#F1F5F9" />

            {/* Calibrated Dental Gauge Ruler */}
            <line x1="120" y1="250" x2="480" y2="250" stroke="#6FFFE9" strokeWidth="2" strokeDasharray="4 8" />
            <text x="250" y="270" fill="#6FFFE9" fontSize="10" fontFamily="monospace">MICRO-MARGIN PRECISION &lt; 20μm</text>
          </svg>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex flex-col justify-end p-4">
          <div className="flex items-center justify-between text-white">
            <div>
              <p className="text-sm font-bold">{badgeText || "Micro-Restorative Zirconia"}</p>
              <p className="text-xs text-slate-300">{subText || "Durable aesthetic crowns & inlays"}</p>
            </div>
            <span className="p-1.5 bg-sky-500/30 backdrop-blur-md rounded-lg text-sky-300">
              <ShieldCheck className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'smile') {
    return (
      <div 
        onClick={onClick}
        className={`relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-200 shadow-sm flex flex-col justify-end group cursor-pointer ${className}`}
      >
        <div className="relative w-full h-full min-h-[220px] bg-gradient-to-tr from-rose-950 via-slate-900 to-indigo-950 flex items-center justify-center p-6">
          <svg className="w-full h-full" viewBox="0 0 600 350" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="350" fill="#18181B" />
            {/* Radiant Natural Smile Contour */}
            {/* Lips */}
            <path d="M120 160C160 130 250 145 300 155C350 145 440 130 480 160C430 230 360 250 300 250C240 250 170 230 120 160Z" fill="#BE123C" opacity="0.85" />
            <path d="M150 165C190 145 260 155 300 160C340 155 410 145 450 165C410 215 350 225 300 225C250 225 190 215 150 165Z" fill="#881337" />

            {/* Symmetrical, Pearly White Natural Dentition */}
            <path d="M170 168C210 152 260 160 300 162C340 160 390 152 430 168C410 205 350 212 300 212C250 212 190 205 170 168Z" fill="#FFFFFF" />
            {/* Natural tooth separations */}
            <line x1="300" y1="162" x2="300" y2="212" stroke="#E2E8F0" strokeWidth="2" />
            <line x1="270" y1="160" x2="270" y2="208" stroke="#E2E8F0" strokeWidth="2" />
            <line x1="330" y1="160" x2="330" y2="208" stroke="#E2E8F0" strokeWidth="2" />
            <line x1="242" y1="162" x2="242" y2="202" stroke="#E2E8F0" strokeWidth="2" />
            <line x1="358" y1="162" x2="358" y2="202" stroke="#E2E8F0" strokeWidth="2" />

            {/* Radiance sparkles */}
            <circle cx="280" cy="180" r="3" fill="#FFFFFF" filter="blur(0.5px)" />
            <circle cx="340" cy="185" r="2.5" fill="#FFFFFF" filter="blur(0.5px)" />
          </svg>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex flex-col justify-end p-4">
          <div className="flex items-center justify-between text-white">
            <div>
              <p className="text-sm font-bold">{badgeText || "Confident Smile Showcase"}</p>
              <p className="text-xs text-slate-300">{subText || "Aesthetic & orthodontic harmony"}</p>
            </div>
            <span className="p-1.5 bg-rose-500/30 backdrop-blur-md rounded-lg text-rose-300">
              <Heart className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'map') {
    return (
      <div 
        onClick={onClick}
        className={`relative overflow-hidden rounded-2xl bg-slate-100 border border-slate-300/80 shadow-sm flex flex-col justify-end group ${className}`}
      >
        {/* Authentic Bengaluru / Austin Town & Neelasandra Street Map Visual */}
        <div className="relative w-full h-[240px] bg-[#E8ECEF] overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Base land color */}
            <rect width="600" height="300" fill="#F4F3F0" />
            
            {/* Green parks in Bengaluru (Austin Town Park, Langford Gardens) */}
            <path d="M40 30C80 20 120 40 100 90C70 110 30 90 40 30Z" fill="#D1E7DD" />
            <text x="50" y="65" fill="#2D6A4F" fontSize="8" fontWeight="600">Richmond Park</text>

            <path d="M420 40C470 30 520 60 500 110C460 120 430 90 420 40Z" fill="#D1E7DD" />
            <text x="440" y="75" fill="#2D6A4F" fontSize="8" fontWeight="600">Agram Grounds</text>

            {/* Primary Arterial Roads */}
            {/* Hosur Road */}
            <path d="M0 260C180 250 360 270 600 240" stroke="#FDE047" strokeWidth="12" strokeLinecap="round" />
            <path d="M0 260C180 250 360 270 600 240" stroke="#CA8A04" strokeWidth="1" strokeDasharray="6 6" />
            <text x="180" y="255" fill="#713F12" fontSize="9" fontWeight="bold">Hosur Road</text>

            {/* Richmond Road */}
            <path d="M50 0L190 300" stroke="#FFFFFF" strokeWidth="10" />
            <path d="M50 0L190 300" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="6 6" />
            <text x="80" y="110" fill="#475569" fontSize="8" fontWeight="bold" transform="rotate(65 80 110)">Richmond Road</text>

            {/* Austin Town Main Road */}
            <path d="M120 120L450 140" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round" />
            <path d="M120 120L450 140" stroke="#94A3B8" strokeWidth="1.5" />
            <text x="210" y="115" fill="#1E293B" fontSize="9" fontWeight="bold">Austin Town Main Road</text>

            {/* Neelasandra Main Road */}
            <path d="M290 80L320 280" stroke="#FFFFFF" strokeWidth="10" />
            <text x="325" y="210" fill="#475569" fontSize="8" fontWeight="bold" transform="rotate(75 325 210)">Neelasandra Road</text>

            {/* Victoria Layout & Shanthi Nagar connection */}
            <path d="M200 40L380 40" stroke="#FFFFFF" strokeWidth="7" />
            <text x="230" y="35" fill="#64748B" fontSize="7">Victoria Layout</text>

            {/* BDA Flats Cluster */}
            <rect x="270" y="130" width="70" height="40" rx="4" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1" />
            <text x="278" y="145" fill="#64748B" fontSize="7" fontWeight="bold">BDA Flats Complex</text>

            {/* Pinpoint Landmark: Narayana Dental Clinic */}
            <g transform="translate(300, 135)" className="animate-bounce">
              {/* Shadow */}
              <ellipse cx="0" cy="18" rx="8" ry="3" fill="#000000" opacity="0.3" />
              {/* Pin */}
              <path d="M0 -22C-12 -22 -18 -12 -18 -2C-18 8 0 20 0 20C0 20 18 8 18 -2C18 -12 12 -22 0 -22Z" fill="#0B2545" stroke="#FFFFFF" strokeWidth="2.5" />
              <circle cx="0" cy="-6" r="6" fill="#38BDF8" />
            </g>
          </svg>

          {/* Floating Pill Overlay */}
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-slate-800">Austin Town & Neelasandra Map</span>
            <span className="text-[10px] text-slate-400">12.9610° N, 77.6186° E</span>
          </div>

          <div className="absolute bottom-3 right-3 bg-slate-900/90 text-white backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            <span>Narayana Dental Clinic (#1616 BDA Flats)</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
