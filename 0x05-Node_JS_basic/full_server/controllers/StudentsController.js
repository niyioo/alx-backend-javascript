const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2].toString()).then((studentRecords) => {
      const output = [];
      output.push('This is the list of our students');
      const fields = Object.keys(studentRecords);
      fields.sort();
      for (let i = 0; i < fields.length; i += 1) {
        output.push(`Number of students in ${fields[i]}: ${studentRecords[fields[i]].length}. List: ${studentRecords[fields[i]].join(', ')}`);
      }
      response.status(200).send(output.join('\n'));
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response) {
    const major = request.params.major;
    readDatabase(process.argv[2].toString()).then((studentRecords) => {
      if (!(major in studentRecords)) {
        response.status(500).send('Major parameter must be CS or SWE');
      } else {
        response.status(200).send(`List: ${studentRecords[major].join(', ')}`);
      }
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }
}

module.exports = StudentsController;
