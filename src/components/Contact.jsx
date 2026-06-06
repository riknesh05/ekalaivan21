import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.target);
    formData.append("access_key", "YOUR_WEB3FORMS_KEY");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        e.target.reset();
      } else {
        console.error("Error", data);
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-bg-container">
        <div className="contact-overlay"></div>
        <img src="/images/ekalaivan-performing-stage.jpg" alt="Ekalaivan on stage" className="contact-bg" />
      </div>

      <div className="container contact-container reveal">
        <h2 className="section-title">BOOK & COLLAB</h2>
        <p className="contact-subtitle">Bookings &middot; Features &middot; Press</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" name="name" required placeholder="YOUR NAME" className="form-control" />
          </div>
          <div className="form-group">
            <input type="email" name="email" required placeholder="EMAIL ADDRESS" className="form-control" />
          </div>
          <div className="form-group">
            <select name="purpose" required className="form-control" defaultValue="">
              <option value="" disabled>SELECT PURPOSE</option>
              <option value="Live Booking">Live Booking</option>
              <option value="Collaboration">Collaboration</option>
              <option value="Press">Press</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <textarea name="message" required placeholder="YOUR MESSAGE" rows="5" className="form-control"></textarea>
          </div>
          
          <button type="submit" className="btn btn-primary form-submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'}
          </button>

          {status === 'success' && (
            <div className="form-msg success">Message sent successfully. We'll be in touch.</div>
          )}
          {status === 'error' && (
            <div className="form-msg error">Something went wrong. Please try again.</div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
