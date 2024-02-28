const { readFile } = require('fs');

function countStudents(databaseFile) {
  const studentsList = {};
  const fieldsCount = {};
  let studentCount = 0;
  return new Promise((resolve, reject) => {
    readFile(databaseFile, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            studentCount += 1;
            const field = lines[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(studentsList, field[3])) {
              studentsList[field[3]].push(field[0]);
            } else {
              studentsList[field[3]] = [field[0]];
            }
            if (Object.prototype.hasOwnProperty.call(fieldsCount, field[3])) {
              fieldsCount[field[3]] += 1;
            } else {
              fieldsCount[field[3]] = 1;
            }
          }
        }
        const totalStudents = studentCount - 1;
        console.log(`Number of students: ${totalStudents}`);
        for (const [key, value] of Object.entries(fieldsCount)) {
          if (key !== 'field') {
            console.log(`Number of students in ${key}: ${value}. List: ${studentsList[key].join(', ')}`);
          }
        }
        resolve(data);
      }
    });
  });
}

module.exports = countStudents;
