const { readFile } = require('fs');

module.exports = function readDatabase(filePath) {
  const studentRecords = {};
  return new Promise((resolve, reject) => {
    readFile(filePath, (error, data) => {
      if (error) {
        reject(error);
      } else {
        const lines = data.toString().split('\n');
        const recordsWithoutHeader = lines.slice(1);
        for (let i = 0; i < recordsWithoutHeader.length; i += 1) {
          if (recordsWithoutHeader[i]) {
            const fields = recordsWithoutHeader[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(studentRecords, fields[3])) {
              studentRecords[fields[3]].push(fields[0]);
            } else {
              studentRecords[fields[3]] = [fields[0]];
            }
          }
        }
        resolve(studentRecords);
      }
    });
  });
};
