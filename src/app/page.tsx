'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import StatsSection from '@/components/StatsSection';
import MartyrsTributeSection from '@/components/MartyrsTributeSection';
import TriServicesSection from '@/components/TriServicesSection';
import MedalsRibbonSection from '@/components/MedalsRibbonSection';
import VeerNariSection from '@/components/VeerNariSection';
import SeniorPensionersCare from '@/components/SeniorPensionersCare';
import PensionGuideSection from '@/components/PensionGuideSection';
import CsdAssistantSection from '@/components/CsdAssistantSection';
import EmpanelledHospitalsSection from '@/components/EmpanelledHospitalsSection';
import MilitaryTransitGuide from '@/components/MilitaryTransitGuide';
import ResettlementCareerHub from '@/components/ResettlementCareerHub';
import LegalLandAidSection from '@/components/LegalLandAidSection';
import ScholarshipDeskSection from '@/components/ScholarshipDeskSection';
import MilitaryTermsDecoder from '@/components/MilitaryTermsDecoder';
import WhyJoinSection from '@/components/WhyJoinSection';
import NoticesSection from '@/components/NoticesSection';
import EventsSection from '@/components/EventsSection';
import NashikDefenceHub from '@/components/NashikDefenceHub';
import GrievanceSection from '@/components/GrievanceSection';
import MembershipSection from '@/components/MembershipSection';
import OfficeBearersSection from '@/components/OfficeBearersSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';

export default function Home() {

  // Initialize reveal observers for elements with .reveal class
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

    if (prefersReduced) {
      elements.forEach((el) => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <main id="main-content">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <StatsSection />
        <TriServicesSection />
        <MartyrsTributeSection />
        <MedalsRibbonSection />
        <VeerNariSection />
        <SeniorPensionersCare />
        <PensionGuideSection />
        <CsdAssistantSection />
        <EmpanelledHospitalsSection />
        <MilitaryTransitGuide />
        <NashikDefenceHub />
        <ResettlementCareerHub />
        <LegalLandAidSection />
        <ScholarshipDeskSection />
        <MilitaryTermsDecoder />
        <WhyJoinSection />
        <NoticesSection />
        <EventsSection />
        <GrievanceSection />
        <MembershipSection />
        <OfficeBearersSection />
        <ContactSection />
      </main>


      <Footer />
      <FloatingElements />
    </>
  );
}
