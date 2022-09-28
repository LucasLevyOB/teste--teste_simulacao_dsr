// const { exec } = require("child_process");
const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);


async function getCommands(params) {
    const commands = [];
    
    for await (const hash of params) {
        const {stdout} = await exec(`git branch --contains ${hash}`);
        commands.push({hash, branch: stdout});
    }

    // dedução natural e tabu

    return commands;
}


async function main() {
    const params = [];
    
    for (let i = 2; i < process.argv.length; i++) {
        params.push(process.argv[i])
    }

    const commands = await getCommands(params);

    console.log(commands)
    
}

main();