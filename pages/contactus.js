import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

export default function FormPage() {
  const [emailError, setEmailError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Clear previous email error
    setEmailError('');

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/contactpostblogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result.message);
      alert(result.message); // Display success message
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <div className="card mx-auto shadow-lg p-4" style={{ maxWidth: '600px' }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
            {emailError && <small className="text-danger">{emailError}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="form-control"
              rows="5"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
