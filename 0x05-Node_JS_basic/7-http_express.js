const express = require('express');
const { promisify } = require('util');
const fs = require('fs');

// Promisify fs.readFile
const readFileAsync = promisify(fs.readFile);

// Create an Express application
const app = express();

// Define a route for the root path
app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

// Define a route for /students
app.get('/students', async (req, res) => {
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

        // Send the response
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
        res.status(500).send('Internal Server Error');
    }
});

// Set the server to listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
    console.log(`Server is running and listening on port ${PORT}`);
});

// Export the app for use in other modules
module.exports = app;