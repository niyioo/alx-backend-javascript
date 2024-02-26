const express = require('express');

// Create an Express application
const app = express();

// Define a route for the root path
app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

// Define a route for handling undefined routes
app.use((req, res) => {
    res.status(404).send('<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Error</title></head><body><pre>Cannot GET ' + req.url + '</pre></body></html>');
});

// Set the server to listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
    console.log(`Server is running and listening on port ${PORT}`);
});

// Export the app for use in other modules
module.exports = app;