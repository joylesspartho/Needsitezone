import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false); // loading state add 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // spinner start

    // Admin message
    emailjs.send(
      'service_jwu5o5d',        // EmailJS service ID
      'template_admin',              // Admin template ID
      formData,                      // {name, email, message}
      'ylJxLrn8phBAyNMLq'            // EmailJS public key/User ID
    ).then(
      (result) => {
        console.log('Admin:', result.text);
      },
      (error) => {
        console.log('Admin Error:', error.text);
      }
    );

    // User confirmation
    emailjs.send(
      'service_jwu5o5d',        // EmailJS service ID
      'template_users',               // User template ID
      {
        to_name: formData.name,
        to_email: formData.email,
        message: '' 
      },
      'ylJxLrn8phBAyNMLq'           // EmailJS public key/User ID
    ).then(
      (result) => {
        console.log('User:', result.text);
        alert('Message sent! Check your email.');
        setFormData({ name: '', email: '', message: '' });
        setLoading(false); // spinner stop
      },
      (error) => {
        console.log('User Error:', error.text);
        alert('Error sending message!');
        setLoading(false); // spinner stop
      }
    );
  };

  return (
    <section id="contact" className="pb-5">
      <div className="container">
        <h2 className="text-center mb-4">Contact Us</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="4"
                  className="form-control"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary mt-2" disabled={loading}>
                {loading ? (
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
