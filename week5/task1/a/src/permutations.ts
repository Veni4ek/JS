function main () {
    let readline = require('readline'); 
    let rl = readline.createInterface({
        input: process.stdin,
        prompt: '>'
    });
    rl.prompt();
    rl.on('line', (input: string) => {
        input = input.toLowerCase(); 
        console.log(perms(convertToNumber(convertToArray(input))));
        rl.close();
    });
}
function convertToArray (input: string) {
    return input.replace(/\[([^\]]+)\]/g, '$1').split(',')
}

function convertToNumber (stringOfNumbers : Array <string>) {
    let numberArray: any = [];
    stringOfNumbers.forEach( ele => numberArray.push(+ele))
    return numberArray;

}

function perms(nums : Array <number>) {
    let result = [];
    if (nums.length === 0) return [];
    if (nums.length === 1) return [nums];
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
        const remainingNumsPermuted: any = perms(remainingNums);
    for (let j = 0; j < remainingNumsPermuted.length; j++) {
        const permutedArray = [currentNum].concat(remainingNumsPermuted[j]);
        result.push(permutedArray);
        }
    }
    return result;
}

main();