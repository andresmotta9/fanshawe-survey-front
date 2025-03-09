import React from "react"
import './styles.css'
import StartQuizButton from '../../components/startQuizButton'
import SecondaryButton from "../../components/secondaryButton"

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
                <StartQuizButton />   
            </div>
        </div>
    )
}