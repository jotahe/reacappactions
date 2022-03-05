const core = require('@actions/core');
const github = require('@actions/github');

async function runasync(){    // In order to use await when must put all code inside an async function
    try {
    const token = core.getInput('token');
    const title = core.getInput('title');
    const body = core.getInput('body');
    const assignees = core.getInput('assignees');

    // fetch we can use a fetch function to send api requests but github core have a package to do it
    // const octokit = new github.GitHub(token); old version of the library
    const octokit = new github.getOctokit(token);
    
    const response = await octokit.issue.create({  // put await in order to wait for response
        // owner: github.context.repo.owner,   // We get the token directly from github vbles
        // repo: github.context.repo.,
        ...github.context.repo,    // we can use this other form to pass context
        //title: title, // in javascript when the name of vble match assignment you can omit one of those
        title,
        body,
        assignees: assignees ? assignees.split(',') : undefined  // it would make the string into array
        // assignees: assignees ? assignees.split('\n') : undefined  // in this case we would fill the array separating by lines
    });
    core.setOutput("issue", JSON.stringify(response,data));  // it would be a string a not an object


    } catch(error) {
        core.setFailed(error.message);
    }
}

 //Invoke the function with just run
runasync();