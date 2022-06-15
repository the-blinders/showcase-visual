let colorShader, orbitShader;
let cmy;
let v1, v2, v3, v4;

function preload() {
  // The vertex shader defines how vertices are projected onto clip space.
  // Most of the times a projection and modelview matrix are needed for this
  // (see: https://visualcomputing.github.io/docs/shaders/programming_paradigm/).
  // Here, however, we are going to:
  // 1. Define the triangle vertices directly in clip space, thus bypassing
  // both of these matrices (matrices: Tree.NONE). The p5 mandelbrot vertex
  // shader does just the same: https://p5js.org/reference/#/p5/loadShader
  // 2. Interpolate vertex color data (varyings: Tree.color4). Note that
  // color data is defined in a per vertex basis with the fill command below.
  // Have a look at the generated vertex shader in the console!
  // readShader: https://github.com/VisualComputing/p5.treegl#handling
  colorShader = readShader(
    "../../../content/sketches/blinders/shaders/estatico/color.frag",
    {
      matrices: Tree.NONE,
      varyings: Tree.color4,
    }
  );
  orbitShader = readShader(
    "../../../content/sketches/blinders/shaders/estatico/orbitas.frag",
    {
      matrices: Tree.NONE,
      varyings: Tree.color4,
    }
  );
}

function setup() {
  // shaders require WEBGL mode to work
  createCanvas(600, 600, WEBGL);
  // https://p5js.org/reference/#/p5/shader

  randomizeTriangle();

  radio = createSlider(0, 255, 255, 1);
  radio.position(width, 10);
  radio.style("width", "100px");
}

function draw() {
  colorShader.setUniform("u_resolution", [width, height]);
  colorShader.setUniform("u_mouse", [float(mouseX), float(mouseY)]);
  colorShader.setUniform("u_time", millis() / 1000.0);

  orbitShader.setUniform("u_resolution", [width, height]);
  orbitShader.setUniform("u_mouse", [float(mouseX), float(mouseY)]);
  orbitShader.setUniform("u_time", millis() / 1000.0);

  background(70);
  // the fill command is used to define the colors
  // (to be interpolated) in a per-vertex basis
  shader(colorShader);
  beginShape(TRIANGLES);
  fill("rgb(255,0,0)");
  vertex(v1.x, v1.y);
  fill("rgb(0,255,0)");
  vertex(v2.x, v2.y);
  fill("rgb(0,0,255)");
  vertex(v3.x, v3.y);
  endShape();
  shader(orbitShader);
  beginShape(TRIANGLES);
  fill("rgb(255,0,0)");
  vertex(v1.y, v1.x);
  fill("rgb(0,255,0)");
  vertex(v2.y, v2.x);
  fill("rgb(0,0,255)");
  vertex(v3.y, v3.x);
  endShape();
}

// vertices are given directly in clip-space,
// i.e., both x and y vertex coordinates ∈ [-1..1]
function randomizeTriangle() {
  v1 = createVector(0, 0);
  v2 = p5.Vector.random2D();
  v3 = p5.Vector.random2D();
  v4 = p5.Vector.random2D();
}

function unrectangulo() {
  v1 = createVector(width, height);
  v3 = createVector(width, -height);
  v2 = createVector(-width, -height);
  v4 = createVector(-width, height);
}

function keyPressed() {
  if (key == "c") {
    cmy = !cmy;
    // https://p5js.org/reference/#/p5.Shader/setUniform
    colorShader.setUniform("cmy", cmy);
  }
  if (key == "r") {
    randomizeTriangle();
  }
  if (key == "t") {
    unrectangulo();
  }
}
