import { useState } from 'react';
import { submitContact } from '../../services/api';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitContact(form);
      setStatus('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('Error sending message.');
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="page-header"><h2>Contact Me</h2></div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Name" required
              value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email" required
              value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
          </div>
          <div className="mb-3">
            <textarea className="form-control" rows="4" placeholder="Message" required
              value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
          </div>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
        {status && <div className="alert alert-info mt-3">{status}</div>}
      </div>
    </div>
  );
};
export default Contact;

