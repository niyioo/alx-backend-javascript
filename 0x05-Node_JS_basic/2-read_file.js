const fs = require('fs');

/**
 * Counts the number of students in each field from the database file.
 * @param {string} path - The path to the database file.
 */
function countStudents(path) {
    try {
        // Read the database file synchronously
        const data = fs.readFileSync(path, 'utf8');

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
    } catch (error) {
        // Handle errors if the database file is not available
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;