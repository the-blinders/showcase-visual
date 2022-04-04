---
title: Introduction
type: docs
---

# Integrantes del Grupo

Somos el grupo the blinders formado para las tareas de la materia Computacion Visual en la Universidad Nacional de Colombia en el primer semestre del 2022, nuestros integrantes son:

{{< details "Danny Esteban Garzon Melo" open >}}

## Intereses Academicos:

Me interesa la pedagogía y las ciencias de datos. Es gratificante transmitir conocimientos. También me interesa la algoritmia y la computación cuántica ya que son componentes muy teóricos de la carrera.

## Pasatiempos:

Mis pasatiempos son la calistenia, cocinar, la pastelería, salir de fiesta y danzar.

{{< /details >}}
{{< details "Andres Bonilla Duarte" open >}}

## Intereses Academicos:

Gestión y gerencia de proyecto junto con el desarrollo de software son los intereses principales. Es interesante ver la capacidad y potencial que un buen equipo puede tener y los objetivos que este puede lograr.

## Pasatiempos:

Me interesa mucho el arte y la recreación: la música, el cine los videojuegos y salir a compartir tiempo con mis amigos y familia.

{{< /details >}}
{{< details "Jhon Fredy Acosta Murillo" open >}}

## Intereses Academicos:

Mis intereses académicos están relacionados con el desarrollo web, los sistemas inteligentes y la ciencia de datos. Esto años he aprendido un poco de cada uno, que a su vez fueron intereses que no sabía que tenía al momento de iniciar la carrera. Ha sido gratificante ver cuántos aportes ha realizado esta carrera al mundo y todo lo que aún hay por hacer.

## Pasatiempos:

Mis pasatiempos son la producción musical, jugar videojuegos, viajar/acampar, compartir tiempo con mis amigos y familia y comer.

{{< /details >}}
{{< details "Juan David Sandoval" open >}}

## Intereses Academicos:

Soy un estudiante bastante apasionado por la carrera, mis intereses academicos se enfocan mas en las partes teoricas como las matematicas y la fisica relacionadas a la misma, la programacion no se me dio bien en el principio pero ahora tambien es algo muy impotante en mi vida porque disfruto mucho mirar al pasado y ver lenguajes de programacion que antes no sabia usar y ahora parece tan natural usarlos, asumir nuevos retos siempre es muy interesante y alentador a continuar a seguir aprendiendo.

## Pasatiempos:

Mis pasatiempos mas importantes son competir en juegos online cuando tengo tiempo libre, leer o escuchar audiolibros de motivacion como el Poder Sin Limites de Anthony Robbins, leer Manga, ver Anime y leer novelas ligeras, salir a comer con mi familia los fines de semana y en algunas ocasiones salir a hablar con mis amigos.
{{< /details >}}

# Practicas del grupo

## Sólido platónico:

Este sólido platónico está generado usando las funciones beginShape() y endShape().
Tiene 2 vertices pivote en 0,0,r y 0,0,-r donde r es un radio definido en este caso de 100.

Los vertices parametizables qu definen el resto de las caras del sólido se seleccionan sobre una circurfenrencia de radio r que habita el plano xy.

Los 3 sliders ubicados a la izquierda son los parametros de velocidad de rotación sobre cada eje. El slide de la derecha es el parametro del número de vertices muestra seleccionados sobre la circunferencia.

{{< p5-iframe sketch="/showcase-visual/sketches/blinders/platonicIris.js" width="725" height="425" >}}

# Showcase Template

Welcome to the [gohugo](https://gohugo.io/) template to create rich content [academic reports](https://www.wordy.com/writers-workshop/writing-an-academic-report/) having [p5.js](https://p5js.org/) sketches.

## Hacking

Install the [gohugo](https://gohugo.io/) [static site generator](https://jamstack.org/generators/) then:

```sh
$git clone https://github.com/VisualComputing/showcase
$cd showcase
$git submodule update --init --recursive
$hugo server -D --disableFastRender
```

Deploy with `$git push` after redefined `baseURL` in `config.toml` which should point to your actual public remote.

{{< hint info >}}
The **showcase** template uses the [hugo-book](https://github.com/alex-shpak/hugo-book) theme by default. Check the [hugo themes site](https://themes.gohugo.io/) if you wish to add other ones.
{{< /hint >}}

{{< hint info >}}
If you forked the repo don't forget to activate the [actions](https://github.com/VisualComputing/showcase-visual/actions).
{{< /hint >}}

{{< hint info >}}
If you changed the repo name don't forget to update all the js related (both sketches and assets) urls.
{{< /hint >}}
