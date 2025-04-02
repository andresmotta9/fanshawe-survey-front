import { useState, useEffect } from "react";
import CourseDetails from "../../../features/coursesSection/courseFullDetails/courseDetails";
import "./styles.css";
import { motion } from "framer-motion";

export default function ResultContent({ isFullyOpened, finalCourseResult }) {
  const [showExtraContent, setShowExtraContent] = useState(false);

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
        <CourseDetails course={finalCourseResult} />
      </div>
      {showExtraContent && (
        <div>
          <CourseDetails course={1} />
        </div>
      )}
    </motion.div>
  );
}
