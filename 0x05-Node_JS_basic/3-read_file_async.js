const fs = require('fs');

/**
 * Counts the number of students in each field from the database file asynchronously.
 * @param {string} filepath - The path to the database file.
 * @returns {Promise<void>} A promise that resolves when the counting is done.
 */

function countStudents(filePath) {
  const promise = (resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) reject(Error('Cannot load the database'));
      const messages = [];
      let message;
      const content = data.toString().split('\n');
      let students = content.filter((item) => item);
      students = students.map((item) => item.split(','));
      const numStudents = students.length ? students.length - 1 : 0;
      message = `Number of students: ${numStudents}`;
      console.log(message);
      messages.push(message);
      const subjects = {};
      for (const i in students) {
        if (i !== 0) {
          if (!subjects[students[i][3]]) subjects[students[i][3]] = [];
          subjects[students[i][3]].push(students[i][0]);
        }
      }
      delete subjects.subject;
      for (const key of Object.keys(subjects)) {
        message = `Number of students in ${key}: ${
          subjects[key].length
        }. List: ${subjects[key].join(', ')}`;
        console.log(message);
        messages.push(message);
      }
      resolve(messages);
    });
  };
  return new Promise(promise);
}
module.exports = countStudents;
