let ratio = 4/3;
let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

paper.install(window);
window.onload = function() {
  paper.setup(canvas);
};

function initializePaper() {
  setCanvasSize();
}

function setCanvasSize() {
  let width = window.innerWidth/2.2;
  let height = width / ratio;

  context.canvas.width  = width;
  context.canvas.height = height;
}

export {
  initializePaper
};