import { Link } from 'react-router-dom';
import { useUI } from '../context/UIContext.jsx';
import { currentUser } from '../data.js';

const navLinks = [
  { to: '/home', icon: 'fa-home', label: 'home' },
  { to: '/about', icon: 'fa-question', label: 'about' },
  { to: '/courses', icon: 'fa-graduation-cap', label: 'courses' },
  { to: '/teachers', icon: 'fa-chalkboard-user', label: 'teachers' },
  { to: '/contact', icon: 'fa-headset', label: 'contact us' },
];

export default function Sidebar() {
  const { sideBarActive, closeSideBar } = useUI();

  return (
    <div className={`side-bar ${sideBarActive ? 'active' : ''}`}>
      <div id="close-btn" onClick={closeSideBar}>
        <i className="fas fa-times"></i>
      </div>

      <div className="profile">
        <img src={currentUser.image} className="image" alt="" />
        <h3 className="name">{currentUser.name}</h3>
        <p className="role">{currentUser.role}</p>
        <Link to="/profile" className="btn">
          view profile
        </Link>
      </div>

      <nav className="navbar">
        {navLinks.map((link) => (
          <Link key={link.to} to={link.to}>
            <i className={`fas ${link.icon}`}></i>
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
