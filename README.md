# Mood-Based Recipe Finder

A simple web application that recommends recipes based on your current mood.

## Features

- Select from four different moods: Happy, Energetic, Comfort, and Adventurous
- Get a random recipe recommendation based on your mood
- Option to request a new recipe if you don't like the current one
- Clean and modern UI with Tailwind CSS

## Setup

1. Install dependencies:
```bash
npm install
```

2. Populate the database with initial recipes:
```bash
node populate-db.js
```

3. Start the server:
```bash
node server.js
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Technologies Used

- Express.js (Backend)
- SQLite (Database)
- HTML/CSS/JavaScript (Frontend)
- Tailwind CSS (Styling)

## Project Structure

- `server.js` - Express server and API endpoints
- `public/` - Frontend files
  - `index.html` - Main page
  - `script.js` - Frontend JavaScript
  - `styles.css` - Additional styles
- `populate-db.js` - Script to populate the database with initial recipes
- `recipes.db` - SQLite database file (created after running populate-db.js) 