import { Link } from 'react-router-dom';
import { courses } from '../data.js';

export default function Courses() {
  return (
    <section className="courses">
      <h1 className="heading">our courses</h1>

      <div className="box-container">
        {courses.map((course) => (
          <div className="box" key={course.id}>
            <div className="tutor">
              <img src={course.tutorImg} alt="" />
              <div className="info">
                <h3>{course.tutor}</h3>
                <span>{course.date}</span>
              </div>
            </div>
            <div className="thumb">
              <img src={course.thumb} alt="" />
              <span>10 videos</span>
            </div>
            <h3 className="title">{course.title}</h3>
            <Link to={course.playlist} className="inline-btn">
              view playlist
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
