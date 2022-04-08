import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/team/TeamSection';
import NewsletterSection from '../components/NewsletterSection';
import ServicesSection from '../components/services/ServicesSection';
import ContactSection from '../components/contactSection/ContactSection';

const LandingPage = () => (
  <>
    <Header />
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <TeamSection />
    <NewsletterSection />
    <ContactSection />
    <Footer />
  </>
);

export default LandingPage;
