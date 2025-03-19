import React from "react";
import { motion } from "framer-motion";
import "./styles.css";
import SecondaryButton from "../../components/secondaryButton";
import PrimaryQuizButton from "../../components/primaryQuizButton";
import TestimonialAvatar from "../../components/testimonialAvatars";
import avatar1 from "./avatarImages/avatar1.png";
import avatar2 from "./avatarImages/avatar2.png";  
import avatar3 from "./avatarImages/avatar3.png";

// Variants for fade-up animation
const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function HeroSection(props) {
  return (
    <motion.div 
      className="heroSection"
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.2, } },
      }}
    >
      <motion.div className="headerText" variants={fadeUpVariant}>
        Not Sure Which IT Program Fits You? <br /> 
        <span className="styledHeader">Let's Find Out!</span>
      </motion.div>

      <motion.div className="heroDescription" variants={fadeUpVariant}>
        Discover the best IT diploma program at Fanshawe College based on your
        skills, provisions, interests, and career goals. Take our quick Quiz and
        get personalized recommendations!
      </motion.div>

      <motion.div className="buttonContainer" variants={fadeUpVariant}>
        <SecondaryButton name="View Courses" />
        <PrimaryQuizButton name="Start Quiz" />
      </motion.div>

      <motion.div className="Testimonials" variants={fadeUpVariant}>
        <motion.div className="TestimonialAvatarContainer" variants={fadeUpVariant}>
          <TestimonialAvatar avatar = {avatar1}/>
          <TestimonialAvatar avatar = {avatar2}/>
          <TestimonialAvatar avatar = {avatar3}/>
        </motion.div>
        <motion.div variants={fadeUpVariant}>
          <div className="testimonialText">
            <h4>20+</h4>
            <p>Students Assisted</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
