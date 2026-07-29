import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWidgets } from './components/FloatingWidgets';
import { AiBeautyConsultantModal } from './components/AiBeautyConsultantModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { BridalPage } from './pages/BridalPage';
import { PackagesPage } from './pages/PackagesPage';
import { AboutPage } from './pages/AboutPage';
import { BookingPage } from './pages/BookingPage';
import { ContactPage } from './pages/ContactPage';

function AppContent() {
  const [aiModalOpen, setAiModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSelectServiceFromAi = (serviceName: string) => {
    navigate(`/booking?service=${encodeURIComponent(serviceName)}`);
  };

  return (
    <div className="min-h-screen bg-white text-stone-900 font-sans selection:bg-[#D4AF8A] selection:text-stone-950 flex flex-col justify-between">
      <ScrollToTop />

      <div>
        {/* Multi-Page Sticky Navigation Header */}
        <Header
          onOpenAiConsultant={() => setAiModalOpen(true)}
        />

        {/* Main Route Content Views */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/bridal" element={<BridalPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
      </div>

      {/* Shared Footer */}
      <Footer />

      {/* Floating Call / WhatsApp / AI Advisor / Scroll-Top Widgets */}
      <FloatingWidgets
        onOpenAiConsultant={() => setAiModalOpen(true)}
        onOpenBooking={() => navigate('/booking')}
      />

      {/* AI Beauty Advisor Modal */}
      <AiBeautyConsultantModal
        isOpen={aiModalOpen}
        onClose={() => setAiModalOpen(false)}
        onSelectService={handleSelectServiceFromAi}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
