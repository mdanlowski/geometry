// geometry.js

const Geom = {
  origin: [0,0],
  centerFromPoints: function(vertexMesh ){/* TODO */},
  centerFromDims: function(w, h, z=0){
    return [w/2, h/2, z/2]
  },
  centerFromSize: function(){}
}

function Mesh(edgeLen) {
  this.edge = edgeLen
  this.vertices = [ new p5.Vector(0, 0) ]//new p5.Vector(...Geom.centerFromDims(vpw, vph)) ]
  this.last = function(){ return this.vertices[this.vertices.length-1] }
  this.size = function(){ return this.vertices.length }
  this.thicc = 2

  this.recalc = function(){
    for(let vi = 0; vi < this.size(); vi++) {
      this.vertices[vi] = createVector(this.edge, 0)
      let rotAngle = (TWO_PI) * (vi)/(this.size())
      this.vertices[vi].rotate(rotAngle)
    }
  }

  this.draw = function(){
    for(let v of this.vertices) {
      let vi = this.vertices.indexOf(v)

      ellipse(v.x, v.y, this.thicc, this.thicc)
      // push()
      // stroke('white')
      // line(v.x, v.y, 0, 0)
      // pop()
      if(this.vertices[vi+1] === undefined) {
        line(v.x, v.y, this.vertices[0].x, this.vertices[0].y)
      } else {
        line(v.x, v.y, this.vertices[vi+1].x, this.vertices[vi+1].y)
      }
    }
  }

  this.grow = function(){
    // this.vertices.push(this.last().copy())
    this.vertices.push(new p5.Vector(this.edge, 0))
    if(this.size() == SIZE) DIR = !DIR
  }

  this.shrink = function(){
    this.vertices.pop()
    if(this.size() == 2) DIR = !DIR
  }
}

    // ellipse(0,0,100,100)
