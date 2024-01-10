// Define the interface for a student
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two students
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York",
  };
  
  const student2: Student = {
    firstName: "Alice",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles",
  };
  
  // Create an array named studentsList containing the two students
  const studentsList: Student[] = [student1, student2];
  
  // Using Vanilla JavaScript, render a table and append rows for each student
  const table = document.createElement("table");
  
  studentsList.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
  
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
  });
  
  // Append the table to the body of the document
  document.body.appendChild(table);