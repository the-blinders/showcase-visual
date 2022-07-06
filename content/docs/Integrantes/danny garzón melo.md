# Danny Esteban Garzon Melo

## Intereses Academicos:

Me interesa la pedagogía y las ciencias de datos. Es gratificante transmitir conocimientos. También me interesa la algoritmia y la computación cuántica ya que son componentes muy teóricos de la carrera.

## Pasatiempos:

Mis pasatiempos son la calistenia, cocinar, participar en espacios culturales y la colectividad. fan del autosabotaje


# Trabajo Final:
## Introduccion:

Los shaders son una tecnología sumamente interesante que permite crear animaciones y efectos visuales en una sola línea de código, comprender el funcionameinto y el cambio de paradigma de lo lineal a lo paralelo requiere un completo ejercicio mental que se sale de nuetra intuición, pero el pensar en paralelo es una poderosa herramienta en el gran campo del conocimiento computacional.

## Exploraciones

Uno de las principales fuentes de información sobre shaders fue the [ShaderToy](https://www.shadertoy.com/). además de The book of shaders [ShaderWorks](https://thebookofshaders.com/).

Empezar a desarrollar una aplicación con shaders es una tarea sencila, sin embargo requiere de dos pasos importantes, tener en cuenta el vertex shader para después comunicarnos con el fragment shader. archivos .vert y .frag respectivamente.

Estos archivos contienen código escrito en glsl, que es un lenguaje de sintaxis similar a código c++ 

## Primer shader

El primer Shader creado fue una combinación de dos diferentes shaders, quería pues explorar no solo la capcidad de enviar datos hacia los vértices sino tambén empezar a trabajar con interactividad. dado que p5 mantiene registro del tiempo y el mouse, podemos usarlo para crear una animación.

<iframe src="https://editor.p5js.org/degarzonm/full/Xon6MuDrO"
width="800"
height="600"
></iframe>


## Saltando de dimensión
Luego de avanzar en la creacion de shaders para superficies planas, el reto consistía en aplicar shaders sobre superficies no planas. Para lograrlo debíamos hacerlo en dos pasos:

Definimos el shader sobre un nuevo espacio alterno. 
```
shaderTexture = createGraphics(710, 400, WEBGL);
``` 

Este espacio paralelo puede leer asimismo el mouse y otras variables. por lo que la interacción no se pierde y se puede ajustar a cualquier elemento de la escena.

luego de definir este espacio no pintamos directamente, si no que proyectamos el shader sobre la superficie, el shader es pues tratado como una TEXTURA.

<iframe src="https://editor.p5js.org/degarzonm/full/ouFDkesmd"
width="800"
height="600"
></iframe>

## Shader que mira y transforma

Nos devolvemos un poco a la escena anterior para hacerlo en 2d, pero ahora vamos a crear un shader que hace uso de la cámara web, no solo esto, este ejercicio combina el texturizado mediante datos tomados de la cámara,pues lo transforma en una textura que puede analizar el shader, además, definimos los kernels de convolución desde p5 para que estén disponibles para cada texel. el radio del area de acción es también una varaible uniforme, recordemos que estas varaibles están disponibles para cada texel, que pinta finalmente la textura en pantalla.


<iframe src="https://editor.p5js.org/degarzonm/full/Ao8VajytB"
width="800"
height="600"
></iframe>

## Conclusion

Quedan pendientes dos shaders: Omar rayo shader y el shader musical.