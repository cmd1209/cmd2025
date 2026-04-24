---
layout: gallery-post
title:  "CSS-Driven Solar System"
author: Chad Matthew Danford
date:   2025-11-12 17:00:06 +0200
lang: de
translation_key: solar-system
permalink: /de/posts/:title
tags: ["web"]
image:
  gallery: /assets/images/solarsystem/
  thumbnail: solarsystem_thumb.jpg
  feature: solarsystem_thumb.jpg
---

  <h4>Ein kleines Universum, gebaut nur mit Code</h4>

Dieses Projekt begann mit dem Gedanken: „Ich animiere kurz mal einen Planeten“ und entwickelte sich still und leise zu einem kompletten Sonnensystem mit Monden, Schatten und einem prozedural erzeugten Asteroidengürtel.
Gebaut nur mit HTML und SCSS, ganz ohne JavaScript, aber mit einer ziemlich großen Portion Enthusiasmus.

Genau solche Dinge mache ich gern in meiner Freizeit: mit Code kleine Welten bauen, mit Bewegung experimentieren und ausprobieren, wie weit man CSS treiben kann, bevor es ins Schwitzen kommt.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="bNpdGoL" data-pen-title="Solar System - Revised with Moons and Asteroids" data-user="cmd1209" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  
      <span>See the Pen <a href="https://codepen.io/cmd1209/pen/bNpdGoL">
  Solar System - Revised with Moons and Asteroids</a> by Chad Danford (<a href="https://codepen.io/cmd1209">@cmd1209</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
      
      <script async src="https://public.codepenassets.com/embed/index.js"></script>

Fork das Projekt gern und schick mir einen Link, wenn du etwas Eigenes daraus gemacht hast.


  <h5>Die Simulation enthält:</h5>
<ul class="list_standard">
  <li>Planeten, die in ihren jeweiligen relativen Positionen kreisen
</li>
<li>Monde wie unser Mond oder die vier galileischen Monde, die ihren Planeten folgen
</li>
<li>Dynamische Schatten, je nachdem welche Seite zur Sonne zeigt
</li>
<li>Einen vollständig generierten Asteroidengürtel, der überraschend natürlich wirkt
</li>
<li>Orbits, Größen und Geschwindigkeiten, die komplett über Variablen steuerbar sind
</li>
</ul>

Alles ist parametrisch aufgebaut: Ändert man einen einzigen Wert, etwa die Umlaufdauer der Erde, verschiebt sich das gesamte System stimmig mit. Genau darin liegt der Reiz von SCSS-Loops, etwas Mathematik und ziemlich viel Ausprobieren.



  <h5>Der schwierigste und zugleich schönste Teil: der Asteroidengürtel</h5>

CSS kennt keine echte Zufälligkeit. Um mehr als 100 Asteroiden glaubwürdig chaotisch wirken zu lassen, also mit unterschiedlichen Abständen, Geschwindigkeiten und Startpositionen, musste ich die pseudozufälligen Möglichkeiten von SCSS ziemlich kreativ nutzen.

Der entscheidende Moment war die Erkenntnis, dass sich eine natürliche Verteilung überzeugend vortäuschen lässt, wenn man diese Werte variiert:
<ul class="list_standard">
  <li>Orbitalradius</li>
  <li>Animationsgeschwindigkeit</li>
  <li>Startversatz</li>
</ul>

Das Ergebnis: ein Gürtel, der lebendig wirkt, statt wie eine gepunktete Linie, die einfach nicht sauber ausgerichtet wurde.


  {% highlight css %}
  /* Primary Palette */
//asteroids variables
$asteroid-number: 100
$asteroid-start: $au * 1.8
$asteroid-end: $au * 2.9

  @for $i from 1 through $asteroid-number 
  $randN: (random(10000) - 1) / 1000
  $asteroid-spread: random($asteroid-end - $asteroid-start) + $asteroid-start
  .orbit--asteroids:nth-of-type(#{$i})
    position: absolute
    top: 50%
    left: 50%
    border-radius: 50%
    transform-origin: center center
    width: #{$asteroid-spread * 2}
    height: #{$asteroid-spread * 2}
    margin-left: -#{$asteroid-spread}
    margin-top: -#{$asteroid-spread}
    animation: orbit (#{$ceres-year * (0.9 + random(20)/100)}) linear infinite
    animation-delay: -#{$randN * $earth-year}

.asteroid
  width: 2px
  height: 2px
  background-color: grey
  {% endhighlight %}


