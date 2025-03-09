import CourseCards from "../../components/courseCard"
import "./styles.css"
import { useMediaQuery } from 'react-responsive'

export default function CoursesSection(){

    const isDesktop = useMediaQuery({minWidth: 750})
    return(
        <div className="coursesSection">
            <div className="bindTopCircles">
                {Array(isDesktop ? 14 : 5).fill().map((_,i) => (
                    <div className="bindHoles" key={i}></div>
                ))}
            </div>
            <div className="coursesSectionContent">
                <div className="TextHeading">COURSES AVAILABLE</div>
                <div className="courseCardContainer">
                    <CourseCards />
                    <CourseCards />
                    <CourseCards />
                    <CourseCards />
                    <CourseCards />
                    <CourseCards />
                    <CourseCards />
                </div>
            </div>
        </div>
    )
}