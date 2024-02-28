const fs = require('fs');

/**
 * Counts the number of students in each field from the database file asynchronously.
 * @param {string} filePath - The path to the database file.
 * @returns {Promise<void>} A promise that resolves when the counting is done.
 */
function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        reject(new Error(`Cannot load the database: ${error.message}`));
        return;
      }

      const lines = data.trim().split('\n');
      const students = lines.slice(1).map(line => line.split(','));
      const numStudents = students.length;
      console.log(`Number of students: ${numStudents}`);

      const subjects = {};
      students.forEach(student => {
        const field = student[3];
        if (!subjects[field]) subjects[field] = [];
        subjects[field].push(student[0]);
      });

      Object.keys(subjects).forEach(field => {
        console.log(`Number of students in ${field}: ${subjects[field].length}. List: ${subjects[field].join(', ')}`);
      });

      resolve();
    });
  });
}

module.exports = countStudents;