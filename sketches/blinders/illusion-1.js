function setup() {
  createCanvas(600, 600, WEBGL);

  //crea los sliders en la parte superior del canvas
  radio = createSlider(0, 400, 200);
  radio.position(10, 10);
  radio.style("width", "100px");

  segmentos = createSlider(0, 120, 60);
  segmentos.position(10, 30);
  segmentos.style("width", "100px");

  delta = createSlider(0, 90, 15);
  delta.position(110, 10);
  delta.style("width", "100px");

  strokeWeight(1);
}

function draw() {
  let vertices = [];
  orbitControl();

  background(110);

  box();
  rotateX(0.05 * cos(frameCount / 20));
  rotateY(0.05 * sin(frameCount / 20));
  vertices = esferaCartesiana(0, 0, 0, radio.value(), segmentos.value());
  //fill(0, 102, 153);
}

function esferaCartesiana(x0, y0, z0, r, n) {
  let vertices = [];

  //crea una lista con los vertices de la superficie de la esfera
  for (let θ = 0; θ <= 2 * PI; θ += (2 * PI) / n) {
    for (let φ = 0; φ <= PI; φ += PI / (2 * n)) {
      let x = x0 + r * cos(θ) * sin(φ);
      let y = y0 + r * sin(θ) * sin(φ);
      let z = z0 + r * cos(φ);
      vertices.push(createVector(x, y, z));
    }
  }
  //crea una lista con tres vertices de cada triangulo
  let triangulos = [];

  //dibuja la superficie de la esfera con solo puntos
  beginShape(POINTS);
  vertices.forEach((v) => vertex(v.x, v.y, v.z));
  endShape();
  return vertices;
}
