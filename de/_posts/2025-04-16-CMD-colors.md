---
layout: gallery-post
title:  "OKLCH Color Scheme"
author: Chad Matthew Danford
date:   2025-04-16 17:00:06 +0200
lang: de
translation_key: cmd-colors
permalink: /de/posts/:title
tags: ["web"]
image:
  gallery: /assets/images/oklch/
  thumbnail: oklch_colors_thumbnail.png
  feature: oklch_colors_thumbnail.png
---
Als ich das Farbsystem für dieses Projekt definiert habe, wollte ich etwas entwickeln, das flexibel und zugleich zukunftssicher ist. Klassische Hex- oder RGB-Werte funktionieren für statische Paletten gut, stoßen aber schnell an Grenzen, wenn Helligkeit, Kontrast oder Barrierefreiheit fein abgestimmt werden sollen. Deshalb habe ich die Palette auf Basis des OKLCH-Farbmodells aufgebaut. Im Unterschied zu HSL oder HEX ist OKLCH wahrnehmungsorientiert, Veränderungen bei Helligkeit und Chroma verhalten sich also deutlich näher an dem, wie wir Farbe tatsächlich sehen. Dadurch lassen sich Abstufungen, Kontraste und Harmonien wesentlich präziser steuern.


{% highlight css %}
/* Primary Palette */
--primary-color: oklch(40% 0.15 272);
--color-primary-0: oklch(from var(--primary-color) 90% c h);
--color-primary-10: oklch(from var(--primary-color) 80% c h);
--color-primary-20: oklch(from var(--primary-color) 70% c h);
--color-primary-30: oklch(from var(--primary-color) 60% c h);
--color-primary-40: oklch(from var(--primary-color) 50% c h);
--color-primary-50: var(--primary-color);
--color-primary-60: oklch(from var(--primary-color) 30% c h);
--color-primary-70: oklch(from var(--primary-color) 20% c h);
--color-primary-80: oklch(from var(--primary-color) 10% c h);
--color-primary-90: oklch(from var(--primary-color) 5% c h);
--color-primary-100: oklch(from var(--primary-color) 0% c h);
{% endhighlight %}



Die Grundlage der Palette bildet eine Primärfarbskala, bei der ich den Helligkeitswert von 0 bis 100 variiert habe, während Chroma und Hue konstant bleiben. So entstand aus einem Ausgangston ein gleichmäßiges Spektrum aus Tints und Shades. Darauf aufbauend kamen eine Sekundärfarbe, eine Alert-Farbe für Zustände und Hinweise sowie ein spielerischerer Akzentton in Teal hinzu. Alle Skalen folgen demselben Prinzip: von einer Basisfarbe ausgehend Abstufungen über die Helligkeit in OKLCH aufbauen.

Damit die Palette auch in der Entwicklung praktisch nutzbar ist, habe ich jede Stufe in CSS Custom Properties übersetzt. Jede Farbe erhält einen Variablennamen wie `--color-primary-30` oder `--color-accent-70`, der direkt ihrer Helligkeitsstufe entspricht. Ergänzend dazu habe ich Utility-Klassen wie `.bg-primary-30` oder `.text-accent-70` angelegt, damit sich die Farben direkt im Markup verwenden lassen. So bleiben die Design-Tokens konsistent, Farben lassen sich später leichter austauschen oder erweitern und die Arbeit mit der Palette in realen Layouts wird deutlich klarer.



{% highlight css %}
/* Secondary Palette */
--secondary-color: oklch(30% 0.13 10.92);
--color-secondary-0: oklch(from var(--secondary-color) 95% c h);
--color-secondary-10: oklch(from var(--secondary-color) 85% c h);
--color-secondary-20: oklch(from var(--secondary-color) 73% c h);
--color-secondary-30: oklch(from var(--secondary-color) 55% c h);
--color-secondary-40: oklch(from var(--secondary-color) 40% c h);
--color-secondary-50: var(--secondary-color);
--color-secondary-60: oklch(from var(--secondary-color) 25% c h);
--color-secondary-70: oklch(from var(--secondary-color) 20% c h);
--color-secondary-80: oklch(from var(--secondary-color) 17% c h);
--color-secondary-90: oklch(from var(--secondary-color) 12% c h);
--color-secondary-100: oklch(from var(--secondary-color) 8% c h);
{% endhighlight %}



{% highlight css %}
/* Teal Palette */
--teal-color: oklch(65% 0.1099 198);
--color-teal-0: oklch(from var(--teal-color) 99% c h);
--color-teal-10: oklch(from var(--teal-color) 90% c h);
--color-teal-20: oklch(from var(--teal-color) 85% c h);
--color-teal-30: oklch(from var(--teal-color) 75% c h);
--color-teal-40: oklch(from var(--teal-color) 70% c h);
--color-teal-50: var(--teal-color);
--color-teal-60: oklch(from var(--teal-color) 58% c h);
--color-teal-70: oklch(from var(--teal-color) 45% c h);
--color-teal-80: oklch(from var(--teal-color) 32% c h);
--color-teal-90: oklch(from var(--teal-color) 24% c h);
--color-teal-100: oklch(from var(--teal-color) 18% c h);
{% endhighlight %}



{% highlight css %}
/* alert Palette */
--alert-color: oklch(80% 0.1659 119.42);
--color-alert-0: oklch(from var(--alert-color) 99% c h);
--color-alert-10: oklch(from var(--alert-color) 93% c h);
--color-alert-20: oklch(from var(--alert-color) 91% c h);
--color-alert-30: oklch(from var(--alert-color) 87% c h);
--color-alert-40: oklch(from var(--alert-color) 83% c h);
--color-alert-50: var(--alert-color);
--color-alert-60: oklch(from var(--alert-color) 76% c h);
--color-alert-70: oklch(from var(--alert-color) 60% c h);
--color-alert-80: oklch(from var(--alert-color) 50% c h);
--color-alert-90: oklch(from var(--alert-color) 40% c h);
--color-alert-100: oklch(from var(--alert-color) 20% c h);
{% endhighlight %}
