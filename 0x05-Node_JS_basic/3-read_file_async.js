const fs = require('fs');

/**
 * Counts the number of students in each field from the database file asynchronously.
 * @param {string} path - The path to the database file.
 * @returns {Promise<void>} A promise that resolves when the counting is done.
 */
function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (error, data) => {
            if (error) {
                reject(new Error('Cannot load the database'));
            } else {
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

                resolve();
            }
        });
    });
}

module.exports = countStudents;