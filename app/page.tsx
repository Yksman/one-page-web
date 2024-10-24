'use client';

import { useState } from 'react';
import { Toaster } from "@/components/ui/sonner";
import { ContactModal } from '@/components/contact-modal';
import { HeaderSection } from '@/components/sections/header-section';
import { HeroSection } from '@/components/sections/hero-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { PricingSection } from '@/components/sections/pricing-section';
import { LinksSection } from '@/components/sections/links-section';
import { FooterSection } from '@/components/sections/footer-section';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'trial' | 'purchase'>('trial');

  const openModal = (type: 'trial' | 'purchase') => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <>
      <HeaderSection onContact={() => openModal('trial')} />
      <main className="min-h-screen pt-16"> {/* Added pt-16 for header space */}
        <Toaster />
        <ContactModal 
          isOpen={modalOpen} 
          onClose={() => setModalOpen(false)} 
          type={modalType}
        />

        <HeroSection onStartTrial={() => openModal('trial')} />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection 
          onTrialClick={() => openModal('trial')}
          onPurchaseClick={() => openModal('purchase')}
        />
        <LinksSection />
        <FooterSection />
      </main>
    </>
  );
}