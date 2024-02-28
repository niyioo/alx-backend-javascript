const http = require('http');
const { readFile } = require('fs');

const serverAddress = '127.0.0.1';
const serverPort = 1245;

function countStudents(databaseFile) {
  const students = {};
  const fields = {};
  let studentCount = 0;
  return new Promise((resolve, reject) => {
    readFile(databaseFile, (err, data) => {
      if (err) {
        reject(err);
      } else {
        let output = '';
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            studentCount += 1;
            const field = lines[i].toString().split(',');
            if (students[field[3]]) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
            if (fields[field[3]]) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }
        const totalStudents = studentCount - 1;
        output += `Number of students: ${totalStudents}\n`;
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            output += `Number of students in ${key}: ${value}. `;
            output += `List: ${students[key].join(', ')}\n`;
          }
        }
        resolve(output);
      }
    });
  });
}

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  if (request.url === '/') {
    response.write('Hello Holberton School!');
    response.end();
  }
  if (request.url === '/students') {
    response.write('This is the list of our students\n');
    countStudents(process.argv[2].toString()).then((output) => {
      const formattedOutput = output.slice(0, -1);
      response.end(formattedOutput);
    }).catch(() => {
      response.statusCode = 404;
      response.end('Cannot load the database');
    });
  }
});

server.listen(serverPort, serverAddress);

module.exports = server;
