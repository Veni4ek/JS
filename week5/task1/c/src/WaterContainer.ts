function main () {
    const input = document.getElementById('example') as HTMLInputElement;
    let stringOfNumbers = input?.value.split(',')
    let myContainer = <HTMLElement>document.getElementById('result');
    myContainer.innerHTML = "Результат: " + maxArea(convertToNumber(stringOfNumbers));

}

function convertToNumber (stringOfNumbers : Array <string>) {
    let numberArray: any = [];
    stringOfNumbers.forEach( ele => numberArray.push(+ele))
    return numberArray;

}



var maxArea = function (height: Array <number>) {
    let leftPointer = 0;
    let rightPointer = height.length - 1;
    let maxAreaCalculated = findArea(leftPointer, rightPointer, height)
    while (leftPointer < rightPointer) {
        if (height[leftPointer] < height[rightPointer]) {
            leftPointer++
        } else {
            rightPointer--
        }

        const currentArea = findArea(leftPointer, rightPointer, height)
        maxAreaCalculated = Math.max(currentArea, maxAreaCalculated)
    }
    return maxAreaCalculated
};

var findArea = function (leftPointer: number, rightPointer: number, height: Array<number>) {

    const width = rightPointer - leftPointer
    const length = Math.min(height[leftPointer], height[rightPointer])
    const area = width * length;
    return area
}