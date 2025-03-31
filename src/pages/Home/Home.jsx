import React, { useEffect } from "react";
import HeroSection from "../../features/heroSection";
import HeroPageVisuals from "../../components/HeroPageVisulas";
import CoursesSection from "../../features/coursesSection";
import BannerSection from "../../features/bannerSection";
import FAQ from "../../features/faqSection";
import Footer from "../../features/footerSection";
import { useNavigate } from "react-router-dom";
import HeaderSection from "../../features/headerSection";
import useFetch from "../../hooks/useFetch";
import API_ENDPOINTS from "../../config/apiConfig";
import {API_ENDPOINTS_KEY} from "../../config/apiConfig";

export const Home = () => {
  const navigate = useNavigate();
  const handleStartQuizClick = (e) => {
    e.preventDefault();
    navigate("/instructions");
  };

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const {data, loading, error} = useFetch(API_ENDPOINTS_KEY.QUESTIONS);
  console.log(data? data[0] : null);
  

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "http://localhost:3000/api/fields/questions",
  //         {
  //           method: "GET",
  //           headers: myHeaders,
  //         }
  //       );
  //       if (!response.ok) throw new Error(`Error: ${response.statusText}`);

  //       const result = await response.json();
  //       console.log(result);
  //     } catch (err) {
  //       // setError(err.message);
  //     } finally {
  //       // setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);
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
