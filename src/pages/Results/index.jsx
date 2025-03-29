import { useState } from "react"
import PrimaryQuizButton from "../../components/primaryQuizButton"
import ResultEnvelope from "../../components/ResultEnvelope"
import ResultContent from "./ResultContent"
import "./styles.css"
import { motion } from "framer-motion"

export default function Results() {
    const [seeAllContent, setSeeAllContent] = useState(true)
    return(

        <motion.div className="results">
            <div>
                <ResultEnvelope isOpened={true} isFullyOpened={!seeAllContent}>
                    <ResultContent isFullyOpened={!seeAllContent}/>
                </ResultEnvelope>
                <div className="resultsButtonContainer">
                    {seeAllContent && <PrimaryQuizButton name={"see all"} onClick={()=>{setSeeAllContent(false)}}/>}
                </div>
            </div>
        </motion.div>
    )
}
