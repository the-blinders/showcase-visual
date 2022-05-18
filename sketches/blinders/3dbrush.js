// Goal in the 3d Brush is double, to implement:
// 1. a gesture parser to deal with depth, i.e.,
// replace the depth slider with something really
// meaningful. You may use a 3d sensor hardware
// such as: https://en.wikipedia.org/wiki/Leap_Motion
// or machine learning software to parse hand (or
// body) gestures from a (video) / image, such as:
// https://ml5js.org/
// 2. other brushes to stylize the 3d brush, taking
// into account its shape and alpha channel, gesture
// speed, etc.

// Brush controls
let color;
let depth;
let brush;

let easycam;
let state;

let escorzo;
let points;
let record;

let vel = 0; //variable para guardar la velocidad del mouse

function setup() {
  createCanvas(600, 450, WEBGL);
  // easycam stuff
  let state = {
    distance: 250, // scalar
    center: [0, 0, 0], // vector
    rotation: [0, 0, 0, 1], // quaternion
  };
  easycam = createEasyCam();
  easycam.state_reset = state; // state to use on reset (double-click/tap)
  easycam.setState(state, 2000); // now animate to that state
  escorzo = true;
  perspective();

  // brush stuff
  points = [];
  depth = createSlider(0, 1, 0.05, 0.05);
  depth.position(10, 10);
  depth.style("width", "580px");
  color = createColorPicker([255, 40, 80]);
  color.position(width - 70, 40);
  // select initial brush
  brush = customBrush;
  // mouse velocity
  textSize(20);
}

function draw() {
  update();
  background(120);
  push();
  strokeWeight(0.8);
  stroke("magenta");
  grid({ dotted: false });
  pop();
  axes();
  for (const point of points) {
    push();
    translate(point.worldPosition);
    brush(point);
    pop();
  }
  let camRot = easycam.getRotation();
  // mouse velocity
}

function update() {
  let dx = abs(mouseX - pmouseX);
  let dy = abs(mouseY - pmouseY);

  speed = constrain((dx + dy) / (2 * (width - height)), 0, 1);
  if (record) {
    points.push({
      worldPosition: treeLocation([mouseX, mouseY, depth.value()], {
        from: "SCREEN",
        to: "WORLD",
      }),
      color: color.color(),
      speed: speed,
    });
  }
}

function customBrush(point) {
  push();
  noStroke();
  // TODO parameterize sphere radius and / or
  // alpha channel according to gesture speed
  let difX = abs(mouseX - pmouseX);
  let difY = abs(mouseY - pmouseY);
  let vel = difX + difY;

  let mapedColor = map(vel, 0, 150, 50, 255);
  // console.log(mapedColor);

  // fill(point.color);
  fill(100, 0, mapedColor);

  sphere(1 * (vel + 1));
  pop();
}

function keyPressed() {
  if (key === "r") {
    record = !record;
  }
  if (key === "p") {
    escorzo = !escorzo;
    escorzo ? perspective() : ortho();
  }
  if (key == "c") {
    points = [];
  }
}

function mouseWheel(event) {
  //comment to enable page scrolling
  return false;
}
