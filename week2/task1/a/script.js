
function check() {
    var age = document.getElementById("age").value;


    var ageLastNumber = age % 10;
    var exclusion = (age % 100 >= 11) && (age % 100 <= 14);
    var old = "";

    if (ageLastNumber == 1)
        old = age + " год";
    else if(ageLastNumber == 0 || ageLastNumber >= 5 && ageLastNumber <= 9)
        old =  age + " лет";
    else if(ageLastNumber >= 2 && ageLastNumber <= 4)
        old = age + " года";
    if (exclusion)
        old = age + " лет";

    document.getElementById("result").innerHTML = "Результат: " + old;
}


