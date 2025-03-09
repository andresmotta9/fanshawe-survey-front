import { useState } from 'react';
import useFetch from './hooks/useFetch';
import HeaderSection from './features/headerSection';
import HeroSection from './features/heroSection';

function App() {
  const { data: users, loading, error } = useFetch('USERS');
  return (
    <div>
      <HeaderSection />
      <HeroSection />
    </div>
      
  );
}

export default App;
