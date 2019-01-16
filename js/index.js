var canvas = document.querySelector("canvas");

canvas.width = (30 * 12);
canvas.height = 700;

var c = canvas.getContext("2d");

c.fillStyle = "#000";
c.fillRect(0, 0, canvas.width, canvas.height);


const Ttetris = [
  [1, 1, 1],
  [0, 1, 0],
  [0, 0, 0]
]

const Ltetris = [
  [1, 0, 0],
  [1, 0, 0],
  [1, 1, 0]
]

let tetBlock = [Ttetris, Ltetris];

tetBlock[0].forEach((row, y)=>{
  row.forEach((block, x)=>{
    if(block != 0){
      c.fillStyle = "#fff";
      c.fillRect(x*30, y*30, 30, 30);
    }
  })
})
