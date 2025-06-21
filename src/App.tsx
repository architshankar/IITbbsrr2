import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import LoadingAnimation from './components/LoadingAnimation';
import Index from './pages/Index';
import About from './pages/About';
import Programs from './pages/Programs';
import Verify from './pages/Verify';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Disclaimer from './pages/Disclaimer';
import FAQ from './pages/FAQ';

const queryClient = new QueryClient();

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Called by LoadingAnimation when its sequence finishes
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Toaster notifications */}
        <Toaster />
        <Sonner />

        {/* Show loading animation until onLoadingComplete fires */}
        {isLoading && (
          <div className="fixed inset-0 z-50">
            <LoadingAnimation onLoadingComplete={handleLoadingComplete} />
          </div>
        )}

        {/* Main application UI */}
        <div>
          <BrowserRouter>
            <Navigation />
            <main>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/verify" element={<Verify />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-conditions" element={<TermsConditions />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer handleLinkClick={(section) => {
              document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
            }}
              setShowMap={(value) => console.log("Map toggled:", value)} />
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
