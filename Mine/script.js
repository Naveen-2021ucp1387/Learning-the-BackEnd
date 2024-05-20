const { exec } = require('child_process');
const { stderr } = require('process');
exec('dir', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing command: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

  // Print the command output
  console.log(`stdout:\n${stdout}`);
});
// exec();