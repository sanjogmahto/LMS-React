import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', pass: '', c_pass: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.pass !== form.c_pass) {
      alert('Passwords do not match!');
      return;
    }
    alert('Registration submitted (demo only — no backend connected)');
    navigate('/home');
  };

  return (
    <section className="form-container">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <h3>register now</h3>
        <p>
          your name <span>*</span>
        </p>
        <input
          type="text"
          name="name"
          placeholder="enter your name"
          required
          maxLength={50}
          className="box"
          value={form.name}
          onChange={handleChange}
        />
        <p>
          your email <span>*</span>
        </p>
        <input
          type="email"
          name="email"
          placeholder="enter your email"
          required
          maxLength={50}
          className="box"
          value={form.email}
          onChange={handleChange}
        />
        <p>
          your password <span>*</span>
        </p>
        <input
          type="password"
          name="pass"
          placeholder="enter your password"
          required
          maxLength={20}
          className="box"
          value={form.pass}
          onChange={handleChange}
        />
        <p>
          confirm password <span>*</span>
        </p>
        <input
          type="password"
          name="c_pass"
          placeholder="confirm your password"
          required
          maxLength={20}
          className="box"
          value={form.c_pass}
          onChange={handleChange}
        />
        <p>
          select profile <span>*</span>
        </p>
        <input type="file" accept="image/*" required className="box" />
        <input type="submit" value="register new" name="submit" className="btn" />
      </form>
    </section>
  );
}
