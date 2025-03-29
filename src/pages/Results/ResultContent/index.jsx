import { useState, useEffect } from "react";
import CourseDetails from "../../../features/coursesSection/courseFullDetails/courseDetails";
import "./styles.css";
import { motion } from "framer-motion";

export default function ResultContent({ isFullyOpened }) {
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
        <CourseDetails activeCard={1} />
      </div>
      {showExtraContent && (
        <div>
          <CourseDetails activeCard={1} />
        </div>
      )}
    </motion.div>
  );
}
