import CourseCards from "../../components/courseCard";
import courseInfo from "../../data/courseInfo";
import "./styles.css";

export default function CoursesAvailable({ activeCard, setActiveCard }) {
  function handleCardClick(index) {
    setActiveCard(activeCard === index ? null : index);
  }

  return (
    <div className="courseCardContainer">
      {courseInfo.map((course, i) => (
        <CourseCards
          key={i}
          courseTitle={course.title}
          courseName={course.name}
          cardButtonClicked={activeCard === i}
          onClick={() => handleCardClick(i)}
        />
      ))}
    </div>
  );
}
