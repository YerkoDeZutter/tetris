var canvas = document.querySelector("canvas");

canvas.width = 300;
canvas.height = 500;

var c = canvas.getContext("2d");

c.fillStyle = "#000";
c.fillRect(0, 0, canvas.width, canvas.height);
