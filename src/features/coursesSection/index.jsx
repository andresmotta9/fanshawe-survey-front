import CourseCards from "../../components/courseCard";
import "./styles.css";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { motion } from "framer-motion";
import courseInfo from "../../data/courseInfo";
import CoursesAvailable from "./courseCardContainer";
import CourseDetails from "./courseFullDetails/courseDetails";
import useFetch from "../../hooks/useFetch";

export default function CoursesSection() {
  let [activeCard, setActiveCard] = useState(null);
  const isDesktop = useMediaQuery({ minWidth: 750 });

  const {
    data: courses,
    loading: coursesLoading,
    error: coursesErr,
  } = useFetch("http://localhost:3000/api/courses" );

  return (
    <motion.div
      className="coursesSection"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="bindTopCircles">
        {Array(isDesktop ? 14 : 5)
          .fill()
          .map((_, i) => (
            <div className="bindHoles" key={i}></div>
          ))}
      </div>
      <div className="coursesSectionContent">
        <div className="TextHeading">PROGRAMS AVAILABLE</div>
        {courses &&<CoursesAvailable
          activeCard={activeCard}
          setActiveCard={setActiveCard}
          courses={courses}
        />}
        {activeCard !== null  ? (
          <div className="courseDetailContain">
            <CourseDetails course={courses[activeCard]} />
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}
