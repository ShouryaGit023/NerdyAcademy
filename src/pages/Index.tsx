import { useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCustomCursor } from '@/hooks/useCustomCursor';
import PageLoader from '@/components/PageLoader';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import MarqueeStrip from '@/components/MarqueeStrip';
import ForWhoSection from '@/components/ForWhoSection';
import BigStatement from '@/components/BigStatement';
import WhySection from '@/components/WhySection';
import RoadmapSection from '@/components/RoadmapSection';
import SemestersSection from '@/components/SemestersSection';
import InstructorSection from '@/components/InstructorSection';
import AboutSection from '@/components/AboutSection';
import CertificatesSection from '@/components/CertificatesSection';
import PricingSection from '@/components/PricingSection';
import SpokenEnglishSection from '@/components/SpokenEnglishSection';
import FaqSection from '@/components/FaqSection';
import SignSection from '@/components/SignSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useScrollReveal();
  const { cursorRef, followerRef } = useCustomCursor();

  useEffect(() => {
    document.title = 'Artificially Intelligent Course — Nerdy Academy';
  }, []);

  return (
    <>
      <PageLoader />
      <div ref={cursorRef} className="cursor-dot hidden md:block" />
      <div ref={followerRef} className="cursor-follower hidden md:block" />
      <Navbar />
      <HeroSection />
      <MarqueeStrip />
      <ForWhoSection />
      <BigStatement />
      <WhySection />
      <RoadmapSection />
      <SemestersSection />
      <InstructorSection />
      <AboutSection />
      <CertificatesSection />
      <PricingSection />
      <SpokenEnglishSection />
      <FaqSection />
      <SignSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;
