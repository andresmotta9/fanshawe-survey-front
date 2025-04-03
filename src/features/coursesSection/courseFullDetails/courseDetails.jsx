import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import courseInfo from "../../../data/courseInfo";
import "./styles.css";

export default function CourseDetails({ course }) {
  return (
    <motion.div
      className="courseFullDetails"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="heading" onChange={() => console.log("changed")}>
        <div className="courseFullDetailsTitle">{course.programCode}</div>
        <div className="courseFullDetailsName">{course.programName}</div>
      </motion.div>
      <div className="courseFullDetailsDescription">{course.description}</div>
      <div>
        <h4>Top Skills</h4>
        {(course.topSkills.length > 5
          ? course.topSkills.slice(0, 5)
          : course.topSkills
        ).map((skill, i) => (
          <div className="topSkills" key={i}>
            {skill}
          </div>
        ))}
        <a className="courseLink" href={course.link} target="_blank">
          Link to Fanshawe website <FaArrowRight className="arrow-icon" />
        </a>
      </div>
    </motion.div>
  );
}
