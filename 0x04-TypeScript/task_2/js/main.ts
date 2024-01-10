// Define DirectorInterface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  // Define TeacherInterface
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  // Implement Director class
  class Director implements DirectorInterface {
    workFromHome(): string {
      return 'Working from home';
    }
  
    getCoffeeBreak(): string {
      return 'Getting a coffee break';
    }
  
    workDirectorTasks(): string {
      return 'Getting to director tasks';
    }
  }
  
  // Implement Teacher class
  class Teacher implements TeacherInterface {
    workFromHome(): string {
      return 'Cannot work from home';
    }
  
    getCoffeeBreak(): string {
      return 'Cannot have a break';
    }
  
    workTeacherTasks(): string {
      return 'Getting to work';
    }
  }
  
  // Create a function createEmployee
  function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
  }
  
  // Expected results
  console.log(createEmployee(200)); // Output: Teacher
  console.log(createEmployee(1000)); // Output: Director
  console.log(createEmployee('$500')); // Output: Director

// Define isDirector function
function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
  }
  
  // Define executeWork function
  function executeWork(employee: Director | Teacher): void {
    if (isDirector(employee)) {
      console.log(employee.workDirectorTasks());
    } else {
      console.log(employee.workTeacherTasks());
    }
  }
  
  // Example usage
  executeWork(createEmployee(200)); // Output: Getting to work
  executeWork(createEmployee(1000)); // Output: Getting to director tasks

// Define Subjects string literal type
type Subjects = 'Math' | 'History';

// Define teachClass function
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  } else {
    return 'Invalid subject';
  }
}

// Example usage
console.log(teachClass('Math'));    // Output: Teaching Math
console.log(teachClass('History')); // Output: Teaching History
