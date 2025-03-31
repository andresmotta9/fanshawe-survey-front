import React from 'react';
import HeroSection from '../../features/heroSection';
import HeroPageVisuals from '../../components/HeroPageVisulas';
import CoursesSection from '../../features/coursesSection';
import BannerSection from '../../features/bannerSection';
import FAQ from '../../features/faqSection';
import Footer from '../../features/footerSection';
import { useNavigate } from 'react-router-dom';
import HeaderSection from '../../features/headerSection';
import useFetch from '../../hooks/useFetch';
import API_ENDPOINTS from '../../config/apiConfig';

export const Home = () => {
  const navigate = useNavigate();

  const handleStartQuizClick = (e) => {
    e.preventDefault();
    navigate("/instructions");
  };

  const fieldQuestionsAsnwers = {
    answers: [
      {
        questionId: 1,
        fieldId: 1,
      },
      {
        questionId: 2,
        fieldId: 3,
      },
      {
        questionId: 3,
        fieldId: 3,
      },
      {
        questionId: 4,
        fieldId: 4,
      },
      {
        questionId: 5,
        fieldId: 5,
      },
      {
        questionId: 6,
        fieldId: 1,
      },
    ],
  };

  const programQuestionsAnswers = {
    answers: [
      { questionId: 97, programCode: 'AIM1' },
      { questionId: 98, programCode: 'GDP1' },
      { questionId: 99, programCode: 'AIM1' },
      { questionId: 100, programCode: 'ISM1' },
      { questionId: 101, programCode: 'AIM1' },
      { questionId: 102, programCode: 'GDP1' },
      { questionId: 103, programCode: 'ISM1' },
      { questionId: 104, programCode: 'AIM1' },
      { questionId: 105, programCode: 'GDP1' },
      { questionId: 106, programCode: 'ISM1' },
      { questionId: 107, programCode: 'AIM1' },
      { questionId: 108, programCode: 'GDP1' },
      { questionId: 109, programCode: 'ISM1' },
      { questionId: 110, programCode: 'GDP1' },
      { questionId: 111, programCode: 'AIM1' },
      { questionId: 112, programCode: 'ISM1' },
      { questionId: 113, programCode: 'GDP1' },
      { questionId: 114, programCode: 'AIM1' },
      { questionId: 115, programCode: 'GDP1' },
      { questionId: 116, programCode: 'ISM1' },
      { questionId: 117, programCode: 'AIM1' },
      { questionId: 118, programCode: 'ISM1' },
      { questionId: 119, programCode: 'GDP1' },
      { questionId: 120, programCode: 'AIM1' },
    ],
  };

  const {
    data: fieldQuestions,
    loading: quesFieldsLoading,
    error: queFieldErr,
  } = useFetch(API_ENDPOINTS.QUESTIONS_FIELDS);
  const {
    data: winnerFieldInfo,
    loading: winnerFieldLoading,
    error: winnerFieldErr,
  } = useFetch(API_ENDPOINTS.ANSWER_FIELDS, fieldQuestionsAsnwers);
  const {
    data: winnerProgramInfo,
    loading: winnerProgramLoading,
    error: winnerProgramErr,
  } = useFetch(API_ENDPOINTS.PROGRAM_RESULTS, programQuestionsAnswers);
  console.log('Field Questions => ', fieldQuestions);
  console.log('Program Questions => ', winnerFieldInfo);
  console.log('Winner Program => ', winnerProgramInfo);

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
