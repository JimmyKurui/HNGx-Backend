const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const router = express.Router();

// Connect to the SQLite database
const db = new sqlite3.Database('./db/database.sqlite');

function isString(value) {
  return typeof value === 'string';
}

// Create the persons table if it doesn't exist
db.run(`
CREATE TABLE IF NOT EXISTS persons (
    id INTEGER PRIMARY KEY,
    name TEXT,
    age INTEGER
    )
`);
    
// READ details of a person by ID
router.get('/:id', (req, res) => {
    const id = req.params.id;
    db.get('SELECT * FROM persons WHERE id = ?', [id], (err, row) => {
    if (err) {
        return res.status(500).json({ error: err.message });
    }
    if (!row) {
        return res.status(404).json({ message: 'Person not found' });
    }
    res.json(row);
    });
});

// CREATE a new person
router.post('/', (req, res) => {
  const { name, age } = req.body;

  // Validate name as a string
  if (!isString(name)) {
    return res.status(400).json({ error: 'Name should be a string' });
  }

  // Validate age as an integer (you can add more validation as needed)
  if (age !== undefined && !Number.isInteger(age)) {
    return res.status(400).json({ error: 'Age should be an integer' });
  }

  db.run('INSERT INTO persons (name, age) VALUES (?, ?)', [name, age], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: this.lastID });
  });
});

// UPDATE details of an existing person by ID
router.put('/:id', (req, res) => {
const id = req.params.id;
const { name, age } = req.body;

// Validate name as a string
if (!isString(name)) {
    return res.status(400).json({ error: 'Name should be a string' });
}
// Validate age as an integer
if (!Number.isInteger(age)) {
    return res.status(400).json({ error: 'Age should be an integer' });
}
db.run('UPDATE persons SET name = ?, age = ? WHERE id = ?', [name, age, id], function (err) {
    if (err) {
    return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Person updated successfully' });
    });
});

// DELETE a person by ID
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  db.run('DELETE FROM persons WHERE id = ?', [id], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Person deleted successfully' });
  });
});

module.exports = router;