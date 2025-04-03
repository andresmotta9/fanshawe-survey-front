import { useState, useEffect } from "react";
import CourseDetails from "../../../features/coursesSection/courseFullDetails/courseDetails";
import "./styles.css";
import { motion } from "framer-motion";

export default function ResultContent({ isFullyOpened, finalCourseResult }) {
  const [showExtraContent, setShowExtraContent] = useState(false);
  console.log(finalCourseResult.data);

  useEffect(() => {
    if (isFullyOpened) {
      const timer = setTimeout(() => {
        setShowExtraContent(true);
      }, 2000);

      return () => clearTimeout(timer); // Cleanup to prevent memory leaks
    } else {
      setShowExtraContent(false);
    }
  }, [isFullyOpened]);

  return (
    <motion.div className="resultContent">
      <div>
        <CourseDetails course={finalCourseResult.data} />
      </div>
      {showExtraContent && (
        <div>
          <CourseDetails course={finalCourseResult.data} />
        </div>
      )}
    </motion.div>
  );
}
