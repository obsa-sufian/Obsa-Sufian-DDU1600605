const db = require('../config/db');
module.exports = {
  create: async ({ name, email, message }) => {
    const [result] = await db.execute(
      'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)',
      [name, email, message]
    );
    return result;
  },
  findAll: async () => {
    const [rows] = await db.query('SELECT * FROM contacts ORDER BY created_at DESC');
    return rows;
  }
};

