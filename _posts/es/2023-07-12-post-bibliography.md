---
layout: post
title: un artículo con bibliografía
date: 2023-07-12 09:56:00-0400
description: un ejemplo de una entrada de blog con bibliografía
tags: formato bib
categories: sample-posts
giscus_comments: true
related_posts: false
related_publications: true
---

Esta publicación muestra cómo agregar bibliografía a las entradas de blog simples. Admitimos todos los estilos de citas que [jekyll-scholar](https://github.com/inukshuk/jekyll-scholar) tiene. Eso significa una cita simple como {% cite einstein1950meaning %}, citas múltiples como {% cite einstein1950meaning einstein1905movement %}, referencias largas como {% reference einstein1905movement %} o también citas:

{% quote einstein1905electrodynamics %}
Lorem ipsum dolor sit amet, consectetur adipisicing elit,
sed do eiusmod tempor.

Lorem ipsum dolor sit amet, consectetur adipisicing.
{% endquote %}

Si desea algo más académico, consulte la [publicación de estilo distill]({% post_url 2018-12-22-distill %}).
