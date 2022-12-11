
function check() {
    let where_str= document.getElementById("where").value.replace(/\s/g, '');
    let search_str = document.getElementById("search").value;


    return document.getElementById("result").innerHTML = "Результат: " + search(where_str,search_str);
   
}

function search(where_str,search_str) {
    let result = where_str.split(search_str).length - 1;
    return result;


}





