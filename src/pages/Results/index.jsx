import { useState } from "react"
import PrimaryQuizButton from "../../components/primaryQuizButton"
import ResultEnvelope from "../../components/ResultEnvelope"
import ResultContent from "./ResultContent"
import "./styles.css"
import { motion } from "framer-motion"
import { useLocation } from "react-router-dom"

export default function Results() {
    const location = useLocation()
    const finalCourseResult = location.state?.winner|| null
    const [seeAllContent, setSeeAllContent] = useState(true)
    console.log(finalCourseResult)
    console.log("finalCourseResult", finalCourseResult)
    return(
        
        <motion.div className="results">
            {finalCourseResult !== null &&<div>
                <ResultEnvelope isOpened={true} isFullyOpened={!seeAllContent}>
                     <ResultContent finalCourseResult={finalCourseResult} isFullyOpened={!seeAllContent}/>
                </ResultEnvelope>
                <div className="resultsButtonContainer">
                    {seeAllContent && <PrimaryQuizButton name={"see all"} onClick={()=>{setSeeAllContent(false)}}/>}
                </div>
            </div>}
        </motion.div>
    )
}
