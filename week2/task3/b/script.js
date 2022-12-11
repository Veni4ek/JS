
function check() {
    let myArray  = document.getElementById("example").value.split(',');

    for (let i=0; i < myArray.length; i++) {
        myArray[i] = parseInt(myArray[i]);
    }

    myArray = myArray.sort(function(a,b){return a-b;}); // Сортировка.

    let median;

    if (myArray.length % 2 == 0) {
        median =(myArray[myArray.length / 2] + myArray[myArray.length / 2 - 1])/2;
    } else {
        median = myArray[(myArray.length -1 ) / 2];
        
    }
    
    document.getElementById("result").innerHTML = "Медиана чисел: " + median;
   
}


