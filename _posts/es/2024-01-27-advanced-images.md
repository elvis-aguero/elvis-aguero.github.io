---
layout: post
title: un post con componentes de imagen avanzados
date: 2024-01-27 11:46:00
description: así es como podrían verse los componentes de imagen avanzados
tags: formato imágenes
categories: sample-posts
thumbnail: assets/img/9.jpg
images:
  compare: true
  slider: true
---

Este es un ejemplo de publicación con componentes de imagen avanzados.

## Deslizador de Imágenes

Este es un simple deslizador de imágenes. Utiliza la biblioteca [Swiper](https://swiperjs.com/). Consulte la [página de ejemplos](https://swiperjs.com/demos) para obtener más información sobre lo que puede lograr con ella.

<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true">
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/9.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/7.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/8.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/10.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/12.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
</swiper-container>

## Deslizador de Comparación de Imágenes

Este es un simple deslizador de comparación de imágenes. Utiliza la biblioteca [img-comparison-slider](https://img-comparison-slider.sneas.io/). Consulte la [página de ejemplos](https://img-comparison-slider.sneas.io/examples.html) para obtener más información sobre lo que puede lograr con ella.

<img-comparison-slider>
  {% include figure.liquid path="assets/img/prof_pic.jpg" class="img-fluid rounded z-depth-1" slot="first" %}
  {% include figure.liquid path="assets/img/prof_pic_color.png" class="img-fluid rounded z-depth-1" slot="second" %}
</img-comparison-slider>
