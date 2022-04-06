# Prácticas

## Sólido platónico:

Este sólido platónico está generado usando las funciones beginShape() y endShape().
Tiene 2 vertices pivote en 0,0,r y 0,0,-r donde r es un radio definido en este caso de 100.

Los vertices parametizables qu definen el resto de las caras del sólido se seleccionan sobre una circurfenrencia de radio r que habita el plano xy.

Los 3 sliders ubicados a la izquierda son los parametros de velocidad de rotación sobre cada eje. El slide de la derecha es el parametro del número de vertices muestra seleccionados sobre la circunferencia.

{{< p5-iframe sketch="/showcase-visual/sketches/blinders/platonicIris.js" width="725" height="425" >}}

# Ilusión optica:

## Bandas de Mach

## Contexto

## Fenomeno Visual

Es una ilusión visual que detona la detección de bordes o fronteras en el ojo humano, al colocar consecutivamente bandas de ligeramente diferentes tonos de grises, se experimenta la percepción de tener bordes más acentuados entre ellos. El fenómeno fue identificado en 1865 por el físico Ernst Mach que conjeturó que esta ilusión óptica se origina en el proceso llevado en la retina que practica inhibición lateral entre sus neuronas. El conocimiento de este efecto es importante en campos como la radiología, en donde es un factor para determinar en, un estudio radiológico, síntomas de desgaste, límites entre materiales o en ocasiones al mal diagnóstico de síntomas de neumotórax. En la computación visual lo encontramos como un concepto prominente al ser usado en la generación de gradientes y verse reflejado en métodos como el unsharp masking que realiza la detección de bordes de manera homóloga a la visión humana.

## Terreno con Ruido de Perlin (Perlin Noise)

Perlin Noise es un tipo de ruido de gradiente que es usado para generar distribuciones que visualmente se asemejan al terreno natural comunicando su complejidad, su valor como herramienta ha sido aprovechada por artistas e innovadores para aumentar el realismo de sus representaciones, reflejando una apariencia irregular y semi aleatoria, pero en realidad sus partes geométricas sin iguales, aumentando su potencial para uso práctico. Como grupo seleccionamos esta aplicación como reto a desarrollar, buscamos implementar una generación de terreno sobre la superficie de una esfera.

## Como distribuir puntos en una esfera - Variación de Fibonacci Lattice

Resolver el problema de distribuir equitativamente puntos sobre una esfera ha sido explorado por diversos sectores de la matemática, Química, Computación Visual, análisis numérico, cristalografía, entre otros. A pesar de ser de interés para muchas áreas solo unas pocas de ellas en encontrar soluciones óptimas, dejando esta área buscando en la mayoría de los casos soluciones aproximadas optimizadas. La aplicación tradicional de Fibonacci Lattice cuenta con dos problemas fundamentales, uno es que este mapeo conserva las áreas pero no las distancias, haciéndo lo mal candidato para solucionar problemas de optimización de distancia. El segundo es que geométricamente la distribución cuenta con un punto de singularidad en cada uno de los polos, en caso de la esfera.

## Diagrama Voronoi

Se considera un diagrama de Voronoi a una partición de un plano en regiones cercanos a un conjunto de objetos, en el caso más sencillo es un conjunto de puntos en el plano a manera de objetos llamados semillas que se relacionan cada una con una región llamada una celda de Voronoi

## Delaunay Triangulation y su Aplicación en una Esfera

La triangulación de Delanuay es proceso que maximiza el ángulo mínimo de todos los triángulos de la triangulación, la distribución es nombrada en honor a Boris Delaunay en 1934

El problema a solucionar es la aparición de patrones de distribución notablemente diferentes cerca de los polos de la esfera al utilizar distribuciones como la de fibonacci. Podemos utilizar triangulación de Delaunay para encontrar una mejor distribución de los puntos sobre la esfera, este proceso puede ser aplicado siguiendo tres pasos: proyectar los puntos iniciales de la esfera sobre un plano, sobre los puntos del plano se lleva a cabo la triangulación de Delaunay para modificar los datos de entrada y no la librería 2D a 3D, por último se enrollan los puntos del plano nuevamente a la superficie de la esfera.

Sobre uno de los polos de la esfera se produce un área en donde los planos al límite del plano forman un polígono que debe completarse para cubrir completamente el área de la esfera.

{{< p5-iframe sketch="/showcase-visual/sketches/blinders/illusion-1.js" width="625" height="625" >}}

## Conclusiones y Trabajo Futuro

En el área de la computación visual el estudio de distribuciones uniformes de puntos sobre superficies tiene un impacto contundente en el desarrollo de sistemas que permitan desplegar visualizaciones de terrenos y superficies con características realistas, Buscando optimizar el rendimiento computacional, con el usos de geometrías regulares de triángulos distribuidos. En el salto de 2D a 3D deben tenerse en cuenta factores como disponibilidad de herramientas o librerias geometricas, y con la transición de modelos matemáticos efectivos sobre el plano para el uso en solidos, dado que al someter esta geometría sólida la búsqueda de una distribución podemos encontrar problemas de Optimización y de área de cobertura sobre nuestro sólido. En la actualidad las aplicaciones visuales en tecnologias incluyen la realidad virtual y aumentada, el desarrollo de videojuegos, representación geogréfica, entre otros.

## Referencias

En.wikipedia.org. 2022. Delaunay triangulation - Wikipedia. [online] Available at: <https://en.wikipedia.org/wiki/Delaunay_triangulation> [Accessed 5 April 2022].

En.wikipedia.org. 2022. Voronoi diagram - Wikipedia. [online] Available at: <https://en.wikipedia.org/wiki/Voronoi_diagram> [Accessed 5 April 2022].

En.wikipedia.org. 2022. Mach bands - Wikipedia. [online] Available at: <https://en.wikipedia.org/wiki/Mach_bands> [Accessed 5 April 2022].

En.wikipedia.org. 2022. Perlin noise - Wikipedia. [online] Available at: <https://en.wikipedia.org/wiki/Perlin_noise> [Accessed 5 April 2022].

Extremelearning.com.au. 2022. How to evenly distribute points on a sphere more effectively than the canonical Fibonacci Lattice | Extreme Learning. [online] Available at: <http://extremelearning.com.au/how-to-evenly-distribute-points-on-a-sphere-more-effectively-than-the-canonical-fibonacci-lattice/> [Accessed 5 April 2022].

Enlaces Adicionales

http://extremelearning.com.au/how-to-evenly-distribute-points-on-a-sphere-more-effectively-than-the-canonical-fibonacci-lattice/
https://www.redblobgames.com/x/1842-delaunay-voronoi-sphere/
https://en.wikipedia.org/wiki/Delaunay_triangulation
https://en.wikipedia.org/wiki/Voronoi_diagram
https://en.wikipedia.org/wiki/Boris_Delaunay
https://en.wikipedia.org/wiki/Mach_bands
https://www.redblobgames.com/x/1842-delaunay-voronoi-sphere/
https://en.wikipedia.org/wiki/Perlin_noise
