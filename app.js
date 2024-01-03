const express = require('express');
const mongoose = require('mongoose');
const app = express();
// 
// Connect to MongoDB (replace 'your-database-url' with your actual MongoDB connection string)
const port = process.env.port || 7100
 const bodyparser = require("body-parser")
 mongoose
 .connect('mongodb://127.0.0.1:27017/portfolio',{family:4})
 .then(() => {
     console.log('Connected to Mongo at :' +port);
 })
 .catch((err) => {
     console.error('Error connecting to Mongo', err);
 });


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
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
