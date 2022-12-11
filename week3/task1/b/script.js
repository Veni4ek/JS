
function check() {
    let input_str= document.getElementById("str").value;
    
    return document.getElementById("result").innerHTML = "Результат: " + entropy(input_str).toFixed(2);
   
}


// Энтропия Шеннона в битах на символ.
function entropy(str) {
    const len = str.length;
   
    // Строим карту частот на основе строки.
    const frequencies = Array.from(str).reduce((freq, c) => (freq[c] = (freq[c] || 0) + 1) && freq, {});
   
    // Суммируем частоту каждого символа.
    return Object.values(frequencies).reduce((sum, f) => sum - f/len * Math.log2(f/len), 0);
  }
   
  
  