let vertexMetaData;
let vertices = [];

function setup() {
  createCanvas(600, 600, WEBGL);
  textSize(23);
  textAlign(CENTER, CENTER);
  //crea los sliders en la parte superior del canvas
  radio = createSlider(200, 400, 200);
  radio.position(0, 10);
  radio.style("width", "100px");
  radio.input(rNCambio);

  npuntos = createSlider(120, 200, 30);
  npuntos.position(0, 30);
  npuntos.style("width", "100px");
  npuntos.input(rNCambio);

  delta = createSlider(20, 200, 30);
  delta.position(0, 50);
  delta.style("width", "100px");

  paletaColor = createColorPicker("#CFCFCF");
  paletaColor.position(0, height + 5);
  paletaColor.input(setShade1);

  vertices = esferaFibonacci(0, 0, 0, radio.value(), npuntos.value());

  vertexMetaData = menor(vertices);
}

function draw() {
  orbitControl();

  background(10);
  stroke(0.1);
  box(40);
  //rotateY(frameCount/900)

  //vertices=esferaCartesiana(0,0,0,radio.value(),npuntos.value()/50)

  pintarVertices(vertices, delta.value());
  //pintarEsferas(vertices,delta.value());
  //pintarCaras(vertices)
  strokeWeight(1);

  for (let i = 0; i < 120; i++) {
    beginShape();

    let { x, y, z } = vertices[i];
    let v1 = { x, y, z };
    let v2 = vertexMetaData[i][1].vertex;
    let v3 = vertexMetaData[i][2].vertex;
    ///console.log({v1,v2,v3})

    vertex(v1.x, v1.y, v1.z);
    vertex(v2.x, v2.y, v2.z);
    vertex(v3.x, v3.y, v3.z);
    vertex(v1.x, v1.y, v1.z);
    endShape();
    beginShape();

    v2 = vertexMetaData[i][0].vertex;
    v3 = vertexMetaData[i][4].vertex;
    ///console.log({v1,v2,v3})

    vertex(v1.x, v1.y, v1.z);
    vertex(v2.x, v2.y, v2.z);
    vertex(v3.x, v3.y, v3.z);
    vertex(v1.x, v1.y, v1.z);
    endShape();
  }
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
  return vertices;
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

function pintarVertices(vertices, limite) {
  stroke(255, 55, 55);
  beginShape(POINTS);
  //vertices.forEach((v) => vertex(v.x, v.y, v.z));
  for (let i = 0; i < limite && i < vertices.length; i++) {
    let v = vertices[i];
    vertex(v.x, v.y, v.z);
  }
  endShape();
}

function pintarEsferas(vertices, limite, r = 10) {
  //noStroke(0)
  strokeWeight(0.2);
  let fin = min(limite, vertices.length);
  //vertices.forEach((v) => vertex(v.x, v.y, v.z));
  for (let i = 0; i < fin; i++) {
    let v = vertices[i];
    push();
    fill(0, (255 * (fin - i)) / fin, (255 * i) / fin);

    translate(v.x, v.y, v.z);
    sphere(r / 2);

    text(`${i}`, 2.1 * r, 0);
    pop();
  }
}

function pintarCaras(v) {
  fill("#99E8E7");
  beginShape(TRIANGLES);

  endShape();
}

function compare(a, b) {
  if (a.distance < b.distance) {
    return -1;
  }
  if (a.distance > b.distance) {
    return 1;
  }
  return 0;
}

//should return a vertices.length object list with the 7 neasrest vertex: [{v1:{pos,vertex,distance},v2:{pos,vertex,distance}},...]
function menor(vertices) {
  let delta = 30;
  // [-Δ ___________ i ___________ Δ]
  let result = [];

  //recorre cada vertice [i]

  for (var i = 0; i < vertices.length; i++) {
    let temp = [];
    for (var j = 1; j <= delta; j++) {
      let dRigthVer = -1;
      let dLeftVer = -1;

      //obtine la distancia de los delta vertices adyacentes [j]
      //almacena temporalmente:
      //  pos:indice del vertice delta
      //  vertex: {x,y,z} del vertice delta
      //  distance: distancia con el vertice pivote (i)

      if (i + j < vertices.length) {
        dRigthVer = customDistance(vertices[i], vertices[i + j]);
        let { x, y, z } = vertices[i + j];
        temp.push({ pos: i + j, vertex: { x, y, z }, distance: dRigthVer });
      }

      if (i - j >= 0) {
        dLeftVer = customDistance(vertices[i], vertices[i - j]);
        let { x, y, z } = vertices[i - j];
        temp.push({ pos: i - j, vertex: { x, y, z }, distance: dLeftVer });
      }
    }
    //organiza el arreglo de menor a mayor distancias
    temp.sort(compare);
    //push los 7 vertices más cercanos al result [i]
    temp = temp.slice(0, 7);
    result[i] = temp;
  }
  console.log(result);
  return result;
}

function customDistance(u, v) {
  return dist(u.x, u.y, u.z, v.x, v.y, v.z);
}

////////////////
////INTERFAZ////
////////////////
function mouseClicked() {}

function keyPressed() {
  if (key == "l") {
    if (delta.value() > npuntos.value()) {
      delta.value(npuntos.value() - 3);
    } else if (delta.value() === npuntos.value()) {
      delta.value(1);
    } else {
      delta.value(delta.value() + 1);
    }
  }
  if (key == "k") {
    if (npuntos.value() > 300) {
      npuntos.value(1);
    } else {
      npuntos.value(npuntos.value() + 1);
    }
  }
}

function rNCambio() {
  vertices = esferaFibonacci(0, 0, 0, radio.value(), npuntos.value());
}

function setShade1() {
  fill(paletaColor.color());
}
