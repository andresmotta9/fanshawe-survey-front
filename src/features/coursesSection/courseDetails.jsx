import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import courseInfo from "../../data/courseInfo";

export default function CourseDetails({ activeCard }) {
  const course = courseInfo[activeCard];

  return (
    <motion.div
      className="courseFullDetails"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="heading"
        onChange={() => console.log("changed")}
      >
        <div className="courseFullDetailsTitle">{course.title}</div>
        <div className="courseFullDetailsName">{course.name}</div>
      </motion.div>
      <div className="courseFullDetailsDescription">{course.description}</div>
      <div>
        <h4>Top Skills</h4>
        {course.topSkills.map((skill, i) => (
          <div className="topSkills" key={i}>{skill}</div>
        ))}
       <a className="courseLink" href={course.link} target="_blank">
  Link to Fanshawe website <FaArrowRight className="arrow-icon" />
</a>

      </div>
    </motion.div>
  );
}
