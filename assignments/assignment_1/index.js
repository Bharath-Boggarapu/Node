

function getNameFromCommandLine() {
    // Write you code here, name should be taken as args in process.argv
    const newName = process.argv[process.argv.length-1];
    return newName
}

function getNameFromEnv() {
    // Write your code here
    const envVar = process.env.name;
    return envVar
}

function getNameFromReadLine() {
    // Write your code here
    const rl = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })
    let ques = ""
    rl.question("",name=>{
        ques = name
        rl.close();
    })
}

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}

