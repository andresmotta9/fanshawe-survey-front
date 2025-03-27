import ResultEnvelope from "../../../components/ResultEnvelope";
import "./styles.css";

export default function Congratulations() {
    return(
        <div className="congratulations">
            <div className="congratulationsContainer">
                <div className="congratulationsContent">
                    <h1>Congratulations!</h1>
                    <p>You’ve completed the survey! Your results are ready—click below to explore your insights and see how you did. 🚀</p>
                    <div className="envelopeContainer">
                        <ResultEnvelope/>
                    </div>
                </div>
            </div>
        </div>
    )
}