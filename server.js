const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Database setup
const db = new sqlite3.Database('recipes.db', (err) => {
    if (err) {
        console.error('Error opening database:', err);
    } else {
        console.log('Connected to the SQLite database.');
        createTables();
    }
});

function createTables() {
    db.run(`CREATE TABLE IF NOT EXISTS recipes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        ingredients TEXT NOT NULL,
        instructions TEXT NOT NULL,
        mood TEXT,
        time TEXT
    )`);
}

// Routes
app.get('/api/recipes/:type/:value', (req, res) => {
    const { type, value } = req.params;
    let query, params;

    if (type === 'mood') {
        query = 'SELECT * FROM recipes WHERE mood = ?';
        params = [value];
    } else if (type === 'time') {
        query = 'SELECT * FROM recipes WHERE time = ?';
        params = [value];
    } else {
        res.status(400).json({ error: 'Invalid recipe type' });
        return;
    }

    db.all(query, params, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (rows.length === 0) {
            res.status(404).json({ error: 'No recipes found' });
            return;
        }
        const randomRecipe = rows[Math.floor(Math.random() * rows.length)];
        res.json(randomRecipe);
    });
});

// New route to get all recipes
app.get('/api/recipes/all', (req, res) => {
    db.all('SELECT * FROM recipes', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve the recipes page
app.get('/recipes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'recipes.html'));
});

// Serve the header component
app.get('/header.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'header.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 