const express = require("express");
const path = require("path");
const app = express();
const port = 800;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded({ extended: true }))

// Serve HTML files directly from the views directory
app.use(express.static(path.join(__dirname, 'views')));


// ENDPOINTS
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get("/tech.html", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'tech.html'));
});
app.get("/university.html", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'university.html'));
});
app.get("/club.html", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'club.html'));
});


// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});
