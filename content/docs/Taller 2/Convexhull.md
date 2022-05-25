## Problema de la cáscara

Cuando tenemos un conjunto de puntos en el espacio, podemos crear una cáscara.
Esta cáscara es un poliedro con el menor número de vértices y caras posibles que cubra todos los puntos.

{{< figure src="https://aws1.discourse-cdn.com/standard17/uploads/threejs/original/2X/0/0135507da4527928b8c0b439f4acc3fa350c7976.png"  >}}

## La esfera

El objetivo inicial se basaba en la generación de un espacio esférico, caracterizado por distribuir de manera no rectangular sus puntos en la superficie. para ello se buscó usar una diferente alternativa encontrando buenos resultados en la distribución de fibonnacci como se muestra a continuación:


                
<iframe src="https://editor.p5js.org/degarzonm/full/JjB1zo4f5"
width="800"
height="600"
></iframe>
Resolver el problema de distribuir equitativamente puntos sobre una esfera ha sido explorado por diversos sectores de la matemática, Química, Computación Visual, análisis numérico, cristalografía, entre otros. A pesar de ser de interés para muchas áreas solo unas pocas de ellas en encontrar soluciones óptimas, dejando esta área buscando en la mayoría de los casos soluciones aproximadas optimizadas. La aplicación tradicional de Fibonacci Lattice cuenta con dos problemas fundamentales, uno es que este mapeo conserva las áreas pero no las distancias, haciéndo lo mal candidato para solucionar problemas de optimización de distancia. El segundo es que geométricamente la distribución cuenta con un punto de singularidad en cada uno de los polos, en caso de la esfera.


```js
function EsferaFibonacci(x0, y0, z0, r, n) {
    const vertices = [];

    let numeroAureo = (1 + 5 ** 0.5) / 2;

    for (let i = 0; i < n; i++) {
        let θ = (2 * Math.PI * i) / numeroAureo;
        let φ = Math.acos(1 - (2 * (i + 0.5)) / n);
        let x = x0 + r * Math.cos(θ) * Math.sin(φ);
        let y = y0 + r * Math.sin(θ) * Math.sin(φ);
        let z = z0 + r * Math.cos(φ);
        vertices.push(new THREE.Vector3(x, y, z));
    }


    return vertices;
}
```

## La cáscara
Para generar el cascarón, debemos implementar una función que nos permita generar un poliedro con el menor número de vértices y caras posibles que cubra todos los puntos. usando una estrategia de divide y vencerás, dividimos los puntos iniciales en varios grupos con menor cantidad de puntos, y luego iteramos hasta que el número de vértices sea el mínimo posible para empezar a construir el poliedro.

Luego combinamos las geometrías eliminando las caras y generando unas nuevas
{{< figure src="https://i.imgur.com/ztCHPqO.png"  >}}

## Trabajo futuro

- Analizar y comprender las transformaciones geométricas dentro de three.js
- Embeber los scripts de Three.js dentro de esta página web.
