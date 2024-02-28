const http = require('http');

const app = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');

    res.end('Hello Holberton School!\n');
});

const PORT = 1245;
app.listen(PORT, () => {
    console.log(`Server is running and listening on port ${PORT}`);
});

module.exports = app;