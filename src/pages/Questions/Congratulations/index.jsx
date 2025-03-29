import ResultEnvelope from "../../../components/ResultEnvelope";
import "./styles.css";
import animationData from "../../../assets/confetti.json";
import Lottie from "lottie-react";

export default function Congratulations({onClick}) {
    return(
        <div className="congratulations">
            <div className="congratulationsContainer">
                <div className="congratulationsContent">
                    <h1>Congratulations!</h1>
                    <p>You’ve completed the survey! Your results are ready—click below to explore your insights and see how you did. 🚀</p>
                    <div className="envelopeContainer">
                        <ResultEnvelope onClick={onClick}/>
                    </div>
                </div>
            </div>
            <div className="congratulationsConfetti">
                <Lottie animationData={animationData}
                    loop={true}
                    autoplay={true}
                />
            </div>
        </div>
    )
}