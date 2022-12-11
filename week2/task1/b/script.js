
function check() {
    let month = document.getElementById("month").value;
    month = parseInt(month);
    let year = document.getElementById("year").value;
    days(month,year);


    }

function days(month, year) {
    switch(month){
        case 1:
            document.getElementById("result").innerHTML = "В январе 31 день.";
            break;

        case 2:
            if (year %4 == 0 && year % 100 !=0 || year % 400 == 0){
                document.getElementById("result").innerHTML = "В феврале 29 дней.";
            }
            else {
                document.getElementById("result").innerHTML = "В феврале 28 дней.";
            }
            break;

        case 3:
            document.getElementById("result").innerHTML = "В марте 31 день.";
            break;

        case 4:
            document.getElementById("result").innerHTML = "В апреле 30 дней.";
            break;
        
        case 5:
            document.getElementById("result").innerHTML = "В мае 31 день.";
            break;
        
        case 6:
            document.getElementById("result").innerHTML = "В июне 30 дней.";
            break;

        case 7:
            document.getElementById("result").innerHTML = "В июле 31 день.";
            break;

        case 8:
            document.getElementById("result").innerHTML = "В августе 31 день.";
            break;
        
        case 9:
            document.getElementById("result").innerHTML = "В сентябре 30 дней.";
            break;

        case 10:
            document.getElementById("result").innerHTML = "В октябре 31 день.";
            break;

        case 11:
            document.getElementById("result").innerHTML = "В ноябре 30 дней.";
            break;

        case 12:
            document.getElementById("result").innerHTML = "В декабре 31 день.";
            break;


}
}


