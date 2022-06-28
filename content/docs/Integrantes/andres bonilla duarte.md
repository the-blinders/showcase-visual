# Andres Bonilla Duarte

## Intereses Academicos:

Un estudiante con inters en el arte, el cine y la música, en busqueda de posibilidad para usar la ingenieria y la programación para apoyar procesos artisticos. El trabajo en equipo, la gestión y gerencia de proyectos, junto con el desarrollo de software y el diseño gráfico son los intereses principales. Es Fundamental ver la capacidad y potencial que un buen equipo puede tener y los objetivos que este puede lograr. La inovación surge de la interaccion entre personas, la comunidad que creamos es nuestro mayor recurso tecnologico.

## Pasatiempos:

Me interesa mucho el arte y la recreación: la música, el cine los videojuegos, el aire libre, montar en bicicleta, el dibujo y salir a compartir tiempo con mis amigos y familia.

# Taller 3: Shaders

## Introducción

Shaders, son un gran elemento de software en la computación visual, un método para realizar gráficos por cómputo para diferentes tipos de poroyectos, aprovechando una serie de ventajas en el uso de recursos de hardware, principalmente el uso de GPUs. Un shader permite realizar operaciones que determinan las propiedades visuales de un píxel, de manera simultánea para todos los píxeles en el espacio proyectado. El uso de shader presenta ventajas en factores como el ratio de frames por segundo (FPS), la complejidad de los gráficos producidos es más rica, el costo en recursos energéticos y computacionales. veremos la aplicación de una textura sobre una superficie, como ejemplo.

Se utilizará la herramienta P5.js como entorno, para explorar su arquitectura de shaders, los principales métodos para cargar y aplicar shaders a figuras y superficies, y practicar el uso de los recursos 3D y 2D de WEBGL

## Marco Teórico

En computación visual, un shader es un programa de cómputo que calcula los niveles apropiados de luz, oscuridad y color durante el renderizado de elementos gráficos tanto en 2D como 3D en un proceso conocido como shading. Los Shaders han evolucionado para realizar varias funciones especializadas en gráficos computacionales, como efectos especiales y post-producción de video, también aplicaciones generales o de todo propósito en el campo visual computacional.

Los shaders tradicionalmente calculan los efectos utilizando hardware gráfico que está especializado para ser un pipeline con alto grado de flexibilidad. Se utiliza la unidad de proceso gráfico (GPU) La posición y el color (hue, saturación, brillo y contraste) de todos los píxeles, vértices y/o texturas usados para construir un renderizado final de una imagen, pueden ser alterados utilizando algoritmos definidos en el shader, y pueden ser alterados según las operaciones y variables aplicadas en el programa shader.

El término “Shader” fue introducido al público por el estudio de animación Pixar, con la versión 3.0 de su “RenderMan Interface” especificación, publicado originalmente en mayo de 1988.

#### texture.vert

el archovo .vert es un segnemto de código que se ocupa de los vertex, toda la geometría y formas,como su posición en el canvas. Las figuras en 3D estan connectados, esto se conoce como "mesh" en p5, en este ejemplo se utilizó `Spere()` como superficie para aplicar el shader. Este archivo requiere, entre otras condiciones basicas de configuración, la variable `gl_Position`

#### texture.frag

El archivo .frag maeja todo lo relacionado con el color de los pixeles, termina con la variable de entorno: `gl_FragColor`

## Desarrollo

Explorando el ejemplo de shaders como texturas, encontrado en el excelente recurso: https://itp-xstory.github.io/p5js-shaders/#/. Se evidencian las facilidades para el estudio de shaders con la herramienta P5.

#### sketch.js

En la función `preload()` es donde se establecen los archivos que componen el shader.

```
function preload(){
  // load the shader
  theShader = loadShader('texture.vert','texture.frag');
}
```

En la función `setup()` se establece el uso de WEBGL en el canvas y tambien en un onjeto p5.Renderer, creado con `createGraphics()` para aplicar nuestro shader mas adelante

```
  // initialize the createGraphics layers
  shaderTexture = createGraphics(710, 400, WEBGL);
```

En la función `draw()` establecemos el shader como la textura para aplicar sobre las figuras en el canvas.

```
  // pass the shader as a texture
  // anything drawn after this will have this texture.
  texture(shaderTexture);
```

#### texture.vert

```
  // send the vertex information on to the fragment shader
  gl_Position = positionVec4;
```

#### texture.frag

Comandos que nos poermiten intercambio de información en los namesapces del sketch.js y el mainde del achivo .frag

```
uniform vec2 resolution;
uniform float time;
uniform vec2 mouse;

```

Al final del main se retorna la variable `gl_FragColor` en forma de vec4, utilizando un vec3 para los primeros parametros, los que difinen numericamente el color. Ese vec3 utiliza las distintas funciones definidas en el archivo para generar este particular shader.

```
vec3 color = vec3(concentricCircles(st, vec2(0.0,0.0), 5.0, 5.0),concentricCircles(st, vec2(0.0,0.0), 10.0, 10.0),concentricCircles(st, vec2(0.0,0.0), 20.0, 10.0));

gl_FragColor = vec4(color,1.0);

```

<iframe src="https://editor.p5js.org/aabonillad/full/0UctAkoQw" width = "710" height="400"></iframe>

## Conclusiones

Es evidente el gran potencial que el uso del shader presenta para diversas aplicaciones en gráficos por computador, sigue siendo un campo de estudio reciente en cierta medida y sigue manteniendo mucho terreno sin explorar. El uso de Shaders puede considerarse como uno de los factores que ha permitido a la tecnologia soportar industrias digitales como el Cine y lo Videojuegos, evidenciando un valor como tecnología para los sectores digitales.

El estudio de shaders requiere la exploración de nuevos paradigmas y metodos para generar la interacción correcta entre los archivos .frag y .vert que componen el shader.

## Trabajo Futuro

Como seguiemiento en la exploración de este ejemplo, se buscará la busqueda de las capacidades del sistemas para aplicar el shader a mas numerosas y complejas superfecies en el espacio proyectado por el programa. El caso ideal seria encontrar efectos mejores y más interesantes, con el mejor rendimieto posible, desarrollando tanto la sensibilidad estitica como la logica de programación. Una vez se realizan ojetos con superficies que ietectuan con color y luz, se presenta la curiosidad respecto a las posibilidades de olisiones entre objetos y su representación en un entorno de simulación.

## Referencias

- Ejemplo Shader como Textura sobre superficies 2D y 3D:
  https://itp-xstory.github.io/p5js-shaders/#/./docs/examples/shaders_to_shapes

- github.com/visualComputing/VertexShader
  https://itp-xstory.github.io/p5js-shaders/#/./docs/important-concepts

- https://www.shadertoy.com/playlist/featured
