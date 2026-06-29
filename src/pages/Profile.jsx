import { Link } from 'react-router-dom';
import { currentUser } from '../data.js';

const stats = [
  { icon: 'fa-bookmark', value: 4, label: 'saved playlist', cta: 'view playlists' },
  { icon: 'fa-heart', value: 33, label: 'videos liked', cta: 'view liked' },
  { icon: 'fa-comment', value: 12, label: 'videos comments', cta: 'view comments' },
];

export default function Profile() {
  return (
    <section className="user-profile">
      <h1 className="heading">your profile</h1>

      <div className="info">
        <div className="user">
          <img src={currentUser.image} alt="" />
          <h3>{currentUser.name}</h3>
          <p>{currentUser.role}</p>
          <Link to="/update" className="inline-btn">
            update profile
          </Link>
        </div>

        <div className="box-container">
          {stats.map((s) => (
            <div className="box" key={s.label}>
              <div className="flex">
                <i className={`fas ${s.icon}`}></i>
                <div>
                  <span>{s.value}</span>
                  <p>{s.label}</p>
                </div>
              </div>
              <a href="#" className="inline-btn">
                {s.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
