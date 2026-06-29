import { useParams, Link } from 'react-router-dom';
import { teachers } from '../data.js';

const teacherCourses = [
  { thumb: 'images/thumb-1.png', title: 'complete HTML tutorial', playlist: '/playlist/html' },
  { thumb: 'images/thumb-2.png', title: 'complete CSS tutorial', playlist: '/playlist/css' },
  { thumb: 'images/thumb-3.png', title: 'complete javascript tutorial', playlist: '/playlist/js' },
  { thumb: 'images/thumb-4.png', title: 'complete Boostrap tutorial', playlist: '/playlist/html' },
];

export default function TeacherProfile() {
  const { id } = useParams();
  const teacher = teachers.find((t) => t.id === id) ?? {
    name: 'Akash',
    img: 'images/pic-2.jpg',
    role: 'developer',
    playlists: 4,
    videos: 18,
    likes: 1208,
  };
  const comments = 52;

  return (
    <>
      <section className="teacher-profile">
        <h1 className="heading">profile details</h1>

        <div className="details">
          <div className="tutor">
            <img src={teacher.img} alt="" />
            <h3>{teacher.name}</h3>
            <span>{teacher.role}</span>
          </div>
          <div className="flex">
            <p>
              total playlists : <span>{teacher.playlists}</span>
            </p>
            <p>
              total videos : <span>{teacher.videos}</span>
            </p>
            <p>
              total likes : <span>{teacher.likes}</span>
            </p>
            <p>
              total comments : <span>{comments}</span>
            </p>
          </div>
        </div>
      </section>

      <section className="courses">
        <h1 className="heading">our courses</h1>

        <div className="box-container">
          {teacherCourses.map((c) => (
            <div className="box" key={c.title}>
              <div className="thumb">
                <img src={c.thumb} alt="" />
                <span>10 videos</span>
              </div>
              <h3 className="title">{c.title}</h3>
              <Link to={c.playlist} className="inline-btn">
                view playlist
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
