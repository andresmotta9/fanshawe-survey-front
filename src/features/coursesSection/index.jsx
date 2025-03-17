import './styles.css';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

import CoursesAvailable from './courseCardContainer';
import CourseDetails from './courseDetails';
import useFetch from '../../hooks/useFetch';
import { API_KEYS } from '../../config/apiConfig';

export default function CoursesSection() {
  let [activeCardCode, setActiveCardCode] = useState(null);
  const isDesktop = useMediaQuery({ minWidth: 750 });
  const { data: coursesList } = useFetch(API_KEYS.COURSES);

  return (
    <div className="coursesSection">
      <div className="bindTopCircles">
        {Array(isDesktop ? 14 : 5)
          .fill()
          .map((_, i) => (
            <div className="bindHoles" key={i}></div>
          ))}
      </div>
      <div className="coursesSectionContent">
        <div className="TextHeading">COURSES AVAILABLE</div>
        <CoursesAvailable
          activeCard={activeCardCode}
          setActiveCard={setActiveCardCode}
          courses={coursesList}
        />
        {activeCardCode !== null ? (
          <CourseDetails
            activeCard={activeCardCode}
            courses={[...coursesList]}
          />
        ) : null}
      </div>
    </div>
  );
}
