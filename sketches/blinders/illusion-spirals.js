let angle;

function setup() {
  createCanvas(600, 600);

  radio = createSlider(0, 400, 200);
  radio.position(0, height);
  radio.style("width", "100px");

  noStroke();
  fill(0, 15, 30);
}

function draw() {
  background(210, 50, 50);
  let x = width;
  let dia = 120;
  let num = 100;

  translate(width / 2, height / 2);
  for (let a = 0; a < 360; a += 22.5) {
    rotate(radians(a));
    push();
    for (let i = 0; i < num; i++) {
      scale(0.93);
      rotate(radians(frameCount / radio.value()));
      ellipse(x, 0, dia, dia);
    }
    pop();
  }
}
