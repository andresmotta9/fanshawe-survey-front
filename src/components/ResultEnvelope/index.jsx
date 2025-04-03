import "./styles.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ResultEnvelope({ isFullyOpened,isOpened, onClick, children }) {
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

  const [showExtraContent, setShowExtraContent] = useState(false);
  return (
    <motion.div className={isOpened ? "openedEnvelope" : "envelope"}
      layoutId="animatedBox"
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      {isOpened && (
        <motion.div
          className="ResultsRealContent"
          animate={{
            y: isOpened ? -30 : 0,
            transition: { type: "spring", stiffness: 100, damping:15, delay: 1.5 },
          }}
          style={{ zIndex: isOpened ? 2 : 1 }}
        >
          {children}
        </motion.div>
      )}
      <motion.div
        className="leftSide"
        style={{ zIndex: isOpened ? 2 : 2 }}
        animate={{
          rotateY: isFullyOpened ? 180 : 0,
          transition: { duration: 2 },
        }}
      ></motion.div>
      <motion.div
        className="rightSide"
        style={{ zIndex: isOpened ? 2 : 2 }}
        animate={{
          rotateY: isFullyOpened ? 180: 0,
          transition: { duration: 2 },
        }}
      ></motion.div>
      {!showExtraContent && <motion.div
        className="bottomSide"
        style={{ zIndex: isOpened ? 2 : 2 }}
        animate={{
          rotateX: isFullyOpened ? 180 : 0,
          transition: { duration: 2 },
        }}
      ></motion.div>}
      <motion.div
        className="topSide"
        animate={{
          rotateX: isOpened ? 180 : 0,
          transition: { duration: 2 },
          style: { zIndex: isOpened ? 1 : 3 },
        }}
      ></motion.div>
      {!isOpened && <div className="openButton" onClick={onClick}>Open</div>}
    </motion.div>
  );
}
