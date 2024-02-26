const { readDatabase } = require('../utils');

class StudentsController {
    static async getAllStudents(req, res) {
        try {
            const students = await readDatabase(process.argv[2]);
            res.status(200).send('This is the list of our students\n' + JSON.stringify(students));
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const { major } = req.params;
        if (major !== 'CS' && major !== 'SWE') {
            return res.status(500).send('Major parameter must be CS or SWE');
        }

        try {
            const students = await readDatabase(process.argv[2]);
            if (students[major]) {
                res.status(200).send(`List: ${students[major].join(', ')}`);
            } else {
                res.status(200).send('No students found for the specified major');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

module.exports = StudentsController;