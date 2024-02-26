const http = require('http');

// Create an HTTP server
const app = http.createServer((req, res) => {
    // Set the response header to plain text
    res.setHeader('Content-Type', 'text/plain');

    // Send the response body
    res.end('Hello Holberton School!\n');
});

// Set the server to listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
    console.log(`Server is running and listening on port ${PORT}`);
});

// Export the app for use in other modules
module.exports = app;