import React, { useState } from 'react';
import { Review } from '../types';
import { X, Star, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddReview: (review: Review) => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({
  isOpen,
  onClose,
  onAddReview
}) => {
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState(5);
  const [treatment, setTreatment] = useState('Routine Checkup & Cleaning');
  const [quote, setQuote] = useState('');
  const [location, setLocation] = useState('Austin Town, Bengaluru');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !quote.trim()) return;

    const initials = author
      .trim()
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);

    let category: Review['category'] = 'general';
    if (treatment.toLowerCase().includes('implant')) category = 'implants';
    else if (treatment.toLowerCase().includes('root canal')) category = 'root-canal';
    else if (treatment.toLowerCase().includes('ortho') || treatment.toLowerCase().includes('aligner') || treatment.toLowerCase().includes('brace')) category = 'ortho';

    const newRev: Review = {
      id: `user-rev-${Date.now()}`,
      author: author.trim(),
      avatarInitials: initials || 'PT',
      rating,
      treatment,
      category,
      quote: `“${quote.trim()}”`,
      location: location.trim() || 'Bengaluru',
      treatmentVerified: true,
      date: 'Just now'
    };

    onAddReview(newRev);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 relative p-6 sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-display">
              Review Published!
            </h3>
            <p className="text-xs text-slate-500">
              Thank you for sharing your experience with Narayana Dental Clinic.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-sky-700 uppercase tracking-wider">
                Google & Clinic Feedback
              </span>
              <h3 className="text-xl font-bold text-slate-900 font-display">
                Share Your Experience
              </h3>
              <p className="text-xs text-slate-500">
                Help fellow Austin Town & Bengaluru residents make informed dental choices.
              </p>
            </div>

            {/* Star Rating */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Rating
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="p-1 focus:outline-hidden"
                  >
                    <Star
                      className={`w-7 h-7 ${
                        star <= rating
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-slate-300'
                      }`}
                    />
                  </button>
                ))}
                <span className="text-xs font-bold text-slate-700 ml-2">
                  {rating} of 5 Stars
                </span>
              </div>
            </div>

            {/* Name & Location */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anand R."
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0B2545]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Neighborhood / Locality
                </label>
                <input
                  type="text"
                  placeholder="e.g. Austin Town"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0B2545]"
                />
              </div>
            </div>

            {/* Treatment */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Treatment Undertaken
              </label>
              <select
                value={treatment}
                onChange={(e) => setTreatment(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0B2545]"
              >
                <option value="Single-Sitting Root Canal">Single-Sitting Root Canal</option>
                <option value="Dental Implant Treatment">Dental Implant Treatment</option>
                <option value="Clear Aligners & Orthodontics">Clear Aligners & Orthodontics</option>
                <option value="Routine Checkup & Cleaning">Routine Checkup & Cleaning</option>
                <option value="Pediatric Dental Care">Pediatric Dental Care</option>
                <option value="Emergency Consultation">Emergency Consultation</option>
                <option value="Cosmetic Makeover & Veneers">Cosmetic Makeover & Veneers</option>
              </select>
            </div>

            {/* Quote */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Your Review *
              </label>
              <textarea
                required
                rows={3}
                placeholder="Share your experience regarding pain levels, doctor explanation, hygiene, and outcome..."
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0B2545]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 bg-[#0B2545] hover:bg-[#133E87] text-white font-bold rounded-lg text-sm transition-colors shadow-xs"
            >
              Submit Verified Patient Review
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
