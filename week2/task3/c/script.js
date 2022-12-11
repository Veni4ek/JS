function check() {
    let myArray  = document.getElementById("example").value.split(',');

    for (let i=0; i < myArray.length; i++) {
        myArray[i] = parseInt(myArray[i]);
    }
    document.getElementById("result").innerHTML = "Отсортированный массив: " + (sort9(myArray));
}


function sort9(array) {
    var result = array.slice(0);
   
       // Вызываем функцию слияния рекурсивно
    function sort(array) {
      var length = array.length,
      mid = Math.floor(length * 0.5),
      left = array.slice(0, mid),
      right = array.slice(mid, length);
   
      if (length === 1) {
        return array;
      }
      return merge(sort(left), sort(right));
    }
   
       // объединяем два упорядоченных массива
    function merge(left, right) {
      var result = [];
   
      while (left.length || right.length) {
   
        if (left.length && right.length) {
   
          if (left[0] < right[0]) {
            result.push(left.shift());
          } else {
            result.push(right.shift());
          }
   
        } else if (left.length) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }
      }
      return result;
    }
   
    return sort(result);
  }