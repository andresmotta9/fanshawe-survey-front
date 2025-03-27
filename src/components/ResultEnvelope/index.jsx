import "./styles.css";
import { motion } from "framer-motion";

export default function ResultEnvelope() {
  return (
    <div className="envelope">
      <motion.div className="leftSide"></motion.div>
      <div className="rightSide"></div>
      <div className="bottomSide"></div>
      <div className="topSide"></div>
    </div>
  );
}
