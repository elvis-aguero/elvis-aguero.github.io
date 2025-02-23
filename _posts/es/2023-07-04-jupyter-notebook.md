layout: post
title: un post con Jupyter Notebook
date: 2023-07-04 08:57:00-0400
description: un ejemplo de una publicación de blog con Jupyter Notebook
tags: formatting jupyter
categories: sample-posts
giscus_comments: true
related_posts: false
---

Para incluir un Jupyter Notebook en una publicación, puedes usar el siguiente código:

{% raw %}

```liquid
{::nomarkdown}
{% assign jupyter_path = 'assets/jupyter/blog.ipynb' | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/blog.ipynb %}{% endcapture %}
{% if notebook_exists == 'true' %}
  {% jupyter_notebook jupyter_path %}
{% else %}
  <p>Lo sentimos, el notebook que estás buscando no existe.</p>
{% endif %}
{:/nomarkdown}
```

{% endraw %}

Analicemos esto: esto es posible gracias al [plugin Jekyll Jupyter Notebook](https://github.com/red-data-tools/jekyll-jupyter-notebook) que te permite incrustar Jupyter Notebooks en tus publicaciones. Básicamente llama a [`jupyter nbconvert --to html`](https://nbconvert.readthedocs.io/en/latest/usage.html#convert-html) para convertir el notebook a una página html y luego la incluye en la publicación. Dado que [Kramdown](https://jekyllrb.com/docs/configuration/markdown/) es el renderizador Markdown predeterminado para Jekyll, necesitamos rodear la llamada al plugin con la etiqueta [::nomarkdown](https://kramdown.gettalong.org/syntax.html#extensions) para que deje de procesar esta parte con Kramdown y muestre el contenido tal cual.

El plugin toma como entrada la ruta al notebook, pero asume que el archivo existe. Si quieres verificar si el archivo existe antes de llamar al plugin, puedes usar el filtro `file_exists`. Esto evita obtener un error 404 del plugin y terminar mostrando la página principal dentro de él en su lugar. Si el archivo no existe, puedes mostrar un mensaje al usuario. El código mostrado arriba genera lo siguiente:

{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/blog.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/blog.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
{% jupyter_notebook jupyter_path %}
{% else %}

<p>Lo sentimos, el notebook que estás buscando no existe.</p>
{% endif %}
{:/nomarkdown}

Ten en cuenta que el Jupyter Notebook admite temas claros y oscuros.
