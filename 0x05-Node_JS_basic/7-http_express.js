const express = require('express');
const { promisify } = require('util');
const fs = require('fs');

const readFileAsync = promisify(fs.readFile);

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
    try {
        const data = await readFileAsync(process.argv[2], 'utf8');

        const lines = data.split('\n').filter(line => line.trim() !== '');

        const fieldCounts = {};

        lines.forEach(line => {
            const [, , field] = line.split(',');
            if (fieldCounts[field]) {
                fieldCounts[field]++;
            } else {
                fieldCounts[field] = 1;
            }
        });

        res.write('This is the list of our students\n');
        res.write(`Number of students: ${lines.length}\n`);

        for (const field in fieldCounts) {
            res.write(`Number of students in ${field}: ${fieldCounts[field]}\n`);
        }

        res.end();
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

const PORT = 1245;
app.listen(PORT, () => {
    console.log(`Server is running and listening on port ${PORT}`);
});

module.exports = app;