const http = require('http');
const fs = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);

const app = http.createServer(async (req, res) => {
    res.setHeader('Content-Type', 'text/plain');

    if (req.url === '/') {
        res.end('Hello Holberton School!\n');
    } else if (req.url === '/students') {
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
            res.statusCode = 500;
            res.end('Internal Server Error');
        }
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

const PORT = 1245;
app.listen(PORT, () => {
    console.log(`Server is running and listening on port ${PORT}`);
});

module.exports = app;
