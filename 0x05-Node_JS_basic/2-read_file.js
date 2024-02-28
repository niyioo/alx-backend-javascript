const fs = require('fs');

/**
 * Counts the number of students in each field from the database file.
 * @param {string} path - The path to the database file.
 */
function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');

        const lines = data.split('\n').filter(line => line.trim() !== '');

        const fieldCounts = {};

        lines.forEach(line => {
            const [firstName, , field] = line.split(',');
            if (fieldCounts[field]) {
                fieldCounts[field].push(firstName);
            } else {
                fieldCounts[field] = [firstName];
            }
        });

        console.log(`Number of students: ${lines.length}`);

        for (const field in fieldCounts) {
            console.log(`Number of students in ${field}: ${fieldCounts[field].length}. List: ${fieldCounts[field].join(', ')}`);
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;