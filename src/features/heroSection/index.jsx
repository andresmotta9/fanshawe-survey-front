import React from "react"
import './styles.css'
import SecondaryButton from "../../components/secondaryButton"
import PrimaryQuizButton from "../../components/primaryQuizButton"
import TestimonialAvatar from "../../components/testimonialAvatars"

export default function HeroSection(props) {
    return(
        <div className="heroSection">
            <div className="headerText">
                Not Sure Which IT Program Fits You? <br/> <span className="styledHeader"> Let's Find Out! </span>
            </div>
            <div className="heroDescription">
                Discover the best IT diploma program at Fanshawe College based on your skills,provisions, interests, and career goals. Take our quick Quiz and get personalized recommendations!
            </div>
            <div className="buttonContainer">
                <SecondaryButton name="view Courses"/>
                <PrimaryQuizButton name="start Quiz"/>   
            </div>
            <div className="Testimonials">
                <div className="TestimonialAvatarContainer">
                    <TestimonialAvatar />
                    <TestimonialAvatar />
                    <TestimonialAvatar />
                    
                </div>
                <div>
                    <div className="testimonialText">
                        <h4>20+</h4>
                        <p>Students Assisted</p>
                    </div>
                </div>
            </div>
        </div>
    )
}