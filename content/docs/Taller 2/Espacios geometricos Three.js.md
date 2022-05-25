# Espacios geométricos p5.js vs Three.js

Three.js es una biblioteca liviana escrita en JavaScript para crear y mostrar gráficos animados por computadora en 3D en un navegador Web y puede ser utilizada en conjunción con el elemento canvas de HTML5, SVG o WebGL. El código fuente está alojado en un repositorio en GitHub.

Se ha popularizado como una de las más importantes para la creación de las animaciones en WebGL.

{{< figure src="https://i.imgur.com/ygvUXeo.png"  >}}


## Renderer
El elemento principal, `Three.js` es el renderer. El renderer es el responsable de renderizar la escena. debemos pasarle como parámetro una cámara inicial y una escena.


## Cámara

Existen dos modos para crear una cámara:
- Perspectiva
- Ortogonal

La cámara en perspectiva usa 4 parametros:
- Fov: angulo de vision
- Aspect ratio: relacion de aspecto
- Near: distancia mínima
- Far: distancia máxima

Similar a cómo se trabaja en p5.js, se puede crear una cámara con los siguientes métodos:

```js
const camara = new THREE.PerspectiveCamera(fov, aspectRatio, near, far);
```

{{< figure src="https://www.researchgate.net/profile/Laurent-Moccozet/publication/216127594/figure/fig5/AS:651866769735680@1532428557051/Camera-perspective-To-illustrate-the-camera-frustum-manipulation-we-create-two-separated.png"  >}}

La cámara en ortogonal usa 4 parametros:
- Left: distancia a la izquierda
- Right: distancia a la derecha
- Top: distancia arriba
- Bottom: distancia abajo
- Near: distancia mínima
- Far: distancia máxima

```js
const camara = new THREE.OrthographicCamera(left, right, top, bottom, near, far);
```

{{< figure src="https://www.researchgate.net/profile/Michael-Birsak/publication/264883107/figure/fig7/AS:295899159908357@1447559265266/View-frustum-of-the-orthographic-camera-used-to-render-the-masks-All-primitives-are.png"  >}}


## Escena
Las escenas le permiten configurar qué objetos y dónde se renderizarán. Aquí es donde colocas objetos, luces y cámaras.

{{< figure src="https://i.imgur.com/oSlABLD.png">}}

## Grafo de escenas
El principal elemento de `Three.js` es posiblemente su grafo de escenas. Un grafo de escenas en un motor 3D funciona como una jerarquía de nodos en donde cada nodo representa un espacio local, similar a cómo se trabaja mediante transformaciones en `p5.js`.