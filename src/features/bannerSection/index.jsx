import "./styles.css";
import React from 'react';
import { motion } from "framer-motion";
import PrimaryQuizButton from "../../components/primaryQuizButton";
import { useMediaQuery } from "react-responsive";

export default function BannerSection({ onStartQuiz }) {
    const isTablet = useMediaQuery({ query: '(min-width: 1024px)' });

    return (
        <div className="bannerSection">
            <div className="bannerSectionImageContainer">
                <div className="bannerSectionImage"></div>
                <div className="holesContainer bottom">
                    <div className="holes"></div>
                    <div className="holes"></div>
                    <div className="holes"></div>
                </div>
            </div>
            <div className="spiralBind">
                <div className="spiralBind__spiral"></div>
                <div className="spiralBind__spiral"></div> 
                <div className="spiralBind__spiral"></div>  
            </div>
            <motion.div className="bannerSection__content"
                viewport={{ once: true, amount: 0.2 }}
                initial={{ opacity: 0, rotateX: isTablet ? 0 : 90, rotateY: isTablet ? -90 : 0 }}
                whileInView={{ opacity: 1, rotateX: isTablet ? 0 : 0, rotateY: isTablet ? 0 : 0 }}
                transition={{ duration: 1 }}
            >
                <div className="holesContainer top">
                    <div className="holes"></div>
                    <div className="holes"></div>
                    <div className="holes"></div>
                </div>
                <div className="bannerSectionLowerContent">
                    <h4>Find your perfect IT Program</h4>
                    <p>Not sure which IT diploma program suits you best? Take our quick quiz and discover the best match based on your skills, interests, and goals. </p>
                    {/* Pass the onStartQuiz prop to PrimaryQuizButton */}
                    <PrimaryQuizButton name="Start Quiz" onClick={onStartQuiz} />
                </div>
            </motion.div>
        </div>
    );
}