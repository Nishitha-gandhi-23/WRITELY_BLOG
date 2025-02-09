const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./conn');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Create a blog post
app.post('/api/blogs', (req, res) => {
    const { title, content } = req.body;
    const sql = 'INSERT INTO blogs (title, content) VALUES (?, ?)';
    db.query(sql, [title, content], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Blog created successfully', id: result.insertId });
    });
});

// Get all blog posts
app.get('/api/blogs', (req, res) => {
    db.query('SELECT * FROM blogs', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Get a single blog post
app.get('/api/blogs/:id', (req, res) => {
    const sql = 'SELECT * FROM blogs WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.length === 0) return res.status(404).json({ message: 'Blog not found' });
        res.json(result[0]);
    });
});

// Update a blog post
app.put('/api/blogs/:id', (req, res) => {
    const { title, content } = req.body;
    const sql = 'UPDATE blogs SET title = ?, content = ? WHERE id = ?';
    db.query(sql, [title, content, req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Blog updated successfully' });
    });
});

// Delete a blog post
app.delete('/api/blogs/:id', (req, res) => {
    const sql = 'DELETE FROM blogs WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Blog deleted successfully' });
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
