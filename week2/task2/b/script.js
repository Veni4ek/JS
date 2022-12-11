function check() {
    let count  = document.getElementById("example").value;
    document.getElementById("result").innerHTML ="Результат: " + Eratosthenes(count);;

}


function Eratosthenes(n) {
    let arr = [],
        p = 2;

    for(let i=0; i<n; i++) {
        arr.push(true);
    }

    while(p*p<n) {
        for(let i=2*p; i<n; i+=p) {
            arr[i] = false;
        }

        for(i=p+1; i<=n;i++) {
            if(arr[i]) {
                p=i;
                 break;
            }
        }
    }

    let simpleNumbers = [];

    for(i=2; i<n; i++) {
        if(arr[i]) {
            simpleNumbers.push(i);
        }
    }

    console.log(simpleNumbers);
    return simpleNumbers;


}

