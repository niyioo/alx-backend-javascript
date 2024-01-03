export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);

  let currentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      if (currentIndex < departments.length) {
        const currentDepartment = departments[currentIndex];
        if (currentEmployeeIndex < currentDepartment.length) {
          const result = {
            value: currentDepartment[currentEmployeeIndex],
            done: false,
          };
          currentEmployeeIndex++;
          return result;
        } else {
          currentIndex++;
          currentEmployeeIndex = 0;
          return this.next();
        }
      } else {
        return { done: true };
      }
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
