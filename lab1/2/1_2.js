const a = 10; // number
const b = 'Привет' // string
const c = true // boolean
//выводим тип данных
console.log(typeof a, typeof b, typeof c);

//мин макс безопасное числовое значение
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

//мин макс возможное числовое значение.
// Именно такие числа,потому что они хранятся в 64 битах памяти.
// Если мы попробуем к максимальному,безопасному числу прибавить 2,
// то ответ будет неверным из-за того,что число в бинарном виде выглядит не так,как ожидалось.
// В таком случа придумали новый тип данных - Bigint.
console.log(Number.MAX_VALUE); //1.7976931348623157e+308
console.log(Number.MIN_VALUE); //5e-324
