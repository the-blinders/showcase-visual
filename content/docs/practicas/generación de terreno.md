# Generación de terreno en una superficie esférica:

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

## Fenomeno Visual: Bandas de Mach (en progreso)

Es una ilusión visual que detona la detección de bordes o fronteras en el ojo humano, al colocar consecutivamente bandas de ligeramente diferentes tonos de grises, se experimenta la percepción de tener bordes más acentuados entre ellos. El fenómeno fue identificado en 1865 por el físico Ernst Mach que conjeturó que esta ilusión óptica se origina en el proceso llevado en la retina que practica inhibición lateral entre sus neuronas. El conocimiento de este efecto es importante en campos como la radiología, en donde es un factor para determinar en, un estudio radiológico, síntomas de desgaste, límites entre materiales o en ocasiones al mal diagnóstico de síntomas de neumotórax. En la computación visual lo encontramos como un concepto prominente al ser usado en la generación de gradientes y verse reflejado en métodos como el unsharp masking que realiza la detección de bordes de manera homóloga a la visión humana.

{{< p5-iframe sketch="/showcase-visual/sketches/blinders/sphereTerrain.js" width="635" height="655" >}}

## Esféra con ruido

{{< p5-iframe sketch="/showcase-visual/sketches/blinders/noise-sphere.js" width="635" height="655" >}}
