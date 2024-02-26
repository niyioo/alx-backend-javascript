const fs = require('fs');

/**
 * Counts the number of students in each field from the database file asynchronously.
 * @param {string} path - The path to the database file.
 * @returns {Promise<void>} A promise that resolves when the counting is done.
 */
function countStudents(path) {
    return new Promise((resolve, reject) => {
        // Read the database file asynchronously
        fs.readFile(path, 'utf8', (error, data) => {
            if (error) {
                // Reject the promise if there's an error reading the file
                reject(new Error('Cannot load the database'));
            } else {
                // Split the data into lines and filter out empty lines
                const lines = data.split('\n').filter(line => line.trim() !== '');

                // Initialize counters for each field
                const fieldCounts = {};

                // Iterate over each line to count students in each field
                lines.forEach(line => {
                    const [firstName, , field] = line.split(',');
                    if (fieldCounts[field]) {
                        fieldCounts[field].push(firstName);
                    } else {
                        fieldCounts[field] = [firstName];
                    }
                });

                // Log the total number of students
                console.log(`Number of students: ${lines.length}`);

                // Log the number of students in each field and their names
                for (const field in fieldCounts) {
                    console.log(`Number of students in ${field}: ${fieldCounts[field].length}. List: ${fieldCounts[field].join(', ')}`);
                }

                // Resolve the promise
                resolve();
            }
        });
    });
}

module.exports = countStudents;