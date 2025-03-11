import CourseCards from "../../components/courseCard";
import "./styles.css";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { motion } from "framer-motion";
import courseInfo from "../../data/courseInfo";
import { FaArrowRight } from "react-icons/fa";

export default function CoursesSection() {
  let [activeCard, setActiveCard] = useState(null);
  const isDesktop = useMediaQuery({ minWidth: 750 });

  function handleCardClick(index) {
    activeCard === index ? setActiveCard(null) : setActiveCard(index);
    
  }
  return (
    <div className="coursesSection">
      <div className="bindTopCircles">
        {Array(isDesktop ? 14 : 5)
          .fill()
          .map((_, i) => (
            <div className="bindHoles" key={i}></div>
          ))}
      </div>
      <div className="coursesSectionContent">
        <div className="TextHeading">COURSES AVAILABLE</div>
        <div className="courseCardContainer">
          {courseInfo.map((courses, i) => (
            <CourseCards
              courseTitle={courses.title}
              courseName={courses.name}
              cardButtonClicked={activeCard === i}
              key={i}
              onClick={() => handleCardClick(i)}
            />
          ))}
        </div>
        {activeCard !== null ? (
          <motion.div
            className="courseFullDetails"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="heading">
              <div className="courseFullDetailsTitle">
                {courseInfo[activeCard].title}
              </div>
              <div className="courseFullDetailsName">
                {courseInfo[activeCard].name}
              </div>
            </div>
            <div className="courseFullDetailsDescription">
              {courseInfo[activeCard].description}
            </div>
            <div>
              <h4>Top Skills</h4>
              {courseInfo[activeCard].topSkills.map((skill, i) => (
                <div className="topSkills" key={i}>{skill}</div>
              ))}
              <a className="courseLink" href={courseInfo[activeCard].link} target="_blank">Link to fanshawe website <FaArrowRight></FaArrowRight></a>
              
            </div>
          </motion.div>
        ) : null}
      </div>
    </div>
  );
}
