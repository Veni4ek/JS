function main () {
    const input = document.getElementById('example') as HTMLInputElement;
    let stringOfNumbers = input?.value.split(',')
    let myContainer = <HTMLElement>document.getElementById('result');
    myContainer.innerHTML = "Результат: " + maxProfit(convertToNumber(stringOfNumbers));

}

function convertToNumber (stringOfNumbers : Array <string>) {
    let numberArray: any = [];
    stringOfNumbers.forEach( ele => numberArray.push(+ele))
    return numberArray;

}

function maxProfit (prices: Array<number>) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - minPrice)
        }
    }
    return maxProfit
};