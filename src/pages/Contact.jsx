import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', number: '', msg: '' });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend in this frontend-only project — original form had no action either.
    alert('Message sent! (demo only — no backend connected)');
    setForm({ name: '', email: '', number: '', msg: '' });
  };

  return (
    <section className="contact">
      <div className="row">
        <div className="image">
          <img src="images/contact-img.svg" alt="" />
        </div>

        <form onSubmit={handleSubmit}>
          <h3>get in touch</h3>
          <input
            type="text"
            placeholder="enter your name"
            name="name"
            required
            maxLength={50}
            className="box"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="enter your email"
            name="email"
            required
            maxLength={50}
            className="box"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="enter your number"
            name="number"
            required
            maxLength={50}
            className="box"
            value={form.number}
            onChange={handleChange}
          />
          <textarea
            name="msg"
            className="box"
            placeholder="enter your message"
            required
            maxLength={1000}
            cols={30}
            rows={10}
            value={form.msg}
            onChange={handleChange}
          ></textarea>
          <input type="submit" value="send message" className="inline-btn" name="submit" />
        </form>
      </div>

      <div className="box-container">
        <div className="box">
          <i className="fas fa-phone"></i>
          <h3>phone number</h3>
          <a href="tel:1234567890">123-456-7890</a>
          <a href="tel:1112223333">111-222-3333</a>
        </div>

        <div className="box">
          <i className="fas fa-envelope"></i>
          <h3>email address</h3>
          <a href="mailto:sanjog@gmail.com">sanjog@gmail.com</a>
          <a href="mailto:adityabhai@gmail.com">adityabhai@gmail.com</a>
        </div>

        <div className="box">
          <i className="fas fa-map-marker-alt"></i>
          <h3>office address</h3>
          <a href="#">flat no. 1, a-1 building, jogeshwari, mumbai, india - 400104</a>
        </div>
      </div>
    </section>
  );
}
