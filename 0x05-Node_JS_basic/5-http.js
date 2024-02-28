const http = require('http');
const fetchStudentCount = require('./3-read_file_async');

const server = http.createServer(async (request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  if (request.url === '/') {
    response.write('Hello Holberton School!');
  }
  if (request.url === '/students') {
    response.write('This is the list of our students\n');
    try {
      const data = await fetchStudentCount(process.argv[2]);
      response.end(`${data.join('\n')}`);
    } catch (error) {
      response.end(error.message);
    }
  }
  response.end();
});

server.listen(1245);
module.exports = server;
