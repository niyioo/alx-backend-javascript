const fs = require('fs').promises;

async function readDatabase(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        const lines = data.split('\n').filter(line => line.trim() !== '');

        const students = {};
        lines.forEach(line => {
            const [, , field, name] = line.split(',');
            if (!students[field]) {
                students[field] = [];
            }
            students[field].push(name);
        });

        return students;
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = { readDatabase };