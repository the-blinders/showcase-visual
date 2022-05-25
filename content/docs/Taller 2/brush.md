# Brush 3d en un desde un plano 2d

En esta práctica exploramos la adpatación de un trazo bidimensional como un trazo tridimensional.

Partiendo del ejemplo mostrado en [https://visualcomputing.github.io/docs/scene_trees/main_spaces/#3d-brush](https://visualcomputing.github.io/docs/scene_trees/main_spaces/#3d-brush) que permite trazar tridimensionalmente partiendo de un gesto bidimensional.

## Gestos/velocidad
La manera en la que abordamos el problema fue obteniendo la velocidad a la que se desplaza el trazo y haciendo que el color, el tamaño de la brocha dependieran y la profundidad en la que se pinta dependieran de ello.

La entrada detectada por el programa puede ser por medio del puntero del mouse o por medio de la captura de gestos de la mano (pellizcos). Cada metodo de entrada tiene una interacción diferente para intercambiar entre brochas. 

En términos de brochas, existen 2 brochas posibles:

- Brocha esférica con tonos cálidos *(default)*
- Brocha cúbica con tonos fríos

## Entradas
### Entrada por mouse

La entrada por mouse *(default)* requiere que se presione la tecla **R** o **r** para activar/desactivar el trazo de la brocha.

Para realizar cambio de brocha se require que se presione la tecla **X** o **x**.

Para limpiar el lienzo se debe presionar la tecla **C** o **c**


### Entrada por gestos de mano en la cámara

La entrada por gestos de mano requiere que se activen los permisos de Acceso a la cámara en el navegador. Una vez activado, se debe posicionar la mano en frente de la cámara con la palma apuntando al lente. 

Una vez posicionada la mano, se activan los trazos sobre el lienzo realizando un pellizco. Entiendase por pellizco la acción de juntar el dedo pulgar con cualquier otro dedo de la mano. 

La seleeción de la brocha de esta manera se identifica con el dedo de la mano con el que se realiza el pellizco:  

- **Índice** y **central** : brocha esférica tonos calidos.
- **Anular** y **meñique**: brocha cúbica con tonos fríos.
 
## Atributos de las brochas y reacción a interactividad

- El tamaño de la figura 3d tiene como valor base 1, al cual se el suma un factor de 3 multiplicado por la velocidad del puntero mapeada de 0 a 1.

- El color de los puntos estan en modo HSB , con el valor del  Hue dependiente de la velocidad del mouse, mapeado de 5 a 220 para los tonos cálidos y de 200 a 360 para los tonos fríos.

{{< figure src="https://us.123rf.com/450wm/myndouwe/myndouwe1609/myndouwe160900008/65990122-colores-rueda-de-color-rgb-nombres-grados-hsb-hsv-tonalidad.jpg?ver=6" title="HSB Color mode" >}}

## Trabajo futuro

Desarrollar una paleta de pinceles más diversa que acepte diferentes tipos de interactividad más allá de la velocidad del puntero para modificar un conjunto de atributos más amplio que los modificados en este taller.

Añadir más customización para los diferentes atributos de los trazos como los colores de los gradientes, tamaños de los objetos, etc...

Extrapolar la interactividad extendida para permitir una rotación del espacio tridimensional haciendo uso de otra mano.

### Herramientas externas usadas

*(handsfree.js)* 

{{< p5-iframe sketch="/showcase-visual/sketches/blinders/3dbrush.js" 
lib1="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5.treegl.js" 
lib2="https://cdn.jsdelivr.net/gh/freshfork/p5.EasyCam@1.2.1/p5.easycam.js" 
lib3="https://unpkg.com/handsfree@8.4.2/build/lib/handsfree.js"
width="625" height="475" >}}
<iframe src="https://editor.p5js.org/jhac/full/rIsGVkl3C"
width="625"
height="475"
></iframe>

<!-- 
{{< p5-iframe sketch="/showcase-visual/sketches/blinders/refhands.js" 
lib1="https://unpkg.com/handsfree@8.4.2/build/lib/handsfree.js" 
lib2="https://cdn.jsdelivr.net/gh/freshfork/p5.EasyCam@1.2.1/p5.easycam.js" 
width="625" height="475" >}} -->
