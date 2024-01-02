// Use const for taskFirst function
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

// Use let for taskNext function
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}

// getLast function remains the same
export function getLast() {
  return ' is okay';
}
