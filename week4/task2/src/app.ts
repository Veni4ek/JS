function main () {
    let count  = +(<HTMLInputElement>document.getElementById('example')).value;
    refresh(count);
}

function refresh(count: number) {
    
    const canvas: any = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0,0,800,800);
    for(let i = 0; i<count; i++) {

    let x: number = Math.floor(Math.random()*400); // Генератор X
    let y: number = Math.floor(Math.random()*400); // Генератор Y
    let width: number = Math.floor(Math.random()*100); // Генератор ширины
    let height: number = Math.floor(Math.random()*100); // Генератор высоты

    let r: number = Math.floor(Math.random()*255);
    let g: number = Math.floor(Math.random()*255);
    let b: number = Math.floor(Math.random()*255);
    
    ctx.beginPath();
    ctx.fillRect(x, y, width, height); // Координаты, ширина и высота
    ctx.fillStyle = "rgba(" + r + "," + g + "," + b + ",1)"; // Цвет
    ctx.strokeRect(x, y, width, height); // Обводка
    ctx.fill();
    ctx.closePath();
    
    }
}