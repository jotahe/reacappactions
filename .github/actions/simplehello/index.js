const core = require('@actions/core');
const github = require('@actions/github');

try {
  //throw( new Error("Testing some error message"));
 
  core.debug('Debug message')   // we use this library to provide debug info when users enable ACTIO_GITHUB_DEBUG=true in secrets
  core.debug('Warning message') // Message in yellow 
  core.debug('Error message') // Message in red



  const name = core.getInput('who-to-greet');
  core.setSecret(name) // Everything passed to the function do not appear in the logs, in this case the name
  console.log(`Simple Hello ${name}`);

  const time = new Date();
  core.setOutput("time", time.toTimeString());
   
  core.startGroup('Logging github object')  // In order to log a long object
  console.log(JSON.stringify(github, null, '\t'));
  core.endGroup();

  core.exportVariable("EXVBLE", "ExportVariable")   // Set environment variables that can be used in all workflow steps

} catch(error) {
  core.setFailed(error.message);
}