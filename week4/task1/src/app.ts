function main () {
    let count  = +(<HTMLInputElement>document.getElementById('example')).value;
    refresh(count);
}

function refresh(count: number) {
    const canvas : any = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0,0,400,400);
    for(let i=0; i<count; i++) {

    let x: number = Math.floor(Math.random()*400); // Генератор X
    let y: number = Math.floor(Math.random()*400); // Генератор Y
    let moveto1: number = Math.floor(Math.random()*400); // Генератор ширины
    let moveto2: number = Math.floor(Math.random()*400); // Генератор высоты

    let r: number = Math.floor(Math.random()*255);
    let g: number = Math.floor(Math.random()*255);
    let b: number = Math.floor(Math.random()*255);
    
    ctx.beginPath();
    ctx.moveTo(moveto1, moveto2);
    ctx.lineTo(x, y);
    ctx.strokeStyle = "rgba(" + r + "," + g + "," + b + ",1)";
    ctx.stroke();
    ctx.closePath();
    
    }
}

