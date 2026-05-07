import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { getContacts } from '../../services/api';

const ContactsList = () => {
  const [contacts, setContacts] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getContacts(token);
        setContacts(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [token]);

  return (
    <div>
      <div className="page-header"><h2>Contact Messages</h2></div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(msg => (
            <tr key={msg.id}>
              <td>{msg.name}</td>
              <td>{msg.email}</td>
              <td>{msg.message}</td>
              <td>{new Date(msg.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ContactsList;

