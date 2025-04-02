import CourseCards from "../../components/courseCard";
import "./styles.css";

export default function CoursesAvailable({ courses, activeCard, setActiveCard }) {
  function handleCardClick(index) {
    setActiveCard(activeCard === index ? null : index);
  }

  return (
    <div className="courseCardContainer">
      {courses.map((course, i) => (
        <CourseCards
          key={i}
          courseTitle={course.program_code}
          courseName={course.name}
          cardButtonClicked={activeCard === i}
          onClick={() => handleCardClick(i)}
        />
      ))}
    </div>
  );
}
