import "./styles.css";
import React from 'react';

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
            <div className="bannerSection__content">
                <div className="holesContainer top">
                    <div className="holes"></div>
                    <div className="holes"></div>
                    <div className="holes"></div>
                </div>
                <div className="bannerSectionLowerContent">

                </div>
            </div>
        </div>
    );
}