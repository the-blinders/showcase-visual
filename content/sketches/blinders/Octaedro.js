function setup() {
    createCanvas(400, 400, WEBGL);
    createEasyCam()
  }
  
  function dibujarPoliedro(){
    beginShape(box);
    vertex(0,0,0)
    vertex(40,0,0)
    vertex(20, -34.63,-20)
    vertex(0,0,0)
    vertex(0,0,-40)
    vertex(20,-34.63,-20)
    vertex(0,0,-40)
    vertex(20,-34.63,-20)
    vertex(40,0,-40)
    vertex(0,0,-40)
    vertex(40,0,-40)
    vertex(40,0,0)
    vertex(20, 34.63,-20)
    vertex(0,0,0)
    vertex(0,0,-40)
    vertex(20, 34.63,-20)
    vertex(0,0,-40)
    vertex(40,0,-40)
    vertex(20, 34.63,-20)
    vertex(40,0,-40)
    
  
  //  vertex(0,-34.63,40)
  //  vertex(0,0,0)
    
   
  
    endShape()
  }
  
  
  function draw() {
    background(220);
    dibujarPoliedro()
      
  
  }
  