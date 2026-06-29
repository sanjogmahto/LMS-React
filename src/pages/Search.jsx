import { useSearchParams, Link } from 'react-router-dom';
import { courses } from '../data.js';

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get('search_box') || '').trim().toLowerCase();

  const results = query
    ? courses.filter(
        (c) => c.title.toLowerCase().includes(query) || c.tutor.toLowerCase().includes(query)
      )
    : courses;

  return (
    <section className="courses">
      <h1 className="heading">{query ? `results for "${query}"` : 'all courses'}</h1>

      {results.length === 0 ? (
        <p style={{ fontSize: '1.8rem', color: 'var(--light-color)' }}>No courses matched your search.</p>
      ) : (
        <div className="box-container">
          {results.map((course) => (
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
      )}
    </section>
  );
}
