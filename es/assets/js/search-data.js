
const currentUrl = window.location.href;
const siteUrl = "https://elvis-aguero.github.io"; 
let updatedUrl = currentUrl.replace("https://elvis-aguero.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("es".length > 0) {
  updatedUrl = updatedUrl.replace("/es", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-acerca-de",
    title: "Acerca de",
    section: "",
    handler: () => {
      window.location.href = "/es/";
    },
  },{id: "nav-proyectos",
          title: "Proyectos",
          description: "Aqui estão alguns dos projetos em que estive envolvido ultimamente!.",
          section: "",
          handler: () => {
            window.location.href = "/es/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Una versión actualizada de mi CV",
          section: "",
          handler: () => {
            window.location.href = "/es/cv/";
          },
        },{id: "post-un-post-con-galerías-de-imágenes",
      
        title: "un post con galerías de imágenes",
      
      description: "así es como podrían verse las galerías de imágenes incluidas",
      section: "",
      handler: () => {
        
          window.location.href = "/es/blog/2024/photo-gallery/";
        
      },
    },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-un-post-con-pestañas",
      
        title: "un post con pestañas",
      
      description: "este es el aspecto que podría tener un post con pestañas incluidas",
      section: "",
      handler: () => {
        
          window.location.href = "/es/blog/2024/tabs/";
        
      },
    },{id: "post-un-post-con-tipogramas",
      
        title: "un post con tipogramas",
      
      description: "así es como podría verse el código de tipogramas incluido",
      section: "",
      handler: () => {
        
          window.location.href = "/es/blog/2024/typograms/";
        
      },
    },{id: "post-um-post-que-pode-ser-citado",
      
        title: "um post que pode ser citado",
      
      description: "isto é como um post que pode ser citado se parece",
      section: "",
      handler: () => {
        
          window.location.href = "/es/blog/2024/post-citation/";
        
      },
    },{id: "post-un-post-con-pseudocódigo",
      
        title: "un post con pseudocódigo",
      
      description: "así es como podría verse el pseudocódigo incluido",
      section: "",
      handler: () => {
        
          window.location.href = "/es/blog/2024/pseudocode/";
        
      },
    },{id: "post-un-post-con-diferencias-de-código",
      
        title: "un post con diferencias de código",
      
      description: "así es como puedes mostrar las diferencias de código",
      section: "",
      handler: () => {
        
          window.location.href = "/es/blog/2024/code-diff/";
        
      },
    },{id: "post-un-post-con-componentes-de-imagen-avanzados",
      
        title: "un post con componentes de imagen avanzados",
      
      description: "así es como podrían verse los componentes de imagen avanzados",
      section: "",
      handler: () => {
        
          window.location.href = "/es/blog/2024/advanced-images/";
        
      },
    },{id: "post-un-post-con-vega-lite",
      
        title: "Un post con Vega Lite",
      
      description: "Así es como podría verse el código Vega Lite incluido",
      section: "",
      handler: () => {
        
          window.location.href = "/es/blog/2024/vega-lite/";
        
      },
    },{id: "post-un-post-con-echarts",
      
        title: "un post con echarts",
      
      description: "este es un ejemplo de cómo podría verse el código incluido de echarts",
      section: "",
      handler: () => {
        
          window.location.href = "/es/blog/2024/echarts/";
        
      },
    },{id: "post-un-post-con-chart-js",
      
        title: "un post con chart.js",
      
      description: "así es como podría verse el código incluido de chart.js",
      section: "",
      handler: () => {
        
          window.location.href = "/es/blog/2024/chartjs/";
        
      },
    },{id: "post-geojson-map",
      
        title: "Geojson Map",
      
      description: "",
      section: "",
      handler: () => {
        
          window.location.href = "/es/blog/2024/geojson-map/";
        
      },
    },{id: "post-un-artículo-con-tikzjax",
      
        title: "un artículo con TikZJax",
      
      description: "así es como podría verse el código TikZ incluido",
      section: "",
      handler: () => {
        
          window.location.href = "/es/blog/2023/tikzjax/";
        
      },
    },{id: "post-un-artículo-con-bibliografía",
      
        title: "un artículo con bibliografía",
      
      description: "un ejemplo de una entrada de blog con bibliografía",
      section: "",
      handler: () => {
        
          window.location.href = "/es/blog/2023/post-bibliography/";
        
      },
    },{id: "post-jupyter-notebook",
      
        title: "Jupyter Notebook",
      
      description: "",
      section: "",
      handler: () => {
        
          window.location.href = "/es/blog/2023/jupyter-notebook/";
        
      },
    },{id: "post-custom-blockquotes",
      
        title: "Custom Blockquotes",
      
      description: "",
      section: "",
      handler: () => {
        
          window.location.href = "/es/blog/2023/custom-blockquotes/";
        
      },
    },{id: "post-un-post-con-tabla-de-contenido-en-una-barra-lateral",
      
        title: "un post con tabla de contenido en una barra lateral",
      
      description: "un ejemplo de una publicación de blog con tabla de contenido en una barra lateral",
      section: "",
      handler: () => {
        
          window.location.href = "/es/blog/2023/sidebar-table-of-contents/";
        
      },
    },{id: "post-um-post-com-áudios",
      
        title: "um post com áudios",
      
      description: "isto é o que áudios incluídos podem parecer",
      section: "",
      handler: () => {
        
          window.location.href = "/es/blog/2023/audios/";
        
      },
    },{id: "post-un-post-con-videos",
      
        title: "un post con videos",
      
      description: "así es como podrían verse los videos incluidos",
      section: "",
      handler: () => {
        
          window.location.href = "/es/blog/2023/videos/";
        
      },
    },{id: "post-mostrar-tablas-bonitas-con-bootstrap-tables",
      
        title: "Mostrar tablas bonitas con Bootstrap Tables",
      
      description: "un ejemplo de cómo usar Bootstrap Tables",
      section: "",
      handler: () => {
        
          window.location.href = "/es/blog/2023/tables/";
        
      },
    },{id: "post-un-post-con-tabla-de-contenido",
      
        title: "un post con tabla de contenido",
      
      description: "un ejemplo de una entrada de blog con tabla de contenido",
      section: "",
      handler: () => {
        
          window.location.href = "/es/blog/2023/table-of-contents/";
        
      },
    },{id: "post-un-post-con-comentarios-de-giscus",
      
        title: "un post con comentarios de giscus",
      
      description: "un ejemplo de una publicación de blog con comentarios de giscus",
      section: "",
      handler: () => {
        
          window.location.href = "/es/blog/2022/giscus-comments/";
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "post-un-post-con-redireccionamiento",
      
        title: "un post con redireccionamiento",
      
      description: "también puedes redirigir a recursos como pdf",
      section: "",
      handler: () => {
        
          window.location.href = "/es/assets/pdf/CV_Elvis.pdf";
        
      },
    },{id: "post-un-post-con-diagrammi",
      
        title: "un post con diagrammi",
      
      description: "un esempio di post del blog con diagrammi",
      section: "",
      handler: () => {
        
          window.location.href = "/es/blog/2021/diagrams/";
        
      },
    },{id: "post-a-distill-style-blog-post",
      
        title: "a distill-style blog post",
      
      description: "an example of a distill-style blog post and main elements",
      section: "",
      handler: () => {
        
          window.location.href = "/es/blog/2021/distill/";
        
      },
    },{id: "post-un-post-con-twitter",
      
        title: "un post con twitter",
      
      description: "un ejemplo de una publicación de blog con twitter",
      section: "",
      handler: () => {
        
          window.location.href = "/es/blog/2020/twitter/";
        
      },
    },{id: "post-distill",
      
        title: "Distill",
      
      description: "",
      section: "",
      handler: () => {
        
          window.location.href = "/es/blog/2018/distill/";
        
      },
    },{id: "post-un-artículo-con-matemáticas",
      
        title: "un artículo con matemáticas",
      
      description: "un ejemplo de un artículo de blog con algunas matemáticas",
      section: "",
      handler: () => {
        
          window.location.href = "/es/blog/2015/math/";
        
      },
    },{id: "post-disqus-comments",
      
        title: "Disqus Comments",
      
      description: "",
      section: "",
      handler: () => {
        
          window.location.href = "/es/blog/2015/disqus-comments/";
        
      },
    },{id: "post-un-post-con-código",
      
        title: "un post con código",
      
      description: "un ejemplo de una publicación de blog con algo de código",
      section: "",
      handler: () => {
        
          window.location.href = "/es/blog/2015/code/";
        
      },
    },{id: "post-un-post-con-imágenes",
      
        title: "un post con imágenes",
      
      description: "así es como podrían verse las imágenes incluidas",
      section: "",
      handler: () => {
        
          window.location.href = "/es/blog/2015/images/";
        
      },
    },{id: "post-formatting-and-links",
      
        title: "Formatting And Links",
      
      description: "",
      section: "",
      handler: () => {
        
          window.location.href = "/es/blog/2015/formatting-and-links/";
        
      },
    },{id: "news-our-paper-impact-of-a-rigid-sphere-onto-an-ellastic-membrane-was-accepted-at-the-proceedings-of-the-royal-society-a",
          title: 'Our paper “Impact of a rigid sphere onto an ellastic membrane” was accepted...',
          description: "",
          section: "",},{id: "news-tuve-el-placer-de-visitar-y-colaborar-con-el-harris-lab-brown-university",
          title: '¡Tuve el placer de visitar y colaborar con el Harris Lab @ Brown...',
          description: "",
          section: "",},{id: "news-asistí-a-la-maravillosa-escuela-avanzada-de-física-experimental-en-el-cbpf-donde-investigamos-fenómenos-fundamentales-para-dispositivos-espintrónicos",
          title: 'Asistí a la maravillosa Escuela Avanzada de Física Experimental en el CBPF, donde...',
          description: "",
          section: "",},{id: "news-estaré-comenzando-mi-doctorado-en-la-escuela-de-ingeniería-de-la-universidad-brown-será-una-excelente-oportunidad-para-aprender-nuevas-habilidades",
          title: '¡Estaré comenzando mi doctorado en la Escuela de Ingeniería de la Universidad Brown!....',
          description: "",
          section: "",},{id: "news-tuve-el-placer-de-ser-seleccionado-para-el-programa-de-estudiantes-de-verano-del-cern",
          title: '¡Tuve el placer de ser seleccionado para el programa de estudiantes de verano...',
          description: "",
          section: "",},{id: "news-presenté-mi-trabajo-más-reciente-en-la-reunión-matemática-conjunta-brasil-china",
          title: 'Presenté mi trabajo más reciente en la Reunión Matemática Conjunta Brasil-China',
          description: "",
          section: "",},{id: "news-presenté-mi-último-trabajo-en-la-reunión-anual-de-la-división-de-dinámica-de-fluidos-de-la-american-physical-society",
          title: 'Presenté mi último trabajo en la Reunión Anual de la División de Dinámica...',
          description: "",
          section: "",},{id: "projects-simulación-de-impactos-deformables",
          title: 'Simulación de impactos deformables',
          description: "El método de correspondencia cinemática",
          section: "",handler: () => {
              window.location.href = "/es/projects/1_KM/";
            },},{id: "projects-espintrónica",
          title: 'Espintrónica',
          description: "Avanzando nuestra comprensión de los materiales espintrónicos",
          section: "",handler: () => {
              window.location.href = "/es/projects/2_CBPF/";
            },},{id: "projects-promoción-de-las-olimpiadas-de-ciencias",
          title: 'Promoción de las Olimpiadas de Ciencias',
          description: "otro sin imagen",
          section: "",handler: () => {
              window.location.href = "/es/projects/4_JT/";
            },},{id: "projects-lucha-contra-la-corrupción-en-paraguay",
          title: 'Lucha contra la corrupción en Paraguay',
          description: "",
          section: "",handler: () => {
              window.location.href = "/es/projects/5_Reaccion/";
            },},{id: "projects-mathura",
          title: 'Mathura',
          description: "Promoviendo el acceso a la educación en Paraguay",
          section: "",handler: () => {
              window.location.href = "/es/projects/6_Mathura/";
            },},{id: "projects-similaritysolver-jl",
          title: 'SimilaritySolver.jl',
          description: "Un buscador simbólico de Ecuaciones Diferenciales Parciales para soluciones de similitud.",
          section: "",handler: () => {
              window.location.href = "/es/projects/7_zsimilarity/";
            },},{id: "projects-plz-learn-to-code",
          title: 'Plz learn to code',
          description: "",
          section: "",handler: () => {
              window.location.href = "/es/projects/9_PE/";
            },},{id: "projects-fui-becario-de-verano-en-el-cern",
          title: '¡Fui becario de verano en el CERN!.',
          description: "",
          section: "",handler: () => {
              window.location.href = "/es/projects/announcement_2/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: '',
        handler: () => {
          window.open("https://github.com/elvispy", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: '',
        handler: () => {
          window.open("https://www.linkedin.com/in/elvisaguero", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: '',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=D3sDR9EAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: '',
        handler: () => {
          window.open("https://sites.brown.edu/harrislab/", "_blank");
        },
      },{
          id: 'lang-en-us',
          title: 'en-us',
          section: '',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
          id: 'lang-pt-br',
          title: 'pt-br',
          section: '',
          handler: () => {
            window.location.href = "/pt-br" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: '',
      description: '',
      section: '',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: '',
      description: '',
      section: '',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: '',
      description: '',
      section: '',
      handler: () => {
        setThemeSetting("system");
      },
    },];
