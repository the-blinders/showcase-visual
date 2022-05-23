# Brush 3d en un desde un plano 2d

En esta práctica exploramos la adpatación de un trazo bidimensional como un trazo tridimensional.

Partiendo del ejemplo mostrado en [https://visualcomputing.github.io/docs/scene_trees/main_spaces/#3d-brush](https://visualcomputing.github.io/docs/scene_trees/main_spaces/#3d-brush) que permite trazar tridimensionalmente partiendo de un gesto bidimensional.

### Gestos/velocidad
La manera en la que abordamos el problema fue obteniendo la velocidad a la que se desplaza el puntero dentro del canvas. Haciendo uso de esta velocidad hacemos que el radio de las esferas y el color sean dependientes:

- El radio de cada esfera tiene como valor base 1, al cual se el suma un factor de 3 multiplicado por la velocidad del mouse mapeada de 0 a 1.

- El color de los puntos estan en modo HSB , con el valor del  Hue dependiente de la velocidad del mouse, mapeado de 0 a 150. 

{{< figure src="https://us.123rf.com/450wm/myndouwe/myndouwe1609/myndouwe160900008/65990122-colores-rueda-de-color-rgb-nombres-grados-hsb-hsv-tonalidad.jpg?ver=6" title="HSB Color mode" >}}

### Trabajo futuro

Desarrollar una paleta de pinceles más diversa que acepte diferentes tipos de interactividad más allá de la velocidad del mouse para modificar un conjunto de atributos más amplio que los modificados en este workshop.

{{< p5-iframe sketch="/showcase-visual/sketches/blinders/3dbrush.js" 
lib1="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5.treegl.js" 
lib2="https://cdn.jsdelivr.net/gh/freshfork/p5.EasyCam@1.2.1/p5.easycam.js" 
width="625" height="475" >}}

