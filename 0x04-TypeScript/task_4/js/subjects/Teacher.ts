namespace Subjects {
    export interface Teacher {
      firstName: string;
      lastName: string;
      experienceTeachingC?: number; // Optional attribute added using declaration merging
    }
  }