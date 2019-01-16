var canvas = document.querySelector("canvas");

canvas.width = (30 * 12);
canvas.height = 700;

var c = canvas.getContext("2d");

c.fillStyle = "#000";
c.fillRect(0, 0, canvas.width, canvas.height);

function blockPicker(thisB){
  if(thisB == 0){
  return [
    [1, 1, 1],
    [0, 1, 0],
    [0, 0, 0]
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
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0]
  ]}
}

function DrawBlocks(tipe, place) {

  tipe.forEach((row, y) => {
    row.forEach((block, x) => {
      if (block != 0) {
        c.fillStyle = "#fff";
        c.fillRect(x * place.x, y * place.y, 30, 30);
      }
    })
  })

}



const CurBlock = {
  position: {x: 30, y: 30},
  block: null
}

function newBlock(){
  CurBlock.block = blockPicker(Math.floor(Math.random() * 7));
  // CurBlock.block = blockPicker(0);
}

newBlock()

DrawBlocks(CurBlock.block, CurBlock.position)
