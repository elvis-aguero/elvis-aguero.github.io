layout: post
title: un post con citas en bloque personalizadas
date: 2023-05-12 15:53:00-0400
description: un ejemplo de una entrada de blog con citas en bloque personalizadas
tags: formato citas-en-bloque
categories: sample-posts
giscus_comments: true
related_posts: true
---

Esta publicación muestra cómo agregar estilos personalizados para citas en bloque. Basado en la implementación de [jekyll-gitbook](https://github.com/sighingnow/jekyll-gitbook).

Decidimos admitir las mismas citas en bloque personalizadas que en [jekyll-gitbook](https://sighingnow.github.io/jekyll-gitbook/jekyll/2022-06-30-tips_warnings_dangers.html), que también se encuentran en los estilos de muchos otros sitios. Las definiciones de estilos se pueden encontrar en el archivo [\_base.scss](https://github.com/alshedivat/al-folio/blob/main/_sass/_base.scss), más específicamente:

```scss
/* Tips, warnings, and dangers */
.post .post-content blockquote {
  &.block-tip {
    border-color: var(--global-tip-block);
    background-color: var(--global-tip-block-bg);

    p {
      color: var(--global-tip-block-text);
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: var(--global-tip-block-title);
    }
  }

  &.block-warning {
    border-color: var(--global-warning-block);
    background-color: var(--global-warning-block-bg);

    p {
      color: var(--global-warning-block-text);
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: var(--global-warning-block-title);
    }
  }

  &.block-danger {
    border-color: var(--global-danger-block);
    background-color: var(--global-danger-block-bg);

    p {
      color: var(--global-danger-block-text);
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: var(--global-danger-block-title);
    }
  }
}
```

Una cita en bloque regular se puede usar de la siguiente manera:

```markdown
> Esta es una cita en bloque regular
> y se puede usar como de costumbre
```

> Esta es una cita en bloque regular
> y se puede usar como de costumbre

Estos estilos personalizados se pueden usar agregando la clase específica a la cita en bloque, de la siguiente manera:

<!-- prettier-ignore-start -->

```markdown
> ##### CONSEJO
>
> Se puede usar un consejo cuando quieras dar un consejo
> relacionado con un cierto contenido.
{: .block-tip }
```

> ##### CONSEJO
>
> Se puede usar un consejo cuando quieras dar un consejo
> relacionado con un cierto contenido.
{: .block-tip }

```markdown
> ##### ADVERTENCIA
>
> Esta es una advertencia y, por lo tanto, debería
> usarse cuando quieras advertir al usuario
{: .block-warning }
```

> ##### ADVERTENCIA
>
> Esta es una advertencia y, por lo tanto, debería
> usarse cuando quieras advertir al usuario
{: .block-warning }

```markdown
> ##### PELIGRO
>
> Esta es una zona de peligro y, por lo tanto, debería
> usarse con cuidado
{: .block-danger }
```

> ##### PELIGRO
>
> Esta es una zona de peligro y, por lo tanto, debería
> usarse con cuidado
{: .block-danger }

<!-- prettier-ignore-end -->
