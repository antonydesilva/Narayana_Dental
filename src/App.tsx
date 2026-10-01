import React, { useState, useEffect } from 'react';
import { PageView, Review, GalleryItem } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { EmergencyFloat } from './components/EmergencyFloat';
import { AppointmentModal } from './components/AppointmentModal';
import { PatientPortalModal } from './components/PatientPortalModal';
import { ReviewModal } from './components/ReviewModal';
import { LightboxModal } from './components/LightboxModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { DoctorsPage } from './pages/DoctorsPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';
import { BookPage } from './pages/BookPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialDoctor, setBookingInitialDoctor] = useState<string | undefined>(undefined);
  const [bookingInitialService, setBookingInitialService] = useState<string | undefined>(undefined);

  const [patientModalOpen, setPatientModalOpen] = useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const [customReviews, setCustomReviews] = useState<Review[]>([]);

  // Synchronize hash with current page
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages: PageView[] = ['home', 'about', 'doctors', 'services', 'gallery', 'reviews', 'contact', 'book'];
      if (validPages.includes(hash as PageView)) {
        setCurrentPage(hash as PageView);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (doctorPreference?: string, servicePreference?: string) => {
    setBookingInitialDoctor(doctorPreference);
    setBookingInitialService(servicePreference);
    setBookingModalOpen(true);
  };

  const handleAddReview = (newReview: Review) => {
    setCustomReviews(prev => [newReview, ...prev]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 antialiased selection:bg-sky-100 selection:text-sky-900">
      {/* Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
        onOpenPatientModal={() => setPatientModalOpen(true)}
      />

      {/* Main Content View */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage 
            onNavigate={handleNavigate} 
            onOpenBooking={handleOpenBooking} 
          />
        )}

        {currentPage === 'about' && (
          <AboutPage 
            onNavigate={handleNavigate} 
            onOpenBooking={handleOpenBooking} 
          />
        )}

        {currentPage === 'doctors' && (
          <DoctorsPage 
            onOpenBooking={handleOpenBooking} 
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage 
            onNavigate={handleNavigate} 
            onOpenBooking={handleOpenBooking} 
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage 
            onOpenBooking={() => handleOpenBooking()}
            onOpenLightbox={(item) => setLightboxItem(item)}
          />
        )}

        {currentPage === 'reviews' && (
          <ReviewsPage 
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
            onOpenReviewModal={() => setReviewModalOpen(true)}
            customReviews={customReviews}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage 
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
            onOpenLightbox={(item) => setLightboxItem(item)}
          />
        )}

        {currentPage === 'book' && (
          <BookPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Floating Emergency & WhatsApp Button */}
      <EmergencyFloat />

      {/* Modals */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialDoctor={bookingInitialDoctor}
        initialService={bookingInitialService}
      />

      <PatientPortalModal
        isOpen={patientModalOpen}
        onClose={() => setPatientModalOpen(false)}
        onOpenBooking={() => {
          setPatientModalOpen(false);
          handleOpenBooking();
        }}
      />

      <ReviewModal
        isOpen={reviewModalOpen}
        onClose={() => setReviewModalOpen(false)}
        onAddReview={handleAddReview}
      />

      <LightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
        onOpenBooking={() => {
          setLightboxItem(null);
          handleOpenBooking();
        }}
      />
    </div>
  );
}
