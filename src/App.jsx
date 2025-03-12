import { useState } from 'react';
import useFetch from './hooks/useFetch';
import HeaderSection from './features/headerSection';
import HeroSection from './features/heroSection';
import CoursesSection from './features/coursesSection';
import FooterSection from './features/footerSection';
import BannerSection from './features/bannerSection';

function App() {
  const { data: users, loading, error } = useFetch('USERS');
  return (
    <div>
      <HeaderSection />
      <HeroSection />
      <CoursesSection />
      <BannerSection />
      <FooterSection />
    </div>
      
  );
}

export default App;
