
function check() {
    let myArray  = document.getElementById("example").value.split(',');
    let  max_number = myArray[0];


    for (let i=0; i < myArray.length; i++) {
        myArray[i] = parseInt(myArray[i]);
    }


    for (let i=0; i < myArray.length; i++){
        if (max_number < myArray[i]) {
            max_number = myArray[i];
        }
    }


    var count_max = 0; // Счетчик максимальных значений
    for (let i = 0; i < myArray.length; i++)
    {
        if (max_number == myArray[i])
        {
            count_max++;
        }
    }

    document.getElementById("numb_max").innerHTML = "Максимальное число: "+ max_number;
    document.getElementById("result").innerHTML = "Количество чисел, равных максимальному: " + count_max;
   
}


