import { Routes, Route, Navigate } from 'react-router-dom';
import { UIProvider } from './context/UIContext.jsx';
import Layout from './components/Layout.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Courses from './pages/Courses.jsx';
import Teachers from './pages/Teachers.jsx';
import TeacherProfile from './pages/TeacherProfile.jsx';
import Contact from './pages/Contact.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Profile from './pages/Profile.jsx';
import UpdateProfile from './pages/UpdateProfile.jsx';
import Playlist from './pages/Playlist.jsx';
import WatchVideo from './pages/WatchVideo.jsx';
import Search from './pages/Search.jsx';

export default function App() {
  return (
    <UIProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="teacher/:id" element={<TeacherProfile />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="update" element={<UpdateProfile />} />
          <Route path="playlist/:id" element={<Playlist />} />
          <Route path="watch/:videoId" element={<WatchVideo />} />
          <Route path="search" element={<Search />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Route>
      </Routes>
    </UIProvider>
  );
}
