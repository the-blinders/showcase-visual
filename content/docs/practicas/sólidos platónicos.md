# Prácticas

## Sólido platónico:

Los solidos Platónicos son constituidos por cualquier solido que sea construido con caras regulares identicas en forma y tamaño, compartiendo los mismos angulos en tres dimensiones. También conocidos como los poliedros regulares, estan conformados por Tetraedro, Cubo, Octaedro, Dodecaedro e Icosaedro.

Reciben su nombre por el filosofo antiguo Platón, quien realizó hipótesis en uno de sus dialogos, el texto Timaeus (360 A.C.), alegando que estos solidos reprecentaban homologamente los elementos, agua, aire, fuego, tierra (y posteriormente Quintaesencia) clasicos que usaban como representación de las caracteristicas de la naturaleza.

Este sólido platónico está generado usando las funciones beginShape() y endShape().
Tiene 2 vertices pivote en 0,0,r y 0,0,-r donde r es un radio definido en este caso de 100.

Los vertices parametizables qu definen el resto de las caras del sólido se seleccionan sobre una circurfenrencia de radio r que habita el plano xy.

Los 3 sliders ubicados a la izquierda son los parametros de velocidad de rotación sobre cada eje. El slide de la derecha es el parametro del número de vertices muestra seleccionados sobre la circunferencia.

{{< p5-iframe sketch="/showcase-visual/sketches/blinders/platonicCube.js" width="725" height="425" >}}

{{< p5-iframe sketch="/showcase-visual/sketches/blinders/platonicOctahedron.js" width="725" height="425" >}}
