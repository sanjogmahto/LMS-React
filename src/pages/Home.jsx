import { Link } from 'react-router-dom';
import { homeCourses } from '../data.js';

const categories = [
  { icon: 'fa-code', label: 'development' },
  { icon: 'fa-chart-simple', label: 'business' },
  { icon: 'fa-pen', label: 'design' },
  { icon: 'fa-chart-line', label: 'marketing' },
  { icon: 'fa-music', label: 'music' },
  { icon: 'fa-camera', label: 'photography' },
  { icon: 'fa-cog', label: 'software' },
  { icon: 'fa-vial', label: 'science' },
];

const topics = [
  { icon: 'fab fa-html5', label: 'HTML' },
  { icon: 'fab fa-css3', label: 'CSS' },
  { icon: 'fab fa-js', label: 'javascript' },
  { icon: 'fab fa-react', label: 'react' },
  { icon: 'fab fa-php', label: 'PHP' },
  { icon: 'fab fa-bootstrap', label: 'bootstrap' },
];

export default function Home() {
  return (
    <>
      <section className="home-grid">
        <h1 className="heading">quick options</h1>

        <div className="box-container">
          <div className="box">
            <h3 className="title">likes and comments</h3>
            <p className="likes">
              total likes : <span>25</span>
            </p>
            <a href="#" className="inline-btn">
              view likes
            </a>
            <p className="likes">
              total comments : <span>12</span>
            </p>
            <a href="#" className="inline-btn">
              view comments
            </a>
            <p className="likes">
              saved playlists : <span>4</span>
            </p>
            <a href="#" className="inline-btn">
              view playlists
            </a>
          </div>

          <div className="box">
            <h3 className="title">top categories</h3>
            <div className="flex">
              {categories.map((c) => (
                <a href="#" key={c.label}>
                  <i className={`fas ${c.icon}`}></i>
                  <span>{c.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="box">
            <h3 className="title">popular topics</h3>
            <div className="flex">
              {topics.map((t) => (
                <a href="#" key={t.label}>
                  <i className={t.icon}></i>
                  <span>{t.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="box">
            <h3 className="title">become a tutor</h3>
            <p className="tutor">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, nam?</p>
            <Link to="/teachers" className="inline-btn">
              get started
            </Link>
          </div>
        </div>
      </section>

      <section className="courses">
        <h1 className="heading">our courses</h1>

        <div className="box-container">
          {homeCourses.map((course) => (
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

        <div className="more-btn">
          <Link to="/courses" className="inline-option-btn">
            view all courses
          </Link>
        </div>
      </section>
    </>
  );
}
