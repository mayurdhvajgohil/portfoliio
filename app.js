const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 7100;

// Connect to MongoDB (replace 'your-database-url' with your actual MongoDB connection string)
// mongoose.connect('mongodb://your-database-url/portfolio')
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.error('Error connecting to MongoDB', err));

// Set up middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Set up EJS as the view engine
app.set('view engine', 'ejs');

// Define routes
app.get('/', (req, res) => {
    res.render('home',{
        title:"main page"
    });
});

app.get('/projects', (req, res) => {
    // Fetch projects from MongoDB and pass them to the view
    res.render('projects', { projects: [] });
});

app.get('/contact', (req, res) => {
    res.render('contact');
});
app.get('/about', (req, res) => {
    res.render('about');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
