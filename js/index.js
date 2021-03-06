var canvas = document.querySelector("canvas");

const blockAmountW = 12;
const blockAmountH = 24;

const blockSize = 30;

canvas.width = (blockSize * blockAmountW);
canvas.height = (blockSize * blockAmountH);

var c = canvas.getContext("2d");

c.fillStyle = "#000";
c.fillRect(0, 0, canvas.width, canvas.height);

// ---- TETRIS BLOCKEN ----

function blockPicker(thisB){
  if(thisB == 0){
  return [
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0]
  ]}

  if(thisB == 1){
  return [
    [1, 0, 0],
    [1, 0, 0],
    [1, 1, 0]
  ]}

  if(thisB == 2){
  return [
    [0, 0, 1],
    [0, 0, 1],
    [0, 1, 1]
  ]}

  if(thisB == 3){
  return [
    [1, 1],
    [1, 1]
  ]}

  if(thisB == 4){
  return [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0]
  ]}

  if(thisB == 5){
  return [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0]
  ]}

  if(thisB == 6){
  return [
    [1, 1, 1],
    [0, 1, 0],
    [0, 0, 0]
  ]}
}


// ----- DRAW CURRENT BLOCK -----
let blockH = 0;
let blockW = 0;
function DrawBlocks(tipe, place) {

  c.fillStyle = "#000";
  c.fillRect(0, 0, canvas.width, canvas.height);

  tipe.forEach((row, y) => {
    row.forEach((block, x) => {
      if (block != 0) {
        blockH = y;
        blockW = x;
        c.fillStyle = "#fff";
        c.fillRect((x * blockSize) + place.x, (y * blockSize) + place.y, blockSize, blockSize);
      }
    })
  })

}






let DropCountDown = 0;
let DropTime = 1000;

let lastFrame = 0;

//----- MAKE A NEW FRAME (above are time couters) -----
function update(frame = 0){
  const deltaFrame = frame - lastFrame;
  lastFrame = frame;

  DropCountDown = DropCountDown + deltaFrame

  if(DropCountDown > DropTime){
    CurBlock.position.y = CurBlock.position.y + blockSize;
    DropCountDown = 0
  }



  //-----NEXT BLOCK-----
  if(CurBlock.position.y >= ((blockSize * blockAmountH) - (blockH * blockSize))){
    newBlock()
  }

  // DrawBlocks(arena, {x: 0, y: 0})
  DrawBlocks(CurBlock.block, CurBlock.position)
  requestAnimationFrame(update)
}





function playerMove(offset) {
  CurBlock.position.x += offset;
}

function playerDrop(){
  CurBlock.position.y += blockSize;
}



document.addEventListener('keydown', event => {
    if (event.keyCode === 37 && CurBlock.position.x >= blockSize) {
        playerMove(-blockSize);
    } else if (event.keyCode === 39 && CurBlock.position.x <= ((blockSize * blockAmountW) - (blockW * blockSize))) {
        playerMove(blockSize);
    } else if (event.keyCode === 40) {
        playerDrop();

    // } else if (event.keyCode === 81) {
    //     playerRotate(-1);
    // } else if (event.keyCode === 87) {
    //     playerRotate(1);
    }
});





//----- GET CURRENT BLOCK -----

const CurBlock = {
  position: {x: blockSize, y: blockSize},
  block: null
}

function newBlock(){
  CurBlock.block = blockPicker(Math.floor(Math.random() * 7));
  CurBlock.position.y = blockSize;
  // CurBlock.block = blockPicker(0);
}

newBlock()

update()
