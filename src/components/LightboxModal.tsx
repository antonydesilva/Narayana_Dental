import React from 'react';
import { GalleryItem } from '../types';
import { VisualIllustration } from './VisualIllustration';
import { X, Calendar, MapPin, Sparkles } from 'lucide-react';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onOpenBooking
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white bg-slate-900/60 hover:bg-slate-900 rounded-full transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Big Visual View */}
        <div className="w-full h-72 sm:h-80 relative">
          <VisualIllustration 
            type={item.imageType}
            className="w-full h-full rounded-none"
            badgeText={item.title}
            subText={item.description}
          />
        </div>

        {/* Content Details */}
        <div className="p-6 sm:p-7 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="px-3 py-1 bg-sky-50 text-sky-800 text-xs font-bold rounded-full border border-sky-100">
              {item.tag} • {item.spaceTag}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>Austin Town Clinic Facility</span>
            </span>
          </div>

          <h3 className="text-xl font-bold text-slate-900 font-display">
            {item.title}
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed">
            {item.description}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
            <div className="text-xs text-slate-500">
              Authentic in-clinic care documentation.
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none px-4 py-2 border border-slate-200 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-50 transition-colors"
              >
                Close View
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="flex-1 sm:flex-none px-4 py-2 bg-[#0B2545] hover:bg-[#133E87] text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
