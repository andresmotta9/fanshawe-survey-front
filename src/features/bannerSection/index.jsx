import "./styles.css";
import React from 'react';
import { motion } from "framer-motion";
import PrimaryQuizButton from "../../components/primaryQuizButton";

export default function BannerSection() {
    return (
        <div className="bannerSection">
            <div className="bannerSectionImageContainer">
                <div className="bannerSectionImage"></div>s
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
                initial={{ opacity: 0, rotateX: 90 }}
                // animate={{ opacity: 1, rotateX: 0 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
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
                    <PrimaryQuizButton name="Start Quiz" />
                </div>
            </motion.div>
        </div>
    );
}