import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { playlists } from '../data.js';

export default function Playlist() {
  const { id } = useParams();
  const playlist = playlists[id] ?? playlists.html;
  const [saved, setSaved] = useState(false);

  return (
    <>
      <section className="playlist-details">
        <h1 className="heading">playlist details</h1>

        <div className="row">
          <div className="column">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSaved((s) => !s);
              }}
              className="save-playlist"
            >
              <button type="submit">
                <i className={saved ? 'fas fa-bookmark' : 'far fa-bookmark'}></i>{' '}
                <span>{saved ? 'playlist saved' : 'save playlist'}</span>
              </button>
            </form>

            <div className="thumb">
              <img src={playlist.thumb} alt="" />
              <span>10 videos</span>
            </div>
          </div>
          <div className="column">
            <div className="tutor">
              <img src={playlist.tutorImg} alt="" />
              <div>
                <h3>{playlist.tutor}</h3>
                <span>{playlist.date}</span>
              </div>
            </div>

            <div className="details">
              <h3>{playlist.title}</h3>
              <p>{playlist.description}</p>
              <Link to="/teacher/deepika" className="inline-btn">
                view profile
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="playlist-videos">
        <h1 className="heading">playlist videos</h1>

        <div className="box-container">
          {playlist.videos.map((v) => (
            <Link className="box" to={`/watch/${v.id}`} key={v.id}>
              <i className="fas fa-play"></i>
              <img src={v.thumb} alt="" />
              <h3>{v.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
