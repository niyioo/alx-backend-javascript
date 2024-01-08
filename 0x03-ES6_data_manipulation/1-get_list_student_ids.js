function getListStudentIds(studentList) {
    // Check if the input is an array
    if (!Array.isArray(studentList)) {
        return [];
    }

    // Use map to extract the ids
    return studentList.map(student => student.id);
}

module.exports = getListStudentIds;