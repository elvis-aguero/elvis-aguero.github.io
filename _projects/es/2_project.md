page_id: project_2
layout: page
title: proyecto 2
description: un proyecto con una imagen de fondo y comentarios de giscus
img: assets/img/3.jpg
importance: 2
category: work
giscus_comments: true
---

Cada proyecto tiene una hermosa página de presentación de características.
Es fácil incluir imágenes en un formato de cuadrícula flexible de 3 columnas.
Haz que tus fotos tengan 1/3, 2/3 o ancho completo.

Para darle a tu proyecto un fondo en la página del portafolio, simplemente agrega la etiqueta img al front matter de la siguiente manera:

    ---
    layout: page
    title: proyecto
    description: un proyecto con una imagen de fondo
    img: /assets/img/12.jpg
    ---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="imagen de ejemplo" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="imagen de ejemplo" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="imagen de ejemplo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="imagen de ejemplo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Esta imagen también puede tener un título. Es como magia.
</div>

También puedes poner texto normal entre tus filas de imágenes.
Digamos que querías escribir un poco sobre tu proyecto antes de publicar el resto de las imágenes.
Describes cómo te afanaste, sudaste, _sangraste_ por tu proyecto, y luego... revelas su gloria en la siguiente fila de imágenes.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="imagen de ejemplo" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="imagen de ejemplo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    También puedes tener imágenes de 2/3 + 1/3 con estilo artístico, como estas.
</div>

El código es simple.
Simplemente envuelve tus imágenes con `<div class="col-sm">` y colócalas dentro de `<div class="row">` (lee más sobre el sistema <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a>).
Para hacer que las imágenes sean receptivas, agrega la clase `img-fluid` a cada una; para esquinas redondeadas y sombras, usa las clases `rounded` y `z-depth-1`.
Aquí está el código para la última fila de imágenes de arriba:

{% raw %}
