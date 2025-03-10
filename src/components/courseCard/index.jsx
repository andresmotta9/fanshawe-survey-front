import "./styles.css";
import { motion, transform } from "framer-motion";
import { useState } from "react";
import { FaArrowRight,FaArrowDown } from "react-icons/fa";


export default function CourseCards({courseTitle,courseName,cardButtonClicked,onClick}) {
  
  return (
    <motion.div
      className="courseCard"
      initial={{ y: 0 }}
      animate={{
        y: cardButtonClicked ? 0 : 15,
        boxShadow: cardButtonClicked
          ? "0px 7px 0px 0px rgba(0,0,0,1)"
          : null,
      }}
    >
      <div className="courseImage"></div>
      <div className="courseDescription">
        <div className="courseTitle">{courseTitle}</div>
        <div className="courseDetails">
          <div className="courseName">
            {courseName}
          </div>
          <div
            className="courseButton"
            onClick={onClick}
          >
            { cardButtonClicked ? <FaArrowRight /> : <FaArrowDown />}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
