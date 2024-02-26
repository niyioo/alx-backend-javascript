// Display the initial message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for user input
process.stdin.on('data', (data) => {
  // Extract the input (trim to remove leading/trailing whitespace)
  const input = data.toString().trim();

  // Display the user's name
  process.stdout.write(`Your name is: ${input}\n`);

  // Notify that the program is closing
  process.stdout.write('This important software is now closing\n');

  // Exit the process
  process.exit();
});
