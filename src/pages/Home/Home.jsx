import React from 'react';
import HeroSection from '../../features/heroSection';
import HeroPageVisuals from '../../components/HeroPageVisulas';
import CoursesSection from '../../features/coursesSection';
import BannerSection from '../../features/bannerSection';
import FAQ from '../../features/faqSection';
import Footer from '../../features/footerSection';
import { useNavigate } from 'react-router-dom';
import HeaderSection from '../../features/headerSection';

export const Home = () => {
  const navigate = useNavigate();
  const handleStartQuizClick = (e) => {
    e.preventDefault();
    navigate('/instructions');
  };
  return (
    <>
      <HeaderSection onStartQuiz={handleStartQuizClick} />
      <HeroSection onStartQuiz={handleStartQuizClick} />
      <HeroPageVisuals />
      <CoursesSection />
      {/* Pass the handleStartQuizClick function to BannerSection */}
      <BannerSection onStartQuiz={handleStartQuizClick} />
      <FAQ />
      <Footer />
    </>
  );
};
