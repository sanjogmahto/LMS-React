import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UpdateProfile() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    old_pass: '',
    new_pass: '',
    c_pass: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.new_pass && form.new_pass !== form.c_pass) {
      alert('New passwords do not match!');
      return;
    }
    alert('Profile updated (demo only — no backend connected)');
    navigate('/profile');
  };

  return (
    <section className="form-container">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <h3>update profile</h3>
        <p>update name</p>
        <input
          type="text"
          name="name"
          placeholder="sanjog kumar mahto"
          maxLength={50}
          className="box"
          value={form.name}
          onChange={handleChange}
        />
        <p>update email</p>
        <input
          type="email"
          name="email"
          placeholder="sanjog@gmail.com"
          maxLength={50}
          className="box"
          value={form.email}
          onChange={handleChange}
        />
        <p>previous password</p>
        <input
          type="password"
          name="old_pass"
          placeholder="enter your old password"
          maxLength={20}
          className="box"
          value={form.old_pass}
          onChange={handleChange}
        />
        <p>new password</p>
        <input
          type="password"
          name="new_pass"
          placeholder="enter your new password"
          maxLength={20}
          className="box"
          value={form.new_pass}
          onChange={handleChange}
        />
        <p>confirm password</p>
        <input
          type="password"
          name="c_pass"
          placeholder="confirm your new password"
          maxLength={20}
          className="box"
          value={form.c_pass}
          onChange={handleChange}
        />
        <p>update pic</p>
        <input type="file" accept="image/*" className="box" />
        <input type="submit" value="update profile" name="submit" className="btn" />
      </form>
    </section>
  );
}
