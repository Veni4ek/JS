
function check() {
    let number_sqrt = document.getElementById("example").value;
    sqrt(number_sqrt);
}

function sqrt(a) {
    let i = 0;
    let b = a;
    while ((b*b > a) && (i < 200)) {
        b = (b+ a/b) / 2;
        i++;
    }
    document.getElementById("result").innerHTML = "Результат: "+ b;
    }




