import { useState } from 'react';
import { Link } from 'react-router-dom';
import { teachers } from '../data.js';

export default function Teachers() {
  const [query, setQuery] = useState('');

  const filtered = teachers.filter((t) =>
    t.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <section className="teachers">
      <h1 className="heading">expert teachers</h1>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="search-tutor"
      >
        <input
          type="text"
          name="search_box"
          placeholder="search tutors..."
          required
          maxLength={100}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="fas fa-search" name="search_tutor"></button>
      </form>

      <div className="box-container">
        <div className="box offer">
          <h3>become a tutor</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, itaque ipsam fuga ex et aliquam.</p>
          <Link to="/register" className="inline-btn">
            get started
          </Link>
        </div>

        {filtered.map((t) => (
          <div className="box" key={t.id}>
            <div className="tutor">
              <img src={t.img} alt="" />
              <div>
                <h3>{t.name}</h3>
                <span>{t.role}</span>
              </div>
            </div>
            <p>
              total playlists : <span>{t.playlists}</span>
            </p>
            <p>
              total videos : <span>{t.videos}</span>
            </p>
            <p>
              total likes : <span>{t.likes}</span>
            </p>
            <Link to={`/teacher/${t.id}`} className="inline-btn">
              view profile
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
