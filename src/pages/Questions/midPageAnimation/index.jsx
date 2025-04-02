import { motion } from "framer-motion";
import PrimaryQuizButton from "../../../components/primaryQuizButton";
import "./style.css";
import Lottie from "lottie-react";
import animationData from "../../../assets/sunMan.json";

export default function MidPageAnimation(props) {
  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 }, // Start below with opacity 0
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        staggerChildren: 0.2, // Delay between child animations
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6,  } }
  };

  return (
    <motion.div
      className="midPageContainer"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="midPageContent" variants={itemVariants}>
        <h1>GOOD JOB 🥳🥳</h1>
      </motion.div>

      <motion.div className="lottieContainer" 
        initial={{ opacity: 0, rotateZ: -720, scale: 0.5 }}
        animate={{ opacity: 1, rotateZ: 0, scale: 1 }}
        transition={{ duration: 1, delay: 1, damping: 10, stiffness: 100, ease: "easeOut" }}
      >
        <Lottie animationData={animationData} loop autoplay />
      </motion.div>

      <motion.div className="lottieDescription" variants={itemVariants}>
        Just a little more detailed questions for second round and we’re good to go 😁
      </motion.div>

      <motion.div className="btnContainer" variants={itemVariants}>
        <PrimaryQuizButton onClick={props.onClick} name="Continue" />
      </motion.div>
    </motion.div>
  );
}
