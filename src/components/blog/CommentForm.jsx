import { useState } from 'react';

export default function CommentForm() {
  const [form, setForm] = useState({ message: '', name: '', email: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const validate = () => {
    const e = {};
    if (!form.message.trim()) e.message = 'Message is required.';
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim()) e.email = 'Email is required.';
    else {
      // Improved email regex
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(form.email)) e.email = 'Enter a valid email.';
    }
    return e;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const eobj = validate();
    if (Object.keys(eobj).length) {
      setErrors(eobj);
      return;
    }

    setStatus('sending');

    try {
      console.log('Form Data:', form); // Replace with real API
      await new Promise((resolve) => setTimeout(resolve, 800));

      setStatus('success');
      setForm({ message: '', name: '', email: '' });
    } catch (err) {
      console.error('Comment submit failed:', err);
      setStatus('idle');
      setErrors({ submit: 'Failed to send. Please try again.' });
    }
  };

  return (
    <section className="comment_form_area" aria-labelledby="comment-heading">
      <h2 id="comment-heading" className="comment_form_heading">
        Leave a comment
      </h2>

      <form id="comment-form" className="comment_form" onSubmit={handleSubmit} noValidate>
        <div className="row">
          <div className="col-md-12">
            <label className="visually-hidden" htmlFor="comment-message">
              Message
            </label>
            <textarea
              id="comment-message"
              name="message"
              placeholder="Your message"
              value={form.message}
              onChange={handleChange}
              rows={6}
              aria-required="true"
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby={errors.message ? 'comment-message-error' : undefined}
              className={`form-control ${errors.message ? 'error' : ''}`}
            />
            {errors.message && (
              <div id="comment-message-error" className="mes_error" role="alert">
                {errors.message}
              </div>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <label className="visually-hidden" htmlFor="comment-name">
              Name
            </label>
            <input
              id="comment-name"
              name="name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'comment-name-error' : undefined}
              className={`form-control ${errors.name ? 'error' : ''}`}
              autoComplete="name"
            />
            {errors.name && (
              <div id="comment-name-error" className="mes_error" role="alert">
                {errors.name}
              </div>
            )}
          </div>

          <div className="col-md-6">
            <label className="visually-hidden" htmlFor="comment-email">
              Email
            </label>
            <input
              id="comment-email"
              name="email"
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'comment-email-error' : undefined}
              className={`form-control ${errors.email ? 'error' : ''}`}
              autoComplete="email"
            />
            {errors.email && (
              <div id="comment-email-error" className="mes_error" role="alert">
                {errors.email}
              </div>
            )}
          </div>
        </div>

        <div className="comment_btn">
          <button
            type="submit"
            className="tem_btn tem_btn_two"
            disabled={status === 'sending'}
            aria-busy={status === 'sending' ? 'true' : 'false'}
          >
            {status === 'sending' ? 'Sending...' : 'Submit'}
          </button>
          {errors.submit && (
            <div className="mes_error error_submit" role="alert">
              {errors.submit}
            </div>
          )}
          {status === 'success' && (
            <div className="mes_success" role="status">
              Thank you — Your comment has been submitted.
            </div>
          )}
        </div>
      </form>
    </section>
  );
}
