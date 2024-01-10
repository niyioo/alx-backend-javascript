// Define the Teacher interface
interface Teacher {
    firstName: string;
    lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    readonly location: string;
    [key: string]: any;
  }
  
  // Define the Directors interface extending Teacher
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  // Define the printTeacherFunction interface
  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  // Implement the printTeacher function
  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    const firstLetter = firstName.charAt(0).toUpperCase();
    const fullName = `${firstLetter}. ${lastName}`;
    return fullName;
  };
  
  // Example usage
  const printedTeacher = printTeacher("John", "Doe");
  console.log(printedTeacher); // Output: J. Doe

// Define an interface for the StudentClass constructor
interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClass;
  }
  
  // Define an interface for the StudentClass instance
  interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
  }
  
  // Implement the StudentClass
  const StudentClass: StudentClassConstructor = class StudentClass implements StudentClass {
    private firstName: string;
    private lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return 'Currently working';
    }
  
    displayName(): string {
      return this.firstName;
    }
  };
  
  // Example usage
  const studentInstance = new StudentClass('John', 'Doe');
  console.log(studentInstance.workOnHomework()); // Output: Currently working
  console.log(studentInstance.displayName()); // Output: John
