import CourseCards from '../../components/courseCard';
import './styles.css';

export default function CoursesAvailable({
  activeCard,
  setActiveCard,
  courses,
}) {
  function handleCardClick(index) {
    setActiveCard(activeCard === index ? null : index);
  }

  return (
    <div className="courseCardContainer">
      {courses && courses.length > 0 ? (
        courses.map((course) => (
          <CourseCards
            key={course.program_code}
            courseTitle={course.program_code}
            courseName={course.program_name}
            cardButtonClicked={activeCard === course.program_code}
            onClick={() => handleCardClick(course.program_code)}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
