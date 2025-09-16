import { useState } from 'react';

export default function ContactForm({
  actionUrl = '/api/contact',
  method = 'POST',
  buttonText = 'Submit',
  onSuccess,
  onError,
}) {
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setStatus({ type: 'loading', message: 'Sending...' });
      const res = await fetch(actionUrl, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error(`Request failed: ${res.status}`);

      setStatus({ type: 'success', message: 'Your message has been sent successfully!' });
      setForm({ name: '', email: '', phone: '', message: '' });
      onSuccess?.();
    } catch (err) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
      onError?.(String(err));
    }
  }

  return (
    <form className="contact_form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Full Name"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email Address"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              className="form-control"
              type="tel"
              name="phone"
              placeholder="Phone Number"
              autoComplete="tel"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <textarea
              className="form-control"
              name="message"
              rows="5"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>
      </div>

      {status.message && <p className={`form_status ${status.type}`}>{status.message}</p>}

      <div className="contact_btn">
        <button type="submit" className="tem_btn tem_btn_two" disabled={status.type === 'loading'}>
          {status.type === 'loading' ? 'Sending...' : buttonText}
        </button>
      </div>
    </form>
  );
}
