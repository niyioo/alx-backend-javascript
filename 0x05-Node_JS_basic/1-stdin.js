process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for user input
process.stdin.on('readable', () => {
  // Extract the input (trim to remove leading/trailing whitespace)
  const chunk = process.stdin.read();
  if (chunk !== null) {
    // Display the user's name
    process.stdout.write(`Your name is: ${chunk}\n`);
  }
});

process.stdin.on('end', () => {
  // Notify that the program is closing
  process.stdout.write('This important software is now closing\n');
});

