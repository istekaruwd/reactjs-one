import { useState } from 'react';

export default function Newsletter({ className = '', onSubmit }) {
  const [email, setEmail] = useState('');
  const [touched, setTouched] = useState(false);
  const [loading, setLoading] = useState(false);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  async function handleSubmit(e) {
    e.preventDefault();
    setTouched(true);
    if (!emailValid) return;

    try {
      setLoading(true);
      if (typeof onSubmit === 'function') {
        await onSubmit(email.trim()); // parent handles API call
      }
      // reset form after success
      setEmail('');
      setTouched(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      className={`footer_newsletter ${className}`}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Newsletter signup"
    >
      <div className="footer_newsletter_controls">
        <input
          type="email"
          name="email"
          className={`footer_newsletter_input ${touched && !emailValid ? 'is-invalid' : ''}`}
          placeholder="Enter Email Address"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched(true)}
          aria-label="Enter your email address"
          required
        />
        <button
          type="submit"
          className="footer_newsletter_button"
          disabled={loading || !emailValid}
          aria-disabled={loading || !emailValid}
        >
          <i
            className={loading ? 'fa-solid fa-spinner' : 'fa-solid fa-paper-plane'}
            aria-hidden="true"
          ></i>
        </button>
      </div>

      {touched && !emailValid && (
        <p className="footer_newsletter_error" role="alert">
          Please enter a valid email address.
        </p>
      )}
    </form>
  );
}
