function setup() {
    createCanvas(400, 400,WEBGL);
    
  }
  function dibujarPoliedro(){
    beginShape(box);
    vertex(0,0,0)
    vertex(0,80,0)
    vertex(80,80,0)
    vertex(80,0,0)
    vertex(0,0,0)
   vertex(0,0,80)
    vertex(0,80,80)
    vertex(0,80,0)
    vertex(0,80,80)
    vertex(80,80,80)
    vertex(80,80,0)
    vertex(80,80,80)
    vertex(80,0,80)
    vertex(80,0,0)
    vertex(80,0,80)
    vertex(0,0,80)
  
  
    endShape()
  }
  function draw() {
    background(220);
    dibujarPoliedro()
  }