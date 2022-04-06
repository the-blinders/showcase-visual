function setup() {
  let sliders_gap = 10;
  createCanvas(700, 400, WEBGL);
  detailX = createSlider(0, 50, 20);
  detailX.position(15, sliders_gap);
  detailX.style("width", "200px");

  detailY = createSlider(0, 50, 20);
  detailY.position(15, 3 * sliders_gap);
  detailY.style("width", "200px");

  detailZ = createSlider(0, 50, 20);
  detailZ.position(15, 5 * sliders_gap);
  detailZ.style("width", "200px");
}

function draw() {
  let dirLigthX = (mouseX / width - 0.5) * 2;
  let dirLigthY = (mouseY / height - 0.5) * 2;

  directionalLight(0, 250, 0, -dirLigthX, -dirLigthY, 0);
  directionalLight(0, 0, 250, -dirLigthX, -dirLigthY, 10);
  directionalLight(250, 0, 0, -dirLigthX, -dirLigthY, -10);

  rotateY((frameCount * detailX.value()) / 1000);
  rotateZ((frameCount * detailY.value()) / 1000);
  rotateX((frameCount * detailZ.value()) / 1000);
  background(255);
  specularMaterial(250);
  shininess(1);

  dibujarCube(120);
}

function dibujarCube(l) {
  beginShape();
  vertex(0, 0, 0);
  vertex(0, l, 0);
  vertex(l, l, 0);
  vertex(l, 0, 0);
  vertex(0, 0, 0);
  vertex(0, 0, l);
  vertex(0, l, l);
  vertex(0, l, 0);
  vertex(0, l, l);
  vertex(l, l, l);
  vertex(l, l, 0);
  vertex(l, l, l);
  vertex(l, 0, l);
  vertex(l, 0, 0);
  vertex(l, 0, l);
  vertex(0, 0, l);
  endShape();
}
