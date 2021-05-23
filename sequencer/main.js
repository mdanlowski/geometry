// main.js

var vpw = document.body.clientWidth
var vph = document.body.clientHeight
var SPEED = 120
var TIME = 0
var DIR = true
var SIZE = 6

function setup() {
  createCanvas(vpw, vph);
  fill('cyan')
  stroke('lime')
  angleMode(RADIANS)
  // translate(vpw/2, vph/2)
}

let m = new Mesh(300)

function draw() {
  translate(vpw/2, vph/2)
  background('#003366')
  m.draw()
  
  if(frameCount % 5 == 0) {
    for(let v of m.vertices) v.rotate(PI/180) 
  }

  if(!tick()) return
  if(DIR === true) m.grow()
  else if(DIR === false) m.shrink()

  m.recalc()
}

function tick(base=1) {
  let isTime = frameCount - TIME > SPEED/base
  if(isTime) TIME = frameCount

  return isTime
}
