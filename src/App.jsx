import { useState } from 'react';
import useFetch from './hooks/useFetch';
import HeaderSection from './features/headerSection';
import HeroSection from './features/heroSection';
import CoursesSection from './features/coursesSection';
import FooterSection from './features/footerSection';
import BannerSection from './features/bannerSection'; // Import BannerSection
import FAQ from './features/faqSection';
import HeroPageVisuals from './components/HeroPageVisulas';
import InstructionsPage from './InstructionsPage'; // Adjust the import path as needed

function App() {
  const { data: users, loading, error } = useFetch('USERS');
  const [showInstructions, setShowInstructions] = useState(false); // State to control visibility

  // Function to handle the "Start Quiz" button click
  const handleStartQuizClick = () => {
    setShowInstructions(true);
  };

  return (
    <div>
      {/* Pass the handleStartQuizClick function to HeaderSection */}
      <HeaderSection onStartQuiz={handleStartQuizClick} />

      {/* Conditionally render InstructionsPage or other components */}
      {showInstructions ? (
        <InstructionsPage onStartQuiz={() => setShowInstructions(false)} />
      ) : (
        <>
          {/* Pass the handleStartQuizClick function to HeroSection */}
          <HeroSection onStartQuiz={handleStartQuizClick} />
          <HeroPageVisuals />
          <CoursesSection />
          {/* Pass the handleStartQuizClick function to BannerSection */}
          <BannerSection onStartQuiz={handleStartQuizClick} />
          <FAQ />
          <FooterSection />
        </>
      )}
    </div>
  );
}

export default App;