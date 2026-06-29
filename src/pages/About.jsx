import { Link } from 'react-router-dom';
import { reviews } from '../data.js';

const stats = [
  { icon: 'fa-graduation-cap', value: '+10k', label: 'online courses' },
  { icon: 'fa-user-graduate', value: '+40k', label: 'brilliant students' },
  { icon: 'fa-chalkboard-user', value: '+2k', label: 'expert tutors' },
  { icon: 'fa-briefcase', value: '100%', label: 'job placement' },
];

export default function About() {
  return (
    <>
      <section className="about">
        <div className="row">
          <div className="image">
            <img src="images/about-img.svg" alt="" />
          </div>

          <div className="content">
            <h3>why choose us?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut dolorum quasi illo? Distinctio
              expedita commodi, nemo a quam error repellendus sint, fugiat quis numquam eum eveniet sequi
              aspernatur quaerat tenetur.
            </p>
            <Link to="/courses" className="inline-btn">
              our courses
            </Link>
          </div>
        </div>

        <div className="box-container">
          {stats.map((s) => (
            <div className="box" key={s.label}>
              <i className={`fas ${s.icon}`}></i>
              <div>
                <h3>{s.value}</h3>
                <p>{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="reviews">
        <h1 className="heading">student's reviews</h1>

        <div className="box-container">
          {reviews.map((r) => (
            <div className="box" key={r.id}>
              <p>{r.text}</p>
              <div className="student">
                <img src={r.img} alt="" />
                <div>
                  <h3>{r.name}</h3>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
