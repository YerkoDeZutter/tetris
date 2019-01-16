var canvas = document.querySelector("canvas");

canvas.width = (30 * 12);
canvas.height = (30 * 24);

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

function DrawBlocks(tipe, place) {

  c.fillStyle = "#000";
  c.fillRect(0, 0, canvas.width, canvas.height);

  tipe.forEach((row, y) => {
    row.forEach((block, x) => {
      if (block != 0) {
        c.fillStyle = "#fff";
        c.fillRect((x * 30) + place.x, (y * 30) + place.y, 30, 30);
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
    CurBlock.position.y = CurBlock.position.y + 30;
    DropCountDown = 0
  }



  //-----NEXT BLOCK-----
  if(CurBlock.position.y == canvas.height){

  }

  // DrawBlocks(arena, {x: 0, y: 0})
  DrawBlocks(CurBlock.block, CurBlock.position)
  requestAnimationFrame(update)
}








//----- GET CURRENT BLOCK -----

const CurBlock = {
  position: {x: 30, y: 30},
  block: null
}

function newBlock(){
  CurBlock.block = blockPicker(Math.floor(Math.random() * 7));
  // CurBlock.block = blockPicker(0);
}

newBlock()

update()
