import { useState } from 'react';
import useFetch from './hooks/useFetch';
import HeaderSection from './features/headerSection';

function App() {
  const { data: users, loading, error } = useFetch('USERS');
  return (
    <div>
      <HeaderSection />
    </div>
      
  );
}

export default App;
