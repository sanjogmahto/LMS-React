import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ email: '', pass: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend connected in this frontend-only project.
    alert('Login submitted (demo only — no backend connected)');
    navigate('/home');
  };

  return (
    <section className="form-container">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <h3>login now</h3>
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
        <input type="submit" value="login new" name="submit" className="btn" />
      </form>
    </section>
  );
}
