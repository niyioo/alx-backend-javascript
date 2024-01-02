export default function taskBlock(trueOrFalse) {
  // Use let and const instead of var
  let task = false;
  const task2 = true;

  if (trueOrFalse) {
    // Use let and const instead of var
    let task = true;
    const task2 = false;
  }

  return [task, task2];
}
