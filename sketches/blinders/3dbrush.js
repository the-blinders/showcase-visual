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

// ############################################################################
// ##############################  Init Variables  ############################
// ############################################################################

let brush;

let easycam;
let state;

let escorzo;
let points;
let record;

let dx;
let dy;
let mappedHue;
let mappedSize;
let mappedDepth;
let pointDepth;
let pointSize;

let basePointSize = 0.8;
let size_Factor = 8;
let depthOrientation = 1;

let vel = 0; //variable para guardar la velocidad del mouse
// Landmark indexes for fingertips [pointer, middle, ring, pinky]...these are the same for both hands
let fingertips = [8, 12, 16, 20];
// This is like pmouseX and pmouseY...but for every finger [pointer, middle, ring, pinky]
let prevPointer = [
  // Left hand
  [
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ],
  // Right hand
  [
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ],
];
// ############################################################################
// ##############################  Set up  ####################################
// ############################################################################

function setUpEasyCam() {
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
}
function setupFreeHands() {
  colorMap = [
    // Left fingertips
    [color("white"), color("green"), color("cyan"), color("white")],
    // Right fingertips
    [color("red"), color("green"), color("blue"), color("yellow")],
  ];

  // #1 Turn on some models (hand tracking) and the show debugger
  // @see https://handsfree.js.org/#quickstart-workflow
  handsfree = new Handsfree({ handpose: true, hands: true });

  handsfree.enablePlugins("browser");
  handsfree.plugin.pinchScroll.disable();

  // Add webcam buttons under the canvas
  // Handsfree.js comes with a bunch of classes to simplify hiding/showing things when things are loading
  // @see https://handsfree.js.org/ref/util/classes.html#started-loading-and-stopped-states
  handsfree.start();
}
function setup() {
  sketch = createCanvas(600, 450, WEBGL);
  setUpEasyCam();
  setupFreeHands();
  points = [];
  brush = customBrush;
}

// ############################################################################
// ##############################  Draw  ######################################
// ############################################################################
function drawGrid() {
  push();
  strokeWeight(0.8);
  stroke("green");
  grid({ dotted: false });
  pop();
}

function setPointAttributes(velocity) {
  speed = constrain(vel / (2 * (width - height)), 0, 1);

  mappedHue = map(vel, 0, 200, 5, 170);
  mappedSize = map(vel, 0, 200, 0, 1);
  mappedDepth = map(vel, 0, 200, 0.1, 1.4);

  pointDepth = depthOrientation * mappedDepth - sqrt(mappedDepth) / 10;
  pointSize = basePointSize + size_Factor * mappedSize;
}

function capturePoints() {
  dx = abs(mouseX - pmouseX);
  dy = abs(mouseY - pmouseY);

  vel = dx + dy;

  setPointAttributes(vel);

  if (record) {
    points.push({
      worldPosition: treeLocation([mouseX, mouseY, pointDepth], {
        from: "SCREEN",
        to: "WORLD",
      }),
      color: [mappedHue, 100, 100], //HSB: hue, sat, brig
      speed: speed,
      size: pointSize,
    });
  }
}

function draw() {
  background(12);
  capturePoints();
  drawGrid();
  axes();
  fingerPaint();
  drawHands();
  for (const point of points) {
    push();
    translate(point.worldPosition);
    brush(point);
    pop();
  }
}

function customBrush(point) {
  push();
  noStroke();
  colorMode(HSB);
  fill(point.color[0], point.color[1], point.color[2]);
  sphere(point.size);
  pop();
}

function fingerPaint() {
  // Canvas bounds to make drawing easier
  // Since the canvas is inside an Iframe, we reach out and get it's containing iframe's bounding rect
  let bounds = document.querySelector("canvas").getClientRects()[0];
  // Check for pinches and create dots if something is pinched
  const hands = handsfree.data?.hands;

  // Paint with fingers
  if (hands?.pinchState) {
    // Loop through each hand
    hands.pinchState.forEach((hand, handIndex) => {
      // Loop through each finger
      hand.forEach((state, finger) => {
        if (hands.landmarks?.[handIndex]?.[fingertips[finger]]) {
          // Landmarks are in percentage, so lets scale up
          let x =
            sketch.width -
            hands.landmarks[handIndex][fingertips[finger]].x * sketch.width;
          let y =
            hands.landmarks[handIndex][fingertips[finger]].y * sketch.height;

          // Start line on the spot that we pinched
          if (state === "start") {
            prevPointer[handIndex][finger] = { x, y };
            // Add a line to the paint array
          } else if (state === "held") {
            dx = abs(x - prevPointer[handIndex][finger].x);
            dy = abs(y - prevPointer[handIndex][finger].y);

            vel = dx + dy;

            setPointAttributes(vel);

            points.push({
              worldPosition: treeLocation([x, y, pointDepth], {
                from: "SCREEN",
                to: "WORLD",
              }),
              color: [mappedHue, 100, 100], //HSB: hue, sat, brig
              speed: speed,
              size: pointSize,
            });
          }
          // Set the last position
          prevPointer[handIndex][finger] = { x, y };
        }
      });
    });
  }
}

function drawHands() {
  const hands = handsfree.data?.hands;

  // Bail if we don't have anything to draw
  if (!hands?.landmarks) return;

  // Draw keypoints
  hands.landmarks.forEach((hand, handIndex) => {
    hand.forEach((landmark, landmarkIndex) => {
      // Set color
      // @see https://handsfree.js.org/ref/model/hands.html#data
      if (colorMap[handIndex]) {
        switch (landmarkIndex) {
          case 8:
            fill(colorMap[handIndex][0]);
            break;
          case 12:
            fill(colorMap[handIndex][1]);
            break;
          case 16:
            fill(colorMap[handIndex][2]);
            break;
          case 20:
            fill(colorMap[handIndex][3]);
            break;
          default:
            fill(color(255, 255, 255));
        }
      }
      // Set stroke
      if (handIndex === 0 && landmarkIndex === 8) {
        stroke(color(255, 255, 255));
        strokeWeight(5);
        circleSize = 40;
      } else {
        stroke(color(0, 0, 0));
        strokeWeight(0);
        circleSize = 10;
      }

      circle(
        // Flip horizontally
        -(sketch.width - landmark.x * sketch.width),
        -landmark.y * sketch.height,
        circleSize
      );
    });
  });
}

// ############################################################################
// ##############################  Button keys  ###############################
// ############################################################################

function keyPressed() {
  if (key === "r" || key === "R") {
    record = !record;
  }
  if (key === "p" || key === "P") {
    escorzo = !escorzo;
    escorzo ? perspective() : ortho();
  }
  if (key == "c") {
    points = [];
  }
  if (key == "i" || key == "I") {
    depthOrientation *= -1;
  }
}

function mouseWheel(event) {
  //comment to enable page scrolling
  return false;
}
