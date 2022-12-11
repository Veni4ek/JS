
function check() {
    let week = document.getElementById('week').selectedIndex;
    let temp = document.getElementById('temp').selectedIndex;
    let precipitation = document.getElementById('precipitation').selectedIndex;
    let wind = document.getElementById('wind').selectedIndex;
    let humidity = document.getElementById('humidity').selectedIndex;

    if (week == 7) {
        if ((temp == 1) || (temp == 2)) {
            if ((precipitation == 1) || (precipitation == 2)) {
                if (wind == 2) {
                    if (humidity == 2) {
                        document.getElementById("result").innerHTML = "Да.";
                    }
                    else {
                        document.getElementById("result").innerHTML = "Нет.";
                    }
                }
                else {
                    document.getElementById("result").innerHTML = "Нет.";
                }
            }
            else {
                document.getElementById("result").innerHTML = "Нет.";
            }

        }
        else {
            document.getElementById("result").innerHTML = "Нет.";
        }
    
    }
    else {
        document.getElementById("result").innerHTML = "Нет.";
    }
}




