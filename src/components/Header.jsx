import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useUI } from '../context/UIContext.jsx';
import { currentUser } from '../data.js';

export default function Header() {
  const {
    darkMode,
    toggleDarkMode,
    toggleSideBar,
    searchActive,
    toggleSearch,
    profileActive,
    toggleProfile,
  } = useUI();

  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // original form posted to search.html; we just navigate with a query param
    navigate(`/search?search_box=${encodeURIComponent(searchValue)}`);
  };

  return (
    <header className="header">
      <section className="flex">
        <Link to="/home" className="logo">
          Educa.
        </Link>

        <form onSubmit={handleSearchSubmit} className={`search-form ${searchActive ? 'active' : ''}`}>
          <input
            type="text"
            name="search_box"
            required
            placeholder="search courses..."
            maxLength={100}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button type="submit" className="fas fa-search"></button>
        </form>

        <div className="icons">
          <div id="menu-btn" className="fas fa-bars" onClick={toggleSideBar}></div>
          <div id="search-btn" className="fas fa-search" onClick={toggleSearch}></div>
          <div id="user-btn" className="fas fa-user" onClick={toggleProfile}></div>
          <div
            id="toggle-btn"
            className={`fas ${darkMode ? 'fa-moon' : 'fa-sun'}`}
            onClick={toggleDarkMode}
          ></div>
        </div>

        <div className={`profile ${profileActive ? 'active' : ''}`}>
          <img src={currentUser.image} className="image" alt="" />
          <h3 className="name">{currentUser.name}</h3>
          <p className="role">{currentUser.role}</p>
          <Link to="/profile" className="btn">
            view profile
          </Link>
          <div className="flex-btn">
            <Link to="/login" className="option-btn">
              login
            </Link>
            <Link to="/register" className="option-btn">
              register
            </Link>
          </div>
        </div>
      </section>
    </header>
  );
}
