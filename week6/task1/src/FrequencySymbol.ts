function main () {
    let readline = require('readline'); 
    let rl = readline.createInterface({
        input: process.stdin,
        prompt: '>'
    });
    rl.prompt();
    rl.on('line', (input: string) => {
        input = input.toLowerCase();
        console.log(frequency(convertStringToCharArray(input)));
        rl.close();
    });
}

function convertStringToCharArray (s: string) {
    return [...s];
}

function frequency(arr : string []){
    let result: any = [];
    let word = arr.sort((a,b) => arr.filter(v => v===a).length - arr.filter(v => v===b).length).pop();
    let count = arr.filter(item => item === word).length + 1;
    result.push(word, count);
    return result;
}

main();