import { useState } from 'react';
import useFetch from './hooks/useFetch';
import HeaderSection from './features/headerSection';
import HeroSection from './features/heroSection';
import CoursesSection from './features/coursesSection';
import BannerSection from './features/bannerSection';

function App() {
  const { data: users, loading, error } = useFetch('USERS');
  return (
    <div>
      <HeaderSection />
      <HeroSection />
      <CoursesSection />
    </div>
      
  );
}

export default App;
