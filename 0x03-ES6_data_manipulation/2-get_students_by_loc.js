function getStudentsByLocation(studentList, city) {
  // Use filter to get students in the specified city
  return studentList.filter((student) => student.location === city);
}

module.exports = getStudentsByLocation;
