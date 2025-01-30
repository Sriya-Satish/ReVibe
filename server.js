const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files (e.g., CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Body parser to handle form submissions
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});

// Handle Sign Up and Login Routes
app.post('/signup', (req, res) => {
  // Handle user sign-up logic here (e.g., store in database)
});

app.post('/login', (req, res) => {
  // Handle user login logic here (e.g., validate credentials)
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});