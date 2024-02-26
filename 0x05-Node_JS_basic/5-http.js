// 5-http.js

const http = require('http');
const fs = require('fs');
const { promisify } = require('util');

// Promisify fs.readFile
const readFileAsync = promisify(fs.readFile);

// Create an HTTP server
const app = http.createServer(async (req, res) => {
    // Set the response header to plain text
    res.setHeader('Content-Type', 'text/plain');

    // Check the URL path
    if (req.url === '/') {
        // Send "Hello Holberton School!" for the root path
        res.end('Hello Holberton School!\n');
    } else if (req.url === '/students') {
        try {
            // Read the database file asynchronously
            const data = await readFileAsync(process.argv[2], 'utf8');

            // Split the data into lines and filter out empty lines
            const lines = data.split('\n').filter(line => line.trim() !== '');

            // Initialize counters for each field
            const fieldCounts = {};

            // Iterate over each line to count students in each field
            lines.forEach(line => {
                const [, , field] = line.split(',');
                if (fieldCounts[field]) {
                    fieldCounts[field]++;
                } else {
                    fieldCounts[field] = 1;
                }
            });

            // Log the total number of students
            res.write('This is the list of our students\n');
            res.write(`Number of students: ${lines.length}\n`);

            // Log the number of students in each field
            for (const field in fieldCounts) {
                res.write(`Number of students in ${field}: ${fieldCounts[field]}\n`);
            }

            // End the response
            res.end();
        } catch (error) {
            // Handle errors if the database file is not available
            res.statusCode = 500;
            res.end('Internal Server Error');
        }
    } else {
        // If the URL path is not recognized, return 404 Not Found
        res.statusCode = 404;
        res.end('Not Found');
    }
});

// Set the server to listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
    console.log(`Server is running and listening on port ${PORT}`);
});

// Export the app for use in other modules
module.exports = app;
