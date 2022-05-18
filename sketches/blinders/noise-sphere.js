let song;
var volumen;
var fftN = 512;
function preload() {
  song = loadSound("canc.ogg");
}

let vertices = [];

function setup() {
  //sonido setup
  createCanvas(600, 600, WEBGL);
  fft = new p5.FFT();

  //botones
  button = createButton("▶ ⏸");
  button.position(0, 0);
  button.mousePressed(playButtonAction);

  buttonR = createButton("Rand");
  buttonR.position(0, 30);
  buttonR.mousePressed(randomButtonAction);

  buttonRes = createButton("Reset");
  buttonRes.position(60, 30);
  buttonRes.mousePressed(resetSphereButtonAction);

  volumen = createSlider(0, 1, 0.8, 0.05);
  volumen.position(50, 0);
  volumen.style("width", "70px");
  volumen.input(cambioVolumen);

  //crea los sliders en la parte superior del canvas
  radio = createSlider(0, 400, 200);
  radio.position(width, 10);
  radio.style("width", "100px");
  radio.input(rNCambio);

  npuntos = createSlider(0, 2000, 1600);
  npuntos.position(width, 30);
  npuntos.style("width", "100px");
  npuntos.input(rNCambio);

  delta = createSlider(0, 0.1, 0.3, 0.001);
  delta.position(width, 50);
  delta.style("width", "100px");

  paletaColor = createColorPicker("#DD1C1C87");
  paletaColor.position(0, height + 5);
  paletaColor.input(setShade1);

  vertices = esferaFibonacci(0, 0, 0, radio.value(), npuntos.value());
}

function draw() {
  let espectro = fft.analyze(fftN);

  orbitControl();

  background(10);
  stroke(0);
  box(80);
  rotateX(0.008 * frameCount);
  rotateY(0.08 * sin(frameCount / 40));

  pintarVertices(vertices, espectro);
}

function esferaFibonacci(x0, y0, z0, r, n) {
  let v = [];

  let goldenRatio = (1 + 5 ** 0.5) / 2;

  for (let i = 0; i < n; i++) {
    let θ = (2 * PI * i) / goldenRatio;
    let φ = acos(1 - (2 * (i + 0.5)) / n);
    let x = x0 + r * cos(θ) * sin(φ);
    let y = y0 + r * sin(θ) * sin(φ);
    let z = z0 + r * cos(φ);
    v.push(createVector(x, y, z));
  }
  return v;
}

function pintarVertices(vertices, frq) {
  beginShape(POINTS);

  vertices.forEach((v, index) => {
    v_normal = p5.Vector.normalize(v);
    v_final = p5.Vector.add(v, v_normal.mult(frq[index % fftN]));
    stroke(frq[index % fftN], 155, 155);
    vertex(v_final.x, v_final.y, v_final.z);
  });

  endShape();
}

function ruidoRadial(ver, r, del = 0.05) {
  let vertices_final = [];
  ver.forEach((v) => {
    v_normal = p5.Vector.normalize(v);
    v_final = p5.Vector.add(v, v_normal.mult(random(-del * r, del * r)));
    vertices_final.push(createVector(v_final.x, v_final.y, v_final.z));
  });

  return vertices_final;
}

function rNCambio() {
  vertices = esferaFibonacci(0, 0, 0, radio.value(), npuntos.value());
}

function setShade1() {
  fill(paletaColor.color());
}

function cambioVolumen() {
  song.setVolume(volumen.value());
}

function playButtonAction() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function randomButtonAction() {
  vertices = ruidoRadial(vertices, radio.value(), delta.value());
}

function resetSphereButtonAction() {
  vertices = esferaFibonacci(0, 0, 0, radio.value(), npuntos.value());
}
