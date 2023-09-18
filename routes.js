const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const router = express.Router();

// Connect to the SQLite database
const db = new sqlite3.Database('./database/persons.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message);
});

function isString(value) {
  return typeof value === 'string';
}

// Create the persons table 
db.run(`
CREATE TABLE IF NOT EXISTS persons (
    id INTEGER PRIMARY KEY,
    name TEXT,
    value INTEGER
    )
`);
    
// READ details of person by ID or all records 
router.get('/:user_id', (req, res) => {
    const id = req.params.user_id;

    if (id) {
      // If an ID is provided, retrieve one person by ID
      db.get('SELECT * FROM persons WHERE id = ?', [id], (err, row) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        if (!row) {
          return res.status(404).json({ message: 'Person not found' });
        }
        res.json(row);
      });
    } 
});

// CREATE a new person
router.post('/', (req, res) => {
  const { name, value } = req.body;

  // Validate name as a string
  if (!isString(name)) {
    return res.status(400).json({ error: 'Name should be a string for new record' });
  }
  // Validate value as an integer (you can add more validation as needed)
  if (value !== undefined && !Number.isInteger(value)) {
    return res.status(400).json({ error: 'value should be an integer for new record' });
  }

  db.run('INSERT INTO persons (name, value) VALUES (?, ?)', [name, value], function (err, row) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    const insertedId = this.lastID;

    db.get('SELECT * FROM persons WHERE id = ?', [insertedId], (err, row) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (!row) {
        return res.status(404).json({ message: 'Person not found' });
      }
      return res.json(row);
    });
  });
});

// UPDATE details of an existing person by ID
router.put('/:user_id', (req, res) => {
  const id = req.params.user_id;
  const { name, value } = req.body;

  // Validate name as a string
  if (!isString(name)) {
      return res.status(400).json({ error: 'Name should be a string for record update' });
  }
  // Validate value as an integer
  if (!Number.isInteger(value)) {
      return res.status(400).json({ error: 'value should be an integer for record update' });
  }
  db.run('UPDATE persons SET name = ?, value = ? WHERE id = ?', [name, value, id], function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      return res.json({ message: name + "updated successfully"});
      });
});

// DELETE a person by ID
router.delete('/:user_id', (req, res) => {
  const id = req.params.user_id;

  db.get('SELECT * FROM persons WHERE id = ?', [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!row) {
      return res.status(404).json({ message: 'Person not found' });
    }

    db.run('DELETE FROM persons WHERE id = ?', [id], (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      return res.json({ message: 'Person deleted successfully', user: row });
    });
  });
});

module.exports = router;